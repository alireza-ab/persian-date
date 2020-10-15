const PersianDate = require('./dist/PersianDate.js');
// import PersianDate from './src/PersianDate.js'

let persianDate = new PersianDate();

////////////////////------------- ATTENTION -------------////////////////////
//                  please change now date and start test                  //
/////////////////////////////////////////////////////////////////////////////

const now = {
    year: 1399,
    month: 7,
    date: 24
}

test('create date and return now', () => {
    expect(persianDate.year()).toBe(now.year);
    expect(persianDate.month()).toBe(now.month);
    expect(persianDate.date()).toBe(now.date);
    expect(persianDate.hour()).toBe((new Date()).getHours());
    expect(persianDate.minute()).toBe((new Date()).getMinutes());
    // expect(persianDate.second()).toBe((new Date()).getSeconds());
    // expect(persianDate.millisecond()).toBe((new Date()).getMilliseconds());
});

test('now function', () => {
    persianDate = persianDate.now();
    expect(persianDate.year()).toBe(now.year);
    expect(persianDate.month()).toBe(now.month);
    expect(persianDate.date()).toBe(now.date);
    expect(persianDate.hour()).toBe((new Date()).getHours());
    expect(persianDate.minute()).toBe((new Date()).getMinutes());
    expect(persianDate.second()).toBe((new Date()).getSeconds());
    // expect(persianDate.millisecond()).toBe((new Date()).getMilliseconds());
});

test('setDate function with all parameters', () => {
    persianDate = persianDate.setDate('2020', '7', '27', '11', '5', '8', '452');
    expect(persianDate.year()).toBe(1399);
    expect(persianDate.month()).toBe(6);
    expect(persianDate.date()).toBe(6);
    expect(persianDate.hour()).toBe(11);
    expect(persianDate.minute()).toBe(5);
    expect(persianDate.second()).toBe(8);
    expect(persianDate.millisecond()).toBe(452);
});

test('setDate function with Date parameter', () => {
    persianDate = persianDate.setDate(new Date());
    expect(persianDate.year()).toBe(now.year);
    expect(persianDate.month()).toBe(now.month);
    expect(persianDate.date()).toBe(now.date);
    expect(persianDate.hour()).toBe((new Date()).getHours());
    expect(persianDate.minute()).toBe((new Date()).getMinutes());
    expect(persianDate.second()).toBe((new Date()).getSeconds());
    // expect(persianDate.millisecond()).toBe((new Date()).getMilliseconds());
});

test('setDate function with string parameter', () => {
    persianDate = persianDate.setDate('2020-8-27');
    expect(persianDate.year()).toBe(1399);
    expect(persianDate.month()).toBe(6);
    expect(persianDate.date()).toBe(6);
    expect(persianDate.hour()).toBe(0);
    expect(persianDate.minute()).toBe(0);
    expect(persianDate.second()).toBe(0);
    expect(persianDate.millisecond()).toBe(0);
});

test('parse function', () => {
    persianDate = persianDate.parse('1399', '6', '6', '14', '45');
    expect(persianDate.year()).toBe(1399);
    expect(persianDate.month()).toBe(6);
    expect(persianDate.date()).toBe(6);
    expect(persianDate.hour()).toBe(14);
    expect(persianDate.minute()).toBe(45);
    expect(persianDate.second()).toBe(0);
    expect(persianDate.millisecond()).toBe(0);
});

test('parse function with string parameter', () => {
    persianDate = persianDate.parse('1399-6-6 14:45');
    expect(persianDate.year()).toBe(1399);
    expect(persianDate.month()).toBe(6);
    expect(persianDate.date()).toBe(6);
    expect(persianDate.hour()).toBe(14);
    expect(persianDate.minute()).toBe(45);
    expect(persianDate.second()).toBe(0);
    expect(persianDate.millisecond()).toBe(0);
});

test('parse function with array parameter', () => {
    persianDate = persianDate.parse(['1399', '6', '6', '14', '45', '4', '54']);
    expect(persianDate.year()).toBe(1399);
    expect(persianDate.month()).toBe(6);
    expect(persianDate.date()).toBe(6);
    expect(persianDate.hour()).toBe(14);
    expect(persianDate.minute()).toBe(45);
    expect(persianDate.second()).toBe(4);
    expect(persianDate.millisecond()).toBe(54);
});

test('parse function with object parameter', () => {
    persianDate = persianDate.parse({ year: '1399', M: '6', date: '6', hour: '14', minutes: '45', s: '4', ms: '54' });
    expect(persianDate.year()).toBe(1399);
    expect(persianDate.month()).toBe(6);
    expect(persianDate.date()).toBe(6);
    expect(persianDate.hour()).toBe(14);
    expect(persianDate.minute()).toBe(45);
    expect(persianDate.second()).toBe(4);
    expect(persianDate.millisecond()).toBe(54);
});

test('parse function without parameter', () => {
    expect(persianDate.parse()).toBe(persianDate.now());
});

test('isLeapYear function', () => {
    persianDate = persianDate.parse(1399);
    expect(persianDate.isLeapYear()).toBe(true);
});

