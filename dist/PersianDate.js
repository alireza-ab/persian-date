'use strict';

var CALENDAR = {
  jalali: {
    months: {
      1: "فروردین",
      2: "اردیبهشت",
      3: "خرداد",
      4: "تیر",
      5: "مرداد",
      6: "شهریور",
      7: "مهر",
      8: "آبان",
      9: "آذر",
      10: "دی",
      11: "بهمن",
      12: "اسفند"
    },
    days: {
      label: {
        6: "شنبه",
        0: "یکشنبه",
        1: "دوشنبه",
        2: "سه‌شنبه",
        3: "چهارشنبه",
        4: "پنجشنبه",
        5: "جمعه"
      },
      weekNumber: {
        // days in jalali calendar start from saturday or 6
        6: 0,
        //شنبه
        0: 1,
        //یکشنبه
        1: 2,
        //دوشنبه
        2: 3,
        //سه‌شنبه
        3: 4,
        //چهارشنبه
        4: 5,
        //پنجشنبه
        5: 6 //جمعه

      }
    },
    ordinalNumbers: function ordinalNumbers(number, mode) {
      var numbers = {
        1: "یک",
        2: "دو",
        3: "سو",
        4: "چهار",
        5: "پنج",
        6: "شش",
        7: "هفت",
        8: "هشت",
        9: "نه",
        10: "ده",
        11: "یازده",
        12: "دوازده",
        13: "سیزده",
        14: "چهارده",
        15: "پانزده",
        16: "شانزده",
        17: "هفده",
        18: "هجده",
        19: "نوزده",
        20: "بیست",
        30: "سی‌",
        40: "چهل",
        50: "پنجاه",
        60: "شصت",
        70: "هفتاد",
        80: "هشتاد",
        90: "نود",
        100: "صد",
        200: "دویست",
        300: "سیصد"
      };
      var ordinalNumber = "";
      if (number == 1) ordinalNumber = "اول";else if (numbers[number]) ordinalNumber = numbers[number] + (number == 30 ? "ام" : "م");else {
        var remainder = number % 100;
        if (numbers[remainder]) ordinalNumber = numbers[remainder] + "م";else {
          remainder = number % 10;
          if (remainder) ordinalNumber = numbers[remainder] + "م";
        }
        remainder = (number - remainder) % 100;
        if (remainder) ordinalNumber = numbers[remainder] + (ordinalNumber ? " و " + ordinalNumber : remainder == 30 ? "ام " : "م");
        remainder = Math.floor(number / 100) * 100;
        if (remainder) ordinalNumber = numbers[remainder] + (ordinalNumber ? " و " + ordinalNumber : "م");
      }
      if (mode == 2) ordinalNumber += "ین";
      return ordinalNumber;
    }
  },
  gregorian: {
    months: {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    },
    days: {
      label: {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
      },
      weekNumber: {
        // days in gregorian calendar start from sunday or 0
        0: 0,
        // Sunday
        1: 1,
        // Monday
        2: 2,
        // Tuesday
        3: 3,
        // Wednesday
        4: 4,
        // Thursday
        5: 5,
        // Friday
        6: 6 // Saturday

      }
    },
    ordinalNumbers: function ordinalNumbers(number) {
      if (number == 1 || number % 10 == 1 && number != 11) return number + "st";else if (number == 2 || number % 10 == 2 && number != 12) return number + "nd";else if (number == 3 || number % 10 == 3 && number != 13) return number + "rd";else return number + "th";
    }
  }
};
var REGEX = {
  format: /j*(YYYY|YY|y|Qo|QO|Q|MMMM|MMM|MM|Mo|MO|M|DDDD|DDDo|DDDO|DDD|DD|Do|DO|D|dddd|ddd|dd|do|dO|de|d|ww|WW|wo|Wo|wO|WO|w|W|HH|hh|H|h|kk|k|mm|m|ss|s|CCCC|CCC|c|t|aa|a|A)/g,
  isNumeric: /^\d+$/,
  // this regex, checks input to see is a number or not
  separators: "\\/| |-|\\.|,|:",
  // find ['/',' ','-','.',',',':'] and split string to array by this symbols
  betweenBacktick: /`(.*?)`/g // find the texts between the backticks ==> `Alireza`

};

var TIMETYPE = function TIMETYPE(hour, format) {
  if (hour >= 0 && hour < 12) {
    if (format == "a") return "am";else if (format == "aa") return "A.M.";else if (format == "A") return "AM";else if (format == "ja") return "ق ظ";else if (format == "jaa") return "ق.ظ";else if (format == "jA") return "قبل از ظهر";
    return "ق.ظ";
  } else if (hour >= 12 && hour < 24) {
    if (format == "a") return "pm";else if (format == "aa") return "P.M.";else if (format == "A") return "PM";else if (format == "ja") return "ب ظ";else if (format == "jaa") return "ب.ظ";else if (format == "jA") return "بعد از ظهر";
    return "ب.ظ";
  }
};

var isDate = function isDate(date) {
  return date instanceof Date;
};

var jalali$4 = function jalali(year) {
  var array = year > 1342 ? [1, 5, 9, 13, 17, 22, 26, 30] : [1, 5, 9, 13, 17, 21, 26, 30];
  var remainder = year % 33;
  return array.includes(remainder);
};

var gregorian$4 = function gregorian(year) {
  return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
};

var isLeapYear = function isLeapYear(calendar, year) {
  // calendar[0] ==> first letter of calendar ('j' | 'g' | ...)
  switch (calendar[0]) {
    case "j":
      return jalali$4(year);

    default:
      return gregorian$4(year);
  }
};

var isPersianDate = function isPersianDate(date) {
  return date instanceof PersianDate;
};

var isValid = function isValid(calendar, year, month, day, hour, minute, second, millisecond) {
  return isValidDate(calendar, year, month, day) && isValidTime(hour, minute, second, millisecond);
};

var jalali$3 = function jalali(year, month, day) {
  if (month >= 7 && month <= 11 && day == 31) return false;
  if (month == 12 && day == 31) return false;
  if (month == 12 && day == 30 && !isLeapYear("j", year)) return false;
  return true;
};

var gregorian$3 = function gregorian(year, month, day) {
  if ([2, 4, 6, 9, 11].includes(month) && day == 31) return false;
  if (month == 2 && (day == 30 || day == 29 && !isLeapYear("g", year))) return false;
  return true;
};

var isValidDate = function isValidDate(calendar, year, month, day) {
  if ([year, month, day].some(function (e) {
    return String(e).search(/null|NaN/) != -1;
  })) return false;
  if (year < 0 || month > 12 || month < 1 || day > 31 || day < 1) return false;

  switch (calendar[0]) {
    case "j":
      return jalali$3(year, month, day);

    default:
      return gregorian$3(year, month, day);
  }
};

var isValidTime = function isValidTime(hour, minute, second, millisecond) {
  if ([hour, minute, second, millisecond].some(function (e) {
    return String(e).search(/null|NaN/) != -1;
  })) return false;
  if (hour < 0 || hour > 23) return false;
  if (minute < 0 || minute > 59) return false;
  if (second < 0 || second > 59) return false;
  if (millisecond < 0 || millisecond > 999) return false;
  return true;
};

function isSame() {
  var date = typesToArray.apply(void 0, [this.c].concat(Array.prototype.slice.call(arguments)));
  date = this.toArray().map(function (value, i) {
    return REGEX["isNumeric"].test(date[i]) ? date[i] : value;
  });
  return compare.call(this, date, "==");
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function isBetween(from, to, method) {
  var date = this.toArray();
  from = typesToArray(this.c, from); // if (!from[2]) date[2] = 1;

  from = date.map(function (value, i) {
    return REGEX["isNumeric"].test(from[i]) ? from[i] : value;
  });
  to = typesToArray(this.c, to);
  to = date.map(function (value, i) {
    return REGEX["isNumeric"].test(to[i]) ? to[i] : value;
  });
  if (!(this.isValid.apply(this, _toConsumableArray(from)) && this.isValid.apply(this, _toConsumableArray(to)))) return false;
  return compare.call(this, from, method[0] === "[" ? ">=" : ">") && compare.call(this, to, method[1] === "]" ? "<=" : "<");
}

function isInArray(array) {
  var _this = this;

  return array.some(function (date) {
    return isSame.call(_this, date);
  });
}

/**
 * Gregorian to Jalali
 * @param {Null|Date|Number|String} [year=new Date()] - Gregorian year
 * @param {Null|Number|String} [month=1] - Gregorian month
 * @param {Null|Number|String} [day=1] - Gregorian day
 * @param {Null|Number|String} [hour=0] - Gregorian hour
 * @param {Null|Number|String} [minute=0] - Gregorian minute
 * @param {Null|Number|String} [second=0] - Gregorian second
 * @param {Null|Number|String} [millisecond=0] - Gregorian millisecond
 * @returns {Array} Jalali date
 */

var gtj = function gtj(year, month, day, hour, minute, second, millisecond) {
  var date;
  if (!year) date = new Date();else if (isDate(year)) // if the year was an instance of Date
    date = year;else date = new Date(REGEX["isNumeric"].test(year) ? year : 0, REGEX["isNumeric"].test(month) ? month : 0, REGEX["isNumeric"].test(day) ? day : 1, REGEX["isNumeric"].test(hour) ? hour : 0, REGEX["isNumeric"].test(minute) ? minute : 0, REGEX["isNumeric"].test(second) ? second : 0, REGEX["isNumeric"].test(millisecond) ? millisecond : 0);
  day = date.getDate();
  month = date.getMonth() + 1; // Because the output of getMonth() start from zero, add one

  year = date.getFullYear();
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  millisecond = date.getMilliseconds();
  var jYear, jMonth, jDay;
  var pastDaysInMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]; // Past days from the start of the year in each month

  if (year > 1600) {
    jYear = 979;
    year -= 1600;
  } else {
    jYear = 0;
    year -= 621;
  }

  var newYear = month > 2 ? year + 1 : year;
  var days = 365 * year + parseInt((newYear + 3) / 4) - parseInt((newYear + 99) / 100) + parseInt((newYear + 399) / 400) - 80 + day + pastDaysInMonth[month - 1];
  jYear += 33 * parseInt(days / 12053);
  days %= 12053;
  jYear += 4 * parseInt(days / 1461);
  days %= 1461;

  if (days > 365) {
    jYear += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
  }

  jMonth = days < 186 ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
  jDay = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
  return [jYear, jMonth, jDay, hour, minute, second, millisecond];
};

/**
 * Jalali to Gregorian
 * @param {Null|Number|String} year - Jalali year
 * @param {Null|Number|String} [month=1] -  Jalali month
 * @param {Null|Number|String} [day=1] -  Jalali day
 * @param {Null|Number|String} [hour=0] -  Jalali hour
 * @param {Null|Number|String} [minute=0] -  Jalali minute
 * @param {Null|Number|String} [second=0] -  Jalali second
 * @param {Null|Number|String} [millisecond=0] -  Jalali millisecond
 * @returns {Date} Gregorian date
 */

