const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initState = {
  users: [
    // {
    //   id: 1,
    //   followed: false,
    //   name: "Имя 1",
    //   status: "Проживи жизнь так чтобы ее запомнить",
    //   location: { country: "Россия", city: "Ебеньград 1" },
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   name: "Имя 2",
    //   status: "Проживи жизнь так чтобы ее запомнить",
    //   location: { country: "Беларусь", city: "Ебеньград 2" },
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   name: "Имя 3",
    //   status: "Проживи жизнь так чтобы ее запомнить",
    //   location: { country: "Украина", city: "Ебеньград 3" },
    // },
    // {
    //   id: 4,
    //   followed: false,
    //   name: "Имя 4",
    //   status: "Проживи жизнь так чтобы ее запомнить",
    //   location: { country: "Украина", city: "Ебеньград 4" },
    // },
  ],
};

let reducerUsers = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map(el => {
          if (el.id === action.idUser) {
            return { ...el, followed: true }
          } 
          else return el;
        }),
      }
      return stateCopy
    }
    case UNFOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map(el => {
          if (el.id === action.idUser) {
            return { ...el, followed: false }
          } 
          else return el;
        }),
      }
      return stateCopy
    }
    case SET_USERS: {
      let stateCopy = {
        ...state,
        users: [...action.users]
      }
      return stateCopy
    }
    default:
      return state
  }
};

export const followUserAC = (idUser) => ({ type: FOLLOW, idUser });
export const unfollowUserAC = (idUser) => ({ type: UNFOLLOW, idUser });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default reducerUsers
