import avatar from "./../../avatar.png";
import logo from "./../../logo.svg";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.headerLeft}>
        <div className={s.logo__container}>
          <img className={s.logo} src={logo} />
        </div>
      </div>
      <div className={s.headerRight}>
        <div className={s.auth}>
          <div className={s.authLeft}>
            <img className={s.authAvatar} src={avatar} alt="Иконка пользователя" />
          </div>
          {props.isAuth ? (
            <div className={s.authRight}>
              <span className={s.authName}>{props.login}</span>
              <span className={s.authEmail}>{props.email}</span>
            </div>
          ) : (
            <div className={s.authRight}>
              <span className={s.signIn}>Вы не авторизованы</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
