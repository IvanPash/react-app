import { NavLink } from "react-router-dom"
import avatar from "../../../../avatar.png"
import s from "./Friend.module.css"

const Friend = (props) => {
  return (
    <NavLink className={s.friendLink} to={`./${props.id}`}>
      <div className={s.friend}>
        <img className={s.avatar} src={avatar} />
        <span className={s.name}> {props.name} </span>
      </div>
    </NavLink>
  )
}

export default Friend