test('isValid function with valid date', () => {
    expect(persianDate.isValid()).toBe(true);
});

test('isValid function with invalid date', () => {
    persianDate.parse('1399', '45')
    expect(persianDate.isValid()).toBe(false);
});

test('isValid function with invalid time', () => {
    persianDate.hour('25');
    expect(persianDate.isValid()).toBe(false);
});

test('getDaysInMonth function', () => {
    persianDate.parse(1398, 12);
    expect(persianDate.getDaysInMonth()).toBe(29);
    persianDate.year(1399).month(12);
    expect(persianDate.getDaysInMonth()).toBe(30);
    persianDate.month(11);
    expect(persianDate.getDaysInMonth()).toBe(30);
    persianDate.month(10);
    expect(persianDate.getDaysInMonth()).toBe(30);
    persianDate.month(9);
    expect(persianDate.getDaysInMonth()).toBe(30);
    persianDate.month(8);
    expect(persianDate.getDaysInMonth()).toBe(30);
    persianDate.month(7);
    expect(persianDate.getDaysInMonth()).toBe(30);
    persianDate.month(6);
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.month(5);
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.month(4);
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.month(3);
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.month(2);
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.parse(1399, 1);
    expect(persianDate.getDaysInMonth()).toBe(31);
});

test('addYear function without parameter', () => {
    persianDate.addYear();
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(1)
});

test('addYear function with parameter and check date', () => {
    persianDate = persianDate.parse('1399-12-30');
    persianDate.addYear('1');
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(29)
});

test('addYear function without check date', () => {
    persianDate = persianDate.parse('1399-12-30');
    persianDate.addYear('1', false);
    expect(persianDate.isValid()).toBe(false);
});

test('addMonth function without parameter', () => {
    persianDate = persianDate.parse('1399-12-8');
    persianDate.addMonth();
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(8)
});

test('addMonth function with parameter and check date', () => {
    persianDate = persianDate.parse('1399-6-31');
    persianDate.addMonth('4');
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(10)
    expect(persianDate.date()).toBe(30)
});

test('addMonth function without check date', () => {
    persianDate = persianDate.parse('1399-6-31');
    persianDate.addMonth('1', false);
    expect(persianDate.isValid()).toBe(false);
});

test('addDay function without parameter', () => {
    persianDate = persianDate.parse('1399-12-30');
    persianDate.addDay();
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(1)
});

test('addDay function with parameter and check date', () => {
    persianDate = persianDate.parse('1399-12-30');
    persianDate.addDay('32');
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(2)
    expect(persianDate.date()).toBe(1)
});

test('addDay function without check date', () => {
    persianDate = persianDate.parse('1399-12-1');
    persianDate.addDay('30', false);
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(1)
});

test('addQuarter function without parameter', () => {
    persianDate = persianDate.parse('1399-12-1');
    persianDate.addQuarter();
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(3)
    expect(persianDate.date()).toBe(1)
});

test('addQuarter function with parameter and check date', () => {
    persianDate = persianDate.parse('1399-6-31');
    persianDate.addQuarter('2');
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(30)
});

test('addQuarter function without check date', () => {
    persianDate = persianDate.parse('1399-3-31');
    persianDate.addQuarter('6', false);
    expect(persianDate.isValid()).toBe(false)
});

test('addWeek function without parameter', () => {
    persianDate = persianDate.parse('1399-6-31');
    persianDate.addWeek();
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(7)
    expect(persianDate.date()).toBe(7)
});

test('addWeek function with parameter and check date', () => {
    persianDate = persianDate.parse('1399-6-1');
    persianDate.addWeek('3');
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(6)
    expect(persianDate.date()).toBe(22)
});

test('addWeek function without check date', () => {
    persianDate = persianDate.parse('1399-12-1');
    persianDate.addWeek('6', false);
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(13)
});

test('addHour function without parameter', () => {
    persianDate = persianDate.parse('1399-6-31 23:10');
    persianDate.addHour();
    expect(persianDate.month()).toBe(7)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(0)
    expect(persianDate.minute()).toBe(10)
});

test('addHour function with parameter and check time', () => {
    persianDate = persianDate.parse('1399-8-30 23:10');
    persianDate.addHour('78');
    expect(persianDate.month()).toBe(9)
    expect(persianDate.date()).toBe(4)
    expect(persianDate.hour()).toBe(5)
    expect(persianDate.minute()).toBe(10)
});

test('addHour function without check time', () => {
    persianDate = persianDate.parse('1399-12-30');
    persianDate.addHour('24', false);
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(0)
});

test('addMinute function without parameter', () => {
    persianDate = persianDate.parse('1399-6-31 23:59');
    persianDate.addMinute();
    expect(persianDate.month()).toBe(7)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(0)
    expect(persianDate.minute()).toBe(0)
});

test('addMinute function with parameter and check time', () => {
    persianDate = persianDate.parse('1399-8-30 23:10');
    persianDate.addMinute('1440');
    expect(persianDate.month()).toBe(9)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(10)
});

test('addMinute function without check time', () => {
    persianDate = persianDate.parse('1399-12-30 23:59');
    persianDate.addMinute('1', false);
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(0)
    expect(persianDate.minute()).toBe(0)
});

