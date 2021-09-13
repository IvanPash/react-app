import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.state.map( el => (<Post comment={el.comment} name={el.name} likeCount={el.likeCount}/>))

    return (
        <div className={s.postsContainer}>
            <h2 className={s.myPosts}>Мои посты</h2>
            <textarea rows="5" className={s.myPosts} placeholder="Напишите что-нибудь"></textarea>
            <ul className={s.posts}>
                {postsElements}
            </ul>
        </div>
    )
}

export default MyPosts;