import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import avatar from "./../../../avatar.png";

let User = (props) => {
  return (
    <div className={s.user}>
      <NavLink to={"profile/" + props.id }>
        <img className={s.userPhoto} src={props.photos.small ? props.photos.small : avatar} />{" "}
      </NavLink>

      <h4 className={s.name}>{props.name}</h4>
      <span className={s.status}>{props.status}</span>
      <button
        className={s.followed}
        onClick={props.followed ? () => props.unfollowUser(props.id) : () => props.followUser(props.id)}
      >
        {props.followed ? "Отписаться" : "Подписаться"}
      </button>
    </div>
  );
};

export default User;