test('addSecond function without parameter', () => {
    persianDate = persianDate.parse('1399-6-31 23:59:59');
    persianDate.addSecond();
    expect(persianDate.month()).toBe(7)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(0)
    expect(persianDate.minute()).toBe(0)
    expect(persianDate.second()).toBe(0)
});

test('addSecond function with parameter and check time', () => {
    persianDate = persianDate.parse('1399-8-30 23:00');
    persianDate.addSecond('3600');
    expect(persianDate.month()).toBe(9)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(0)
    expect(persianDate.minute()).toBe(0)
    expect(persianDate.second()).toBe(0)
});

test('addSecond function without check time', () => {
    persianDate = persianDate.parse('1399-12-30 23:59:59');
    persianDate.addSecond('1', false);
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(0)
    expect(persianDate.minute()).toBe(0)
    expect(persianDate.second()).toBe(0)
});

test('addMillisecond function without parameter', () => {
    persianDate = persianDate.parse('1399-6-31 23:59:59.999');
    persianDate.addMillisecond();
    expect(persianDate.month()).toBe(7)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(0)
    expect(persianDate.minute()).toBe(0)
    expect(persianDate.second()).toBe(0)
    expect(persianDate.millisecond()).toBe(0)
});

test('addMillisecond function with parameter and check time', () => {
    persianDate = persianDate.parse('1399-8-30 23:00');
    persianDate.addMillisecond('3600000');
    expect(persianDate.month()).toBe(9)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(0)
    expect(persianDate.minute()).toBe(0)
    expect(persianDate.second()).toBe(0)
    expect(persianDate.millisecond()).toBe(0)
});

test('addMillisecond function without check time', () => {
    persianDate = persianDate.parse('1399-12-30 23:59:59.999');
    persianDate.addMillisecond('1', false);
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(1)
    expect(persianDate.hour()).toBe(0)
    expect(persianDate.minute()).toBe(0)
    expect(persianDate.second()).toBe(0)
});

test('subtractYear function without parameter', () => {
    persianDate.subtractYear();
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(1)
});

test('subtractYear function with parameter and check date', () => {
    persianDate = persianDate.parse('1399-12-30');
    persianDate.subtractYear('1');
    expect(persianDate.year()).toBe(1398)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(29)
});

test('subtractYear function without check date', () => {
    persianDate = persianDate.parse('1399-12-30');
    persianDate.subtractYear('1', false);
    expect(persianDate.isValid()).toBe(false);
});

test('subtractMonth function without parameter', () => {
    persianDate = persianDate.parse('1399-1-8');
    persianDate.subtractMonth();
    expect(persianDate.year()).toBe(1398)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(8)
});

test('subtractMonth function with parameter and check date', () => {
    persianDate = persianDate.parse('1399-2-31');
    persianDate.subtractMonth('4');
    expect(persianDate.year()).toBe(1398)
    expect(persianDate.month()).toBe(10)
    expect(persianDate.date()).toBe(30)
});

test('subtractMonth function without check date', () => {
    persianDate = persianDate.parse('1399-1-31');
    persianDate.subtractMonth('1', false);
    expect(persianDate.isValid()).toBe(false);
});

test('subtractDay function without parameter', () => {
    persianDate = persianDate.parse('1400-1-1');
    persianDate.subtractDay();
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(30)
});

test('subtractDay function with parameter and check date', () => {
    persianDate = persianDate.parse('1399-1-30');
    persianDate.subtractDay('32');
    expect(persianDate.year()).toBe(1398)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(27)
});

test('subtractDay function without check date', () => {
    persianDate = persianDate.parse('1400-1-1');
    persianDate.subtractDay('30', false);
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(1)
});

test('subtractQuarter function without parameter', () => {
    persianDate = persianDate.parse('1399-2-1');
    persianDate.subtractQuarter();
    expect(persianDate.year()).toBe(1398)
    expect(persianDate.month()).toBe(11)
    expect(persianDate.date()).toBe(1)
});

test('subtractQuarter function with parameter and check date', () => {
    persianDate = persianDate.parse('1399-6-31');
    persianDate.subtractQuarter('2');
    expect(persianDate.year()).toBe(1398)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(29)
});

test('subtractQuarter function without check date', () => {
    persianDate = persianDate.parse('1399-3-31');
    persianDate.subtractQuarter('6', false);
    expect(persianDate.isValid()).toBe(false)
});

test('subtractWeek function without parameter', () => {
    persianDate = persianDate.parse('1399-7-7');
    persianDate.subtractWeek();
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(6)
    expect(persianDate.date()).toBe(31)
});

test('subtractWeek function with parameter and check date', () => {
    persianDate = persianDate.parse('1399-6-22');
    persianDate.subtractWeek('3');
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(6)
    expect(persianDate.date()).toBe(1)
});

test('subtractWeek function without check date', () => {
    persianDate = persianDate.parse('1400-1-13');
    persianDate.subtractWeek('6', false);
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(1)
});

