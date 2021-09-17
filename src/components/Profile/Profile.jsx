import s from './Profile.module.css'
import avatar from './../../avatar.png'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={`${s.profile} containerMain`}>
      <ProfileInfo />
      <MyPosts state={props.state} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile