import { combineReducers, createStore } from "redux";
import reducerDialogs from "./reducerDialogs";
import reducerNavBar from "./reducerNavBar";
import reducerProfile from "./reducerProfile";
import reducerUsers from "./reducerUsers";

let reducers = combineReducers({
  ProfilePage: reducerProfile,
  DialogsPage: reducerDialogs,
  UsersPage: reducerUsers,
  NavBar: reducerNavBar,
})

let store = createStore(reducers)

export default store