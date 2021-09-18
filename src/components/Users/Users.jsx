import * as axios from "axios";
import React from "react";
import User from "./User/User";
import s from "./Users.module.css";

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.usersElem = this.props.users.map((el) => (
      <User
        key={el.id}
        id={el.id}
        photos={el.photos}
        name={el.name}
        followed={el.followed}
        status={el.status}
        followUI={this.props.followUI}
        unfollowUI={this.props.unfollowUI}
      />
    )); 
  }

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.setUsersUI(response.data.items)
    });
  }
  
  render() {
    return(
    <div className={`${s.users} containerMain`}>
      <h2>Пользователи</h2>
      <div className={s.usersWrapper}>{this.usersElem}</div>
      {/* <button className={s.loadUsers}>Загрузить пользователей</button> */}
    </div>
    )
  }
    
}

export default Users;