test('subtractHour function without parameter', () => {
    persianDate = persianDate.parse('1399-6-31 00:10');
    persianDate.subtractHour();
    expect(persianDate.month()).toBe(6)
    expect(persianDate.date()).toBe(30)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(10)
});

test('subtractHour function with parameter and check time', () => {
    persianDate = persianDate.parse('1399-9-4 5:10');
    persianDate.subtractHour('78');
    expect(persianDate.month()).toBe(8)
    expect(persianDate.date()).toBe(30)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(10)
});

test('subtractHour function without check time', () => {
    persianDate = persianDate.parse('1399-12-1');
    persianDate.subtractHour('24', false);
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(11)
    expect(persianDate.date()).toBe(30)
    expect(persianDate.hour()).toBe(0)
});

test('subtractMinute function without parameter', () => {
    persianDate = persianDate.parse('1399-6-31 00:00');
    persianDate.subtractMinute();
    expect(persianDate.month()).toBe(6)
    expect(persianDate.date()).toBe(30)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(59)
});

test('subtractMinute function with parameter and check time', () => {
    persianDate = persianDate.parse('1399-8-30 23:10');
    persianDate.subtractMinute('1440');
    expect(persianDate.month()).toBe(8)
    expect(persianDate.date()).toBe(29)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(10)
});

test('subtractMinute function without check time', () => {
    persianDate = persianDate.parse('1399-12-30 00:00');
    persianDate.subtractMinute('1', false);
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(29)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(59)
});

test('subtractSecond function without parameter', () => {
    persianDate = persianDate.parse('1399-6-31 00:00:00');
    persianDate.subtractSecond();
    expect(persianDate.month()).toBe(6)
    expect(persianDate.date()).toBe(30)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(59)
    expect(persianDate.second()).toBe(59)
});

test('subtractSecond function with parameter and check time', () => {
    persianDate = persianDate.parse('1399-8-30 1:00');
    persianDate.subtractSecond('3600');
    expect(persianDate.month()).toBe(8)
    expect(persianDate.date()).toBe(30)
    expect(persianDate.hour()).toBe(0)
    expect(persianDate.minute()).toBe(0)
    expect(persianDate.second()).toBe(0)
});

test('subtractSecond function without check time', () => {
    persianDate = persianDate.parse('1400-1-1 00:00:00');
    persianDate.subtractSecond('1', false);
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(30)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(59)
    expect(persianDate.second()).toBe(59)
});

test('subtractMillisecond function without parameter', () => {
    persianDate = persianDate.parse('1399-7-1');
    persianDate.subtractMillisecond();
    expect(persianDate.month()).toBe(6)
    expect(persianDate.date()).toBe(31)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(59)
    expect(persianDate.second()).toBe(59)
    expect(persianDate.millisecond()).toBe(999)
});

test('subtractMillisecond function with parameter and check time', () => {
    persianDate = persianDate.parse('1399-8-30 00:00');
    persianDate.subtractMillisecond('3600000');
    expect(persianDate.month()).toBe(8)
    expect(persianDate.date()).toBe(29)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(0)
    expect(persianDate.second()).toBe(0)
    expect(persianDate.millisecond()).toBe(0)
});

test('subtractMillisecond function without check time', () => {
    persianDate = persianDate.parse('1400-1-1');
    persianDate.subtractMillisecond('1', false);
    expect(persianDate.year()).toBe(1399)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(30)
    expect(persianDate.hour()).toBe(23)
    expect(persianDate.minute()).toBe(59)
    expect(persianDate.second()).toBe(59)
    expect(persianDate.millisecond()).toBe(999)
});

test('toString function', () => {
    persianDate = persianDate.parse('1400-1-1 15:54:56.856');
    expect(persianDate.toString()).toBe('1400/01/01')
    expect(persianDate.toString('date')).toBe('1400/01/01')
    expect(persianDate.toString('datetime')).toBe('1400/01/01 15:54')
    expect(persianDate.toString('time')).toBe('15:54')
    expect(persianDate.toString('YYYY|YY|y|jYYYY|jYY|jy')).toBe('2021|21|2021|1400|00|1400')
    expect(persianDate.toString('Qo|QO|Q|jQo|jQO|jQ')).toBe('1st|1st|1|اول|اولین|1')
    expect(persianDate.toString('MMMM|MMM|MM|Mo|MO|M|jMMMM|jMMM|jMM|jMo|jMO|jM'))
        .toBe('March|Mar|03|3rd|3rd|3|فروردین|فروردین|01|اول|اولین|1')
    expect(persianDate.toString('DDDD|DDDo|DDDO|DDD|DD|Do|DO|D|jDDDD|jDDDo|jDDDO|jDDD|jDD|jDo|jDO|jD'))
        .toBe('080|80th|80th|80|21|21st|21st|21|001|اول|اولین|1|01|اول|اولین|1')
    expect(persianDate.toString('dddd|ddd|dd|do|dO|d|de|jdddd|jddd|jdd|jdo|jdO|jd|jde'))
        .toBe('Sunday|Sun|Su|1st|1st|0|1|یکشنبه|یکشنبه|ی|دوم|دومین|1|2')
    expect(persianDate.toString('ww|WW|wo|Wo|wO|WO|w|W|jww|jWW|jwo|jWo|jwO|jWO|jw|jW'))
        .toBe('13|13|13th|13th|13th|13th|13|13|01|01|اول|اول|اولین|اولین|1|1')
    expect(persianDate.toString('HH|hh|H|h|kk|k')).toBe('15|03|15|3|15|15')
    expect(persianDate.toString('mm|m')).toBe('54|54')
    expect(persianDate.toString('ss|s')).toBe('56|56')
    expect(persianDate.toString('CCCC|CCC|c')).toBe('856|856|856')
    expect(persianDate.toString('t')).toBe('1616329496856')
    expect(persianDate.toString('aa|a|A|jaa|ja|jA')).toBe('P.M.|pm|PM|ب.ظ|ب ظ|بعد از ظهر')
});