var jtg = function jtg(year, month, day, hour, minute, second, millisecond) {
  //plus sign before a variable, convert variable to int
  year = REGEX["isNumeric"].test(year) ? +year : 1;
  month = REGEX["isNumeric"].test(month) ? +month : 1;
  day = REGEX["isNumeric"].test(day) ? +day : 1;
  hour = REGEX["isNumeric"].test(hour) ? +hour : 0;
  minute = REGEX["isNumeric"].test(minute) ? +minute : 0;
  second = REGEX["isNumeric"].test(second) ? +second : 0;
  millisecond = REGEX["isNumeric"].test(millisecond) ? +millisecond : 0;
  var gYear, gMonth, gDay;

  if (year > 979) {
    gYear = 1600;
    year -= 979;
  } else {
    gYear = 621;
  }

  var days = 365 * year + parseInt(year / 33) * 8 + parseInt((year % 33 + 3) / 4) + 78 + day + (month < 7 ? (month - 1) * 31 : (month - 7) * 30 + 186);
  gYear += 400 * parseInt(days / 146097);
  days %= 146097;

  if (days > 36524) {
    gYear += 100 * parseInt(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }

  gYear += 4 * parseInt(days / 1461);
  days %= 1461;

  if (days > 365) {
    gYear += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
  }

  gDay = days + 1;
  var daysOfMonths = [0, 31, isLeapYear("gregorian", gYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (gMonth = 0; gMonth < 13; gMonth++) {
    var v = daysOfMonths[gMonth];
    if (gDay <= v) break;
    gDay -= v;
  }

  return new Date(gYear, gMonth - 1, gDay, hour, minute, second, millisecond);
};

/**
 * show warning
 * @since 2.0.0
 * @param {String} msg - the message for warning
 */
var warn = function warn(msg) {
  console.warn(msg);
};

/**
 * show error
 * @since 3.0.0
 * @param {String} msg - the message for error
 */
var error = function error(msg) {
  console.error(msg);
};

/**
 * make error and delete this.d
 * @param {String} errorText - Error Text
 * @returns {PersianDate} make error and return class
 */
var invalid = function invalid(errorText) {
  delete this.d;
  this.error = errorText;
  return this;
};

/**
 * convert String or Array or Object or PersianDate to Array
 * @since 1.2.0
 * @param {String|Array|Object|Number} year - this param must be string or array or Object from date or year
 * @param {String|Number} year.y - year of date
 * @param {Null|String|Number} year.year - year of date
 * @param {Null|String|Number} year.years - year of date
 * @param {Null|String|Number} year.M - month of date
 * @param {Null|String|Number} year.month - month of date
 * @param {Null|String|Number} year.months - month of date
 * @param {Null|String|Number} year.d - day of date
 * @param {Null|String|Number} year.day - day of date
 * @param {Null|String|Number} year.days - day of date
 * @param {Null|String|Number} year.date - day of date
 * @param {Null|String|Number} year.h - hour of date
 * @param {Null|String|Number} year.hour - hour of date
 * @param {Null|String|Number} year.hours - hour of date
 * @param {Null|String|Number} year.m - minute of date
 * @param {Null|String|Number} year.minute - minute of date
 * @param {Null|String|Number} year.minutes - minute of date
 * @param {Null|String|Number} year.s - second of date
 * @param {Null|String|Number} year.second - second of date
 * @param {Null|String|Number} year.seconds - second of date
 * @param {Null|String|Number} year.ms - millisecond of date
 * @param {Null|String|Number} year.millisecond - millisecond of date
 * @param {Null|String|Number} year.milliseconds - millisecond of date
 * @param {Null|Number|String} month month of date
 * @param {Null|Number|String} day day of date
 * @param {Null|Number|String} hour hour of date
 * @param {Null|Number|String} minute minute of date
 * @param {Null|Number|String} second second of date
 * @param {Null|Number|String} millisecond millisecond of date
 * @returns {Array} array includes year, month, date, hour, minute, second, millinsecond
 */

var typesToArray = function typesToArray(calendar, year, month, date, hour, minute, second, millisecond) {
  if (!year) // if year not defined
    year = new Date(); // return now

  if (typeof year == "string" && year.search(REGEX["separators"]) != -1) {
    return year.split(/[/ -.,:\\]/);
  } else if (Array.isArray(year)) {
    return year;
  } else if (PersianDate.isPersianDate(year)) {
    return year.clone().calendar(calendar).toArray();
  } else if (PersianDate.isDate(year)) {
    return new PersianDate(year).calendar(calendar).toArray();
  } else if (Object.prototype.toString.call(year) === "[object Object]") {
    return [year.y || year.year || year.years, year.M || year.month || year.months || 1, year.d || year.day || year.days || year.date || 1, year.h || year.hour || year.hours || 0, year.m || year.minute || year.minutes || 0, year.s || year.second || year.seconds || 0, year.ms || year.millisecond || year.milliseconds || 0];
  }

  return [year, month, date, hour, minute, second, millisecond];
};

/**
 * returns the ordinal number of that number sent to it
 * @param {Number} number - the number that gives ordinal number --> from 1 to 366
 * @param {'jalali','gregorian'} calendar - the calendar
 * @param {?Number} mode  - 'jalali' calendar have two mode of ordinal number
 * @returns {String} ordinal number
 * @example 1st | اول | اولین
 */

var ordinalNumber = function ordinalNumber(number) {
  var calendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "jalali";
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return CALENDAR[calendar].ordinalNumbers(number, mode);
};

/**
 * add a prefix to the text in the number of characters that the text has less
 * @param {String|Number} text a text need prefix
 * @param {Number} length length of text
 * @param {String} [prefix=0] - string for add before of text
 * @returns {String} text with or wihtout prefix
 */
var addPrefix = function addPrefix(text, length) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
  return prefix.repeat(length - String(text).length) + text;
};

/**
 * set the date with Date instance
 * @since 2.0.0
 * @param {Date} date - the Date
 */

var setJalaliDate = function setJalaliDate(date) {
  var _gtj = gtj(date);

  var _gtj2 = _slicedToArray(_gtj, 7);

  this.d.year = _gtj2[0];
  this.d.month = _gtj2[1];
  this.d.date = _gtj2[2];
  this.d.hour = _gtj2[3];
  this.d.minute = _gtj2[4];
  this.d.second = _gtj2[5];
  this.d.millisecond = _gtj2[6];
};

/**
 * set the date with Date instance
 * @since 2.0.0
 * @param {Date} date - the Date instance
 */
var setGregorianDate = function setGregorianDate(date) {
  this.d = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds()
  };
};

/**
 * get label of day
 * @param {Date} date - the date that received day
 * @param {'jalali'|'gregorian'} calendar - the calendar
 * @returns {String} returns day label
 * @example Saturday | شنبه
 */

var getDayLabel = function getDayLabel() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var calendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "jalali";
  if (isDate(date)) return CALENDAR[calendar]["days"]["label"][date.getDay()];
  return error("the first param must be instance of Date.");
};

/**
 * get the day of the week
 * @param {Date} date - the date that received day of week
 * @param {'jalali', 'gregorian'} calendar - the calendar
 * @param {'standard','array'} mode - standard mode start from 1 and array mode start from 0
 * @returns {Number|String} the number of the day of week
 */

var getDayOfWeek = function getDayOfWeek() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var calendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "jalali";
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "standard";

  if (isDate(date)) {
    // if the year was an instance of Date
    return CALENDAR[calendar]["days"]["weekNumber"][date.getDay()] + (mode != "standard" ? 0 : 1);
  }

  return error("the first param must be instance of Date.");
};

var getDefaultFormat$4 = function getDefaultFormat(calendar) {
  switch (calendar[0]) {
    case "j":
      return "jy";

    default:
      return "y";
  }
};

function year(format) {
  format = String(format).trim();

  if (REGEX["isNumeric"].test(format)) {
    this.d.year = +format;

    if (!this.isValidDate()) {
      return this.subDay(1, false);
    }

    return this;
  } else {
    if (!format) format = getDefaultFormat$4(this.c);
    var jYear = this.c == "jalali" ? this.d.year : gtj(this.toDate())[0];
    if (format == "jy" || format == "jYYYY") return jYear;
    if (format == "jYY") return String(jYear).slice(-2);
    var gYear = this.c == "gregorian" ? this.d.year : this.toDate().getFullYear();
    if (format == "y" || format == "YYYY") return gYear;
    if (format == "YY") return String(gYear).slice(-2);
    return jYear;
  }
}

var getDefaultFormat$3 = function getDefaultFormat(calendar) {
  switch (calendar[0]) {
    case "j":
      return "jQ";

    default:
      return "Q";
  }
};

function quarter(format) {
  format = String(format).trim();

  if (REGEX["isNumeric"].test(format)) {
    if (format < 1) {
      this.d.month = 1;
      this.subQuarter(format - 1, false);
    } else if (format > 4) {
      this.d.month = 12;
      this.addQuarter(format - 4, false);
    } else {
      this.d.month = +format * 3 - 2;
    }

    while (!this.isValidDate()) {
      this.subDay(1, false);
    }

    return this;
  } else {
    if (!format) format = getDefaultFormat$3(this.c);
    var jQuarter = Math.ceil((this.c == "jalali" ? this.d.month : gtj(this.toDate())[1]) / 3);
    if (format == "jQ") return jQuarter;
    if (format == "jQo") return ordinalNumber(jQuarter);
    if (format == "jQO") return ordinalNumber(jQuarter, "jalali", 2);
    var gQuarter = Math.ceil((this.c == "gregorian" ? this.d.month : this.toDate().getMonth() + 1) / 3);
    if (format == "Q") return gQuarter;
    if (format == "Qo" || format == "QO") return ordinalNumber(gQuarter, "gregorian");
    return jQuarter;
  }
}

var getDefaultFormat$2 = function getDefaultFormat(calendar) {
  switch (calendar[0]) {
    case "j":
      return "jM";

    default:
      return "M";
  }
};

function month(format) {
  format = String(format).trim();

  if (REGEX["isNumeric"].test(format)) {
    if (format < 1) {
      this.d.month = 1;
      this.subMonth(format - 1, false);
    } else if (format > 12) {
      this.d.month = 12;
      this.addMonth(format - 12, false);
    } else {
      this.d.month = +format;
    }

    while (!this.isValidDate()) {
      this.subDay(1, false);
    }

    return this;
  } else {
    if (!format) format = getDefaultFormat$2(this.c);
    var jMonth = this.c == "jalali" ? this.d.month : gtj(this.toDate())[1];
    if (format == "jMM") return addPrefix(jMonth, 2);
    if (format == "jM") return jMonth;
    if (format == "jMMMM" || format == "jMMM") return CALENDAR["jalali"]["months"][jMonth];
    if (format == "jMo") return ordinalNumber(jMonth);
    if (format == "jMO") return ordinalNumber(jMonth, "jalali", 2);
    var gMonth = this.c == "gregorian" ? this.d.month : this.toDate().getMonth() + 1;
    if (format == "M") return gMonth;
    if (format == "MM") return addPrefix(gMonth, 2);
    if (format == "MMMM") return CALENDAR["gregorian"]["months"][gMonth];
    if (format == "Mo" || format == "MO") return ordinalNumber(gMonth, "gregorian");
    if (format == "MMM") return CALENDAR["gregorian"]["months"][gMonth].slice(0, 3);
    return jMonth;
  }
}

var getDefaultFormat$1 = function getDefaultFormat(calendar) {
  switch (calendar[0]) {
    case "j":
      return "jw";

    default:
      return "w";
  }
};

function week(format) {
  format = String(format).trim();

  if (REGEX["isNumeric"].test(format)) {
    var weeksInYear = this.getWeeksInYear();

    if (format < 1) {
      this.week(1);
      this.subWeek(format - 1, false);
    } else if (format > weeksInYear) {
      this.week(weeksInYear);
      this.addWeek(format - weeksInYear, false);
    } else {
      var weekOfYear = getWeekOfYear.call(this, this.d.year, this.d.month, this.d.date, this.c);
      this.addWeek(+format - weekOfYear);
    }

    while (!this.isValidDate()) {
      this.subDay(1, false);
    }

    return this;
  } else {
    if (!format) format = getDefaultFormat$1(this.c);
    var jWeekOfYear = getWeekOfYear.call(this, this.year("jy"), this.month("jM"), this.date("jD"), this.c);
    if (format == "jw" || format == "jW") return jWeekOfYear;
    if (format == "jww" || format == "jWW") return addPrefix(jWeekOfYear, 2);
    if (format == "jwo" || format == "jWo") return ordinalNumber(jWeekOfYear);
    if (format == "jwO" || format == "jWO") return ordinalNumber(jWeekOfYear, "jalali", 2);
    var gWeekOfYear = getWeekOfYear.call(this, this.year("y"), this.month("M"), this.date("D"), "gregorian");
    if (format == "w" || format == "W") return gWeekOfYear;
    if (format == "ww" || format == "WW") return addPrefix(gWeekOfYear, 2);
    if (format == "wo" || format == "Wo" || format == "wO" || format == "WO") return ordinalNumber(gWeekOfYear, "gregorian");
    return jWeekOfYear;
  }
}

var getDefaultFormat = function getDefaultFormat(calendar) {
  switch (calendar[0]) {
    case "j":
      return "jD";

    default:
      return "D";
  }
};

