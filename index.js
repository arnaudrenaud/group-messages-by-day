const getDay = (date) => {
  return date.slice(0, 10);
};

const getDaysWithMessages = (messages) => {
  const daysWithMessages = [];
  messages.forEach((message) => {
    const day = getDay(message.date);
    const dayWithMessages = daysWithMessages.find((item) => item.day === day);
    if (!dayWithMessages) {
      daysWithMessages.push({
        day,
        messages: [message],
      });
    } else {
      dayWithMessages.messages.push(message);
    }
  });
  return daysWithMessages;
};

module.exports = { getDaysWithMessages };
