let state = {
  ProfilePage: {
    posts: [
      {comment:"Первый коммент", name:"IvPas", likeCount:"3"},
      {comment:"Второй большой коммент. Он растягивается на весь блок и он просто тестовый", name:"Дмитрый Дыров", likeCount:"5"},
      {comment:"Третий и так и сяк", name:"Алексей Юдин", likeCount:"0"},
      {comment:"А четвертый случайно сюда попал", name:"Anonimus", likeCount:"13"},
    ],
  },
  DialogsPage: {
    dialogs: [
      {id: 1, name: "Аделина Андреева", message: "Спокойной ночи", timeMessage: "12:04"},
      {id: 2, name: "Иван Пашков", message: "Личное сообщение очень важное", timeMessage: "12:04"},
      {id: 3, name: "Влад Полиевцев", message: "Ору", timeMessage: "12:04"},
      {id: 4, name: "Ольга Пашкова", message: "Хорошо", timeMessage: "15:30"},
    ]
  },
  NavBar: {
    links: [
      {id: 1, url: "/profile", text: "Профиль"},
      {id: 2, url: "/dialogs", text: "Диалоги"},
      {id: 3, url: "/news", text: "Новости"},
      {id: 4, url: "/music", text: "Музыка"},
      {id: 5, url: "/settings", text: "Настройки"},
    ],
    friendsOnline: [
      {id: 1, name: "Иванов Иван"},
      {id: 2, name: "Кирилл Пронин"},
      {id: 3, name: "Валерий Кумин"},
    ]
  }

}

export default state