function date(format) {
  format = String(format).trim();

  if (REGEX["isNumeric"].test(format)) {
    var daysInMonth = this.getDaysInMonth();

    if (format < 1) {
      this.d.date = 1;
      this.subDay(format - 1);
    } else if (format > daysInMonth) {
      this.d.date = daysInMonth;
      this.addDay(format - daysInMonth);
    } else {
      this.d.date = +format;
    }

    return this;
  } else {
    if (!format) format = getDefaultFormat(this.c);
    var jDate = this.c == "jalali" ? this.d.date : gtj(this.toDate())[2]; //---------- Day of Month ----------//

    if (format == "jDD") return addPrefix(jDate, 2);
    if (format == "jD") return jDate;
    if (format == "jDo") return ordinalNumber(jDate);
    if (format == "jDO") return ordinalNumber(jDate, "jalali", 2); //---------- Day of Week ----------//

    var gDate = this.toDate();
    if (format == "jdddd" || format == "jddd") return getDayLabel(gDate);
    if (format == "jdd") return getDayLabel(gDate).slice(0, 1);
    var dayOfWeek = getDayOfWeek(gDate);
    if (format == "jdo") return ordinalNumber(dayOfWeek);
    if (format == "jdO") return ordinalNumber(dayOfWeek, "jalali", 2);
    if (format == "jd") return getDayOfWeek(gDate, "jalali", "array");
    if (format == "jde") return dayOfWeek; //---------- Day of Year ----------//

    var dayOfYear = getDayOfYear(this.year("jy"), this.month("jM"), jDate, "j");
    if (format == "jDDDD") return addPrefix(dayOfYear, 3);
    if (format == "jDDD") return dayOfYear;
    if (format == "jDDDo") return ordinalNumber(dayOfYear);
    if (format == "jDDDO") return ordinalNumber(dayOfYear, "jalali", 2); //---------- Day of Month ----------//

    if (format == "DD") return addPrefix(gDate.getDate(), 2);
    if (format == "D") return gDate.getDate();
    if (format == "Do" || format == "DO") return ordinalNumber(gDate.getDate(), "gregorian"); //---------- Day of Week ----------//

    if (format == "dddd") return getDayLabel(gDate, "gregorian");
    if (format == "ddd") return getDayLabel(gDate, "gregorian").slice(0, 3);
    if (format == "dd") return getDayLabel(gDate, "gregorian").slice(0, 2);
    dayOfWeek = getDayOfWeek(gDate, "gregorian");
    if (format == "do" || format == "dO") return ordinalNumber(dayOfWeek, "gregorian");
    if (format == "d") return dayOfWeek - 1;
    if (format == "de") return dayOfWeek; //---------- Day of Year ----------//

    dayOfYear = getDayOfYear(gDate.getFullYear(), gDate.getMonth() + 1, gDate.getDate(), "g");
    if (format == "DDDD") return addPrefix(dayOfYear, 3);
    if (format == "DDD") return dayOfYear;
    if (format == "DDDo" || format == "DDDO") return ordinalNumber(dayOfYear, "gregorian");
    return jDate;
  }
}

function hour(format) {
  format = String(format).trim();

  if (REGEX["isNumeric"].test(format)) {
    if (format < 0) {
      this.d.hour = 0;
      this.subHour(format);
    } else if (format > 23) {
      this.d.hour = 23;
      this.addHour(format - 23);
    } else {
      this.d.hour = +format;
    }

    return this;
  } else {
    var h = this.d.hour;
    if (format == "H") return h;
    if (format == "HH") return addPrefix(h, 2);
    if (format == "k") return h || 24;
    if (format == "kk") return addPrefix(h || 24, 2);
    h = h > 12 ? h - 12 : h;
    if (format == "h") return h;
    if (format == "hh") return addPrefix(h, 2);
    return h;
  }
}

function minute(format) {
  format = String(format).trim();

  if (REGEX["isNumeric"].test(format)) {
    if (format < 0) {
      this.d.minute = 0;
      this.subMinute(format);
    } else if (format > 23) {
      this.d.minute = 23;
      this.addMinute(format - 23);
    } else {
      this.d.minute = +format;
    }

    return this;
  } else {
    if (format == "m") return this.d.minute;
    if (format == "mm") return addPrefix(this.d.minute, 2);
    return this.d.minute;
  }
}

function second(format) {
  format = String(format).trim();

  if (REGEX["isNumeric"].test(format)) {
    if (format < 0) {
      this.d.second = 0;
      this.subSecond(format);
    } else if (format > 23) {
      this.d.second = 23;
      this.addSecond(format - 23);
    } else {
      this.d.second = +format;
    }

    return this;
  } else {
    if (format == "s") return this.d.second;
    if (format == "ss") return addPrefix(this.d.second, 2);
    return this.d.second;
  }
}

function millisecond(format) {
  format = String(format).trim();

  if (REGEX["isNumeric"].test(format)) {
    if (format < 0) {
      this.d.millisecond = 0;
      this.subMillisecond(format);
    } else if (format > 23) {
      this.d.millisecond = 23;
      this.addMillisecond(format - 23);
    } else {
      this.d.millisecond = +format;
    }

    return this;
  } else {
    if (format == "CCC" || format == "c") return this.d.millisecond;
    if (format == "CCCC") return addPrefix(this.d.millisecond, 3);
    return this.d.millisecond;
  }
}

function timestamp(value) {
  if (value) {
    return this.fromGregorian(+String(value).trim());
  } else {
    return this.toDate().getTime();
  }
}

var jalali$2 = function jalali(calendar, year, month) {
  if (month >= 1 && month <= 6) return 31;else if (month > 6 && month <= 11 || isLeapYear(calendar, year)) {
    return 30;
  }
  return 29;
};

var gregorian$2 = function gregorian(calendar, year, month) {
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;else if (month != 2) return 30;else if (isLeapYear(calendar, year)) return 29;
  return 28;
};

var getDaysInMonth = function getDaysInMonth(calendar, year, month) {
  switch (calendar[0]) {
    case "j":
      return jalali$2(calendar, year, month);

    default:
      return gregorian$2(calendar, year, month);
  }
};

var getDayOfYearFormat = function getDayOfYearFormat(calendar) {
  switch (calendar[0]) {
    case "j":
      return "jd";

    default:
      return "d";
  }
};

function getWeeksInYear(year) {
  var dayOfYearFormat = getDayOfYearFormat(this.c);
  var firstOfYear = this.clone().parse(year);
  var firstOfYearDay = firstOfYear.date(dayOfYearFormat);
  var lastOfYear = firstOfYear.clone().endOf("year").startOf("day");
  var lastOfYearDay = lastOfYear.date(dayOfYearFormat);
  if (firstOfYearDay > 3) firstOfYear.addDay(7 - firstOfYearDay);else firstOfYear.subDay(firstOfYearDay);
  if (lastOfYearDay > 3) lastOfYear.addDay(7 - lastOfYearDay);else lastOfYear.subDay(lastOfYearDay);
  return Math.ceil(lastOfYear.diff(firstOfYear, "date") / 7);
}

function startOf(unit) {
  this.d.millisecond = 0;
  if (unit[0] == "s") return this;
  this.d.second = 0;
  if (unit == "m" || unit == "minute") return this;
  this.d.minute = 0;
  if (unit[0] == "h") return this;
  this.d.hour = 0;
  if (unit[0] == "d") return this;
  if (unit[0] == "w") return this.subDay(getDayOfWeek(this.toDate(), this.c, "array"));
  this.d.date = 1;
  if (unit[0] == "q") return this.quarter(this.quarter());
  if (unit == "M" || unit == "month") return this;
  this.d.month = 1;
  if (unit[0] == "y") return this;
}

function endOf(unit) {
  this.d.millisecond = 999;
  if (unit[0] == "s") return this;
  this.d.second = 59;
  if (unit == "m" || unit == "minute") return this;
  this.d.minute = 59;
  if (unit[0] == "h") return this;
  this.d.hour = 23;
  if (unit[0] == "d") return this;
  if (unit[0] == "w") return this.addDay(7 - getDayOfWeek(this.toDate(), this.c));

  if (unit[0] == "q") {
    this.quarter(this.quarter()).addMonth(2);
    this.d.date = this.getDaysInMonth();
    return this;
  }

  this.d.date = this.getDaysInMonth();
  if (unit == "M" || unit == "month") return this;
  this.d.month = 12;
  this.d.date = this.getDaysInMonth();
  if (unit[0] == "y") return this;
}

function time() {
  for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
    t[_key] = arguments[_key];
  }

  if (!t.length) return this.toArray().slice(3);
  var times = [];
  if (isPersianDate(t[0])) times = t[0].time();else if (isDate(t[0])) times = [t[0].getHours(), t[0].getMinutes(), t[0].getSeconds(), t[0].getMilliseconds()];else if (Object.prototype.toString.call(t[0]) === "[object Object]") times = [t[0].h || t[0].hour || t[0].hours || 0, t[0].m || t[0].minute || t[0].minutes || 0, t[0].s || t[0].second || t[0].seconds || 0, t[0].ms || t[0].millisecond || t[0].milliseconds || 0];else times = typesToArray.apply(void 0, [this.c].concat(t));

  if (this.isValidTime.apply(this, _toConsumableArray(times))) {
    return this.hour(times[0] || 0).minute(times[1] || 0).second(times[2] || 0).millisecond(times[3] || 0);
  } else return "زمان نامعتبر";
}

/**
 * get the day of the year
 * @param {Null|String|Number} year - the year of date
 * @param {Null|Number|String} month - the month of date that gives the day of the year
 * @param {Null|Number|String} day - the day of date that gives the day of the year
 * @param {Null|Number|String} calendar - the calendar
 * @returns {Number} the day of the year
 */

var getDayOfYear = function getDayOfYear(year, month, day, calendar) {
  //plus sign before a variable, convert variable to int
  month = +month;
  day = +day;

  while (--month != 0) {
    day += getDaysInMonth(calendar, year, month);
  }

  return day;
};

var dayOfYearFormat = function dayOfYearFormat(calendar) {
  switch (calendar[0]) {
    case "j":
      return "jd";

    default:
      return "d";
  }
};
/**
 * get the week of the year
 * @param {Null|Number|String} year - the year of date that gives the week of the year
 * @param {Null|Number|String} month - the month of date that gives the week of the year
 * @param {Null|Number|String} day - the day of date that gives the week of the year
 * @param {String} calendar - the calendar
 * @returns {Number} the week of the year
 */


var getWeekOfYear = function getWeekOfYear(year, month, day, calendar) {
  var firstOfYear = this.clone().calendar(calendar).parse(year);
  var firstOfYearDay = firstOfYear.date(dayOfYearFormat(calendar));
  var date = firstOfYear.clone().parse(year, month, day);
  if (firstOfYearDay > 3) firstOfYear.addDay(7 - firstOfYearDay);
  var weekNumber = Math.ceil(date.diff(firstOfYear, "date", true) / 7);
  var weeksInYear = date.clone().getWeeksInYear();
  return weekNumber > weeksInYear ? weeksInYear : weekNumber;
};

/**
 * compare the dates
 * @since 2.0.0
 * @param {PersianDate|Date|String|Array|Object} date - the date
 * @param {'>'|'>='|'<'|'<='|'=='} operator - the operator for compare
 * @returns {‌Boolean} if date valid, return true of false
 */

var compare = function compare(date, operator) {
  date = typesToArray.apply(void 0, [this.c].concat(_toConsumableArray(date)));
  if (this.isValid.apply(this, _toConsumableArray(date))) return eval("this.timestamp()" + operator + "this.clone().parse(...date).timestamp()");
  return false;
};

/**
 * do the math operation on dates
 * @since 1.4.0
 * @param {...String|PersianDate|Date|Array|Object} values - the dates
 * @param {'min'|'max'} operation - the operation
 * @returns {*} return maximum date
 * @throws {false} if parameters not send or parameters is invalid, return false
 */

var mathOperation = function mathOperation(values, operation) {
  var _this = this;

  if (!values.length) {
    return false;
  }

  var args = _toConsumableArray(values);

  var argsNumber = args.map(function (date) {
    var _this$clone;

    date = typesToArray(_this.c, date);
    if (_this.isValid.apply(_this, _toConsumableArray(date))) return (_this$clone = _this.clone()).parse.apply(_this$clone, _toConsumableArray(date)).timestamp();
    return false;
  });
  if (argsNumber.includes(false)) return false;
  return args[argsNumber.indexOf(Math[operation].apply(Math, _toConsumableArray(argsNumber)))];
};

/**
 * check the input is timestamp
 * @since 2.0.0
 * @param {Number|String} timestamp - input that must be checked
 * @returns {Boolean} if input was timestamp, return true
 */
var isTimestamp = function isTimestamp(timestamp) {
  return !isNaN(timestamp) && Math.floor(timestamp / 10000) > 0;
};

function now() {
  var date = new Date();

  if (this.c == "jalali") {
    setJalaliDate.call(this, date);
  } else {
    setGregorianDate.call(this, date);
  }

  return this;
}

function parse() {
  if (this.c == "jalali") {
    return this.fromJalali.apply(this, arguments);
  } else {
    return this.fromGregorian.apply(this, arguments);
  }
}

function clone() {
  return Object.assign(Object.create(Object.getPrototypeOf(this)), JSON.parse(JSON.stringify(this)));
}

