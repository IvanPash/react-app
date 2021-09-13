import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'

const Dialogs = (props) => {

	

	let DialogsElement = props.state.dialogs.map( el => (<Dialog id={el.id} name={el.name} message={el.message}  timeMessage={el.timeMessage} />))

	return (
		<div className={`${s.dialogs} containerMain`}>
			<h2>Диалоги</h2>
			<ul className={s.dialogsList}>
				{DialogsElement}
			</ul>
		</div>
	)
}

export default Dialogs