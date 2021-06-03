import React from 'react'
import styles from './Login.module.scss'
const Login:React.FC = () => {
    return (
        <div className={styles.Login}>
            <div className='email'>
                <h2 className={styles.label}>Email</h2>
                <input />
            </div>
            <div className='password'>
                <h2 className={styles.label}>Password</h2>
                <input />
            </div>
            <button>Log In</button>
            <h4>Forgot password?</h4>
        </div>
    )
}

export default Login
