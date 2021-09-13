import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={s.info}>
      <div className={s.background}></div>
      <div className={s.description}>
        Описание
      </div>
    </div>
  )
}

export default ProfileInfo