test('year function', () => {
    persianDate = persianDate.parse('1399-7-1');
    persianDate.year('1405');
    expect(persianDate.toString()).toBe('1405/07/01')
});

test('month function', () => {
    persianDate = persianDate.parse('1399-7-1');
    persianDate.month('5');
    expect(persianDate.toString()).toBe('1399/05/01')
    persianDate.month('13');
    expect(persianDate.isValid()).toBe(false)
    persianDate = persianDate.parse('1399-7-1');
    persianDate.month('0');
    expect(persianDate.isValid()).toBe(false)
});

test('date function', () => {
    persianDate = persianDate.parse('1399-7-1');
    persianDate.date('5');
    expect(persianDate.toString()).toBe('1399/07/05')
    persianDate.date('0');
    expect(persianDate.isValid()).toBe(false)
    persianDate = persianDate.parse('1399-7-1');
    persianDate.date('32');
    expect(persianDate.isValid()).toBe(false)
});

test('quarter function', () => {
    persianDate = persianDate.parse('1399-7-1');
    persianDate.quarter('2');
    expect(persianDate.toString()).toBe('1399/04/01')
    persianDate.quarter('0');
    expect(persianDate.isValid()).toBe(false)
    persianDate = persianDate.parse('1399-7-1');
    persianDate.quarter('5');
    expect(persianDate.isValid()).toBe(false)
});

test('week function', () => {
    persianDate = persianDate.parse('1399-7-1');
    persianDate.week('23');
    expect(persianDate.toString()).toBe('1399/05/29')
    persianDate.week('0');
    expect(persianDate.isValid()).toBe(false)
    persianDate = persianDate.parse('1399-7-1');
    persianDate.week('54');
    expect(persianDate.isValid()).toBe(false)
});

test('hour function', () => {
    persianDate = persianDate.parse('1399-7-1');
    persianDate.hour('23');
    expect(persianDate.toString('time')).toBe('23:00')
    persianDate.hour('0');
    expect(persianDate.toString('time')).toBe('00:00')
    persianDate = persianDate.parse('1399-7-1');
    persianDate.hour('24');
    expect(persianDate.isValid()).toBe(false)
});

test('minute function', () => {
    persianDate = persianDate.parse('1399-7-1');
    persianDate.minute('59');
    expect(persianDate.toString('time')).toBe('00:59')
    persianDate.minute('0');
    expect(persianDate.toString('time')).toBe('00:00')
    persianDate = persianDate.parse('1399-7-1');
    persianDate.minute('60');
    expect(persianDate.isValid()).toBe(false)
});

test('second function', () => {
    persianDate = persianDate.parse('1399-7-1');
    persianDate.second('59');
    expect(persianDate.toString('s')).toBe('59')
    persianDate.second('0');
    expect(persianDate.toString('s')).toBe('0')
    persianDate = persianDate.parse('1399-7-1');
    persianDate.second('60');
    expect(persianDate.isValid()).toBe(false)
});

test('millisecond function', () => {
    persianDate = persianDate.parse('1399-7-1');
    persianDate.millisecond('999');
    expect(persianDate.toString('c')).toBe('999')
    persianDate.millisecond('0');
    expect(persianDate.toString('c')).toBe('0')
    persianDate = persianDate.parse('1399-7-1');
    persianDate.millisecond('1000');
    expect(persianDate.isValid()).toBe(false)
});

test('timestamp function without parameter', () => {
    persianDate = persianDate.parse('1399-6-11');
    expect(persianDate.timestamp()).toBe((new Date(2020, 8, 1, 0, 0, 0, 0)).getTime())
});

test('timestamp function with parameter', () => {
    persianDate = persianDate.timestamp((new Date(2020, 7, 22, 0, 0, 0, 0).getTime()));
    expect(persianDate.toString('datetime')).toBe('1399/06/01 00:00')
});

////////////////////--- Version 1.1.0 ---////////////////////

test('clone function', () => {
    clone = persianDate.parse('1399/6/1 12:20:30.235').clone();
    expect(clone.year()).toBe(persianDate.year())
    expect(clone.month()).toBe(persianDate.month())
    expect(clone.date()).toBe(persianDate.date())
    expect(clone.hour()).toBe(persianDate.hour())
    expect(clone.minute()).toBe(persianDate.minute())
    expect(clone.second()).toBe(persianDate.second())
    expect(clone.millisecond()).toBe(persianDate.millisecond())
    clone.addYear();
    expect(clone.year()).not.toBe(persianDate.year())
});

test('isSame function', () => {
    persianDate.parse('1399/6/1 12:20:30.235');
    expect(persianDate.isSame(1399, '6', 1, '12', 20, 30, 235)).toBe(true)
    expect(persianDate.isSame([1399, 7])).toBe(false)
    expect(persianDate.isSame(new PersianDate())).toBe(false)
    expect(persianDate.isSame({
        year: 1399,
        month: 6,
        date: 24,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })).toBe(false)
    expect(persianDate.isSame('1399/6/1')).toBe(true)
    expect(persianDate.isSame('1399/13/1')).toBe(false)
    expect(persianDate.isSame()).toBe(false)
});

////////////////////--- Version 1.2.0 ---////////////////////

test('isBefore function', () => {
    persianDate.parse('1399/6/1 12:20:30.235');
    expect(persianDate.isBefore(1399, '6', 1, '12', 20, 30, 235)).toBe(false)
    expect(persianDate.isBefore([1399, 7])).toBe(true)
    expect(persianDate.isBefore(new PersianDate())).toBe(true)
    expect(persianDate.isBefore({
        year: 1399,
        month: 6,
        date: 24,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })).toBe(true)
    expect(persianDate.isBefore('1399/6/2')).toBe(true)
    expect(persianDate.isBefore('1399/13/1')).toBe(false)
    expect(persianDate.isBefore()).toBe(true)
});

test('isAfter function', () => {
    persianDate.parse('1399/6/1 12:20:30.235');
    expect(persianDate.isAfter(1399, '6', 1, '12', 20, 30, 235)).toBe(false)
    expect(persianDate.isAfter([1399, 5])).toBe(true)
    expect(persianDate.isAfter(new PersianDate())).toBe(false)
    expect(persianDate.isAfter({
        year: 1399,
        month: 6,
        date: 24,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })).toBe(false)
    expect(persianDate.isAfter('1399/5/1')).toBe(true)
    expect(persianDate.isAfter('1399/13/1')).toBe(false)
    expect(persianDate.isAfter()).toBe(false)
});

////////////////////--- Version 1.3.0 ---////////////////////

test('toObject function without parameter', () => {
    let object = persianDate.parse('1400/1/1').toObject();
    expect(object.year).toBe(persianDate.year())
    expect(object.month).toBe(persianDate.month())
    expect(object.date).toBe(persianDate.date())
    expect(object.hour).toBe(persianDate.hour())
    expect(object.minute).toBe(persianDate.minute())
    expect(object.second).toBe(persianDate.second())
    expect(object.millisecond).toBe(persianDate.millisecond())
});

test('toObject function with string parameter', () => {
    let object = persianDate.parse('1400/1/1').toObject('jYY-jMM');
    expect(object.year).toBe(persianDate.year('jYY'))
    expect(object.month).toBe(persianDate.month('jMM'))
    expect(object.date).toBe(persianDate.date())
    expect(object.hour).toBe(persianDate.hour())
    expect(object.minute).toBe(persianDate.minute())
    expect(object.second).toBe(persianDate.second())
    expect(object.millisecond).toBe(persianDate.millisecond())
});

test('toObject function with array parameter', () => {
    let object = persianDate.parse('1400/1/1').toObject(['jYY', 'jMM', 'jDD', 'kk', 'm', 'ss', 'C']);
    expect(object.year).toBe(persianDate.year('jYY'))
    expect(object.month).toBe(persianDate.month('jMM'))
    expect(object.date).toBe(persianDate.date('jDD'))
    expect(object.hour).toBe(persianDate.hour('kk'))
    expect(object.minute).toBe(persianDate.minute('m'))
    expect(object.second).toBe(persianDate.second('ss'))
    expect(object.millisecond).toBe(persianDate.millisecond('C'))
});

test('toObject function with object parameter', () => {
    let object = persianDate.parse('1400/1/1').toObject({
        year: 'jYY',
        M: 'jMM',
        date: 'jDD',
        hour: 'kk',
        minutes: 'm',
        s: 'ss',
        ms: 'C'
    });
    expect(object.year).toBe(persianDate.year('jYY'))
    expect(object.month).toBe(persianDate.month('jMM'))
    expect(object.date).toBe(persianDate.date('jDD'))
    expect(object.hour).toBe(persianDate.hour('kk'))
    expect(object.minute).toBe(persianDate.minute('m'))
    expect(object.second).toBe(persianDate.second('ss'))
    expect(object.millisecond).toBe(persianDate.millisecond('C'))
});

test('toObject function with numeric parameter', () => {
    let object = persianDate.parse('1400/1/1').toObject('jYY', 'jMM', 'jDD', 'kk', 'm', 'ss', 'C');
    expect(object.year).toBe(persianDate.year('jYY'))
    expect(object.month).toBe(persianDate.month('jMM'))
    expect(object.date).toBe(persianDate.date('jDD'))
    expect(object.hour).toBe(persianDate.hour('kk'))
    expect(object.minute).toBe(persianDate.minute('m'))
    expect(object.second).toBe(persianDate.second('ss'))
    expect(object.millisecond).toBe(persianDate.millisecond('C'))
});

