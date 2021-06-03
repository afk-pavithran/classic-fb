import React from 'react'
import styles from './Register.module.scss'

const Register: React.FC = () => {
    return (
        <div className={styles.Register}>
            <h1>Create an account</h1>
            <h4>It's free and always will be</h4>
            <div className={styles.form}>
                <input className={styles.fname} placeholder='First Name' />
                <input className={styles.lname} placeholder='Last Name' />
                <input className={styles.email} placeholder='Email Address' />
                <input className={styles.confirmEmail} placeholder='Confirm Email Address' />
                <input className={styles.password} placeholder='Password' />
                {/* <div className={styles.bday}>
                </div>
                <div className={styles.gender}>
                </div> */}
                <div className={styles.terms}>
                    <h5>By Clicking "Create an account", you are agree to our Terms and that you have read Data Use Policy, including our Cookie Use</h5>
                </div>
                <button>Create an account</button>
                <div className={styles.cpage}>
                <h5>Create a Page for a celebrity, band or business</h5>
                </div>
            </div>
        </div>
    )
}

export default Register
