const PersianDate = require('./dist/PersianDate.js');
// import PersianDate from './src/PersianDate.js'

let persianDate = new PersianDate();

////////////////////------------- ATTENTION -------------////////////////////
//                  please change now date and start test                  //
/////////////////////////////////////////////////////////////////////////////

const now = {
    year: 1399,
    month: 8,
    date: 14
}

test('create date and return now', () => {
    expect(persianDate.year()).toBe(now.year);
    expect(persianDate.month()).toBe(now.month);
    expect(persianDate.date()).toBe(now.date);
    expect(persianDate.hour()).toBe((new Date()).getHours());
    expect(persianDate.minute()).toBe((new Date()).getMinutes());
    // expect(persianDate.second()).toBe((new Date()).getSeconds());
    // expect(persianDate.millisecond()).toBe((new Date()).getMilliseconds());

    // expect(persianDate.calendar('g').toDate().toString()).toBe(new Date().toString());
    expect(new PersianDate().calendar('g').toDate().toString()).toBe(new Date().toString());
});

test('now function', () => {
    persianDate.calendar('j').now();
    expect(persianDate.year()).toBe(now.year);
    expect(persianDate.month()).toBe(now.month);
    expect(persianDate.date()).toBe(now.date);
    expect(persianDate.hour()).toBe((new Date()).getHours());
    expect(persianDate.minute()).toBe((new Date()).getMinutes());
    expect(persianDate.second()).toBe((new Date()).getSeconds());
    // expect(persianDate.millisecond()).toBe((new Date()).getMilliseconds());
    expect(persianDate.calendar('g').now().toString('M/D/y, h:mm:ss A')).toBe(new Date().toLocaleString());
});

// ////////////////////------------- ATTENTION -------------////////////////////
// //         "setDate" is deprecated. "fromGregorian" replaces this.         //
// /////////////////////////////////////////////////////////////////////////////

// /*test('setDate function with all parameters', () => {
//     persianDate.setDate('2020', '7', '27', '11', '5', '8', '452');
//     expect(persianDate.year()).toBe(1399);
//     expect(persianDate.month()).toBe(5);
//     expect(persianDate.date()).toBe(6);
//     expect(persianDate.hour()).toBe(11);
//     expect(persianDate.minute()).toBe(5);
//     expect(persianDate.second()).toBe(8);
//     expect(persianDate.millisecond()).toBe(452);
// });

// test('setDate function with Date parameter', () => {
//     persianDate.setDate(new Date());
//     expect(persianDate.year()).toBe(now.year);
//     expect(persianDate.month()).toBe(now.month);
//     expect(persianDate.date()).toBe(now.date);
//     expect(persianDate.hour()).toBe((new Date()).getHours());
//     expect(persianDate.minute()).toBe((new Date()).getMinutes());
//     expect(persianDate.second()).toBe((new Date()).getSeconds());
//     // expect(persianDate.millisecond()).toBe((new Date()).getMilliseconds());
// });

// test('setDate function with string parameter', () => {
//     persianDate.setDate('2020-8-27');
//     expect(persianDate.year()).toBe(1399);
//     expect(persianDate.month()).toBe(6);
//     expect(persianDate.date()).toBe(6);
//     expect(persianDate.hour()).toBe(0);
//     expect(persianDate.minute()).toBe(0);
//     expect(persianDate.second()).toBe(0);
//     expect(persianDate.millisecond()).toBe(0);
// });*/

test('parse function', () => {
    persianDate.calendar('j').parse('1399', '6', '6', '14', '45');
    expect(persianDate.year()).toBe(1399);
    expect(persianDate.month()).toBe(6);
    expect(persianDate.date()).toBe(6);
    expect(persianDate.hour()).toBe(14);
    expect(persianDate.minute()).toBe(45);
    expect(persianDate.second()).toBe(0);
    expect(persianDate.millisecond()).toBe(0);
    persianDate.calendar('g').parse('2020', '6', '6', '14', '45');
    expect(persianDate.toDate()).toEqual(new Date('2020', '5', '6', '14', '45', 0, 0));
});

test('parse function with string parameter', () => {
    persianDate.calendar('j').parse('1399-6-6 14:45');
    expect(persianDate.year()).toBe(1399);
    expect(persianDate.month()).toBe(6);
    expect(persianDate.date()).toBe(6);
    expect(persianDate.hour()).toBe(14);
    expect(persianDate.minute()).toBe(45);
    expect(persianDate.second()).toBe(0);
    expect(persianDate.millisecond()).toBe(0);
    persianDate.calendar('g').parse('2020-6-6 14:45');
    expect(persianDate.toDate()).toEqual(new Date('2020', '5', '6', '14', '45', 0, 0));
});

test('parse function with array parameter', () => {
    persianDate.calendar('j').parse(['1399', '6', '6', '14', '45', '4', '54']);
    expect(persianDate.year()).toBe(1399);
    expect(persianDate.month()).toBe(6);
    expect(persianDate.date()).toBe(6);
    expect(persianDate.hour()).toBe(14);
    expect(persianDate.minute()).toBe(45);
    expect(persianDate.second()).toBe(4);
    expect(persianDate.millisecond()).toBe(54);
    persianDate.calendar('g').parse(['2020', '6', '6', '14', '45', '4', '54']);
    expect(persianDate.toDate()).toEqual(new Date('2020', '5', '6', '14', '45', '4', '54'));
});

test('parse function with object parameter', () => {
    persianDate.calendar('j').parse({ year: '1399', M: '6', date: '6', hour: '14', minutes: '45', s: '4', ms: '54' });
    expect(persianDate.year()).toBe(1399);
    expect(persianDate.month()).toBe(6);
    expect(persianDate.date()).toBe(6);
    expect(persianDate.hour()).toBe(14);
    expect(persianDate.minute()).toBe(45);
    expect(persianDate.second()).toBe(4);
    expect(persianDate.millisecond()).toBe(54);
    persianDate.calendar('g').parse({ year: '2020', M: '6', date: '6', hour: '14', minutes: '45', s: '4', ms: '54' });
    expect(persianDate.toDate()).toEqual(new Date('2020', '5', '6', '14', '45', '4', '54'));
});

test('parse function without parameter', () => {
    expect(persianDate.calendar('j').parse()).toEqual(persianDate.now());
    expect(persianDate.calendar('g').parse().toDate().toString()).toEqual(new Date().toString());
});

test('isLeapYear function', () => {
    expect(persianDate.calendar('j').isLeapYear(1399)).toBe(true);
    expect(persianDate.calendar('j').parse(1400).isLeapYear()).toBe(false);
    expect(persianDate.calendar('g').parse(2020).isLeapYear()).toBe(true);
    expect(persianDate.calendar('g').isLeapYear(2021)).toBe(false);
});

test('isValid function with valid date', () => {
    expect(persianDate.calendar('j').isValid()).toBe(true);
    expect(persianDate.calendar('g').isValid()).toBe(true);
});

test('isValid function with invalid date', () => {
    persianDate.calendar('j').parse('1399', '45')
    expect(persianDate.isValid()).toBe(false);
    persianDate.calendar('j').parse('1399', '12', '31')
    expect(persianDate.isValid()).toBe(false);
    persianDate.calendar('g').parse('2020-45')
    expect(persianDate.isValid()).toBe(false);
    persianDate.calendar('g').parse('2020-2-30')
    expect(persianDate.isValid()).toBe(false);
});

test('isValid function with invalid time', () => {
    persianDate.hour('25');
    expect(persianDate.isValid()).toBe(false);
});

test('getDaysInMonth function', () => {
    persianDate.calendar('j').parse(1398, 12);
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
    persianDate.calendar('g').parse(2020, 1);
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(29);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(30);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(30);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(30);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(30);
    persianDate.addMonth();
    expect(persianDate.getDaysInMonth()).toBe(31);
    persianDate.parse(2021, 2);
    expect(persianDate.getDaysInMonth()).toBe(28);
});

test('addYear function without parameter', () => {
    persianDate.calendar('j').parse('1399').addYear();
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(1)
    persianDate.calendar('g').parse('2020').addYear();
    expect(persianDate.year()).toBe(2021)
    expect(persianDate.month()).toBe(1)
    expect(persianDate.date()).toBe(1)
});

test('addYear function with parameter and check date', () => {
    persianDate.calendar('j').parse('1399-12-30');
    persianDate.addYear('1');
    expect(persianDate.year()).toBe(1400)
    expect(persianDate.month()).toBe(12)
    expect(persianDate.date()).toBe(29)
    persianDate.calendar('g').parse('2020-2-29').addYear();
    expect(persianDate.year()).toBe(2021)
    expect(persianDate.month()).toBe(2)
    expect(persianDate.date()).toBe(28)
});

test('addYear function without check date', () => {
    persianDate.calendar('j').parse('1399-12-30');
    persianDate.addYear('1', false);
    expect(persianDate.isValid()).toBe(false);
    persianDate.calendar('g').parse('2020-2-29');
    persianDate.addYear('1', false);
    expect(persianDate.isValid()).toBe(false);
});

test('addMonth function without parameter', () => {
    persianDate.calendar('j').parse('1399-12-8');
    persianDate.addMonth();
    expect(persianDate.toString()).toBe('1400/01/08')
    persianDate.calendar('g').parse('2020-12-8');
    persianDate.addMonth();
    expect(persianDate.toString()).toBe('2021-01-08')
});

test('addMonth function with parameter and check date', () => {
    persianDate.calendar('j').parse('1399-6-31');
    persianDate.addMonth('4');
    expect(persianDate.toString()).toBe('1399/10/30')
    persianDate.calendar('g').parse('2020-1-31');
    persianDate.addMonth('3');
    expect(persianDate.toString()).toBe('2020-04-30')
});

test('addMonth function without check date', () => {
    persianDate.calendar('j').parse('1399-6-31');
    persianDate.addMonth('1', false);
    expect(persianDate.isValid()).toBe(false);
    persianDate.calendar('g').parse('2020-3-31');
    persianDate.addMonth('1', false);
    expect(persianDate.isValid()).toBe(false);
});

test('addDay function without parameter', () => {
    persianDate.calendar('j').parse('1399-12-30');
    persianDate.addDay();
    expect(persianDate.toString()).toBe('1400/01/01')
    persianDate.calendar('g').parse('2020-12-31');
    persianDate.addDay();
    expect(persianDate.toString()).toBe('2021-01-01')
});

test('addDay function with parameter and check date', () => {
    persianDate.calendar('j').parse('1399-12-30');
    persianDate.addDay('32');
    expect(persianDate.toString()).toBe('1400/02/01')
    persianDate.calendar('g').parse('2020-12-31');
    persianDate.addDay('32');
    expect(persianDate.toString()).toBe('2021-02-01')
});

test('addDay function without check date', () => {
    persianDate.calendar('j').parse('1399-12-1');
    persianDate.addDay('30', false);
    expect(persianDate.toString()).toBe('1400/01/01')
    persianDate.calendar('g').parse('2020-12-1');
    persianDate.addDay('31', false);
    expect(persianDate.toString()).toBe('2021-01-01')
});

test('addQuarter function without parameter', () => {
    persianDate.calendar('j').parse('1399-12-1');
    persianDate.addQuarter();
    expect(persianDate.toString()).toBe('1400/03/01')
    persianDate.calendar('g').parse('2020-12-1');
    persianDate.addQuarter();
    expect(persianDate.toString()).toBe('2021-03-01')
});

test('addQuarter function with parameter and check date', () => {
    persianDate.calendar('j').parse('1399-6-31');
    persianDate.addQuarter('2');
    expect(persianDate.toString()).toBe('1399/12/30')
    persianDate.calendar('g').parse('2020-6-30');
    persianDate.addQuarter('2');
    expect(persianDate.toString()).toBe('2020-12-30')
});

test('addQuarter function without check date', () => {
    persianDate.calendar('j').parse('1399-3-31');
    persianDate.addQuarter('6', false);
    expect(persianDate.isValid()).toBe(false)
    persianDate.calendar('g').parse('2020-3-31');
    persianDate.addQuarter('6', false);
    expect(persianDate.isValid()).toBe(false)
});

test('addWeek function without parameter', () => {
    persianDate.calendar('j').parse('1399-6-31');
    persianDate.addWeek();
    expect(persianDate.toString()).toBe('1399/07/07')
    persianDate.calendar('g').parse('2020-6-30');
    persianDate.addWeek();
    expect(persianDate.toString()).toBe('2020-07-07')
});

test('addWeek function with parameter and check date', () => {
    persianDate.calendar('j').parse('1399-6-1');
    persianDate.addWeek('3');
    expect(persianDate.toString()).toBe('1399/06/22')
    persianDate.calendar('g').parse('2020-6-1');
    persianDate.addWeek('3');
    expect(persianDate.toString()).toBe('2020-06-22')
});

test('addWeek function without check date', () => {
    persianDate.calendar('j').parse('1399-12-1');
    persianDate.addWeek('6', false);
    expect(persianDate.toString()).toBe('1400/01/13')
    persianDate.calendar('g').parse('2020-12-1');
    persianDate.addWeek('6', false);
    expect(persianDate.toString()).toBe('2021-01-12')
});

test('addHour function without parameter', () => {
    persianDate.calendar('j').parse('1399-6-31 23:10');
    persianDate.addHour();
    expect(persianDate.toString('datetime')).toBe('1399/07/01 00:10')
    persianDate.calendar('g').parse('2020-6-30 23:10');
    persianDate.addHour();
    expect(persianDate.toString('datetime')).toBe('2020-07-01 00:10')
});

test('addHour function with parameter and check time', () => {
    persianDate.calendar('j').parse('1399-8-30 23:10');
    persianDate.addHour('78');
    expect(persianDate.toString('datetime')).toBe('1399/09/04 05:10')
    persianDate.calendar('g').parse('2020-8-31 23:10');
    persianDate.addHour('78');
    expect(persianDate.toString('datetime')).toBe('2020-09-04 05:10')
});

test('addHour function without check time', () => {
    persianDate.calendar('j').parse('1399-12-30');
    persianDate.addHour('24', false);
    expect(persianDate.toString('datetime')).toBe('1400/01/01 00:00')
    persianDate.calendar('g').parse('2020-12-31');
    persianDate.addHour('24', false);
    expect(persianDate.toString('datetime')).toBe('2021-01-01 00:00')
});

test('addMinute function without parameter', () => {
    persianDate.calendar('j').parse('1399-6-31 23:59');
    persianDate.addMinute();
    expect(persianDate.toString('datetime')).toBe('1399/07/01 00:00')
    persianDate.calendar('g').parse('2020-6-30 23:59');
    persianDate.addMinute();
    expect(persianDate.toString('datetime')).toBe('2020-07-01 00:00')
});

test('addMinute function with parameter and check time', () => {
    persianDate.calendar('j').parse('1399-8-30 23:10');
    persianDate.addMinute('1440');
    expect(persianDate.toString('datetime')).toBe('1399/09/01 23:10')
    persianDate.calendar('g').parse('2020-8-31 23:10');
    persianDate.addMinute('1440');
    expect(persianDate.toString('datetime')).toBe('2020-09-01 23:10')
});

test('addMinute function without check time', () => {
    persianDate.calendar('j').parse('1399-12-30 23:59');
    persianDate.addMinute('1', false);
    expect(persianDate.toString('datetime')).toBe('1400/01/01 00:00')
    persianDate.calendar('g').parse('2020-12-31 23:59');
    persianDate.addMinute('1', false);
    expect(persianDate.toString('datetime')).toBe('2021-01-01 00:00')
});

test('addSecond function without parameter', () => {
    persianDate.calendar('j').parse('1399-6-31 23:59:59');
    persianDate.addSecond();
    expect(persianDate.toString('datetime:ss')).toBe('1399/07/01 00:00:00')
    persianDate.calendar('g').parse('2020-6-30 23:59:59');
    persianDate.addSecond();
    expect(persianDate.toString('datetime:ss')).toBe('2020-07-01 00:00:00')
});

test('addSecond function with parameter and check time', () => {
    persianDate.calendar('j').parse('1399-8-30 23:00');
    persianDate.addSecond('3600');
    expect(persianDate.toString('datetime:ss')).toBe('1399/09/01 00:00:00')
    persianDate.calendar('g').parse('2020-8-31 23:00');
    persianDate.addSecond('3600');
    expect(persianDate.toString('datetime:ss')).toBe('2020-09-01 00:00:00')
});

test('addSecond function without check time', () => {
    persianDate.calendar('j').parse('1399-12-30 23:59:59');
    persianDate.addSecond('1', false);
    expect(persianDate.toString('datetime:ss')).toBe('1400/01/01 00:00:00')
    persianDate.calendar('g').parse('2020-12-31 23:59:59');
    persianDate.addSecond('1', false);
    expect(persianDate.toString('datetime:ss')).toBe('2021-01-01 00:00:00')
});

test('addMillisecond function without parameter', () => {
    persianDate.calendar('j').parse('1399-6-31 23:59:59.999');
    persianDate.addMillisecond();
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/07/01 00:00:00.0')
    persianDate.calendar('g').parse('2020-6-30 23:59:59.999');
    persianDate.addMillisecond();
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-07-01 00:00:00.0')
});

test('addMillisecond function with parameter and check time', () => {
    persianDate.calendar('j').parse('1399-8-30 23:00');
    persianDate.addMillisecond('3600000');
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/09/01 00:00:00.0')
    persianDate.calendar('g').parse('2020-8-31 23:00');
    persianDate.addMillisecond('3600000');
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-09-01 00:00:00.0')
});

test('addMillisecond function without check time', () => {
    persianDate.calendar('j').parse('1399-12-30 23:59:59.999');
    persianDate.addMillisecond('1', false);
    expect(persianDate.toString('datetime:ss.c')).toBe('1400/01/01 00:00:00.0')
    persianDate.calendar('g').parse('2020-12-31 23:59:59.999');
    persianDate.addMillisecond('1', false);
    expect(persianDate.toString('datetime:ss.c')).toBe('2021-01-01 00:00:00.0')
});

test('subYear function without parameter', () => {
    persianDate.calendar('j').parse('1400').subYear();
    expect(persianDate.toString()).toBe('1399/01/01')
    persianDate.calendar('g').parse('2021').subYear();
    expect(persianDate.toString()).toBe('2020-01-01')
});

test('subYear function with parameter and check date', () => {
    persianDate.calendar('j').parse('1399-12-30');
    persianDate.subYear('1');
    expect(persianDate.toString()).toBe('1398/12/29')
    persianDate.calendar('g').parse('2020-2-29');
    persianDate.subYear('1');
    expect(persianDate.toString()).toBe('2019-02-28')
});

test('subYear function without check date', () => {
    persianDate.calendar('j').parse('1399-12-30');
    persianDate.subYear('1', false);
    expect(persianDate.isValid()).toBe(false);
    persianDate.calendar('g').parse('2020-2-29');
    persianDate.subYear('1', false);
    expect(persianDate.isValid()).toBe(false);
});

test('subMonth function without parameter', () => {
    persianDate.calendar('j').parse('1399-1-8');
    persianDate.subMonth();
    expect(persianDate.toString()).toBe('1398/12/08')
    persianDate.calendar('g').parse('2020-1-8');
    persianDate.subMonth();
    expect(persianDate.toString()).toBe('2019-12-08')
});

test('subMonth function with parameter and check date', () => {
    persianDate.calendar('j').parse('1399-2-31');
    persianDate.subMonth('4');
    expect(persianDate.toString()).toBe('1398/10/30')
    persianDate.calendar('g').parse('2020-7-31');
    persianDate.subMonth('3');
    expect(persianDate.toString()).toBe('2020-04-30')
});

test('subMonth function without check date', () => {
    persianDate.calendar('j').parse('1399-1-31');
    persianDate.subMonth('1', false);
    expect(persianDate.isValid()).toBe(false);
    persianDate.calendar('g').parse('2021-12-31');
    persianDate.subMonth('1', false);
    expect(persianDate.isValid()).toBe(false);
});

test('subDay function without parameter', () => {
    persianDate.calendar('j').parse('1400-1-1');
    persianDate.subDay();
    expect(persianDate.toString()).toBe('1399/12/30')
    persianDate.calendar('g').parse('2021-1-1');
    persianDate.subDay();
    expect(persianDate.toString()).toBe('2020-12-31')
});

test('subDay function with parameter and check date', () => {
    persianDate.calendar('j').parse('1399-1-30');
    persianDate.subDay('32');
    expect(persianDate.toString()).toBe('1398/12/27')
    persianDate.calendar('g').parse('2020-3-30');
    persianDate.subDay('32');
    expect(persianDate.toString()).toBe('2020-02-27')
});

test('subDay function without check date', () => {
    persianDate.calendar('j').parse('1400-1-1');
    persianDate.subDay('30', false);
    expect(persianDate.toString()).toBe('1399/12/01')
    persianDate.calendar('g').parse('2020-1-1');
    persianDate.subDay('31', false);
    expect(persianDate.toString()).toBe('2019-12-01')
});

test('subQuarter function without parameter', () => {
    persianDate.calendar('j').parse('1399-2-1');
    persianDate.subQuarter();
    expect(persianDate.toString()).toBe('1398/11/01')
    persianDate.calendar('g').parse('2020-2-1');
    persianDate.subQuarter();
    expect(persianDate.toString()).toBe('2019-11-01')
});

test('subQuarter function with parameter and check date', () => {
    persianDate.calendar('j').parse('1399-6-31');
    persianDate.subQuarter('2');
    expect(persianDate.toString()).toBe('1398/12/29')
    persianDate.calendar('g').parse('2020-8-30');
    persianDate.subQuarter('2');
    expect(persianDate.toString()).toBe('2020-02-29')
});

test('subQuarter function without check date', () => {
    persianDate.calendar('j').parse('1399-3-31');
    persianDate.subQuarter('6', false);
    expect(persianDate.isValid()).toBe(false)
    persianDate.calendar('g').parse('2020-5-31');
    persianDate.subQuarter('1', false);
    expect(persianDate.isValid()).toBe(false)
});

test('subWeek function without parameter', () => {
    persianDate.calendar('j').parse('1399-7-7');
    persianDate.subWeek();
    expect(persianDate.toString()).toBe('1399/06/31')
    persianDate.calendar('g').parse('2020-7-7');
    persianDate.subWeek();
    expect(persianDate.toString()).toBe('2020-06-30')
});

test('subWeek function with parameter and check date', () => {
    persianDate.calendar('j').parse('1399-6-22');
    persianDate.subWeek('3');
    expect(persianDate.toString()).toBe('1399/06/01')
    persianDate.calendar('g').parse('2020-6-22');
    persianDate.subWeek('3');
    expect(persianDate.toString()).toBe('2020-06-01')
});

test('subWeek function without check date', () => {
    persianDate.calendar('j').parse('1400-1-13');
    persianDate.subWeek('6', false);
    expect(persianDate.toString()).toBe('1399/12/01')
    persianDate.calendar('g').parse('2021-1-13');
    persianDate.subWeek('6', false);
    expect(persianDate.toString()).toBe('2020-12-02')
});

test('subHour function without parameter', () => {
    persianDate.calendar('j').parse('1399-6-31 00:10');
    persianDate.subHour();
    expect(persianDate.toString('datetime')).toBe('1399/06/30 23:10')
    persianDate.calendar('g').parse('2020-6-30 00:10');
    persianDate.subHour();
    expect(persianDate.toString('datetime')).toBe('2020-06-29 23:10')
});

test('subHour function with parameter and check time', () => {
    persianDate.calendar('j').parse('1399-9-4 5:10');
    persianDate.subHour('78');
    expect(persianDate.toString('datetime')).toBe('1399/08/30 23:10')
    persianDate.calendar('g').parse('2020-9-4 5:10');
    persianDate.subHour('78');
    expect(persianDate.toString('datetime')).toBe('2020-08-31 23:10')
});

test('subHour function without check time', () => {
    persianDate.calendar('j').parse('1399-12-1');
    persianDate.subHour('24', false);
    expect(persianDate.toString('datetime')).toBe('1399/11/30 00:00')
    persianDate.calendar('g').parse('2020-12-1');
    persianDate.subHour('24', false);
    expect(persianDate.toString('datetime')).toBe('2020-11-30 00:00')
});

test('subMinute function without parameter', () => {
    persianDate.calendar('j').parse('1399-6-31 00:00');
    persianDate.subMinute();
    expect(persianDate.toString('datetime')).toBe('1399/06/30 23:59')
    persianDate.calendar('g').parse('2020-6-30 00:00');
    persianDate.subMinute();
    expect(persianDate.toString('datetime')).toBe('2020-06-29 23:59')
});

test('subMinute function with parameter and check time', () => {
    persianDate.calendar('j').parse('1399-8-30 23:10');
    persianDate.subMinute('1440');
    expect(persianDate.toString('datetime')).toBe('1399/08/29 23:10')
    persianDate.calendar('g').parse('2020-8-31 23:10');
    persianDate.subMinute('1440');
    expect(persianDate.toString('datetime')).toBe('2020-08-30 23:10')
});

test('subMinute function without check time', () => {
    persianDate.calendar('j').parse('1399-12-30 00:00');
    persianDate.subMinute('1', false);
    expect(persianDate.toString('datetime')).toBe('1399/12/29 23:59')
    persianDate.calendar('g').parse('2020-12-31 00:00');
    persianDate.subMinute('1', false);
    expect(persianDate.toString('datetime')).toBe('2020-12-30 23:59')
});

test('subSecond function without parameter', () => {
    persianDate.calendar('j').parse('1399-6-31 00:00:00');
    persianDate.subSecond();
    expect(persianDate.toString('datetime:ss')).toBe('1399/06/30 23:59:59')
    persianDate.calendar('g').parse('2020-6-30 00:00:00');
    persianDate.subSecond();
    expect(persianDate.toString('datetime:ss')).toBe('2020-06-29 23:59:59')
});

test('subSecond function with parameter and check time', () => {
    persianDate.calendar('j').parse('1399-8-30 1:00');
    persianDate.subSecond('3600');
    expect(persianDate.toString('datetime:ss')).toBe('1399/08/30 00:00:00')
    persianDate.calendar('g').parse('2020-8-31 1:00');
    persianDate.subSecond('3600');
    expect(persianDate.toString('datetime:ss')).toBe('2020-08-31 00:00:00')
});

test('subSecond function without check time', () => {
    persianDate.calendar('j').parse('1400-1-1 00:00:00');
    persianDate.subSecond('1', false);
    expect(persianDate.toString('datetime:ss')).toBe('1399/12/30 23:59:59')
    persianDate.calendar('g').parse('2021-1-1 00:00:00');
    persianDate.subSecond('1', false);
    expect(persianDate.toString('datetime:ss')).toBe('2020-12-31 23:59:59')
});

test('subMillisecond function without parameter', () => {
    persianDate.calendar('j').parse('1399-7-1');
    persianDate.subMillisecond();
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/06/31 23:59:59.999')
    persianDate.calendar('g').parse('2020-7-1');
    persianDate.subMillisecond();
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-06-30 23:59:59.999')
});

test('subMillisecond function with parameter and check time', () => {
    persianDate.calendar('j').parse('1399-8-30 00:00');
    persianDate.subMillisecond('3600000');
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/08/29 23:00:00.0')
    persianDate.calendar('g').parse('2020-8-31 00:00');
    persianDate.subMillisecond('3600000');
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-08-30 23:00:00.0')
});

test('subMillisecond function without check time', () => {
    persianDate.calendar('j').parse('1400-1-1');
    persianDate.subMillisecond('1', false);
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/12/30 23:59:59.999')
    persianDate.calendar('g').parse('2021-1-1');
    persianDate.subMillisecond('1', false);
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-12-31 23:59:59.999')
});

