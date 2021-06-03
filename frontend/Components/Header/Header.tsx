import React from 'react'
import Login from '../Login/Login'
import styles from './Header.module.scss'


const Header:React.FC = () => {
    return (
        <div className={styles.Header}>
            <h1>facebook</h1>
            <Login />
        </div>
    )
}

export default Header
