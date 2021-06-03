import React from 'react'
import styles from './Auth.module.scss'
import Image from 'next/image'
import Register from '../Register/Register'
const Auth:React.FC = () => {
    return (
        <div className={styles.Auth}>
            <div>
                <Image
                    src='/Assets/network.png'
                    height={300}
                    width={700}
                />
            </div>
            <Register />
        </div>
    )
}

export default Auth
