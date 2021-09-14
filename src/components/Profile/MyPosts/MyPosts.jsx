import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.state.map( el => (<Post comment={el.comment} name={el.name} likeCount={el.likeCount}/>))

    let newPostText = React.createRef()

    let AddPost = () => {
        alert(newPostText.current.value)
    }

    return (
        <div className={s.postsContainer}>
            <h2 className={s.myPosts}>Мои посты</h2>
            <textarea ref={newPostText} rows="5" className={s.myPosts} placeholder="Напишите что-нибудь"></textarea>
            <button onClick={AddPost}>Опубликовать</button>
            <ul className={s.posts}>
                {postsElements}
            </ul>
        </div>
    )
}

export default MyPosts;