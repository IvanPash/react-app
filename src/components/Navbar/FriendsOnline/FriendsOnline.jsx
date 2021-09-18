import Friend from "./Friend/Friend"
import s from "./FriendsOnline.module.css"

const FriendsOnline = (props) => {

  let friendsOnline = props.state.map(el => (<Friend key={el.id} id={el.id} name={el.name} />))

  return (
    <div className={s.friends}>
      <h4>Друзья онлайн</h4>
      <ul className={s.friendsList}>
        {friendsOnline}
      </ul>
    </div>
  )
}

export default FriendsOnline