import React from 'react';
import { AddPostAC, UpdateValueTextareaAC } from '../../../redux/reducerProfile';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.state.posts.map( el => (<Post comment={el.comment} name={el.name} likeCount={el.likeCount}/>))

    let newPostText = React.createRef()

    let ChangeTextarea = () => {
        props.dispatch(UpdateValueTextareaAC(newPostText.current.value))
    }
    let AddPostLocal = () => {
        props.dispatch(AddPostAC())
    }

    return (
        <div className={s.postsContainer}>
            <h2 className={s.myPosts}>Мои посты</h2>
            <textarea ref={newPostText} onChange={ChangeTextarea} rows="5" className={s.myPosts} placeholder="Напишите что-нибудь" value={props.state.actualValueTextarea}></textarea>
            <button onClick={AddPostLocal}>Опубликовать</button>
            <ul className={s.posts}>
                {postsElements}
            </ul>
        </div>
    )
}

export default MyPosts;