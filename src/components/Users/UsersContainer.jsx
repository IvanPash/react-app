import { connect } from "react-redux"
import { setUsersAC, followUserAC, unfollowUserAC } from "../../redux/reducerUsers"
import Users from "./Users"

const mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    followUI: (userId) => {
      dispatch(followUserAC(userId))
    },
    unfollowUI: (userId) => {
      dispatch(unfollowUserAC(userId))
    },
    setUsersUI: (users) => {
      dispatch(setUsersAC(users))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer