import React from 'react'
import NavBar from '../NavBar/NavBar'
import styles from './Feed.module.scss'
import FeedCenter from './FeedCenter'
import FeedLeft from './FeedLeft'
import FeedRight from './FeedRight'

const Feed : React.FC = () => {
    return (
        <div className={styles.Feed}>
            <NavBar />
            <div className={styles.Content}>
                <FeedLeft name='Test' />
                <FeedCenter />
                <FeedRight />
            </div>
        </div>
    )
}

export default Feed
