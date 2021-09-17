const initState = {
  dialogs: [
    {
      id: 1,
      name: "Аделина Андреева",
      messages: [
        { messageId: 1, userId: 1, message: "Привет", messageTime: "07:00" },
        { messageId: 2, userId: 2, message: "Доброе утро)", messageTime: "07:04" },
        { messageId: 3, userId: 1, message: "Как дела?", messageTime: "07:06" },
        { messageId: 4, userId: 2, message: "Супер, у тебя как?", messageTime: "08:32" },
        { messageId: 5, userId: 1, message: "И так далее", messageTime: "12:04" },
        { messageId: 6, userId: 2, message: "Ага", messageTime: "12:12" },
      ],
    },
    {
      id: 2,
      name: "Влад Полиевцев",
      messages: [
        { messageId: 1, userId: 1, message: "Привет", messageTime: "07:00" },
        { messageId: 2, userId: 3, message: "Ку", messageTime: "07:04" },
        { messageId: 3, userId: 1, message: "Как дела?", messageTime: "07:06" },
        { messageId: 4, userId: 3, message: "Херово, у тебя как?", messageTime: "08:32" },
        { messageId: 5, userId: 1, message: "И так далее", messageTime: "12:04" },
        { messageId: 6, userId: 3, message: "Это влад", messageTime: "12:12" },
      ],
    },
  ],
};

let reducerDialogs = (state = initState, action) => {
  return state
};

export default reducerDialogs;
