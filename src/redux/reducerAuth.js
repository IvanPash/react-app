let initState = {
  dataUser: {
    id: null,
    login: null,
    email: null,
  },
  isAuth: false,
};

const reducerAuth = (state = initState, action) => {
  switch (action.type) {
    case SET_USER: {
      let stateCopy = {
        ...state,
        dataUser: { ...action.dataUser },
        isAuth: action.statusRequest === 0 ? true : false,
      };
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};

const SET_USER = "SET_USER";

export const setUser = (
  statusRequest,
  dataUser = {
    id: null,
    login: null,
    email: null,
  }
) => ({ type: SET_USER, statusRequest, dataUser });

export default reducerAuth
