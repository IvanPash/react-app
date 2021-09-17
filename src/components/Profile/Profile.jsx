import s from './Profile.module.css'
import avatar from './../../avatar.png'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className={`${s.profile} containerMain`}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile