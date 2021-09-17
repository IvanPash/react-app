import { combineReducers, createStore } from "redux";
import reducerDialogs from "./reducerDialogs";
import reducerNavBar from "./reducerNavBar";
import reducerProfile from "./reducerProfile";

let reducers = combineReducers({
  ProfilePage: reducerProfile,
  DialogsPage: reducerDialogs,
  NavBar: reducerNavBar,
})

let store = createStore(reducers)

export default store