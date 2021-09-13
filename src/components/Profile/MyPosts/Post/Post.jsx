import s from './Post.module.css'
import avatar from '../../../../avatar.png'

const Post = (props) => {
    return (
        <li className={s.post}>
            <div className={s.left}>
                <img className={s.avatar} src={avatar} />
            </div>
            <div className={s.right}>
                <span className={s.name}>{props.name}</span>
                <span className={s.likeCount}>лайков {props.likeCount}</span>
                <p className={s.comment}>{props.comment}</p>
            </div>
        </li>
    )
}

export default Post