test('toString function with jalali calendar', () => {
    persianDate.calendar('j').parse('1400-1-1 15:54:56.856');
    expect(persianDate.toString()).toBe('1400/01/01')
    expect(persianDate.toString('date')).toBe('1400/01/01')
    expect(persianDate.toString('datetime')).toBe('1400/01/01 15:54')
    expect(persianDate.toString('time')).toBe('15:54')
    expect(persianDate.toString('YYYY|YY|y')).toBe('2021|21|2021')
    expect(persianDate.toString('jYYYY|jYY|jy')).toBe('1400|00|1400')
    expect(persianDate.toString('Qo|QO|Q')).toBe('1st|1st|1')
    expect(persianDate.toString('jQo|jQO|jQ')).toBe('اول|اولین|1')
    expect(persianDate.toString('MMMM|MMM|MM|Mo|MO|M')).toBe('March|Mar|03|3rd|3rd|3')
    expect(persianDate.toString('jMMMM|jMMM|jMM|jMo|jMO|jM')).toBe('فروردین|فروردین|01|اول|اولین|1')
    expect(persianDate.toString('DDDD|DDDo|DDDO|DDD|DD|Do|DO|D')).toBe('080|80th|80th|80|21|21st|21st|21')
    expect(persianDate.toString('jDDDD|jDDDo|jDDDO|jDDD|jDD|jDo|jDO|jD')).toBe('001|اول|اولین|1|01|اول|اولین|1')
    expect(persianDate.toString('dddd|ddd|dd|do|dO|d|de')).toBe('Sunday|Sun|Su|1st|1st|0|1')
    expect(persianDate.toString('jdddd|jddd|jdd|jdo|jdO|jd|jde')).toBe('یکشنبه|یکشنبه|ی|دوم|دومین|1|2')
    expect(persianDate.toString('ww|WW|wo|Wo|wO|WO|w|W')).toBe('12|12|12th|12th|12th|12th|12|12')
    expect(persianDate.toString('jww|jWW|jwo|jWo|jwO|jWO|jw|jW')).toBe('01|01|اول|اول|اولین|اولین|1|1')
    expect(persianDate.toString('HH|hh|H|h|kk|k')).toBe('15|03|15|3|15|15')
    expect(persianDate.toString('mm|m')).toBe('54|54')
    expect(persianDate.toString('ss|s')).toBe('56|56')
    expect(persianDate.toString('CCCC|CCC|c')).toBe('856|856|856')
    expect(persianDate.toString('t')).toBe('1616329496856')
    expect(persianDate.toString('aa|a|A|jaa|ja|jA')).toBe('P.M.|pm|PM|ب.ظ|ب ظ|بعد از ظهر')
    expect(persianDate.toString('`the value is:` date')).toBe('the value is: 1400/01/01')
    expect(persianDate.toString('jYYYY `is a good year.`')).toBe('1400 is a good year.')
    expect(persianDate.toString("`it's` h `O'Clock`")).toBe("it's 3 O'Clock")
});

test('toString function with gregorian calendar', () => {
    persianDate.calendar('g').parse('2020-1-1 15:54:56.856');
    expect(persianDate.toString()).toBe('2020-01-01')
    expect(persianDate.toString('date')).toBe('2020-01-01')
    expect(persianDate.toString('datetime')).toBe('2020-01-01 15:54')
    expect(persianDate.toString('time')).toBe('15:54')
    expect(persianDate.toString('YYYY|YY|y')).toBe('2020|20|2020')
    expect(persianDate.toString('jYYYY|jYY|jy')).toBe('1398|98|1398')
    expect(persianDate.toString('Qo|QO|Q')).toBe('1st|1st|1')
    expect(persianDate.toString('jQo|jQO|jQ')).toBe('چهارم|چهارمین|4')
    expect(persianDate.toString('MMMM|MMM|MM|Mo|MO|M')).toBe('January|Jan|01|1st|1st|1')
    expect(persianDate.toString('jMMMM|jMMM|jMM|jMo|jMO|jM')).toBe('دی|دی|10|دهم|دهمین|10')
    expect(persianDate.toString('DDDD|DDDo|DDDO|DDD|DD|Do|DO|D')).toBe('001|1st|1st|1|01|1st|1st|1')
    expect(persianDate.toString('jDDDD|jDDDo|jDDDO|jDDD|jDD|jDo|jDO|jD'))
        .toBe('287|دویست و هشتاد و هفتم|دویست و هشتاد و هفتمین|287|11|یازدهم|یازدهمین|11')
    expect(persianDate.toString('dddd|ddd|dd|do|dO|d|de')).toBe('Wednesday|Wed|We|4th|4th|3|4')
    expect(persianDate.toString('jdddd|jddd|jdd|jdo|jdO|jd|jde')).toBe('چهارشنبه|چهارشنبه|چ|پنجم|پنجمین|4|5')
    // expect(persianDate.toString('ww|WW|wo|Wo|wO|WO|w|W')).toBe('01|01|1st|1st|1st|1st|1|1')
    // expect(persianDate.toString('jww|jWW|jwo|jWo|jwO|jWO|jw|jW')).toBe('42|42|چهل و دوم|چهل و دوم|چهل و دومین|چهل و دومین|42|42')
    expect(persianDate.toString('HH|hh|H|h|kk|k')).toBe('15|03|15|3|15|15')
    expect(persianDate.toString('mm|m')).toBe('54|54')
    expect(persianDate.toString('ss|s')).toBe('56|56')
    expect(persianDate.toString('CCCC|CCC|c')).toBe('856|856|856')
    expect(persianDate.toString('t')).toBe('1577881496856')
    expect(persianDate.toString('aa|a|A|jaa|ja|jA')).toBe('P.M.|pm|PM|ب.ظ|ب ظ|بعد از ظهر')
    expect(persianDate.toString('`the value is:` date')).toBe('the value is: 2020-01-01')
    expect(persianDate.toString('YYYY `is a good year.`')).toBe('2020 is a good year.')
    expect(persianDate.toString("`it's` h `O'Clock`")).toBe("it's 3 O'Clock")
})

test('year function', () => {
    persianDate.calendar('j').parse('1399-7-1');
    persianDate.year('1405');
    expect(persianDate.toString()).toBe('1405/07/01')
    persianDate.calendar('g').parse('2020-7-1');
    persianDate.year('2025');
    expect(persianDate.toString()).toBe('2025-07-01')
});

test('month function', () => {
    persianDate.calendar('j').parse('1399-7-1');
    persianDate.month('5');
    expect(persianDate.toString()).toBe('1399/05/01')
    persianDate.month('13');
    expect(persianDate.toString()).toBe('1400/01/01')
    persianDate.parse('1399-7-1');
    persianDate.month('0');
    expect(persianDate.toString()).toBe('1398/12/01')

    persianDate.calendar('g').parse('2020-7-1');
    persianDate.month('5');
    expect(persianDate.toString()).toBe('2020-05-01')
    persianDate.month('13');
    expect(persianDate.toString()).toBe('2021-01-01')
    persianDate.parse('2020-7-1');
    persianDate.month('0');
    expect(persianDate.toString()).toBe('2019-12-01')
});

test('date function', () => {
    persianDate.calendar('j').parse('1399-7-1');
    persianDate.date('5');
    expect(persianDate.toString()).toBe('1399/07/05')
    persianDate.date('0');
    expect(persianDate.toString()).toBe('1399/06/31')
    persianDate.parse('1399-7-1');
    persianDate.date('32');
    expect(persianDate.toString()).toBe('1399/08/02')

    persianDate.calendar('g').parse('2020-7-1');
    persianDate.date('5');
    expect(persianDate.toString()).toBe('2020-07-05')
    persianDate.date('0');
    expect(persianDate.toString()).toBe('2020-06-30')
    persianDate.parse('2020-7-1');
    persianDate.date('32');
    expect(persianDate.toString()).toBe('2020-08-01')
});

test('quarter function', () => {
    persianDate.calendar('j').parse('1399-7-1');
    persianDate.quarter('2');
    expect(persianDate.toString()).toBe('1399/04/01')
    persianDate.quarter('0');
    expect(persianDate.toString()).toBe('1398/10/01')
    persianDate.parse('1399-7-1');
    persianDate.quarter('5');
    expect(persianDate.toString()).toBe('1400/03/01')

    persianDate.calendar('g').parse('2020-7-1');
    persianDate.quarter('2');
    expect(persianDate.toString()).toBe('2020-04-01')
    persianDate.quarter('0');
    expect(persianDate.toString()).toBe('2019-10-01')
    persianDate.parse('2020-7-1');
    persianDate.quarter('5');
    expect(persianDate.toString()).toBe('2021-03-01')
});

test('week function', () => {
    persianDate.calendar('j').parse('1399-7-1');
    persianDate.week('23');
    expect(persianDate.toString()).toBe('1399/06/04')
    persianDate.week('0');
    expect(persianDate.toString()).toBe('1398/12/27')
    persianDate.parse('1399-7-1');
    persianDate.week('54');
    expect(persianDate.toString()).toBe('1400/01/10')

    persianDate.calendar('g').parse('2020-7-1');
    persianDate.week('23');
    expect(persianDate.toString()).toBe('2020-06-03')
    persianDate.week('0');
    expect(persianDate.toString()).toBe('2019-12-25')
    persianDate.parse('2020-7-1');
    persianDate.week('54');
    expect(persianDate.toString()).toBe('2021-01-06')
});

test('hour function', () => {
    persianDate.calendar('j').parse('1399-7-1');
    persianDate.hour('23');
    expect(persianDate.toString('time')).toBe('23:00')
    persianDate.hour('0');
    expect(persianDate.toString('datetime')).toBe('1399/07/01 00:00')
    persianDate.hour('24');
    expect(persianDate.toString('datetime')).toBe('1399/07/02 00:00')

    persianDate.calendar('g').parse('2020-7-1');
    persianDate.hour('23');
    expect(persianDate.toString('time')).toBe('23:00')
    persianDate.hour('0');
    expect(persianDate.toString('datetime')).toBe('2020-07-01 00:00')
    persianDate.hour('24');
    expect(persianDate.toString('datetime')).toBe('2020-07-02 00:00')
});

test('minute function', () => {
    persianDate.calendar('j').parse('1399-7-1');
    persianDate.minute('59');
    expect(persianDate.toString('time')).toBe('00:59')
    persianDate.minute('0');
    expect(persianDate.toString('time')).toBe('00:00')
    persianDate.minute('60');
    expect(persianDate.toString('time')).toBe('01:00')

    persianDate.calendar('g').parse('2020-7-1');
    persianDate.minute('59');
    expect(persianDate.toString('time')).toBe('00:59')
    persianDate.minute('0');
    expect(persianDate.toString('time')).toBe('00:00')
    persianDate.minute('60');
    expect(persianDate.toString('time')).toBe('01:00')
});

