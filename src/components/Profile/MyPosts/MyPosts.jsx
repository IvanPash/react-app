import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let Posts = [
        {comment:"Первый коммент", name:"IvPas", likeCount:"3"},
        {comment:"Второй большой коммент. Он растягивается на весь блок и он просто тестовый", name:"Дмитрый Дыров", likeCount:"5"},
        {comment:"Третий и так и сяк", name:"Алексей Юдин", likeCount:"0"},
        {comment:"А четвертый случайно сюда попал", name:"Anonimus", likeCount:"13"},
    ]

    let PostsElements = Posts.map( el => (<Post comment={el.comment} name={el.name} likeCount={el.likeCount}/>))

    return (
        <div className={s.postsContainer}>
            <h2 className={s.myPosts}>Мои посты</h2>
            <textarea rows="5" className={s.myPosts} placeholder="Напишите что-нибудь"></textarea>
            <ul className={s.posts}>
                {PostsElements}
            </ul>
        </div>
    )
}

export default MyPosts;