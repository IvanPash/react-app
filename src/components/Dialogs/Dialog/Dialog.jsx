import s from './Dialog.module.css'
import avatar from '../../../avatar.png'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
	return (
		<NavLink to={"/messages/" + props.id}>
			<li className={s.dialogItem}>
				<a className={s.dialogLink} href="#">
					<div className={s.left}>
						<img className={s.avatar} src={avatar} />
					</div>
					<div className={s.right}>
						<span className={s.name}>{props.name}</span>
						<p className={s.message}>{props.message}</p>
					</div>
					<span className={s.timeMessage}>{props.timeMessage}</span>
				</a>
			</li>
		</NavLink>
	)
}

export default Dialog