import React from 'react'
import styles from './Feed.module.scss'

type UserBoxProps = {
    name: String
}

const FeedLeft : React.FC<UserBoxProps> = ({name}) => {
    return (
        <div className={styles.FeedLeft}>
            <h1>{name}</h1>
            <h3>Edit Profile</h3>
        </div>
    )
}

export default FeedLeft