function fromJalali() {
  for (var _len = arguments.length, date = new Array(_len), _key = 0; _key < _len; _key++) {
    date[_key] = arguments[_key];
  }

  if (!date.length) date = gtj();else date = typesToArray.apply(void 0, ["jalali"].concat(_toConsumableArray(date)));

  if (this.c == "jalali") {
    this.d.year = +date[0];
    this.d.month = +date[1] || 1;
    this.d.date = +date[2] || 1;
    this.d.hour = +date[3] || 0;
    this.d.minute = +date[4] || 0;
    this.d.second = +date[5] || 0;
    this.d.millisecond = +date[6] || 0;
  } else {
    setGregorianDate.call(this, jtg.apply(void 0, _toConsumableArray(date)));
  }

  if (!this.isValid()) return invalid.call(this, "تاریخ نامعتبر");
  return this;
}

function fromGregorian() {
  for (var _len = arguments.length, date = new Array(_len), _key = 0; _key < _len; _key++) {
    date[_key] = arguments[_key];
  }

  if (!date.length) date[0] = new Date().getTime();else if (this.isPersianDate(date[0])) {
    date = date[0].clone().calendar("g").toArray();
  } else if (!isTimestamp(date[0])) {
    date = typesToArray.apply(void 0, ["gregorian"].concat(_toConsumableArray(date)));
    date[6] = +date[6] || 0;
    date[5] = +date[5] || 0;
    date[4] = +date[4] || 0;
    date[3] = +date[3] || 0;
    date[2] = +date[2] || 1;
    date[1] = +date[1] || 1;
    date[0] = +date[0];
  }

  if (date.length > 1) {
    if (!isValid.apply(void 0, ["gregorian"].concat(_toConsumableArray(date)))) return invalid.call(this, "تاریخ نامعتبر");
    --date[1]; // this is month; becuse the Date get month from 0, subtract one
  }

  date = _construct(Date, _toConsumableArray(date));
  if (date == "Invalid Date") return invalid.call(this, "تاریخ نامعتبر");

  if (this.c == "jalali") {
    setJalaliDate.call(this, date);
  } else {
    setGregorianDate.call(this, date);
  }

  return this;
}

function calendar(c) {
  if (!c) return this.c;

  if (c[0] == "j" && this.c[0] != "j") {
    if (!this.error) setJalaliDate.call(this, this.toDate());
    this.c = "jalali";
  } else if (c[0] == "g" && this.c[0] != "g") {
    if (!this.error) setGregorianDate.call(this, this.toDate());
    this.c = "gregorian";
  }

  return this;
}

function addYear(year, checkDate) {
  // if the number was negative, send to subYear method
  if (year < 0) return this.subYear(Math.abs(year));
  this.d.year += +year; //plus sign before a variable, convert variable to int

  while (checkDate && !this.isValidDate()) {
    this.subDay(1, false);
  }

  return this;
}

function addQuarter(quarter, checkDate) {
  // if the number was negative, send to subQuarter method
  if (quarter < 0) return this.subQuarter(Math.abs(quarter));
  return this.addMonth(+quarter * 3, checkDate);
}

function addMonth(month, checkDate) {
  if (month < 0) // if the number was negative, send to subMonth method
    return this.subMonth(Math.abs(month));
  month = +month; // plus sign before a variable, convert variable to int

  var monthToStartNewYear = 12 - this.d.month + 1; // monthToStartNewYear -> Number of month to start of new year

  if (monthToStartNewYear > month) {
    this.d.month += month;
  } else {
    this.addYear(1, false);
    this.d.month = 1;
    month -= monthToStartNewYear;

    while (month >= 12) {
      month -= 12;
      this.addYear(1, false);
    }

    if (month != 0) {
      this.d.month += month;
    }
  }

  while (checkDate && !this.isValidDate()) {
    this.subDay(1, false);
  }

  return this;
}

function addWeek(week, checkDate) {
  // if the number was negative, send to subWeek method
  if (week < 0) return this.subWeek(Math.abs(week));
  return this.addDay(+week * 7, checkDate);
}

function addDay(day) {
  if (day < 0) // if the number was negative, send to subDay method
    return this.subDay(Math.abs(day));
  day = +day; //plus sign before a variable, convert variable to int

  var dayToStartNextMonth = this.getDaysInMonth() - this.d.date + 1; // dayToStartNextMonth -> Number of day to start of next month

  if (dayToStartNextMonth > day) {
    this.d.date += day;
  } else {
    this.addMonth(1, false);
    this.d.date = 1;
    day -= dayToStartNextMonth;
    var daysInMonth = this.getDaysInMonth();

    while (day >= daysInMonth) {
      day -= daysInMonth;
      this.addMonth(1, false);
      daysInMonth = this.getDaysInMonth();
    }

    if (day != 0) {
      this.d.date += day;
    }
  }

  return this;
}

function addHour(hour) {
  if (hour < 0) // if the number was negative, send to subHour method
    return this.subHour(Math.abs(hour));
  hour = +hour; //plus sign before a variable, convert variable to int

  while (hour >= 24) {
    hour -= 24;
    this.addDay(1, false);
  }

  var hourToNextDay = 24 - this.d.hour; // hourToNextDay -> Number of hour to start of next day

  if (hour >= hourToNextDay) {
    this.addDay(1, false);
    hour -= hourToNextDay;
    this.d.hour = hour;
  } else this.d.hour += hour;

  return this;
}

function addMinute(minute) {
  if (minute < 0) // if the number was negative, send to subMinute method
    return this.subMinute(Math.abs(minute));
  minute = +minute; //plus sign before a variable, convert variable to int

  while (minute >= 60) {
    this.addHour(1, false);
    minute -= 60;
  }

  var minuteToNextHour = 60 - this.d.minute; // minuteToNextHour -> Number of minute to start of next hour

  if (minute >= minuteToNextHour) {
    this.addHour(1, false);
    minute -= minuteToNextHour;
    this.d.minute = minute;
  } else this.d.minute += minute;

  return this;
}

function addSecond(second) {
  if (second < 0) // if the number was negative, send to subSecond method
    return this.subSecond(Math.abs(second));
  second = +second; //plus sign before a variable, convert variable to int

  while (second >= 60) {
    this.addMinute(1, false);
    second -= 60;
  }

  var secondToNextMinute = 60 - this.d.second; // secondToNextMinute -> Number of second to start of next Minute

  if (second >= secondToNextMinute) {
    this.addMinute(1, false);
    second -= secondToNextMinute;
    this.d.second = second;
  } else this.d.second += second;

  return this;
}

function addMillisecond(millisecond) {
  if (millisecond < 0) // if the number was negative, send to subMillisecond method
    return this.subMillisecond(Math.abs(millisecond));
  millisecond = +millisecond; //plus sign before a variable, convert variable to int

  while (millisecond >= 1000) {
    this.addSecond(1, false);
    millisecond -= 1000;
  }

  var millisecondToNextSecond = 1000 - this.d.millisecond; // millisecondToNextSecond -> Number of milllisecond to start of next second

  if (millisecond >= millisecondToNextSecond) {
    this.addSecond(1, false);
    millisecond -= millisecondToNextSecond;
    this.d.millisecond = millisecond;
  } else this.d.millisecond += millisecond;

  return this;
}

function subYear(year, checkDate) {
  this.d.year -= Math.abs(year);

  while (checkDate && !this.isValidDate()) {
    this.subDay(1, false);
  }

  return this;
}

function subQuarter(quarter, checkDate) {
  quarter = Math.abs(quarter);
  return this.subMonth(quarter * 3, checkDate);
}

function subMonth(month, checkDate) {
  month = Math.abs(month); //plus sign before a variable, convert variable to int

  var pastMonth = this.d.month; //pastMonth -> Number of month that is past

  if (pastMonth > month) {
    this.d.month -= month;
  } else {
    this.subYear(1, false);
    this.d.month = 12;
    month -= pastMonth;

    while (month >= 12) {
      this.subYear(1, false);
      month -= 12;
    }

    if (month != 0) {
      this.d.month -= month;
    }
  }

  while (checkDate && !this.isValidDate()) {
    this.subDay(1, false);
  }

  return this;
}

function subWeek(week, checkDate) {
  week = Math.abs(week);
  return this.subDay(week * 7, checkDate);
}

function subDay(day) {
  day = Math.abs(day);
  var pastDays = this.d.date; // pastDays -> Number of days that is past

  if (pastDays > day) {
    this.d.date -= day;
  } else {
    this.subMonth(1, false);
    var daysInMonth = this.getDaysInMonth();
    this.d.date = daysInMonth;
    day -= pastDays;

    while (day >= daysInMonth) {
      day -= daysInMonth;
      this.subMonth(1, false);
      daysInMonth = this.getDaysInMonth();
    }

    this.d.date = daysInMonth - day;
  }

  return this;
}

function subHour(hour) {
  hour = Math.abs(hour);

  while (hour >= 24) {
    hour -= 24;
    this.subDay(1, false);
  }

  var pastHours = this.d.hour; // pastHours -> Number of hours that is past

  if (hour > pastHours) {
    this.subDay(1, false);
    hour -= pastHours;
    this.d.hour = 24 - hour;
  } else this.d.hour -= hour;

  return this;
}

function subMinute(minute) {
  minute = Math.abs(minute);

  while (minute >= 60) {
    minute -= 60;
    this.subHour(1, false);
  }

  var pastMinute = this.d.minute; // pastMinutes -> Number of minutes that is past

  if (minute > pastMinute) {
    this.subHour(1, false);
    minute -= pastMinute;
    this.d.minute = 60 - minute;
  } else this.d.minute -= minute;

  return this;
}

function subSecond(second) {
  second = Math.abs(second);

  while (second >= 60) {
    second -= 60;
    this.subMinute(1, false);
  }

  var pastSeconds = this.d.second; // pastSeconds -> Number of seconds that is past

  if (second > pastSeconds) {
    this.subMinute(1, false);
    second -= pastSeconds;
    this.d.second = 60 - second;
  } else this.d.second -= second;

  return this;
}

function subMillisecond(millisecond) {
  millisecond = Math.abs(millisecond);

  while (millisecond >= 1000) {
    millisecond -= 1000;
    this.subSecond(1, false);
  }

  var pastMilliseconds = this.d.millisecond; // pastMilliseconds -> Number of milliseconds that is past

  if (millisecond > pastMilliseconds) {
    this.subSecond(1, false);
    millisecond -= pastMilliseconds;
    this.d.millisecond = 1000 - millisecond;
  } else this.d.millisecond -= millisecond;

  return this;
}

var jalali$1 = function jalali(format) {
  return format.replace(/\?/g, "j").replace(/datetime/gi, "jYYYY/jMM/jDD HH:mm").replace(/date/gi, "jYYYY/jMM/jDD").replace(/time/gi, "HH:mm");
};

var gregorian$1 = function gregorian(format) {
  return format.replace(/\?/g, "").replace(/datetime/gi, "YYYY-MM-DD HH:mm").replace(/date/gi, "YYYY-MM-DD").replace(/time/gi, "HH:mm");
};

function toString(format) {
  var rawTexts = [];
  format = format.replace(REGEX["betweenBacktick"], function (_matched, text) {
    rawTexts.push(text);
    return "###";
  });

  switch (this.c[0]) {
    case "j":
      format = jalali$1(format);
      break;

    default:
      format = gregorian$1(format);
  }

  var matchedFormats = format.match(REGEX["format"]);
  var dateString = "";

  var _iterator = _createForOfIteratorHelper(matchedFormats),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _i = _step.value;
      dateString += format.substring(0, format.indexOf(_i));
      if (_i.search(/Y|y/) != -1) dateString += this.year(_i);else if (_i.search(/M/) != -1) dateString += this.month(_i);else if (_i.search(/Q/) != -1) dateString += this.quarter(_i);else if (_i.search(/D|d/) != -1) dateString += this.date(_i);else if (_i.search(/W|w/) != -1) dateString += this.week(_i);else if (_i.search(/H|h|k/) != -1) dateString += this.hour(_i);else if (_i.search(/m/) != -1) dateString += this.minute(_i);else if (_i.search(/s/) != -1) dateString += this.second(_i);else if (_i.search(/c|C/) != -1) dateString += this.millisecond(_i);else if (_i.search(/t/) != -1) dateString += this.timestamp();else if (_i.search(/a|A/) != -1) dateString += TIMETYPE(this.d.hour, _i);
      format = format.substr(format.indexOf(_i) + _i.length);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  dateString += format;

  for (var i = 0; i < rawTexts.length; i++) {
    dateString = dateString.replace("###", rawTexts[i]);
  }

  return String(dateString);
}

function toArray() {
  if (!arguments.length) {
    return Object.values(this.d);
  }

  var formats = typesToArray.apply(void 0, [this.c].concat(Array.prototype.slice.call(arguments)));
  return [this.year(formats[0]), this.month(formats[1]), this.date(formats[2]), this.hour(formats[3]), this.minute(formats[4]), this.second(formats[5]), this.millisecond(formats[6])];
}

