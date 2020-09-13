const PersianDate = require('./dist/PersianDate.js').default;
// import PersianDate from './dist/PersianDate.js'

let persianDate = new PersianDate();

////////////////////------------- ATTENTION -------------////////////////////
//                  please change now date and start test                  //
/////////////////////////////////////////////////////////////////////////////

const now = {
    year: 1399,
    month: 6,
    date: 23
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
    persianDate = persianDate.parse();
    expect(persianDate.isValid()).toBe(false);
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
});

test('isSame function', () => {
    persianDate.parse('1399/6/1 12:20:30.235');
    expect(persianDate.isSame(1399, 6, 1, 12, 20, 30, 235)).toBe(true)
    expect(persianDate.isSame([1399, 7])).toBe(false)
    expect(persianDate.isSame(new PersianDate())).toBe(false)
    expect(persianDate.isSame('1399/6/1')).toBe(true)
});