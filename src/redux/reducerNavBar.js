const initState = {
  links: [
    { id: 1, url: "/profile", text: "Профиль" },
    { id: 2, url: "/users", text: "Пользователи" },
    { id: 3, url: "/dialogs", text: "Диалоги" },
    { id: 4, url: "/news", text: "Новости" },
    { id: 5, url: "/music", text: "Музыка" },
    { id: 6, url: "/settings", text: "Настройки" },
  ],
  friendsOnline: [
    { id: 1, name: "Иванов Иван" },
    { id: 2, name: "Кирилл Пронин" },
    { id: 3, name: "Валерий Кумин" },
  ],
}

let reducerNavBar = (state = initState, action) => {
  return state
}

export default reducerNavBar