test('second function', () => {
    persianDate.calendar('j').parse('1399-7-1');
    persianDate.second('59');
    expect(persianDate.toString('s')).toBe('59')
    persianDate.second('0');
    expect(persianDate.toString('s')).toBe('0')
    persianDate.second('60');
    expect(persianDate.toString('m:s')).toBe('1:0')

    persianDate.calendar('g').parse('2020-7-1');
    persianDate.second('59');
    expect(persianDate.toString('s')).toBe('59')
    persianDate.second('0');
    expect(persianDate.toString('s')).toBe('0')
    persianDate.second('60');
    expect(persianDate.toString('m:s')).toBe('1:0')
});

test('millisecond function', () => {
    persianDate.calendar('j').parse('1399-7-1');
    persianDate.millisecond('999');
    expect(persianDate.toString('c')).toBe('999')
    persianDate.millisecond('0');
    expect(persianDate.toString('c')).toBe('0')
    persianDate.millisecond('1000');
    expect(persianDate.toString('s:c')).toBe('1:0')

    persianDate.calendar('g').parse('2020-7-1');
    persianDate.millisecond('999');
    expect(persianDate.toString('c')).toBe('999')
    persianDate.millisecond('0');
    expect(persianDate.toString('c')).toBe('0')
    persianDate.millisecond('1000');
    expect(persianDate.toString('s:c')).toBe('1:0')
});

test('timestamp function without parameter', () => {
    persianDate.calendar('j').parse('1399-6-11');
    expect(persianDate.timestamp()).toBe((new Date(2020, 8, 1, 0, 0, 0, 0)).getTime())
    persianDate.calendar('g').parse('2020-6-11');
    expect(persianDate.timestamp()).toBe((new Date(2020, 5, 11, 0, 0, 0, 0)).getTime())
});

test('timestamp function with parameter', () => {
    persianDate.calendar('j').timestamp((new Date(2020, 7, 22, 0, 0, 0, 0).getTime()));
    expect(persianDate.toString('datetime')).toBe('1399/06/01 00:00')
    persianDate.calendar('g').timestamp((new Date(2020, 6, 22, 0, 0, 0, 0).getTime()));
    expect(persianDate.toString('datetime')).toBe('2020-07-22 00:00')
});

////////////////////--- Version 1.1.0 ---////////////////////

test('clone function', () => {
    let clone = persianDate.calendar('j').parse('1399/6/1 12:20:30.235').clone();
    expect(clone.toString('datetime:ss.c')).toBe('1399/06/01 12:20:30.235')
    clone.addYear();
    expect(clone.year()).toBe(persianDate.year() + 1)

    clone = persianDate.calendar('g').parse('2020-6-1 12:20:30.235').clone();
    expect(clone.toString('datetime:ss.c')).toBe('2020-06-01 12:20:30.235')
    clone.addYear();
    expect(clone.year()).toBe(persianDate.year() + 1)
});

test('isSame function', () => {
    persianDate.calendar('j').parse('1399/6/1 12:20:30.235');
    expect(persianDate.isSame(1399, '6', 1, '12', 20, 30, 235)).toBe(true)
    expect(persianDate.isSame([1399, 7])).toBe(false)
    expect(persianDate.isSame(new PersianDate())).toBe(false)
    expect(persianDate.isSame(new Date(2020, 7, 22, 12, 20, 30, 235))).toBe(true)
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
    expect(persianDate.isSame()).toBe(false)
    persianDate.calendar('g').parse('2020-6-1 12:20:30.235');
    expect(persianDate.isSame(2020, '6', 1, '12', 20, 30, 235)).toBe(true)
    expect(persianDate.isSame([2020, 7])).toBe(false)
    expect(persianDate.isSame(new PersianDate())).toBe(false)
    expect(persianDate.isSame(new Date(2020, 5, 1, 12, 20, 30, 235))).toBe(true)
    expect(persianDate.isSame({
        year: 2020,
        month: 6,
        date: 24,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })).toBe(false)
    expect(persianDate.isSame('2020-6-1')).toBe(true)
    expect(persianDate.isSame('2020-13-1')).toBe(false)
    expect(persianDate.isSame()).toBe(false)
});

////////////////////--- Version 1.2.0 ---////////////////////

test('isBefore function', () => {
    persianDate.calendar('j').parse('1399/6/1 12:20:30.235');
    expect(persianDate.isBefore(1399, '6', 1, '12', 20, 30, 235)).toBe(false)
    expect(persianDate.isBefore([1399, 7])).toBe(true)
    expect(persianDate.isBefore(new PersianDate())).toBe(true)
    expect(persianDate.isBefore(new Date(2020, 7, 22, 12, 20, 30, 234))).toBe(false)
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

    persianDate.calendar('g').parse('2020-6-1 12:20:30.235');
    expect(persianDate.isBefore(2020, '6', 1, '12', 20, 30, 235)).toBe(false)
    expect(persianDate.isBefore([2020, 7])).toBe(true)
    expect(persianDate.isBefore(new PersianDate())).toBe(true)
    expect(persianDate.isBefore(new Date(2020, 5, 1, 12, 20, 30, 234))).toBe(false)
    expect(persianDate.isBefore({
        year: 2020,
        month: 6,
        date: 24,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })).toBe(true)
    expect(persianDate.isBefore('2020-6-2')).toBe(true)
    expect(persianDate.isBefore('2020-13-1')).toBe(false)
    expect(persianDate.isBefore()).toBe(true)
});

test('isAfter function', () => {
    persianDate.calendar('j').parse('1399/6/1 12:20:30.235');
    expect(persianDate.isAfter(1399, '6', 1, '12', 20, 30, 235)).toBe(false)
    expect(persianDate.isAfter([1399, 5])).toBe(true)
    expect(persianDate.isAfter(new PersianDate())).toBe(false)
    expect(persianDate.isAfter(new Date(2020, 7, 22, 12, 20, 30, 234))).toBe(true)
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

    persianDate.calendar('g').parse('2020-6-1 12:20:30.235');
    expect(persianDate.isAfter(2020, '6', 1, '12', 20, 30, 235)).toBe(false)
    expect(persianDate.isAfter([2020, 5])).toBe(true)
    expect(persianDate.isAfter(new PersianDate())).toBe(false)
    expect(persianDate.isAfter(new Date(2020, 5, 1, 12, 20, 30, 234))).toBe(true)
    expect(persianDate.isAfter({
        year: 2020,
        month: 6,
        date: 24,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })).toBe(false)
    expect(persianDate.isAfter('2020-5-1')).toBe(true)
    expect(persianDate.isAfter('2020-13-1')).toBe(false)
    expect(persianDate.isAfter()).toBe(false)
});

////////////////////--- Version 1.3.0 ---////////////////////

test('toObject function without parameter', () => {
    let object = persianDate.calendar('j').parse('1400/1/1 12:54:21:123').toObject();
    expect(object.year).toBe(persianDate.year())
    expect(object.month).toBe(persianDate.month())
    expect(object.date).toBe(persianDate.date())
    expect(object.hour).toBe(persianDate.hour())
    expect(object.minute).toBe(persianDate.minute())
    expect(object.second).toBe(persianDate.second())
    expect(object.millisecond).toBe(persianDate.millisecond())

    object = persianDate.calendar('g').parse('2020-1-1  12:54:21:123').toObject();
    expect(object.year).toBe(persianDate.year())
    expect(object.month).toBe(persianDate.month())
    expect(object.date).toBe(persianDate.date())
    expect(object.hour).toBe(persianDate.hour())
    expect(object.minute).toBe(persianDate.minute())
    expect(object.second).toBe(persianDate.second())
    expect(object.millisecond).toBe(persianDate.millisecond())
});

test('toObject function with string parameter', () => {
    let object = persianDate.calendar('j').parse('1400/1/1 12:54:21:123').toObject('jYY-jMM-D');
    expect(object.year).toBe(persianDate.year('jYY'))
    expect(object.month).toBe(persianDate.month('jMM'))
    expect(object.date).toBe(persianDate.date('D'))
    expect(object.hour).toBe(persianDate.hour())
    expect(object.minute).toBe(persianDate.minute())
    expect(object.second).toBe(persianDate.second())
    expect(object.millisecond).toBe(persianDate.millisecond())

    object = persianDate.calendar('g').parse('2020-1-1 12:54:21:123').toObject('YY-MM-jD');
    expect(object.year).toBe(persianDate.year('YY'))
    expect(object.month).toBe(persianDate.month('MM'))
    expect(object.date).toBe(persianDate.date('jD'))
    expect(object.hour).toBe(persianDate.hour())
    expect(object.minute).toBe(persianDate.minute())
    expect(object.second).toBe(persianDate.second())
    expect(object.millisecond).toBe(persianDate.millisecond())
});

test('toObject function with array parameter', () => {
    let object = persianDate.calendar('j').parse('1400/1/1 12:54:21:123').toObject(['jYY', 'jMM', 'DD', 'kk', 'm', 'ss', 'C']);
    expect(object.year).toBe(persianDate.year('jYY'))
    expect(object.month).toBe(persianDate.month('jMM'))
    expect(object.date).toBe(persianDate.date('DD'))
    expect(object.hour).toBe(persianDate.hour('kk'))
    expect(object.minute).toBe(persianDate.minute('m'))
    expect(object.second).toBe(persianDate.second('ss'))
    expect(object.millisecond).toBe(persianDate.millisecond('C'))

    object = persianDate.calendar('g').parse('2020-1-1 12:54:21:123').toObject(['YY', 'MM', 'jDD', 'kk', 'm', 'ss', 'C']);
    expect(object.year).toBe(persianDate.year('YY'))
    expect(object.month).toBe(persianDate.month('MM'))
    expect(object.date).toBe(persianDate.date('jDD'))
    expect(object.hour).toBe(persianDate.hour('kk'))
    expect(object.minute).toBe(persianDate.minute('m'))
    expect(object.second).toBe(persianDate.second('ss'))
    expect(object.millisecond).toBe(persianDate.millisecond('C'))
});

