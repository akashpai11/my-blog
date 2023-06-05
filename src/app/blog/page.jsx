import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Blog = () => {
    return (
        <div >
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={400} height={250} alt='' className={styles.img} />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={400} height={250} alt='' className={styles.img} />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
        </div>
    )
}

export default Blog