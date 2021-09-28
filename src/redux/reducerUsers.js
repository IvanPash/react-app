const initState = {
  users: [],
  count: 80,
  page: 1,
  totalCount: 0,
  preloader: false,
};

let reducerUsers = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.idUser) {
            return { ...el, followed: true };
          } else return el;
        }),
      };
      return stateCopy;
    }
    case UNFOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.idUser) {
            return { ...el, followed: false };
          } else return el;
        }),
      };
      return stateCopy;
    }
    case SET_USERS: {
      let stateCopy = {
        ...state,
        users: [...action.users],
      };
      return stateCopy;
    }
    case SET_PAGE: {
      let stateCopy = {
        ...state,
        page: action.page,
      };
      return stateCopy;
    }
    case SET_TOTAL_COUNT: {
      let stateCopy = {
        ...state,
        totalCount: action.count,
      };
      return stateCopy;
    }
    case SET_STATUS_PRELOADER: {
      let stateCopy = {
        ...state,
        preloader: action.status
      }
      return stateCopy;
    }
    default:
      return state;
  }
};

// Type for Action Creater
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_STATUS_PRELOADER = "SET_STATUS_PRELOADER";

// Action Creator
export const followUser = (idUser) => ({ type: FOLLOW, idUser });
export const unfollowUser = (idUser) => ({ type: UNFOLLOW, idUser });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPage = (page) => ({ type: SET_PAGE, page });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count });
export const setStatusPreloader = (status) => ({ type: SET_STATUS_PRELOADER, status });

export default reducerUsers;
