import React from 'react'
import styles from './Feed.module.scss'

type PostProps = {
    name: String,
    content: String,
    likes: Number,
    comments: Number,
    isByUser: Boolean
}

const Post : React.FC<PostProps> = ({name, content, likes, comments, isByUser}) => {
    return (
        <div className={styles.Post}>
            <h4>{name}</h4>
            <h6>{content}</h6>
            <p>{likes} Likes</p>
            <p>{comments} Comments</p>
            {isByUser && <button>Delete Post</button>}
        </div>
    )
}

export default Post
