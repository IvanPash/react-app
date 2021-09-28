import React from "react";
import Preloader from "../common/Preloader/Prealoader";
import User from "./User/User";
import s from "./Users.module.css";

let Users = (props) => {
  let navigation = [];
  if (props.totalCount) {
    for (let i = 1; i <= Math.ceil(props.totalCount / props.count); i++) {
      navigation.push(i);
    }
    navigation = navigation.map((el) => {
      return (
        <div
          key={el}
          onClick={() => props.onPageChange(el)}
          className={`${s.navigationButton} ${props.page == el && s.active}`}
        >
          {el}
        </div>
      );
    });
  }
  return (
    <div className={`${s.users} containerMain`}>
      <h2 className="titlePage">Пользователи</h2>
      <div className={s.preloaderWrapper}>
        <Preloader preloader={props.preloader} />
      </div>
      <div className={s.navigation}>{navigation}</div>
      <div className={s.usersWrapper}>
        {props.users.map((el) => (
          <User key={el.id} {...el} followUser={props.followUser} unfollowUser={props.unfollowUser} />
        ))}
      </div>
    </div>
  );
};

export default Users;