test('toObject function with object parameter', () => {
    let object = persianDate.calendar('j').parse('1400/1/1').toObject({
        year: 'jYY',
        M: 'jMM',
        date: 'DD',
        hour: 'kk',
        minutes: 'm',
        s: 'ss',
        ms: 'C'
    });
    expect(object.year).toBe(persianDate.year('jYY'))
    expect(object.month).toBe(persianDate.month('jMM'))
    expect(object.date).toBe(persianDate.date('DD'))
    expect(object.hour).toBe(persianDate.hour('kk'))
    expect(object.minute).toBe(persianDate.minute('m'))
    expect(object.second).toBe(persianDate.second('ss'))
    expect(object.millisecond).toBe(persianDate.millisecond('C'))

    object = persianDate.calendar('g').parse('2020-1-1').toObject({
        year: 'YY',
        M: 'MM',
        date: 'jDD',
        hour: 'kk',
        minutes: 'm',
        s: 'ss',
        ms: 'C'
    });
    expect(object.year).toBe(persianDate.year('YY'))
    expect(object.month).toBe(persianDate.month('MM'))
    expect(object.date).toBe(persianDate.date('jDD'))
    expect(object.hour).toBe(persianDate.hour('kk'))
    expect(object.minute).toBe(persianDate.minute('m'))
    expect(object.second).toBe(persianDate.second('ss'))
    expect(object.millisecond).toBe(persianDate.millisecond('C'))
});

test('toObject function with numeric parameter', () => {
    let object = persianDate.calendar('j').parse('1400/1/1').toObject('jYY', 'jMM', 'DD', 'kk', 'm', 'ss', 'C');
    expect(object.year).toBe(persianDate.year('jYY'))
    expect(object.month).toBe(persianDate.month('jMM'))
    expect(object.date).toBe(persianDate.date('DD'))
    expect(object.hour).toBe(persianDate.hour('kk'))
    expect(object.minute).toBe(persianDate.minute('m'))
    expect(object.second).toBe(persianDate.second('ss'))
    expect(object.millisecond).toBe(persianDate.millisecond('C'))

    object = persianDate.calendar('g').parse('2020-1-1').toObject('YY', 'MM', 'jDD', 'kk', 'm', 'ss', 'C');
    expect(object.year).toBe(persianDate.year('YY'))
    expect(object.month).toBe(persianDate.month('MM'))
    expect(object.date).toBe(persianDate.date('jDD'))
    expect(object.hour).toBe(persianDate.hour('kk'))
    expect(object.minute).toBe(persianDate.minute('m'))
    expect(object.second).toBe(persianDate.second('ss'))
    expect(object.millisecond).toBe(persianDate.millisecond('C'))
});

test('isDate function', () => {
    persianDate.calendar('j')
    expect(persianDate.isDate(new Date)).toBe(true)
    expect(persianDate.isDate(new PersianDate)).toBe(false)
    expect(persianDate.isDate('2020-1-1')).toBe(false)
    persianDate.calendar('g')
    expect(persianDate.isDate(new Date)).toBe(true)
    expect(persianDate.isDate(new PersianDate)).toBe(false)
    expect(persianDate.isDate('2020-1-1')).toBe(false)
})

test('isPersianDate function', () => {
    persianDate.calendar('j')
    expect(persianDate.isPersianDate(new Date)).toBe(false)
    expect(persianDate.isPersianDate(new PersianDate)).toBe(true)
    expect(persianDate.isPersianDate(new PersianDate().calendar('g'))).toBe(true)
    expect(persianDate.isPersianDate('2020-1-1')).toBe(false)
    persianDate.calendar('g')
    expect(persianDate.isPersianDate(new Date)).toBe(false)
    expect(persianDate.isPersianDate(new PersianDate)).toBe(true)
    expect(persianDate.isPersianDate(new PersianDate().calendar('g'))).toBe(true)
    expect(persianDate.isPersianDate('2020-1-1')).toBe(false)
})

test('isSameOrBefore function', () => {
    persianDate.calendar('j').parse('1399/6/1 12:20:30.235');
    expect(persianDate.isSameOrBefore(1399, '6', 1, '12', 20, 30, 235)).toBe(true)
    expect(persianDate.isSameOrBefore([1399, 7])).toBe(true)
    expect(persianDate.isSameOrBefore(new PersianDate())).toBe(true)
    expect(persianDate.isSameOrBefore(new Date(2020, 7, 22, 12, 20, 30, 235))).toBe(true)
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

    persianDate.calendar('g').parse('2020-6-1 12:20:30.235');
    expect(persianDate.isSameOrBefore(2020, '6', 1, '12', 20, 30, 235)).toBe(true)
    expect(persianDate.isSameOrBefore([2020, 7])).toBe(true)
    expect(persianDate.isSameOrBefore(new PersianDate())).toBe(true)
    expect(persianDate.isSameOrBefore(new Date(2020, 5, 1, 12, 20, 30, 235))).toBe(true)
    expect(persianDate.isSameOrBefore({
        year: 2020,
        month: 6,
        date: 24,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })).toBe(true)
    expect(persianDate.isSameOrBefore('2020-6-2')).toBe(true)
    expect(persianDate.isSameOrBefore('2020-13-1')).toBe(false)
    expect(persianDate.isSameOrBefore()).toBe(true)
});

test('isSameOrAfter function', () => {
    persianDate.calendar('j').parse('1399/6/1 12:20:30.235');
    expect(persianDate.isSameOrAfter(1399, '6', 1, '12', 20, 30, 235)).toBe(true)
    expect(persianDate.isSameOrAfter([1399, 5])).toBe(true)
    expect(persianDate.isSameOrAfter(new PersianDate())).toBe(false)
    expect(persianDate.isSameOrBefore(new Date(2020, 7, 22, 12, 20, 30, 235))).toBe(true)
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

    persianDate.calendar('g').parse('2020-6-1 12:20:30.235');
    expect(persianDate.isSameOrAfter(2020, '6', 1, '12', 20, 30, 235)).toBe(true)
    expect(persianDate.isSameOrAfter([2020, 5])).toBe(true)
    expect(persianDate.isSameOrAfter(new PersianDate())).toBe(false)
    expect(persianDate.isSameOrBefore(new Date(2020, 5, 1, 12, 20, 30, 235))).toBe(true)
    expect(persianDate.isSameOrAfter({
        year: 2020,
        month: 6,
        date: 24,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })).toBe(false)
    expect(persianDate.isSameOrAfter('2020-5-1')).toBe(true)
    expect(persianDate.isSameOrAfter('2020-13-1')).toBe(false)
    expect(persianDate.isSameOrAfter()).toBe(false)
});

test('isBetween function', () => {
    persianDate.calendar('j').parse('1399/6/1 12:20:30.235');
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
    expect(persianDate.isBetween('1399/5', new Date())).toBe(true)
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

    persianDate.calendar('g').parse('2020-6-1 12:20:30.235');
    expect(persianDate.isBetween([2020, '5', 1, '12', 20, 30, 235], '2020-7-1 12:20:30.235')).toBe(true)
    expect(persianDate.isBetween({
        year: 2020,
        month: 5,
        date: 31,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    }, new PersianDate())).toBe(true)
    expect(persianDate.isBetween('2020-5', new Date())).toBe(true)
    expect(persianDate.isBetween()).toBe(false)
    expect(persianDate.isBetween('2020-7-1', '2020-13-1')).toBe(false)
    expect(persianDate.isBetween('2020-7-32', '2020-12-1')).toBe(false)
    expect(persianDate.isBetween('2020-7', '2020-5')).toBe(false)
    expect(persianDate.isBetween('2020', '2021')).toBe(false)
    expect(persianDate.isBetween('2020', '2021', '[)')).toBe(true)
    expect(persianDate.isBetween('2020-5', '2020-6', '[)')).toBe(false)
    expect(persianDate.isBetween('2020-5', '2020-6', '(]')).toBe(true)
    expect(persianDate.isBetween('2020-5-31', '2020-6-2')).toBe(true)
    expect(persianDate.isBetween('2020-6-1', '2020-6-1')).toBe(false)
    expect(persianDate.isBetween('2020-6-1', '2020-6-1', '[]')).toBe(true)
});

////////////////////--- Version 1.4.0 ---////////////////////

test('min function', () => {
    let date = new Date();

    persianDate.calendar('j')
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
    expect(persianDate.min('1399/5/1', date)).toBe('1399/5/1')
    expect(persianDate.min()).toBe(false)
    expect(persianDate.min('1399/7/1', '1399/13/1')).toBe(false)
    expect(persianDate.min('1399/7/1', '1399/12/1')).toBe('1399/7/1')
    expect(persianDate.min('1399/10/21', '1399/10/21')).toBe('1399/10/21')
    expect(persianDate.min('1399/7/32', '1399/12/1')).toBe(false)
    expect(persianDate.min('1399/7', '1399/5')).toBe('1399/5')
    expect(persianDate.min('1399', '1400')).toBe('1399')

    persianDate.calendar('g')
    expect(persianDate.min([2020, '5', 1, '12', 20, 30, 235], '2020-7-1 12:20:30.235')).toEqual([2020, '5', 1, '12', 20, 30, 235])
    expect(persianDate.min({
        year: 2020,
        month: 5,
        date: 31,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    }, new PersianDate())).toEqual({
        year: 2020,
        month: 5,
        date: 31,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    })
    expect(persianDate.min('2020-5-1', date)).toBe('2020-5-1')
    expect(persianDate.min()).toBe(false)
    expect(persianDate.min('2020-7-1', '2020-13-1')).toBe(false)
    expect(persianDate.min('2020-7-1', '2020-12-1')).toBe('2020-7-1')
    expect(persianDate.min('2020-10-21', '2020-10-21')).toBe('2020-10-21')
    expect(persianDate.min('2020-7-32', '2020-12-1')).toBe(false)
    expect(persianDate.min('2020-7', '2020-5')).toBe('2020-5')
    expect(persianDate.min('2020', '2021')).toBe('2020')
});

