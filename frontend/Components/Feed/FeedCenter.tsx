import React from 'react'
import styles from './Feed.module.scss'
import Post from './Post'

interface IPost  {
    name: String,
    content: String,
    likes: Number,
    comments: Number,
}

const Posts: Array<IPost> = [
    {
        name: 'Test1',
        content: 'Test Desc',
        likes: 52,
        comments: 20
    },
    {
        name: 'Test2',
        content: 'Test Desc',
        likes: 52,
        comments: 20
    },
    {
        name: 'Test13',
        content: 'Test Desc',
        likes: 52,
        comments: 20
    },
    {
        name: 'Test4',
        content: 'Test Desc',
        likes: 52,
        comments: 20
    },
    {
        name: 'Test5',
        content: 'Test Desc',
        likes: 52,
        comments: 20
    },
]



const FeedCenter : React.FC = () => {
    return (
        <div className={styles.FeedCenter}>
            {Posts.map(item => <Post
                name={item.name}
                likes={item.likes}
                comments={item.comments}
                isByUser={true}
                content={item.content} />)}
        </div>
    )
}

export default FeedCenter
