import Preloader from '../../common/Preloader/Prealoader'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    !props.profile ? <Preloader/>
    : <div className={s.info}>
        <div className={s.background}></div>
        <div className={s.description}>
          <div className={s.descriptionLeft}>
            <img className={s.photoProfile} src={props.profile.photos.small} />
          </div>
          
          <div className={s.descriptionRight}>
            <h3 className={s.fullName}>{props.profile.fullName}</h3>
            <span className={s.aboutInfoProfile}>{props.profile.aboutMe}</span>
            <div className={s.detailDescription}>
              <span>Статус поиска работы <strong>{props.profile.lookingForAJob ? "В активном поиске" : "не ищет"}</strong></span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProfileInfo