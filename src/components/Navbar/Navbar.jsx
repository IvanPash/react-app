import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.link__container}>
          <nav className={s.list}>
            <li className={s.link}><NavLink to="/profile">Profile</NavLink></li>
            <li className={s.link}><NavLink to="/dialogs">Messages</NavLink></li>
            <li className={s.link}><NavLink to="/news">News</NavLink></li>
            <li className={s.link}><NavLink to="/music">Music</NavLink></li>
            <li className={s.link}><NavLink to="/settings">Settings</NavLink></li>
          </nav>
        </div>
    )
}

export default Navbar