function toObject() {
  if (!arguments.length) {
    return this.d;
  }

  var formats = typesToArray.apply(void 0, [this.c].concat(Array.prototype.slice.call(arguments)));
  return {
    year: this.year(formats[0]),
    month: this.month(formats[1]),
    date: this.date(formats[2]),
    hour: this.hour(formats[3]),
    minute: this.minute(formats[4]),
    second: this.second(formats[5]),
    millisecond: this.millisecond(formats[6])
  };
}

var jalali = function jalali(date) {
  return jtg.apply(void 0, _toConsumableArray(date));
};

var gregorian = function gregorian(date) {
  --date[1];
  return _construct(Date, _toConsumableArray(date));
};

function toDate() {
  switch (this.c[0]) {
    case "j":
      return jalali(this.toArray());

    default:
      return gregorian(this.toArray());
  }
}

function diff(date, unit, addOne) {
  var _this$clone;

  date = typesToArray(this.c, date);
  if (!this.isValid.apply(this, _toConsumableArray(date))) return "تاریخ نامعتبر";

  var result = this.timestamp() - (_this$clone = this.clone()).parse.apply(_this$clone, _toConsumableArray(date)).timestamp();

  switch (unit) {
    case "y":
    case "year":
    case "years":
      result = this.d.year - date[0];
      break;

    case "M":
    case "month":
    case "months":
      result = this.d.year * 12 + this.d.month - (+date[0] * 12 + +date[1]);
      break;

    case "d":
    case "date":
    case "day":
    case "days":
      result = Math.ceil(result / 1000 / 60 / 60 / 24);
      break;

    case "h":
    case "hour":
    case "hours":
      result = Math.ceil(result / 1000 / 60 / 60);
      break;

    case "m":
    case "minute":
    case "minutes":
      result = Math.ceil(result / 1000 / 60);
      break;

    case "s":
    case "second":
    case "seconds":
      result = Math.ceil(result / 1000);
      break;
  }

  return addOne ? result + (result >= 0 ? 1 : -1) : result;
}

function diffForHumans(date, suffix) {
  var result = this.diff(date, "s");
  if (typeof result == "string") return "تاریخ نامعتبر";
  var prefix = suffix && (result > 0 ? "آینده" : "پیش");
  result = Math.abs(result);
  if (result == 0) return "هم اکنون";else if (result < 45) result = "لحظات";else if ((result /= 60) < 45) // divide by 60, for getting minute
    result = Math.round(result) + " " + "دقیقه";else if ((result /= 60) < 23.5) // divide by 60, for getting hour
    result = Math.round(result) + " " + "ساعت";else if ((result /= 24) < 26) // divide by 24, for getting day
    result = Math.round(result) + " " + "روز";else if (result < 320) result = Math.round(result / 30) + " " + "ماه";else result = Math.round(result / 365) + " " + "سال";
  return result + (suffix ? " " + prefix : "");
}

////////////////////---------- Are You Ready? ----------////////////////////
/**
 * A Date library for working with persian date
 * @class
 * @param {Date|Array|Null|Object|String} date - the date that convert to persian date
 * @param {String} [calendar='jalali'] - the calendar
 */