test('max function', () => {
    let date = new Date();

    persianDate.calendar('j')
    expect(persianDate.max([1399, '5', 1, '12', 20, 30, 235], '1399/7/1 12:20:30.235')).toBe('1399/7/1 12:20:30.235')
    let p = new PersianDate();
    expect(persianDate.max({
        year: 1399,
        month: 5,
        date: 31,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    }, p)).toEqual(p)
    expect(persianDate.max('1399/5/1', date)).toBe(date)
    expect(persianDate.max()).toBe(false)
    expect(persianDate.max('1399/7/1', '1399/13/1')).toBe(false)
    expect(persianDate.max('1399/7/1', '1399/12/1')).toBe('1399/12/1')
    expect(persianDate.min('1399/10/21', '1399/10/21')).toBe('1399/10/21')
    expect(persianDate.max('1399/7/32', '1399/12/1')).toBe(false)
    expect(persianDate.max('1399/7', '1399/5')).toBe('1399/7')
    expect(persianDate.max('1399', '1400')).toBe('1400')

    persianDate.calendar('g')
    expect(persianDate.max([2020, '5', 1, '12', 20, 30, 235], '2020-7-1 12:20:30.235')).toBe('2020-7-1 12:20:30.235')
    p = new PersianDate();
    expect(persianDate.max({
        year: 2020,
        month: 5,
        date: 31,
        hour: 11,
        minute: 2,
        second: 55,
        millisecond: 112
    }, p)).toEqual(p)
    expect(persianDate.max('2020-5-1', date)).toBe(date)
    expect(persianDate.max()).toBe(false)
    expect(persianDate.max('2020-7-1', '2020-13-1')).toBe(false)
    expect(persianDate.max('2020-7-1', '2020-12-1')).toBe('2020-12-1')
    expect(persianDate.min('2020-10-21', '2020-10-21')).toBe('2020-10-21')
    expect(persianDate.max('2020-7-32', '2020-12-1')).toBe(false)
    expect(persianDate.max('2020-7', '2020-5')).toBe('2020-7')
    expect(persianDate.max('2020', '2021')).toBe('2021')
});

test('diff function', () => {
    persianDate.calendar('j').parse('1399/6/1 12:20:30.235');
    expect(persianDate.diff([1399, '5', 1, '12', 20, 30, 235], 'year')).toBe(0)
    expect(persianDate.diff([1399, '5', 1, '12', 20, 30, 235], 'month')).toBe(1)
    expect(persianDate.diff(new Date(2020, 6, 22, 12, 20, 30, 235), 'month')).toBe(1)
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
    expect(persianDate.diff('1398/2/1', 'month', true)).toBe(-2)
    persianDate.parse('1400');
    expect(persianDate.diff('1399/12', 'date')).toBe(30)
    expect(persianDate.clone().parse('1400/2').diff('1400/1', 'month')).toBe(1)

    persianDate.calendar('g').parse('2020-6-1 12:20:30.235');
    expect(persianDate.diff([2020, '5', 1, '12', 20, 30, 235], 'year')).toBe(0)
    expect(persianDate.diff([2020, '5', 1, '12', 20, 30, 235], 'month')).toBe(1)
    expect(persianDate.diff(new Date(2020, 4, 1, 12, 20, 30, 235), 'month')).toBe(1)
    expect(persianDate.diff({
        year: 2020,
        month: 5,
        date: 1,
        hour: 12,
        minute: 20,
        second: 30,
        millisecond: 235
    }, 'date')).toBe(31)
    expect(persianDate.diff('2020-5-1 12:20:30.235', 'hour')).toBe(31 * 24)
    expect(persianDate.diff(persianDate.clone().month(5), 'minute')).toBe(31 * 24 * 60)
    expect(persianDate.diff('2020-5-1 12:20:30.235', 'second')).toBe(31 * 24 * 3600)
    expect(persianDate.diff('2020-5-1 12:20:30.235', 'millisecond')).toBe(31 * 24 * 3600000)
    expect(persianDate.diff('2020-5-1 12:20:30.235')).toBe(31 * 24 * 3600000)
    expect(persianDate.diff(null, 'date')).toBe(persianDate.diff(persianDate.clone().now(), 'date'))
    persianDate.parse('2019-1-10');
    expect(persianDate.diff('2019-6-10', 'month')).toBe(-5)
    expect(persianDate.diff('2019-2-1', 'month', true)).toBe(-2)
    persianDate.parse('2021');
    expect(persianDate.diff('2020-12', 'date')).toBe(31)
    expect(persianDate.clone().parse('2021-2').diff('2021-1', 'month')).toBe(1)
});

////////////////////--- Version 1.5.0 ---////////////////////

test('toArray function without parameter', () => {
    let array = persianDate.calendar('j').parse('1400/1/1').toArray();
    expect(array[0]).toBe(persianDate.year())
    expect(array[1]).toBe(persianDate.month())
    expect(array[2]).toBe(persianDate.date())
    expect(array[3]).toBe(persianDate.hour())
    expect(array[4]).toBe(persianDate.minute())
    expect(array[5]).toBe(persianDate.second())
    expect(array[6]).toBe(persianDate.millisecond())

    array = persianDate.calendar('g').parse('2020-1-1').toArray();
    expect(array[0]).toBe(persianDate.year())
    expect(array[1]).toBe(persianDate.month())
    expect(array[2]).toBe(persianDate.date())
    expect(array[3]).toBe(persianDate.hour())
    expect(array[4]).toBe(persianDate.minute())
    expect(array[5]).toBe(persianDate.second())
    expect(array[6]).toBe(persianDate.millisecond())
});

test('toArray function with string parameter', () => {
    let array = persianDate.calendar('j').parse('1400/1/1').toArray('jYY-jMM-D');
    expect(array[0]).toBe(persianDate.year('jYY'))
    expect(array[1]).toBe(persianDate.month('jMM'))
    expect(array[2]).toBe(persianDate.date('D'))
    expect(array[3]).toBe(persianDate.hour())
    expect(array[4]).toBe(persianDate.minute())
    expect(array[5]).toBe(persianDate.second())
    expect(array[6]).toBe(persianDate.millisecond())

    array = persianDate.calendar('g').parse('2020-1-1').toArray('YY-MM-jD');
    expect(array[0]).toBe(persianDate.year('YY'))
    expect(array[1]).toBe(persianDate.month('MM'))
    expect(array[2]).toBe(persianDate.date('jD'))
    expect(array[3]).toBe(persianDate.hour())
    expect(array[4]).toBe(persianDate.minute())
    expect(array[5]).toBe(persianDate.second())
    expect(array[6]).toBe(persianDate.millisecond())
});

test('toArray function with array parameter', () => {
    let array = persianDate.calendar('j').parse('1400/1/1').toArray(['jYY', 'jMM', 'DD', 'kk', 'm', 'ss', 'C']);
    expect(array[0]).toBe(persianDate.year('jYY'))
    expect(array[1]).toBe(persianDate.month('jMM'))
    expect(array[2]).toBe(persianDate.date('DD'))
    expect(array[3]).toBe(persianDate.hour('kk'))
    expect(array[4]).toBe(persianDate.minute('m'))
    expect(array[5]).toBe(persianDate.second('ss'))
    expect(array[6]).toBe(persianDate.millisecond('C'))

    array = persianDate.calendar('g').parse('2020-1-1').toArray(['YY', 'MM', 'jDD', 'kk', 'm', 'ss', 'C']);
    expect(array[0]).toBe(persianDate.year('YY'))
    expect(array[1]).toBe(persianDate.month('MM'))
    expect(array[2]).toBe(persianDate.date('jDD'))
    expect(array[3]).toBe(persianDate.hour('kk'))
    expect(array[4]).toBe(persianDate.minute('m'))
    expect(array[5]).toBe(persianDate.second('ss'))
    expect(array[6]).toBe(persianDate.millisecond('C'))
});

test('toArray function with object parameter', () => {
    let array = persianDate.calendar('j').parse('1400/1/1').toArray({
        year: 'jYY',
        M: 'jMM',
        date: 'DD',
        hour: 'kk',
        minutes: 'm',
        s: 'ss',
        ms: 'C'
    });
    expect(array[0]).toBe(persianDate.year('jYY'))
    expect(array[1]).toBe(persianDate.month('jMM'))
    expect(array[2]).toBe(persianDate.date('DD'))
    expect(array[3]).toBe(persianDate.hour('kk'))
    expect(array[4]).toBe(persianDate.minute('m'))
    expect(array[5]).toBe(persianDate.second('ss'))
    expect(array[6]).toBe(persianDate.millisecond('C'))

    array = persianDate.calendar('g').parse('2020-1-1').toArray({
        year: 'YY',
        M: 'MM',
        date: 'jDD',
        hour: 'kk',
        minutes: 'm',
        s: 'ss',
        ms: 'C'
    });
    expect(array[0]).toBe(persianDate.year('YY'))
    expect(array[1]).toBe(persianDate.month('MM'))
    expect(array[2]).toBe(persianDate.date('jDD'))
    expect(array[3]).toBe(persianDate.hour('kk'))
    expect(array[4]).toBe(persianDate.minute('m'))
    expect(array[5]).toBe(persianDate.second('ss'))
    expect(array[6]).toBe(persianDate.millisecond('C'))
});

