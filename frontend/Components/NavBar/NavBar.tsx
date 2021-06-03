import Image from 'next/image'
import React from 'react'
import styles from './NavBar.module.scss'

const NavBar : React.FC = () => {
    return (
        <div className={styles.NavBar}>
            <Image src='/Assets/facebook-square.png' width={40} height={40} />
            <input />
        </div>
    )
}

export default NavBar