var PersianDate = function PersianDate(dateVal, calendarVal) {
  /**
   * keeps the date and time
   * @type {Object}
   * @property {Number} year - the year of date
   * @property {Number} month - the month of date
   * @property {Number} date - the day of month of date
   * @property {Number} hour - the hour of time
   * @property {Number} minute - the minute of time
   * @property {Number} second - the second of time
   * @property {Number} millisecond - the millisecond of time
   * @property {Number} gregorian - the gregorian date
   */

  this.d = {};
  /**
   * the calendar type
   * @type {String}
   * @default "jalali"
   * @example jalali | gregorian
   */

  this.c = "jalali"; ////////////////////--------- create & parse ---------/////////////////////

  /**
   * make current date in persian calendar
   * @returns {PersianDate} make current date and return class
   */

  PersianDate.prototype.now = function () {
    if (this.error) {
      delete this.error;
      this.d = {};
    }

    return now.call(this);
  };
  /**
   * set persian date from Gregorian date
   * @deprecated
   * @param {...Number|Date|Array|Null} date - the date that convert to persian date
   * @returns {PersianDate} return class with persian date
   * @throws {PersianDate|String} if date invalid return class with error property with error property
   */


  PersianDate.prototype.setDate = function () {
    warn('"setDate" function is deprecated! use "fromGregorian" function instead.\n' + "https://alireza-ab.ir/persian-date/create-and-parse#from-gregorian-date");
    return this.fromGregorian.apply(this, arguments);
  };
  /**
   * convert a jalali or gregorian date to PersianDate instance
   * @param {String|Array|Object|Number} year - this param must be string of date or array of date or Object from date or year
   * @param {String|Number} year.y - year of date
   * @param {Null|String|Number} year.year - year of date
   * @param {Null|String|Number} year.years - year of date
   * @param {Null|String|Number} year.M - month of date
   * @param {Null|String|Number} year.month - month of date
   * @param {Null|String|Number} year.months - month of date
   * @param {Null|String|Number} year.d - day of date
   * @param {Null|String|Number} year.day - day of date
   * @param {Null|String|Number} year.days - day of date
   * @param {Null|String|Number} year.date - day of date
   * @param {Null|String|Number} year.h - hour of date
   * @param {Null|String|Number} year.hour - hour of date
   * @param {Null|String|Number} year.hours - hour of date
   * @param {Null|String|Number} year.m - minute of date
   * @param {Null|String|Number} year.minute - minute of date
   * @param {Null|String|Number} year.minutes - minute of date
   * @param {Null|String|Number} year.s - second of date
   * @param {Null|String|Number} year.second - second of date
   * @param {Null|String|Number} year.seconds - second of date
   * @param {Null|String|Number} year.ms - millisecond of date
   * @param {Null|String|Number} year.millisecond - millisecond of date
   * @param {Null|String|Number} year.milliseconds - millisecond of date
   * @param {Null|Number|String} month month of date
   * @param {Null|Number|String} day day of date
   * @param {Null|Number|String} hour hour of date
   * @param {Null|Number|String} minute minute of date
   * @param {Null|Number|String} second second of date
   * @param {Null|Number|String} millisecond millisecond of date
   * @returns {PersianDate} return class with persian date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.parse = function () {
    return parse.call.apply(parse, [this].concat(Array.prototype.slice.call(arguments)));
  };
  /**
   * get clone of this date
   * @since 1.1.0
   * @returns {PersianDate} returns the clone of this date
   */


  PersianDate.prototype.clone = function () {
    return clone.call(this);
  };
  /**
   * convert a jalali date to PersianDate instance
   * @since 2.0.0
   * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be string of date or array of date or Object from date or year
   * @param {String|Number} year.y - year of date
   * @param {Null|String|Number} year.year - year of date
   * @param {Null|String|Number} year.years - year of date
   * @param {Null|String|Number} year.M - month of date
   * @param {Null|String|Number} year.month - month of date
   * @param {Null|String|Number} year.months - month of date
   * @param {Null|String|Number} year.d - day of date
   * @param {Null|String|Number} year.day - day of date
   * @param {Null|String|Number} year.days - day of date
   * @param {Null|String|Number} year.date - day of date
   * @param {Null|String|Number} year.h - hour of date
   * @param {Null|String|Number} year.hour - hour of date
   * @param {Null|String|Number} year.hours - hour of date
   * @param {Null|String|Number} year.m - minute of date
   * @param {Null|String|Number} year.minute - minute of date
   * @param {Null|String|Number} year.minutes - minute of date
   * @param {Null|String|Number} year.s - second of date
   * @param {Null|String|Number} year.second - second of date
   * @param {Null|String|Number} year.seconds - second of date
   * @param {Null|String|Number} year.ms - millisecond of date
   * @param {Null|String|Number} year.millisecond - millisecond of date
   * @param {Null|String|Number} year.milliseconds - millisecond of date
   * @param {Null|Number|String} month month of date
   * @param {Null|Number|String} day day of date
   * @param {Null|Number|String} hour hour of date
   * @param {Null|Number|String} minute minute of date
   * @param {Null|Number|String} second second of date
   * @param {Null|Number|String} millisecond millisecond of date
   * @returns {PersianDate} return class with persian date
   * @throws {PersianDate} if date invalid return class with error
   */


  PersianDate.prototype.fromJalali = function () {
    if (this.error) {
      delete this.error;
      this.d = {};
    }

    return fromJalali.call.apply(fromJalali, [this].concat(Array.prototype.slice.call(arguments)));
  };
  /**
   * convert a gregorian date to PersianDate instance
   * @since 2.0.0
   * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be string of date or array of date or Object from date or year
   * @param {String|Number} year.y - year of date
   * @param {Null|String|Number} year.year - year of date
   * @param {Null|String|Number} year.years - year of date
   * @param {Null|String|Number} year.M - month of date
   * @param {Null|String|Number} year.month - month of date
   * @param {Null|String|Number} year.months - month of date
   * @param {Null|String|Number} year.d - day of date
   * @param {Null|String|Number} year.day - day of date
   * @param {Null|String|Number} year.days - day of date
   * @param {Null|String|Number} year.date - day of date
   * @param {Null|String|Number} year.h - hour of date
   * @param {Null|String|Number} year.hour - hour of date
   * @param {Null|String|Number} year.hours - hour of date
   * @param {Null|String|Number} year.m - minute of date
   * @param {Null|String|Number} year.minute - minute of date
   * @param {Null|String|Number} year.minutes - minute of date
   * @param {Null|String|Number} year.s - second of date
   * @param {Null|String|Number} year.second - second of date
   * @param {Null|String|Number} year.seconds - second of date
   * @param {Null|String|Number} year.ms - millisecond of date
   * @param {Null|String|Number} year.millisecond - millisecond of date
   * @param {Null|String|Number} year.milliseconds - millisecond of date
   * @param {Null|Number|String} month month of date
   * @param {Null|Number|String} day day of date
   * @param {Null|Number|String} hour hour of date
   * @param {Null|Number|String} minute minute of date
   * @param {Null|Number|String} second second of date
   * @param {Null|Number|String} millisecond millisecond of date
   * @returns {PersianDate} return class with persian date
   * @throws {PersianDate} if date invalid return class with error
   */


  PersianDate.prototype.fromGregorian = function () {
    if (this.error) {
      delete this.error;
      this.d = {};
    }

    return fromGregorian.call.apply(fromGregorian, [this].concat(Array.prototype.slice.call(arguments)));
  };
  /**
   * convert a gregorian date to PersianDate instance
   * @since 2.0.0
   * @param {"j"|"jalali"|"g"|"gregorian"} calendar - the calendar
   * @returns {PersianDate} return class with persian date
   */


  PersianDate.prototype.calendar = function (calendar$1) {
    return calendar.call(this, calendar$1);
  }; ////////////////////--------- set & get ---------/////////////////////

  /**
   * get or set year
   * @param {Null|Number|String} [format=jYYYY] - a number for set the year or a format for formatting
   * @returns {PersianDate|String|Number} if set the year, returns class,
   * else returns a number or string from year
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.year = function () {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (this.error) return this.error;
    return year.call(this, format);
  };
  /**
   * get or set month
   * @param {Null|Number|String} [format=jM] - a number for set the month or a format for formatting
   * @returns {PersianDate|String|Number} if set the month, returns class,
   * else returns a number or string from month
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.month = function () {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (this.error) return this.error;
    return month.call(this, format);
  };
  /**
   * get or set day in month
   * @param {Null|Number|String} [format=jD] - a number for set the day in month or a format for formatting
   * @returns {PersianDate|String|Number} if set the day, returns class,
   * else returns a number or string from day
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.date = function () {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (this.error) return this.error;
    return date.call(this, format);
  };
  /**
   * get or set quarter
   * @param {Null|Number|String} [format=jQ] - a number for set the quarter or a format for formatting
   * @returns {PersianDate|String|Number} if set the quarter, returns class,
   * else returns a number or string from quarter
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.quarter = function () {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (this.error) return this.error;
    return quarter.call(this, format);
  };
  /**
   * get or set week
   * @param {Null|Number|String} [format=jw] - a number for set the week or a format for formatting
   * @returns {PersianDate|String|Number} if set the week, returns class,
   * else returns a number or string from week
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.week = function () {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (this.error) return this.error;
    return week.call(this, format);
  };
  /**
   * get or set hour
   * @param {Null|Number|String} [format=H] - a number for set the hour or a format for formatting
   * @returns {PersianDate|String|Number} if set the hour, returns class,
   * else returns a number or string from hour
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.hour = function () {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "H";
    if (this.error) return this.error;
    return hour.call(this, format);
  };
  /**
   * get or set minute
   * @param {Null|Number|String} [format=m] - a number for set the minute or a format for formatting
   * @returns {PersianDate|String|Number} if set the minute, returns class,
   * else returns a number or string from minute
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.minute = function () {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "m";
    if (this.error) return this.error;
    return minute.call(this, format);
  };
  /**
   * get or set second
   * @param {Null|Number|String} [format=s] - a number for set the second or a format for formatting
   * @returns {PersianDate|String|Number} if set the second, returns class,
   * else returns a number or string from second
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.second = function () {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "s";
    if (this.error) return this.error;
    return second.call(this, format);
  };
  /**
   * get or set millisecond
   * @param {Null|Number|String} [format=c] - a number for set the millisecond or a format for formatting
   * @returns {PersianDate|String|Number} if set the millisecond, returns class,
   * else returns a number or string from millisecond
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.millisecond = function () {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "c";
    if (this.error) return this.error;
    return millisecond.call(this, format);
  };
  /**
   * get timestamp or set date from timestamp
   * @param {Null|Number|String} value - a number for set the millisecond
   * @returns {PersianDate|Number} if set the timestamp, returns class,
   * else returns timestamp (number)
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.timestamp = function (value) {
    if (this.error) return this.error;
    return timestamp.call(this, value);
  };

  PersianDate.prototype.valueOf = function () {
    return this.timestamp();
  };
  /**
   * returns number of days in month
   * @param {?Number} year - year of date that returns number of days in month
   * @param {?Number} month - month of date that returns number of days in month
   * @returns {Number} number of days in month
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.getDaysInMonth = function () {
    var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.d.year;
    var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.d.month;
    if (this.error) return this.error;
    return getDaysInMonth(this.c, year, month);
  };
  /**
   * return number of weeks in year
   * @since 2.0.0
   * @param {Number|String} year - the year
   * @returns {Number} number of weeks in year
   */


  PersianDate.prototype.getWeeksInYear = function () {
    var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.d.year;
    if (this.error) return this.error;
    return getWeeksInYear.call(this, year);
  };
  /**
   * change the date to start of the year or month or ...
   * @since 2.0.0
   * @param {String} unit - the unit of time
   * @returns {PersianDate} return the class with new date or time
   */


  PersianDate.prototype.startOf = function () {
    var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "year";
    return startOf.call(this, unit);
  };
  /**
   * change the date to end of the year or month or ...
   * @since 2.0.0
   * @param {String} unit - the unit of time
   * @returns {PersianDate} return the class with new date or time
   */


  PersianDate.prototype.endOf = function () {
    var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "year";
    return endOf.call(this, unit);
  };
  /**
   * change the time
   * @since 2.3.0
   * @param {PersianDate|Date|String|Array|Object|Number} time - the new time
   * @param {Null|String|Number} time.h - hour of date
   * @param {Null|String|Number} time.hour - hour of date
   * @param {Null|String|Number} time.hours - hour of date
   * @param {Null|String|Number} time.m - minute of date
   * @param {Null|String|Number} time.minute - minute of date
   * @param {Null|String|Number} time.minutes - minute of date
   * @param {Null|String|Number} time.s - second of date
   * @param {Null|String|Number} time.second - second of date
   * @param {Null|String|Number} time.seconds - second of date
   * @param {Null|String|Number} time.ms - millisecond of date
   * @param {Null|String|Number} time.millisecond - millisecond of date
   * @param {Null|String|Number} time.milliseconds - millisecond of date
   * @returns {PersianDate|Array} if set the time, returns class,
   * else returns an array of time
   * @throws {String} if time invalid return error text
   */


  PersianDate.prototype.time = function () {
    if (this.error) return this.error;
    return time.call.apply(time, [this].concat(Array.prototype.slice.call(arguments)));
  }; ////////////////////--------- add & sub ---------/////////////////////

  /**
   * add to year
   * @param {?Number|String} [year=1] - a number for add with year
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.addYear = function () {
    var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!year) return this;
    return addYear.call(this, year, checkDate);
  };
  /**
   * add to month
   * @param {?Number|String} [month=1] - a number for add with month
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.addMonth = function () {
    var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!month) return this;
    return addMonth.call(this, month, checkDate);
  };
  /**
   * add to day
   * @param {?Number|String} [day=1] - a number for add with day
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.addDay = function () {
    var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!day) return this;
    return addDay.call(this, day, checkDate);
  };
  /**
   * add to quarter
   * @param {?Number|String} [quarter=1] - a number for add with quarter
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.addQuarter = function () {
    var quarter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!quarter) return this;
    return addQuarter.call(this, quarter, checkDate);
  };
  /**
   * add to week
   * @param {?Number|String} [week=1] - a number for add with week
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.addWeek = function () {
    var week = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!week) return this;
    return addWeek.call(this, week, checkDate);
  };
  /**
   * add to hour
   * @param {?Number|String} [hour=1] - a number for add with hour
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.addHour = function () {
    var hour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!hour) return this;
    return addHour.call(this, hour, checkDate);
  };
  /**
   * add to minute
   * @param {?Number|String} [minute=1] - a number for add with minute
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.addMinute = function () {
    var minute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!minute) return this;
    return addMinute.call(this, minute, checkDate);
  };
  /**
   * add to second
   * @param {?Number|String} [second=1] - a number for add with second
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.addSecond = function () {
    var second = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!second) return this;
    return addSecond.call(this, second, checkDate);
  };
  /**
   * add to millisecond
   * @param {?Number|String} [millisecond=1] - a number for add with millisecond
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.addMillisecond = function () {
    var millisecond = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!millisecond) return this;
    return addMillisecond.call(this, millisecond, checkDate);
  };
  /**
   * subtract from year
   * @param {?Number|String} [year=1] - a number for subtract from year
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.subYear = function () {
    var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!year) return this;
    return subYear.call(this, year, checkDate);
  };
  /**
   * subtract from month
   * @param {?Number|String} [month=1] - a number for subtract from month
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.subMonth = function () {
    var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!month) return this;
    return subMonth.call(this, month, checkDate);
  };
  /**
   * subtract from day
   * @param {?Number|String} [day=1] - a number for subtract from day
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.subDay = function () {
    var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!day) return this;
    return subDay.call(this, day, checkDate);
  };
  /**
   * subtract from quarter
   * @param {?Number|String} [quarter=1] - a number for subtract from quarter
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.subQuarter = function () {
    var quarter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!quarter) return this;
    return subQuarter.call(this, quarter, checkDate);
  };
  /**
   * subtract from week
   * @param {?Number|String} [week=1] - a number for subtract from week
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.subWeek = function () {
    var week = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!week) return this;
    return subWeek.call(this, week, checkDate);
  };
  /**
   * subtract from hour
   * @param {?Number|String} [hour=1] - a number for subtract from hour
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.subHour = function () {
    var hour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!hour) return this;
    return subHour.call(this, hour, checkDate);
  };
  /**
   * subtract from minute
   * @param {?Number|String} [minute=1] - a number for subtract from minute
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.subMinute = function () {
    var minute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!minute) return this;
    return subMinute.call(this, minute, checkDate);
  };
  /**
   * subtract from second
   * @param {?Number|String} [second=1] - a number for subtract from second
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.subSecond = function () {
    var second = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!second) return this;
    return subSecond.call(this, second, checkDate);
  };
  /**
   * subtract from millisecond
   * @param {?Number|String} [millisecond=1] - a number for subtract from millisecond
   * @param {?Boolean} checkDate checks the result that the date is valid,
   * If not valid, it will be deducted from the day to be valid
   * @returns {PersianDate} return class with new date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.subMillisecond = function () {
    var millisecond = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var checkDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    if (!millisecond) return this;
    return subMillisecond.call(this, millisecond, checkDate);
  }; ////////////////////--------- conversion ---------/////////////////////

  /**
   * returns date as string with specify format
   * @param {?String} [format=date] - formatting date to string
   * @returns {String} date string
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.toString = function () {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "date";
    if (this.error) return this.error;
    return toString.call(this, format);
  };
  /**
   * return the array of PersianDate
   * @since 1.3.0
   * @param {String|Array|Object|Number} yearForamt - this param must be string or array or Object from date or year
   * @param {String|Number} yearForamt.y - year format
   * @param {Null|String|Number} yearForamt.year - year format
   * @param {Null|String|Number} yearForamt.years - year format
   * @param {Null|String|Number} yearForamt.M - month format
   * @param {Null|String|Number} yearForamt.month - month format
   * @param {Null|String|Number} yearForamt.months - month format
   * @param {Null|String|Number} yearForamt.d - day format
   * @param {Null|String|Number} yearForamt.day - day format
   * @param {Null|String|Number} yearForamt.days - day format
   * @param {Null|String|Number} yearForamt.date - day format
   * @param {Null|String|Number} yearForamt.h - hour format
   * @param {Null|String|Number} yearForamt.hour - hour format
   * @param {Null|String|Number} yearForamt.hours - hour format
   * @param {Null|String|Number} yearForamt.m - minute format
   * @param {Null|String|Number} yearForamt.minute - minute format
   * @param {Null|String|Number} yearForamt.minutes - minute format
   * @param {Null|String|Number} yearForamt.s - second format
   * @param {Null|String|Number} yearForamt.second - second format
   * @param {Null|String|Number} yearForamt.seconds - second format
   * @param {Null|String|Number} yearForamt.ms - millisecond format
   * @param {Null|String|Number} yearForamt.millisecond - millisecond format
   * @param {Null|String|Number} yearForamt.milliseconds - millisecond format
   * @param {Null|Number|String} monthFormat month format
   * @param {Null|Number|String} dayFormat day format
   * @param {Null|Number|String} hourFormat hour format
   * @param {Null|Number|String} minuteFormat minute format
   * @param {Null|Number|String} secondFormat second format
   * @param {Null|Number|String} millisecondFormat millisecond format
   * @returns {Object} if date valid, return array of date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.toArray = function () {
    if (this.error) return this.error;
    return toArray.call.apply(toArray, [this].concat(Array.prototype.slice.call(arguments)));
  };
  /**
   * return the object of PersianDate
   * @since 1.3.0
   * @param {String|Array|Object|Number} yearForamt - this param must be string or array or Object from date or year
   * @param {String|Number} yearForamt.y - year format
   * @param {Null|String|Number} yearForamt.year - year format
   * @param {Null|String|Number} yearForamt.years - year format
   * @param {Null|String|Number} yearForamt.M - month format
   * @param {Null|String|Number} yearForamt.month - month format
   * @param {Null|String|Number} yearForamt.months - month format
   * @param {Null|String|Number} yearForamt.d - day format
   * @param {Null|String|Number} yearForamt.day - day format
   * @param {Null|String|Number} yearForamt.days - day format
   * @param {Null|String|Number} yearForamt.date - day format
   * @param {Null|String|Number} yearForamt.h - hour format
   * @param {Null|String|Number} yearForamt.hour - hour format
   * @param {Null|String|Number} yearForamt.hours - hour format
   * @param {Null|String|Number} yearForamt.m - minute format
   * @param {Null|String|Number} yearForamt.minute - minute format
   * @param {Null|String|Number} yearForamt.minutes - minute format
   * @param {Null|String|Number} yearForamt.s - second format
   * @param {Null|String|Number} yearForamt.second - second format
   * @param {Null|String|Number} yearForamt.seconds - second format
   * @param {Null|String|Number} yearForamt.ms - millisecond format
   * @param {Null|String|Number} yearForamt.millisecond - millisecond format
   * @param {Null|String|Number} yearForamt.milliseconds - millisecond format
   * @param {Null|Number|String} monthFormat month format
   * @param {Null|Number|String} dayFormat day format
   * @param {Null|Number|String} hourFormat hour format
   * @param {Null|Number|String} minuteFormat minute format
   * @param {Null|Number|String} secondFormat second format
   * @param {Null|Number|String} millisecondFormat millisecond format
   * @returns {Object} if date valid, return Object of date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.toObject = function () {
    if (this.error) return this.error;
    return toObject.call.apply(toObject, [this].concat(Array.prototype.slice.call(arguments)));
  };
  /**
   * return the Date instance of PersianDate
   * @since 2.0.0
   * @returns {Date} if date valid, return Date instance of date
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.toDate = function () {
    if (this.error) return this.error;
    return toDate.call(this);
  }; ////////////////////--------- diff ---------/////////////////////

  /**
   * get the diffrence between two date
   * @since 1.4.0
   * @param {PersianDate|Date|String|Array|Object} date - this param must be PersianDate or string or array or Object from date
   * @param {String|Number} date.y - year of date
   * @param {Null|String|Number} date.year - year of date
   * @param {Null|String|Number} date.years - year of date
   * @param {Null|String|Number} date.M - month of date
   * @param {Null|String|Number} date.month - month of date
   * @param {Null|String|Number} date.months - month of date
   * @param {Null|String|Number} date.d - day of date
   * @param {Null|String|Number} date.day - day of date
   * @param {Null|String|Number} date.days - day of date
   * @param {Null|String|Number} date.date - day of date
   * @param {Null|String|Number} date.h - hour of date
   * @param {Null|String|Number} date.hour - hour of date
   * @param {Null|String|Number} date.hours - hour of date
   * @param {Null|String|Number} date.m - minute of date
   * @param {Null|String|Number} date.minute - minute of date
   * @param {Null|String|Number} date.minutes - minute of date
   * @param {Null|String|Number} date.s - second of date
   * @param {Null|String|Number} date.second - second of date
   * @param {Null|String|Number} date.seconds - second of date
   * @param {Null|String|Number} date.ms - millisecond of date
   * @param {Null|String|Number} date.millisecond - millisecond of date
   * @param {Null|String|Number} date.milliseconds - millisecond of date
   * @param {String} unit - the unit of the measurment
   * @param {Boolean} addOne - add one day to result
   * @returns {Number} diffrence
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.diff = function (date, unit) {
    var addOne = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (this.error) return this.error;
    return diff.call(this, date, unit, addOne);
  };
  /**
   * get the diffrence between two date in a human-readable format
   * @since 2.0.0
   * @param {PersianDate|Date|String|Array|Object} date - this param must be PersianDate or string or array or Object from date
   * @param {String|Number} date.y - year of date
   * @param {Null|String|Number} date.year - year of date
   * @param {Null|String|Number} date.years - year of date
   * @param {Null|String|Number} date.M - month of date
   * @param {Null|String|Number} date.month - month of date
   * @param {Null|String|Number} date.months - month of date
   * @param {Null|String|Number} date.d - day of date
   * @param {Null|String|Number} date.day - day of date
   * @param {Null|String|Number} date.days - day of date
   * @param {Null|String|Number} date.date - day of date
   * @param {Null|String|Number} date.h - hour of date
   * @param {Null|String|Number} date.hour - hour of date
   * @param {Null|String|Number} date.hours - hour of date
   * @param {Null|String|Number} date.m - minute of date
   * @param {Null|String|Number} date.minute - minute of date
   * @param {Null|String|Number} date.minutes - minute of date
   * @param {Null|String|Number} date.s - second of date
   * @param {Null|String|Number} date.second - second of date
   * @param {Null|String|Number} date.seconds - second of date
   * @param {Null|String|Number} date.ms - millisecond of date
   * @param {Null|String|Number} date.millisecond - millisecond of date
   * @param {Null|String|Number} date.milliseconds - millisecond of date
   * @param {Boolean} suffix - add suffix or not
   * @returns {String} if date valid, return diff human-readable format
   * @throws {String} if date invalid return error message
   */


  PersianDate.prototype.diffForHumans = function (date) {
    var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (this.error) return this.error;
    return diffForHumans.call(this, date, suffix);
  }; ////////////////////--------- comparison ---------/////////////////////

  /**
   * returns minimum date in arguments that passed
   * @since 1.4.0
   * @param {...String|PersianDate|Date|Array|Object} date - this parameters must be string or array or Object from date;
   * @param {String} date.y - year of date
   * @param {Null|String} date.year - year of date
   * @param {Null|String} date.years - year of date
   * @param {Null|String} date.M - month of date
   * @param {Null|String} date.month - month of date
   * @param {Null|String} date.months - month of date
   * @param {Null|String} date.d - day of date
   * @param {Null|String} date.day - day of date
   * @param {Null|String} date.days - day of date
   * @param {Null|String} date.date - day of date
   * @param {Null|String} date.h - hour of date
   * @param {Null|String} date.hour - hour of date
   * @param {Null|String} date.hours - hour of date
   * @param {Null|String} date.m - minute of date
   * @param {Null|String} date.minute - minute of date
   * @param {Null|String} date.minutes - minute of date
   * @param {Null|String} date.s - second of date
   * @param {Null|String} date.second - second of date
   * @param {Null|String} date.seconds - second of date
   * @param {Null|String} date.ms - millisecond of date
   * @param {Null|String} date.millisecond - millisecond of date
   * @param {Null|String} date.milliseconds - millisecond of date
   * @returns {*} return minimum date
   * @throws {false} if parameters not send or parameters is invalid, return false
   */


  PersianDate.prototype.min = function () {
    return mathOperation.call(this, arguments, "min");
  };
  /**
   * returns maximum date in arguments that passed
   * @since 1.4.0
   * @param {...String|PersianDate|Date|Array|Object} date - this parameters must be string or array or Object from date;
   * @param {String} date.y - year of date
   * @param {Null|String} date.year - year of date
   * @param {Null|String} date.years - year of date
   * @param {Null|String} date.M - month of date
   * @param {Null|String} date.month - month of date
   * @param {Null|String} date.months - month of date
   * @param {Null|String} date.d - day of date
   * @param {Null|String} date.day - day of date
   * @param {Null|String} date.days - day of date
   * @param {Null|String} date.date - day of date
   * @param {Null|String} date.h - hour of date
   * @param {Null|String} date.hour - hour of date
   * @param {Null|String} date.hours - hour of date
   * @param {Null|String} date.m - minute of date
   * @param {Null|String} date.minute - minute of date
   * @param {Null|String} date.minutes - minute of date
   * @param {Null|String} date.s - second of date
   * @param {Null|String} date.second - second of date
   * @param {Null|String} date.seconds - second of date
   * @param {Null|String} date.ms - millisecond of date
   * @param {Null|String} date.millisecond - millisecond of date
   * @param {Null|String} date.milliseconds - millisecond of date
   * @returns {*} return maximum date
   * @throws {false} if parameters not send or parameters is invalid, return false
   */


  PersianDate.prototype.max = function () {
    return mathOperation.call(this, arguments, "max");
  };
  /**
   * receives year and determined that is leap year or not
   * @param {?Number} year - the year to be determined is a leap or not
   * @returns {Boolean} if is leap year, returns true
   */


  PersianDate.prototype.isLeapYear = function () {
    var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.d.year;
    if (this.error) return false;
    return isLeapYear(this.c, year);
  };
  /**
   * checks the persian date and time
   * @param {?Number} year - year of date that will be checked
   * @param {?Number} month - month of date that will be checked
   * @param {?Number} day - day of date that will be checked
   * @param {?Number} hour - hour of date that will be checked
   * @param {?Number} minute - minute of date that will be checked
   * @param {?Number} second - second of date that will be checked
   * @param {?Number} millisecond - millisecond of date that will be checked
   * @returns {Boolean} if is valid, returns true
   */


  PersianDate.prototype.isValid = function (year, month, day, hour, minute, second, millisecond) {
    if (this.error) return false;
    return this.isValidDate(year, month, day) && this.isValidTime(hour, minute, second, millisecond);
  };
  /**
   * checks the persian date
   * @param {?Number} year - year of date that will be checked
   * @param {?Number} month - month of date that will be checked
   * @param {?Number} day - day of date that will be checked
   * @returns {Boolean} if is valid date, returns true
   */


  PersianDate.prototype.isValidDate = function () {
    var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.d.year;
    var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.d.month;
    var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.d.date;
    if (this.error) return false;
    return isValidDate(this.c, year, month, day);
  };
  /**
   * checks the time
   * @param {?Number} hour - hour of date that will be checked
   * @param {?Number} minute - minute of date that will be checked
   * @param {?Number} second - second of date that will be checked
   * @param {?Number} millisecond - millisecond of date that will be checked
   * @returns {Boolean} if is valid time, returns true
   */


  PersianDate.prototype.isValidTime = function () {
    var hour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.d.hour;
    var minute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.d.minute;
    var second = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.d.second;
    var millisecond = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.d.millisecond;
    if (this.error) return false;
    return isValidTime(hour, minute, second, millisecond);
  };
  /**
   * checks this date is the same to another date
   * @since 1.1.0
   * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be PersianDate or string or array or Object from date or year
   * @param {String|Number} year.y - year of date
   * @param {Null|String|Number} year.year - year of date
   * @param {Null|String|Number} year.years - year of date
   * @param {Null|String|Number} year.M - month of date
   * @param {Null|String|Number} year.month - month of date
   * @param {Null|String|Number} year.months - month of date
   * @param {Null|String|Number} year.d - day of date
   * @param {Null|String|Number} year.day - day of date
   * @param {Null|String|Number} year.days - day of date
   * @param {Null|String|Number} year.date - day of date
   * @param {Null|String|Number} year.h - hour of date
   * @param {Null|String|Number} year.hour - hour of date
   * @param {Null|String|Number} year.hours - hour of date
   * @param {Null|String|Number} year.m - minute of date
   * @param {Null|String|Number} year.minute - minute of date
   * @param {Null|String|Number} year.minutes - minute of date
   * @param {Null|String|Number} year.s - second of date
   * @param {Null|String|Number} year.second - second of date
   * @param {Null|String|Number} year.seconds - second of date
   * @param {Null|String|Number} year.ms - millisecond of date
   * @param {Null|String|Number} year.millisecond - millisecond of date
   * @param {Null|String|Number} year.milliseconds - millisecond of date
   * @param {Null|Number|String} month month of date
   * @param {Null|Number|String} day day of date
   * @param {Null|Number|String} hour hour of date
   * @param {Null|Number|String} minute minute of date
   * @param {Null|Number|String} second second of date
   * @param {Null|Number|String} millisecond millisecond of date
   * @returns {‌Boolean} if this date is same to the argument, return true of false
   */


  PersianDate.prototype.isSame = function () {
    if (this.error) return false;
    return isSame.call.apply(isSame, [this].concat(Array.prototype.slice.call(arguments)));
  };
  /**
   * checks this date is before the another date
   * @since 1.2.0
   * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be PersianDate or string or array or Object from date or year
   * @param {String|Number} year.y - year of date
   * @param {Null|String|Number} year.year - year of date
   * @param {Null|String|Number} year.years - year of date
   * @param {Null|String|Number} year.M - month of date
   * @param {Null|String|Number} year.month - month of date
   * @param {Null|String|Number} year.months - month of date
   * @param {Null|String|Number} year.d - day of date
   * @param {Null|String|Number} year.day - day of date
   * @param {Null|String|Number} year.days - day of date
   * @param {Null|String|Number} year.date - day of date
   * @param {Null|String|Number} year.h - hour of date
   * @param {Null|String|Number} year.hour - hour of date
   * @param {Null|String|Number} year.hours - hour of date
   * @param {Null|String|Number} year.m - minute of date
   * @param {Null|String|Number} year.minute - minute of date
   * @param {Null|String|Number} year.minutes - minute of date
   * @param {Null|String|Number} year.s - second of date
   * @param {Null|String|Number} year.second - second of date
   * @param {Null|String|Number} year.seconds - second of date
   * @param {Null|String|Number} year.ms - millisecond of date
   * @param {Null|String|Number} year.millisecond - millisecond of date
   * @param {Null|String|Number} year.milliseconds - millisecond of date
   * @param {Null|Number|String} month month of date
   * @param {Null|Number|String} day day of date
   * @param {Null|Number|String} hour hour of date
   * @param {Null|Number|String} minute minute of date
   * @param {Null|Number|String} second second of date
   * @param {Null|Number|String} millisecond millisecond of date
   * @returns {‌Boolean} if this date is before the argument, return true of false
   */


  PersianDate.prototype.isBefore = function () {
    if (this.error) return false;
    return compare.call(this, arguments, "<");
  };
  /**
   * checks this date is after the another date
   * @since 1.2.0
   * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be PersianDate or string or array or Object from date or year
   * @param {String|Number} year.y - year of date
   * @param {Null|String|Number} year.year - year of date
   * @param {Null|String|Number} year.years - year of date
   * @param {Null|String|Number} year.M - month of date
   * @param {Null|String|Number} year.month - month of date
   * @param {Null|String|Number} year.months - month of date
   * @param {Null|String|Number} year.d - day of date
   * @param {Null|String|Number} year.day - day of date
   * @param {Null|String|Number} year.days - day of date
   * @param {Null|String|Number} year.date - day of date
   * @param {Null|String|Number} year.h - hour of date
   * @param {Null|String|Number} year.hour - hour of date
   * @param {Null|String|Number} year.hours - hour of date
   * @param {Null|String|Number} year.m - minute of date
   * @param {Null|String|Number} year.minute - minute of date
   * @param {Null|String|Number} year.minutes - minute of date
   * @param {Null|String|Number} year.s - second of date
   * @param {Null|String|Number} year.second - second of date
   * @param {Null|String|Number} year.seconds - second of date
   * @param {Null|String|Number} year.ms - millisecond of date
   * @param {Null|String|Number} year.millisecond - millisecond of date
   * @param {Null|String|Number} year.milliseconds - millisecond of date
   * @param {Null|Number|String} month month of date
   * @param {Null|Number|String} day day of date
   * @param {Null|Number|String} hour hour of date
   * @param {Null|Number|String} minute minute of date
   * @param {Null|Number|String} second second of date
   * @param {Null|Number|String} millisecond millisecond of date
   * @returns {‌Boolean} if this date is after the argument, return true of false
   */


  PersianDate.prototype.isAfter = function () {
    if (this.error) return false;
    return compare.call(this, arguments, ">");
  };
  /**
   * checks this date is same or before the another date
   * @since 1.2.0
   * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be PersianDate or string or array or Object from date or year
   * @param {String|Number} year.y - year of date
   * @param {Null|String|Number} year.year - year of date
   * @param {Null|String|Number} year.years - year of date
   * @param {Null|String|Number} year.M - month of date
   * @param {Null|String|Number} year.month - month of date
   * @param {Null|String|Number} year.months - month of date
   * @param {Null|String|Number} year.d - day of date
   * @param {Null|String|Number} year.day - day of date
   * @param {Null|String|Number} year.days - day of date
   * @param {Null|String|Number} year.date - day of date
   * @param {Null|String|Number} year.h - hour of date
   * @param {Null|String|Number} year.hour - hour of date
   * @param {Null|String|Number} year.hours - hour of date
   * @param {Null|String|Number} year.m - minute of date
   * @param {Null|String|Number} year.minute - minute of date
   * @param {Null|String|Number} year.minutes - minute of date
   * @param {Null|String|Number} year.s - second of date
   * @param {Null|String|Number} year.second - second of date
   * @param {Null|String|Number} year.seconds - second of date
   * @param {Null|String|Number} year.ms - millisecond of date
   * @param {Null|String|Number} year.millisecond - millisecond of date
   * @param {Null|String|Number} year.milliseconds - millisecond of date
   * @param {Null|Number|String} month month of date
   * @param {Null|Number|String} day day of date
   * @param {Null|Number|String} hour hour of date
   * @param {Null|Number|String} minute minute of date
   * @param {Null|Number|String} second second of date
   * @param {Null|Number|String} millisecond millisecond of date
   * @returns {‌Boolean} if this date is samr or before the argument, return true of false
   */


  PersianDate.prototype.isSameOrBefore = function () {
    if (this.error) return false;
    return compare.call(this, arguments, "<=");
  };
  /**
   * checks this date is same or after the another date
   * @since 1.2.0
   * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be PersianDate or string or array or Object from date or year
   * @param {String|Number} year.y - year of date
   * @param {Null|String|Number} year.year - year of date
   * @param {Null|String|Number} year.years - year of date
   * @param {Null|String|Number} year.M - month of date
   * @param {Null|String|Number} year.month - month of date
   * @param {Null|String|Number} year.months - month of date
   * @param {Null|String|Number} year.d - day of date
   * @param {Null|String|Number} year.day - day of date
   * @param {Null|String|Number} year.days - day of date
   * @param {Null|String|Number} year.date - day of date
   * @param {Null|String|Number} year.h - hour of date
   * @param {Null|String|Number} year.hour - hour of date
   * @param {Null|String|Number} year.hours - hour of date
   * @param {Null|String|Number} year.m - minute of date
   * @param {Null|String|Number} year.minute - minute of date
   * @param {Null|String|Number} year.minutes - minute of date
   * @param {Null|String|Number} year.s - second of date
   * @param {Null|String|Number} year.second - second of date
   * @param {Null|String|Number} year.seconds - second of date
   * @param {Null|String|Number} year.ms - millisecond of date
   * @param {Null|String|Number} year.millisecond - millisecond of date
   * @param {Null|String|Number} year.milliseconds - millisecond of date
   * @param {Null|Number|String} month month of date
   * @param {Null|Number|String} day day of date
   * @param {Null|Number|String} hour hour of date
   * @param {Null|Number|String} minute minute of date
   * @param {Null|Number|String} second second of date
   * @param {Null|Number|String} millisecond millisecond of date
   * @returns {‌Boolean} if this date is same or after the argument, return true of false
   */


  PersianDate.prototype.isSameOrAfter = function () {
    if (this.error) return false;
    return compare.call(this, arguments, ">=");
  };
  /**
   * checks this date is between the another dates
   * @since 1.3.0
   * @param {PersianDate|Date|String|Array|Object} from - this param must be PersianDate or string or array or Object from date
   * @param {String|Number} from.y - year of date
   * @param {Null|String|Number} from.year - year of date
   * @param {Null|String|Number} from.years - year of date
   * @param {Null|String|Number} from.M - month of date
   * @param {Null|String|Number} from.month - month of date
   * @param {Null|String|Number} from.months - month of date
   * @param {Null|String|Number} from.d - day of date
   * @param {Null|String|Number} from.day - day of date
   * @param {Null|String|Number} from.days - day of date
   * @param {Null|String|Number} from.date - day of date
   * @param {Null|String|Number} from.h - hour of date
   * @param {Null|String|Number} from.hour - hour of date
   * @param {Null|String|Number} from.hours - hour of date
   * @param {Null|String|Number} from.m - minute of date
   * @param {Null|String|Number} from.minute - minute of date
   * @param {Null|String|Number} from.minutes - minute of date
   * @param {Null|String|Number} from.s - second of date
   * @param {Null|String|Number} from.second - second of date
   * @param {Null|String|Number} from.seconds - second of date
   * @param {Null|String|Number} from.ms - millisecond of date
   * @param {Null|String|Number} from.millisecond - millisecond of date
   * @param {Null|String|Number} from.milliseconds - millisecond of date
   * @param {PersianDate|Date|String|Array|Object} to - this param must be PersianDate or string or array or Object from date
   * @param {String|Number} to.y - year of date
   * @param {Null|String|Number} to.year - year of date
   * @param {Null|String|Number} to.years - year of date
   * @param {Null|String|Number} to.M - month of date
   * @param {Null|String|Number} to.month - month of date
   * @param {Null|String|Number} to.months - month of date
   * @param {Null|String|Number} to.d - day of date
   * @param {Null|String|Number} to.day - day of date
   * @param {Null|String|Number} to.days - day of date
   * @param {Null|String|Number} to.date - day of date
   * @param {Null|String|Number} to.h - hour of date
   * @param {Null|String|Number} to.hour - hour of date
   * @param {Null|String|Number} to.hours - hour of date
   * @param {Null|String|Number} to.m - minute of date
   * @param {Null|String|Number} to.minute - minute of date
   * @param {Null|String|Number} to.minutes - minute of date
   * @param {Null|String|Number} to.s - second of date
   * @param {Null|String|Number} to.second - second of date
   * @param {Null|String|Number} to.seconds - second of date
   * @param {Null|String|Number} to.ms - millisecond of date
   * @param {Null|String|Number} to.millisecond - millisecond of date
   * @param {Null|String|Number} to.milliseconds - millisecond of date
   * @param {String} method - determines that consider the dates themselves
   * @returns {‌Boolean} if this date is between the arguments, return true of false
   */


  PersianDate.prototype.isBetween = function (from, to) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "()";
    if (this.error) return false;
    return isBetween.call(this, from, to, method);
  };
  /**
   * checks this date is in array of dates
   * @since 2.6.0
   * @param {(PersianDate|Date|String|Array|Object)[]} array - this param must be array of PersianDate - string - array - Object and array date
   * @param {String|Number} array[].y - year of date
   * @param {Null|String|Number} array[].year - year of date
   * @param {Null|String|Number} array[].years - year of date
   * @param {Null|String|Number} array[].M - month of date
   * @param {Null|String|Number} array[].month - month of date
   * @param {Null|String|Number} array[].months - month of date
   * @param {Null|String|Number} array[].d - day of date
   * @param {Null|String|Number} array[].day - day of date
   * @param {Null|String|Number} array[].days - day of date
   * @param {Null|String|Number} array[].date - day of date
   * @param {Null|String|Number} array[].h - hour of date
   * @param {Null|String|Number} array[].hour - hour of date
   * @param {Null|String|Number} array[].hours - hour of date
   * @param {Null|String|Number} array[].m - minute of date
   * @param {Null|String|Number} array[].minute - minute of date
   * @param {Null|String|Number} array[].minutes - minute of date
   * @param {Null|String|Number} array[].s - second of date
   * @param {Null|String|Number} array[].second - second of date
   * @param {Null|String|Number} array[].seconds - second of date
   * @param {Null|String|Number} array[].ms - millisecond of date
   * @param {Null|String|Number} array[].millisecond - millisecond of date
   * @param {Null|String|Number} array[].milliseconds - millisecond of date
   * @returns {‌Boolean} if date is in array return true
   */


  PersianDate.prototype.isInArray = function (array) {
    if (this.error) return false;
    return isInArray.call(this, array);
  };
  /**
   * checks date is a native js Date object
   * @since 1.3.0
   * @param {*} date date that must be checked
   * @returns {Boolean} if date is a native js Date, return true
   */


  PersianDate.prototype.isDate = isDate;
  /**
   * checks date is a PersianDate object
   * @since 1.3.0
   * @param {*} date date that must be checked
   * @returns {Boolean} if date is a PersianDate, return true
   */

  PersianDate.prototype.isPersianDate = isPersianDate;
  if (calendarVal) this.calendar(calendarVal);

  if (dateVal) {
    if (calendarVal && calendarVal[0] == "j") this.fromJalali(dateVal);else this.fromGregorian(dateVal);
  } else this.now();
}; ////////////////////--------- statics  ---------/////////////////////

