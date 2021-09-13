import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'

const Dialogs = () => {

	let Dialogs = [
		{id: 1, name: "Аделина Андреева", message: "Спокойной ночи", timeMessage: "12:04"},
		{id: 2, name: "Иван Пашков", message: "Личное сообщение очень важное", timeMessage: "12:04"},
		{id: 3, name: "Влад Полиевцев", message: "Ору", timeMessage: "12:04"},
		{id: 4, name: "Ольга Пашкова", message: "Хорошо", timeMessage: "15:30"},
	]

	let DialogsElement = Dialogs.map( el => (<Dialog id={el.id} name={el.name} message={el.message}  timeMessage={el.timeMessage} />))

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