import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'

const Dialogs = () => {
	return (
		<div className={`${s.dialogs} containerMain`}>
			<h2>Диалоги</h2>
			<ul className={s.dialogsList}>
				<Dialog message="Спокойной ночи" name="Аделина Андреева" timeMessage="12:04" id="1"/>
				<Dialog message="Личное сообщение очень важное" name="Иван Пашков" timeMessage="12:04" id="2" />
				<Dialog message="Ору" name="Влад Полиевцев" timeMessage="12:04" id="3" />
				<Dialog message="Хорошо" name="Ольга Пашкова" timeMessage="15:30" id="4" />
			</ul>
		</div>

	)
}

export default Dialogs