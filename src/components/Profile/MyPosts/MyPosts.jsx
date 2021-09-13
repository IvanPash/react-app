import s from './MyPosts.module.css'
import Posts from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsContainer}>
            <h2 className={s.myPosts}>Мои посты</h2>
            <textarea rows="5" className={s.myPosts} placeholder="Напишите что-нибудь"></textarea>
            <ul className={s.posts}>
                <Posts comment="Первый коммент" name="IvPas" likeCount="3"/>
                <Posts comment="Второй большой коммент. Он растягивается на весь блок и он просто тестовый" name="Дмитрый Дыров" likeCount="5"/>
                <Posts comment="Третий и так и сяк" name="Алексей Юдин" likeCount="0"/>
                <Posts comment="А четвертый случайно сюда попал" name="Anonimus" likeCount="12"/>
            </ul>
        </div>
    )
}

export default MyPosts;