test('is Date function', () => {
    expect(persianDate.isDate(new Date)).toBe(true)
    expect(persianDate.isDate(new PersianDate)).toBe(false)
    expect(persianDate.isDate('2020-1-1')).toBe(false)
})

test('is PersianDate function', () => {
    expect(persianDate.isPersianDate(new Date)).toBe(false)
    expect(persianDate.isPersianDate(new PersianDate)).toBe(true)
    expect(persianDate.isPersianDate('2020-1-1')).toBe(false)
})

test('isSameOrBefore function', () => {
    persianDate.parse('1399/6/1 12:20:30.235');
    expect(persianDate.isSameOrBefore(1399, '6', 1, '12', 20, 30, 235)).toBe(true)
    expect(persianDate.isSameOrBefore([1399, 7])).toBe(true)
    expect(persianDate.isSameOrBefore(new PersianDate())).toBe(true)
    expect(persianDate.isSameOrBefore({
        year: 1399,
        month: 6,
        date: 24,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })).toBe(true)
    expect(persianDate.isSameOrBefore('1399/6/2')).toBe(true)
    expect(persianDate.isSameOrBefore('1399/13/1')).toBe(false)
    expect(persianDate.isSameOrBefore()).toBe(true)
});

test('isSameOrAfter function', () => {
    persianDate.parse('1399/6/1 12:20:30.235');
    expect(persianDate.isSameOrAfter(1399, '6', 1, '12', 20, 30, 235)).toBe(true)
    expect(persianDate.isSameOrAfter([1399, 5])).toBe(true)
    expect(persianDate.isSameOrAfter(new PersianDate())).toBe(false)
    expect(persianDate.isSameOrAfter({
        year: 1399,
        month: 6,
        date: 24,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })).toBe(false)
    expect(persianDate.isSameOrAfter('1399/5/1')).toBe(true)
    expect(persianDate.isSameOrAfter('1399/13/1')).toBe(false)
    expect(persianDate.isSameOrAfter()).toBe(false)
});

test('isBetween function', () => {
    persianDate.parse('1399/6/1 12:20:30.235');
    expect(persianDate.isBetween([1399, '5', 1, '12', 20, 30, 235], '1399/7/1 12:20:30.235')).toBe(true)
    expect(persianDate.isBetween({
        year: 1399,
        month: 5,
        date: 31,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    }, new PersianDate())).toBe(true)
    expect(persianDate.isBetween()).toBe(false)
    expect(persianDate.isBetween('1399/7/1', '1399/13/1')).toBe(false)
    expect(persianDate.isBetween('1399/7/32', '1399/12/1')).toBe(false)
    expect(persianDate.isBetween('1399/7', '1399/5')).toBe(false)
    expect(persianDate.isBetween('1399', '1400')).toBe(false)
    expect(persianDate.isBetween('1399', '1400', '[)')).toBe(true)
    expect(persianDate.isBetween('1399/5', '1399/6', '[)')).toBe(false)
    expect(persianDate.isBetween('1399/5', '1399/6', '(]')).toBe(true)
    expect(persianDate.isBetween('1399/5/31', '1399/6/2')).toBe(true)
    expect(persianDate.isBetween('1399/6/1', '1399/6/1')).toBe(false)
    expect(persianDate.isBetween('1399/6/1', '1399/6/1', '[]')).toBe(true)
});

////////////////////--- Version 1.4.0 ---////////////////////

test('min function', () => {
    expect(persianDate.min([1399, '5', 1, '12', 20, 30, 235], '1399/7/1 12:20:30.235')).toEqual([1399, '5', 1, '12', 20, 30, 235])
    expect(persianDate.min({
        year: 1399,
        month: 5,
        date: 31,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    }, new PersianDate())).toEqual({
        year: 1399,
        month: 5,
        date: 31,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })
    expect(persianDate.min()).toBe(false)
    expect(persianDate.min('1399/7/1', '1399/13/1')).toBe(false)
    expect(persianDate.min('1399/7/1', '1399/12/1')).toBe('1399/7/1')
    expect(persianDate.min('1399/10/21', '1399/10/21')).toBe('1399/10/21')
    expect(persianDate.min('1399/7/32', '1399/12/1')).toBe(false)
    expect(persianDate.min('1399/7', '1399/5')).toBe('1399/5')
    expect(persianDate.min('1399', '1400')).toBe('1399')
});

test('max function', () => {
    expect(persianDate.max([1399, '5', 1, '12', 20, 30, 235], '1399/7/1 12:20:30.235')).toBe('1399/7/1 12:20:30.235')
    expect(persianDate.max({
        year: 1399,
        month: 5,
        date: 31,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    }, new PersianDate())).toEqual(new PersianDate())
    expect(persianDate.max()).toBe(false)
    expect(persianDate.max('1399/7/1', '1399/13/1')).toBe(false)
    expect(persianDate.max('1399/7/1', '1399/12/1')).toBe('1399/12/1')
    expect(persianDate.min('1399/10/21', '1399/10/21')).toBe('1399/10/21')
    expect(persianDate.max('1399/7/32', '1399/12/1')).toBe(false)
    expect(persianDate.max('1399/7', '1399/5')).toBe('1399/7')
    expect(persianDate.max('1399', '1400')).toBe('1400')
});