test('toArray function with numeric parameter', () => {
    let array = persianDate.calendar('j').parse('1400/1/1').toArray('jYY', 'jMM', 'DD', 'kk', 'm', 'ss', 'C');
    expect(array[0]).toBe(persianDate.year('jYY'))
    expect(array[1]).toBe(persianDate.month('jMM'))
    expect(array[2]).toBe(persianDate.date('DD'))
    expect(array[3]).toBe(persianDate.hour('kk'))
    expect(array[4]).toBe(persianDate.minute('m'))
    expect(array[5]).toBe(persianDate.second('ss'))
    expect(array[6]).toBe(persianDate.millisecond('C'))

    array = persianDate.calendar('g').parse('2020-1-1').toArray('YY', 'MM', 'jDD', 'kk', 'm', 'ss', 'C');
    expect(array[0]).toBe(persianDate.year('YY'))
    expect(array[1]).toBe(persianDate.month('MM'))
    expect(array[2]).toBe(persianDate.date('jDD'))
    expect(array[3]).toBe(persianDate.hour('kk'))
    expect(array[4]).toBe(persianDate.minute('m'))
    expect(array[5]).toBe(persianDate.second('ss'))
    expect(array[6]).toBe(persianDate.millisecond('C'))
});

////////////////////--- Version 2.0.0 ---////////////////////

test('diffForHumans function', () => {
    persianDate.calendar('j').parse('1400/1/1');
    expect(persianDate.diffForHumans('1350/1/1')).toBe('50 سال آینده')
    expect(persianDate.diffForHumans('1450/1/1')).toBe('50 سال پیش')
    expect(persianDate.diffForHumans('1399/1/1')).toBe('1 سال آینده')
    expect(persianDate.diffForHumans('1401/1/1')).toBe('1 سال پیش')
    expect(persianDate.diffForHumans('1399/5/1')).toBe('8 ماه آینده')
    expect(persianDate.diffForHumans('1400/5/1')).toBe('4 ماه پیش')
    expect(persianDate.diffForHumans('1399/12/15')).toBe('16 روز آینده')
    expect(persianDate.diffForHumans('1400/1/15')).toBe('14 روز پیش')
    expect(persianDate.diffForHumans('1399/12/30 20:00')).toBe('4 ساعت آینده')
    expect(persianDate.diffForHumans('1400/1/1 4:00')).toBe('4 ساعت پیش')
    expect(persianDate.diffForHumans('1399/12/30 23:20')).toBe('40 دقیقه آینده')
    expect(persianDate.diffForHumans('1400/1/1 00:40')).toBe('40 دقیقه پیش')
    expect(persianDate.diffForHumans('1399/12/30 23:59:10')).toBe('1 دقیقه آینده')
    expect(persianDate.diffForHumans('1400/1/1 00:00:50')).toBe('1 دقیقه پیش')
    expect(persianDate.diffForHumans('1399/12/30 23:59:30')).toBe('لحظاتی آینده')
    expect(persianDate.diffForHumans('1400/1/1 00:00:30')).toBe('لحظاتی پیش')
    expect(persianDate.diffForHumans('1400/1/1')).toBe('هم اکنون')
    expect(persianDate.diffForHumans('1350/1/1', false)).toBe('50 سال')
    expect(persianDate.diffForHumans('1450/1/1', false)).toBe('50 سال')

    persianDate.calendar('g').parse('2020/1/1');
    expect(persianDate.diffForHumans('1970/1/1')).toBe('50 سال آینده')
    expect(persianDate.diffForHumans('2070/1/1')).toBe('50 سال پیش')
    expect(persianDate.diffForHumans('2019/1/1')).toBe('1 سال آینده')
    expect(persianDate.diffForHumans('2021/1/1')).toBe('1 سال پیش')
    expect(persianDate.diffForHumans('2019/5/1')).toBe('8 ماه آینده')
    expect(persianDate.diffForHumans('2020/5/1')).toBe('4 ماه پیش')
    expect(persianDate.diffForHumans('2019/12/15')).toBe('17 روز آینده')
    expect(persianDate.diffForHumans('2020/1/15')).toBe('14 روز پیش')
    expect(persianDate.diffForHumans('2019/12/31 20:00')).toBe('4 ساعت آینده')
    expect(persianDate.diffForHumans('2020/1/1 4:00')).toBe('4 ساعت پیش')
    expect(persianDate.diffForHumans('2019/12/31 23:20')).toBe('40 دقیقه آینده')
    expect(persianDate.diffForHumans('2020/1/1 00:40')).toBe('40 دقیقه پیش')
    expect(persianDate.diffForHumans('2019/12/31 23:59:10')).toBe('1 دقیقه آینده')
    expect(persianDate.diffForHumans('2020/1/1 00:00:50')).toBe('1 دقیقه پیش')
    expect(persianDate.diffForHumans('2019/12/31 23:59:30')).toBe('لحظاتی آینده')
    expect(persianDate.diffForHumans('2020/1/1 00:00:30')).toBe('لحظاتی پیش')
    expect(persianDate.diffForHumans('2020/1/1')).toBe('هم اکنون')
    expect(persianDate.diffForHumans('1970/1/1', false)).toBe('50 سال')
    expect(persianDate.diffForHumans('2070/1/1', false)).toBe('50 سال')
});

test('fromJalali function', () => {
    persianDate.calendar('j').fromJalali('1399', '6', '6', '14', '45');
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/06/06 14:45:00.0');
    persianDate.fromJalali('1400/1');
    expect(persianDate.toString('datetime:ss.c')).toBe('1400/01/01 00:00:00.0');
    persianDate.fromJalali([1400, 1, 5]);
    expect(persianDate.toString('datetime:ss.c')).toBe('1400/01/05 00:00:00.0');
    persianDate.fromJalali({ year: 1399, month: 10, date: 21 });
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/10/21 00:00:00.0');
    let p = new PersianDate()
    persianDate.fromJalali(p);
    expect(persianDate.toString('datetime:ss.c')).toBe(p.toString('datetime:ss.c'));
    expect(persianDate.fromJalali().toString('datetime')).toEqual(persianDate.clone().now().toString('datetime'));

    persianDate.calendar('g').fromJalali('1399', '8', '1', '14', '45');
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-10-22 14:45:00.0');
    persianDate.fromJalali('1400/1');
    expect(persianDate.toString('datetime:ss.c')).toBe('2021-03-21 00:00:00.0');
    persianDate.fromJalali([1400, 1, 5]);
    expect(persianDate.toString('datetime:ss.c')).toBe('2021-03-25 00:00:00.0');
    persianDate.fromJalali({ year: 1399, month: 8, date: 1 });
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-10-22 00:00:00.0');
    p = new PersianDate()
    persianDate.fromJalali(p);
    expect(persianDate.toString('datetime:ss.c')).toBe(p.calendar('g').toString('datetime:ss.c'));
    expect(persianDate.fromJalali().toString('datetime')).toEqual(p.calendar('g').now().toString('datetime'));
});

test('fromGregorian function', () => {
    let date = new Date(2020, 6, 27);
    let p = new PersianDate().calendar('g')
    persianDate.calendar('j').fromGregorian('2020', '7', '27', '11', '5', '8', '452');
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/05/06 11:05:08.452');
    persianDate.fromGregorian('2020-8-27');
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/06/06 00:00:00.0');
    persianDate.fromGregorian(date);
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/05/06 00:00:00.0');
    persianDate.fromGregorian(['2020', '7', '27', '11', '5', '8', '452']);
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/05/06 11:05:08.452');
    persianDate.fromGregorian({ year: '2020', M: '7', date: '27', hour: '11', minutes: '5', s: '8', ms: '452' });
    expect(persianDate.toString('datetime:ss.c')).toBe('1399/05/06 11:05:08.452');
    persianDate.fromGregorian(p);
    expect(persianDate.toString('datetime:ss.c')).toBe(p.calendar('j').toString('datetime:ss.c'));
    expect(persianDate.fromGregorian()).toEqual(persianDate.clone().now())

    persianDate.calendar('g').fromGregorian('2021', '5', 8);
    expect(persianDate.toString('datetime:ss.c')).toBe('2021-05-08 00:00:00.0');
    persianDate.fromGregorian('2020-8-27');
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-08-27 00:00:00.0');
    persianDate.fromGregorian(date);
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-07-27 00:00:00.0');
    persianDate.fromGregorian(['2020', '7', '27', '11', '5', '8', '452']);
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-07-27 11:05:08.452');
    persianDate.fromGregorian({ year: '2020', M: '7', date: '27', hour: '11', minutes: '5', s: '8', ms: '452' });
    expect(persianDate.toString('datetime:ss.c')).toBe('2020-07-27 11:05:08.452');
    persianDate.fromGregorian(p.calendar('g'));
    expect(persianDate.toString('datetime:ss.c')).toBe(p.toString('datetime:ss.c'));
    expect(persianDate.fromGregorian()).toEqual(persianDate.clone().now())
});

test('calendar function', () => {
    persianDate.calendar('j').parse('1400');
    expect(persianDate.calendar('j').toString()).toBe('1400/01/01');
    expect(persianDate.calendar('g').toString()).toBe('2021-03-21');
    expect(persianDate.calendar()).toBe('gregorian');
    persianDate.calendar('g').parse('2020');
    expect(persianDate.calendar('g').toString()).toBe('2020-01-01');
    expect(persianDate.calendar('j').toString()).toBe('1398/10/11');
    expect(persianDate.calendar()).toBe('jalali');
});

test('getWeeksInYear function', () => {
    expect(persianDate.calendar('j').parse('1399').getWeeksInYear()).toBe(52);
    expect(persianDate.getWeeksInYear(1400)).toBe(52);
    expect(persianDate.calendar('g').parse('2020').getWeeksInYear()).toBe(53);
    expect(persianDate.getWeeksInYear(2021)).toBe(52);
});

test('toDate function', () => {
    persianDate.calendar('j').parse('1400');
    expect(persianDate.toDate().toString()).toBe(new Date(2021, 2, 21).toString());
    persianDate.calendar('g').parse('2020');
    expect(persianDate.toDate().toString()).toBe(new Date(2020, 0, 1, 0, 0, 0, 0).toString());
});