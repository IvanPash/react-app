import { NavLink } from "react-router-dom";
import FriendsOnline from "./FriendsOnline/FriendsOnline";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  let linksElement = props.state.links.map((el) => (
    <li key={el.id} className={s.item}>
      <NavLink id={el.id} to={el.url} className={s.link} activeClassName={s.link_active}>
        {el.text}
      </NavLink>
    </li>
  ));

  return (
    <div className={s.link__container}>
      <nav className={s.list}>
        {linksElement}
        <FriendsOnline state={props.state.friendsOnline} />
      </nav>
    </div>
  );
};

export default Navbar;
