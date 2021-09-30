import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import avatar from "./../../../avatar.png";
import * as axios from "axios";
import API from "../../../redux/api";

let User = (props) => {
  let actionFollow = (status) => {
    if (status) {
      
      axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + props.id, 
      {
        withCredentials: true, 
        headers: {
          "API-KEY": "aab4ec87-517c-4147-bd01-5917f102b9c8"
        }
      })
      .then(response => {
        response.data.resultCode === 0 && props.unfollowUser(props.id);
      });
    } else {
      API.setFollow(props.id)
      .then(data => {
        data.resultCode === 0 && props.followUser(props.id);
      });
    }
  };

  return (
    <div className={s.user}>
      <NavLink to={"profile/" + props.id}>
        <img className={s.userPhoto} src={props.photos.small ? props.photos.small : avatar} />{" "}
      </NavLink>

      <h4 className={s.name}>{props.name}</h4>
      <span className={s.status}>{props.status}</span>
      <button
        className={s.followed}
        onClick={actionFollow(props.followed)}
      >
        {props.followed ? "Отписаться" : "Подписаться"}
      </button>
    </div>
  );
};

export default User;
