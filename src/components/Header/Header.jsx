// import logo from './../../logo.svg';
import logo from './../../logo.svg';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
          <div className={s.logo__container}>
            
            <img className={s.logo} src={logo}></img>
          </div>
        </div>
    )
}

export default Header