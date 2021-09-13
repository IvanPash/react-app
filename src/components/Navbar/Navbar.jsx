import { NavLink } from 'react-router-dom'
import FriendsOnline from './FriendsOnline/FriendsOnline'
import s from './Navbar.module.css'

const Navbar = (props) => {
  
  let linksElement = props.state.links.map( el => <li className={s.link}><NavLink id={el.id} to={el.url}>{el.text}</NavLink></li>)

  return (
    <div className={s.link__container}>
      <nav className={s.list}>
        {linksElement}
        <FriendsOnline state={props.state.friendsOnline}/>
      </nav>
    </div>
  )
}

export default Navbar