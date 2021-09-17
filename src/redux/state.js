import reducerDialogs from "./reducerDialogs";
import reducerNavBar from "./reducerNavBar";
import reducerProfile from "./reducerProfile";

let store = {
  _state: {
    ProfilePage: {
      posts: [
        { comment: "Первый коммент", name: "IvPas", likeCount: "3" },
        {
          comment: "Второй большой коммент. Он растягивается на весь блок и он просто тестовый",
          name: "Дмитрый Дыров",
          likeCount: "5",
        },
        { comment: "Третий и так и сяк", name: "Алексей Юдин", likeCount: "0" },
        { comment: "А четвертый случайно сюда попал", name: "Anonimus", likeCount: "13" },
      ],
      actualValueTextarea: "",
    },
    DialogsPage: {
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
    },
    NavBar: {
      links: [
        { id: 1, url: "/profile", text: "Профиль" },
        { id: 2, url: "/dialogs", text: "Диалоги" },
        { id: 3, url: "/news", text: "Новости" },
        { id: 4, url: "/music", text: "Музыка" },
        { id: 5, url: "/settings", text: "Настройки" },
      ],
      friendsOnline: [
        { id: 1, name: "Иванов Иван" },
        { id: 2, name: "Кирилл Пронин" },
        { id: 3, name: "Валерий Кумин" },
      ],
    },
  },
  _rerenderEntireThree() {},
  getState() {
    return this._state;
  },
  observer(render) {
    this._rerenderEntireThree = render;
  },
  dispatch(action) {
    this._state.ProfilePage = reducerProfile(this._state.ProfilePage, action);
    this._state.DialogsPage = reducerDialogs(this._state.DialogsPage, action);
    this._state.NavBar = reducerNavBar(this._state.NavBar, action);

    this._rerenderEntireThree(this._state);
  },
};

export default store;