/**
 * receives year and determined that is leap year or not
 * @static
 * @since 2.3.0
 * @param {"jalali"|"gregorian"} calendar - the calendar
 * @param {Number} year - the year to be determined is a leap or not
 * @returns {Boolean} if is leap year, returns true
 */


PersianDate.isLeapYear = isLeapYear;
/**
 * checks date is a native js Date object
 * @static
 * @since 2.3.0
 * @param {*} date date that must be checked
 * @returns {Boolean} if date is a native js Date, return true
 */

PersianDate.isDate = isDate;
/**
 * checks date is a PersianDate object
 * @static
 * @since 2.3.0
 * @param {*} date date that must be checked
 * @returns {Boolean} if date is a PersianDate, return true
 */

PersianDate.isPersianDate = isPersianDate;
/**
 * checks the date and time
 * @static
 * @since 2.4.0
 * @param {"jalali"|"gregorian"} calendar - the calendar
 * @param {?Number} year - year of date that will be checked
 * @param {?Number} month - month of date that will be checked
 * @param {?Number} day - day of date that will be checked
 * @param {?Number} hour - hour of date that will be checked
 * @param {?Number} minute - minute of date that will be checked
 * @param {?Number} second - second of date that will be checked
 * @param {?Number} millisecond - millisecond of date that will be checked
 * @returns {Boolean} if is valid, returns true
 */

