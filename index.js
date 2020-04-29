const getDay = (date) => {
  return date.slice(0, 10);
};

const getDaysWithMessages = (messages) =>
  messages.reduce((daysWithMessages, message) => {
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
    return daysWithMessages;
  }, []);

module.exports = { getDaysWithMessages };

// Autre utilisations de reduce :

// Calculer la somme d'un tableau de nombres :
// [12, 24, 3].reduce(
//   (sum, item) => {
//     return sum + item;
//   }, 0
// )

// Trouver le maximum d'un tableau de nombres :
// [12, 24, 3].reduce(
//   (max, item) => {
//    return max > item ? max : item
//   }, 0
// )
