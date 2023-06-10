"use client"
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {

    const session = useSession()

    const links = [
        {
            id: 1,
            title: 'Home',
            url: '/'
        },
        {
            id: 2,
            title: 'Portfolio',
            url: '/portfolio'
        },
        {
            id: 3,
            title: 'Blog',
            url: '/blog'
        },
        {
            id: 4,
            title: 'About',
            url: '/about'
        },
        {
            id: 5,
            title: 'Contact',
            url: '/contact'
        },
        {
            id: 6,
            title: 'Dashboard',
            url: '/dashboard'
        }
    ]

    return (
        <div className={styles.container}>
            <Link href='/' className={styles.logo}>Webdev</Link>
            <div className={styles.links}>
                {links.map((item) => (
                    <Link key={item.id} href={item.url} className={styles.link}>{item.title}</Link>
                ))
                }
                {
                    session.status === 'authenticated' && (
                        <button className={styles.logout} onClick={signOut}>
                            Logout
                        </button>
                    )
                }

                <DarkModeToggle />
            </div>
        </div>
    )
}

export default Navbar