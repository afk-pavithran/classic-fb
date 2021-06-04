import Image from 'next/image'
import React from 'react'
import styles from './Feed.module.scss'

type PostProps = {
    image?: ImageBitmap,
    name: String,
    content: String,
}

const Post : React.FC<PostProps> = ({name, content, image}) => {
    return (
        <div className={styles.Post}>
            <div className={styles.PostHead}>
            <Image src='/Assets/default-avatar.jpg' width={50} height={50} />
            <h4>{name}</h4>
            </div>
            <h6>{content}</h6>
        </div>
    )
}

export default Post