PersianDate.isValid = isValid;
/**
 * checks the date
 * @static
 * @since 2.4.0
 * @param {"jalali"|"gregorian"} calendar - the calendar
 * @param {?Number} year - year of date that will be checked
 * @param {?Number} month - month of date that will be checked
 * @param {?Number} day - day of date that will be checked
 * @returns {Boolean} if is valid date, returns true
 */

PersianDate.isValidDate = isValidDate;
/**
 * checks the time
 * @static
 * @since 2.4.0
 * @param {?Number} hour - hour of date that will be checked
 * @param {?Number} minute - minute of date that will be checked
 * @param {?Number} second - second of date that will be checked
 * @param {?Number} millisecond - millisecond of date that will be checked
 * @returns {Boolean} if is valid time, returns true
 */

PersianDate.isValidTime = isValidTime;
/**
 * returns number of days in month
 * @param {"jalali"|"gregorian"} calendar - the calendar
 * @param {?Number} year - year of date that returns number of days in month
 * @param {?Number} month - month of date that returns number of days in month
 * @returns {Number} number of days in month
 * @throws {String} if date invalid return error message
 */

PersianDate.getDaysInMonth = getDaysInMonth; //TODO: add localization
////////////////////--------- Have A Good Day ---------/////////////////////

module.exports = PersianDate;
