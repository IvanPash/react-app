import s from "./User.module.css";
import avatar from "./../../../avatar.png"

let User = (props) => {
  return (
    <div className={s.user}>
      <img className={s.userPhoto} src={props.photos.small ? props.photos.small : avatar}/>
      <h4 className={s.name}>{props.name}</h4>
      <span className={s.status}>{props.status}</span>
      <button
        className={s.followed}
        onClick={props.followed ? () => props.unfollowUI(props.id) : () => props.followUI(props.id)}
      >
        {props.followed ? "Отписаться" : "Подписаться"}
      </button>
    </div>
  );
};

export default User;
