const { groupMessagesByDay } = require('.');

const messages = [
  { id: 1, date: '2020-04-29T07:17:43.489Z', content: 'Hello' },
  { id: 2, date: '2020-04-29T10:17:43.489Z', content: 'Bonjour' },
  { id: 3, date: '2020-04-30T11:17:43.489Z', content: 'Buongiorno' },
  { id: 4, date: '2020-04-30T12:17:43.489Z', content: 'Buenos dias' },
  { id: 5, date: '2020-04-30T13:17:43.489Z', content: 'Hallo' },
];

const daysWithMessages = [
  {
    day: '2020-04-29',
    messages: [
      { id: 1, date: '2020-04-29T07:17:43.489Z', content: 'Hello' },
      { id: 2, date: '2020-04-29T10:17:43.489Z', content: 'Bonjour' },
    ],
  },
  {
    day: '2020-04-30',
    messages: [
      { id: 3, date: '2020-04-30T11:17:43.489Z', content: 'Buongiorno' },
      { id: 4, date: '2020-04-30T12:17:43.489Z', content: 'Buenos dias' },
      { id: 5, date: '2020-04-30T13:17:43.489Z', content: 'Hallo' },
    ],
  },
];

describe('groupMessagesByDay', () => {
  it('returns messages grouped by day', () => {
    expect(groupMessagesByDay(messages)).toEqual(daysWithMessages);
  });
});
