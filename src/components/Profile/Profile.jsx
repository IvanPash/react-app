import s from './Profile.module.css'
import avatar from './../../avatar.png'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className={`${s.profile} containerMain`}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile