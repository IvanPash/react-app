import { combineReducers, createStore } from "redux";
import reducerAuth from "./reducerAuth";
import reducerDialogs from "./reducerDialogs";
import reducerNavBar from "./reducerNavBar";
import reducerProfile from "./reducerProfile";
import reducerUsers from "./reducerUsers";

let reducers = combineReducers({
  ProfilePage: reducerProfile,
  DialogsPage: reducerDialogs,
  UsersPage: reducerUsers,
  NavBar: reducerNavBar,
  Auth: reducerAuth,
})

let store = createStore(reducers)

export default store