test('diff function', () => {
    persianDate.parse('1399/6/1 12:20:30.235');
    expect(persianDate.diff([1399, '5', 1, '12', 20, 30, 235], 'year')).toBe(0)
    expect(persianDate.diff([1399, '5', 1, '12', 20, 30, 235], 'month')).toBe(1)
    expect(persianDate.diff({
        year: 1399,
        month: 5,
        date: 1,
        hour: 12,
        minute: 20,
        second: 30,
        millisecond: 235
    }, 'date')).toBe(31)
    expect(persianDate.diff('1399/5/1 12:20:30.235', 'hour')).toBe(31 * 24)
    expect(persianDate.diff(persianDate.clone().month(5), 'minute')).toBe(31 * 24 * 60)
    expect(persianDate.diff('1399/5/1 12:20:30.235', 'second')).toBe(31 * 24 * 3600)
    expect(persianDate.diff('1399/5/1 12:20:30.235', 'millisecond')).toBe(31 * 24 * 3600000)
    expect(persianDate.diff('1399/5/1 12:20:30.235')).toBe(31 * 24 * 3600000)
    expect(persianDate.diff(null, 'date')).toBe(persianDate.diff(persianDate.clone().now().toObject(), 'date'))
    persianDate.parse('1398/1/10');
    expect(persianDate.diff('1398/6/10', 'month')).toBe(-5)
    expect(persianDate.diff('1398/2/1', 'month', true)).toBeGreaterThan(-1)
    persianDate.parse('1400');
    expect(persianDate.diff('1399/12', 'date')).toBe(30)
});

////////////////////--- Version 1.5.0 ---////////////////////

test('toArray function without parameter', () => {
    let array = persianDate.parse('1400/1/1').toArray();
    expect(array[0]).toBe(persianDate.year())
    expect(array[1]).toBe(persianDate.month())
    expect(array[2]).toBe(persianDate.date())
    expect(array[3]).toBe(persianDate.hour())
    expect(array[4]).toBe(persianDate.minute())
    expect(array[5]).toBe(persianDate.second())
    expect(array[6]).toBe(persianDate.millisecond())
});

test('toArray function with string parameter', () => {
    let array = persianDate.parse('1400/1/1').toArray('jYY-jMM');
    expect(array[0]).toBe(persianDate.year('jYY'))
    expect(array[1]).toBe(persianDate.month('jMM'))
    expect(array[2]).toBe(persianDate.date())
    expect(array[3]).toBe(persianDate.hour())
    expect(array[4]).toBe(persianDate.minute())
    expect(array[5]).toBe(persianDate.second())
    expect(array[6]).toBe(persianDate.millisecond())
});

test('toArray function with array parameter', () => {
    let array = persianDate.parse('1400/1/1').toArray(['jYY', 'jMM', 'jDD', 'kk', 'm', 'ss', 'C']);
    expect(array[0]).toBe(persianDate.year('jYY'))
    expect(array[1]).toBe(persianDate.month('jMM'))
    expect(array[2]).toBe(persianDate.date('jDD'))
    expect(array[3]).toBe(persianDate.hour('kk'))
    expect(array[4]).toBe(persianDate.minute('m'))
    expect(array[5]).toBe(persianDate.second('ss'))
    expect(array[6]).toBe(persianDate.millisecond('C'))
});

test('toArray function with object parameter', () => {
    let array = persianDate.parse('1400/1/1').toArray({
        year: 'jYY',
        M: 'jMM',
        date: 'jDD',
        hour: 'kk',
        minutes: 'm',
        s: 'ss',
        ms: 'C'
    });
    expect(array[0]).toBe(persianDate.year('jYY'))
    expect(array[1]).toBe(persianDate.month('jMM'))
    expect(array[2]).toBe(persianDate.date('jDD'))
    expect(array[3]).toBe(persianDate.hour('kk'))
    expect(array[4]).toBe(persianDate.minute('m'))
    expect(array[5]).toBe(persianDate.second('ss'))
    expect(array[6]).toBe(persianDate.millisecond('C'))
});

test('toArray function with numeric parameter', () => {
    let array = persianDate.parse('1400/1/1').toArray('jYY', 'jMM', 'jDD', 'kk', 'm', 'ss', 'C');
    expect(array[0]).toBe(persianDate.year('jYY'))
    expect(array[1]).toBe(persianDate.month('jMM'))
    expect(array[2]).toBe(persianDate.date('jDD'))
    expect(array[3]).toBe(persianDate.hour('kk'))
    expect(array[4]).toBe(persianDate.minute('m'))
    expect(array[5]).toBe(persianDate.second('ss'))
    expect(array[6]).toBe(persianDate.millisecond('C'))
});