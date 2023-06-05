import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" fill={true} alt='' className={styles.img} />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We ?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis tempore officiis minima eos in iste dolores voluptatem rem aut, eligendi debitis esse exercitationem fugit dolorum quo velit culpa consectetur inventore sequi mollitia placeat sunt! Corporis corrupti veritatis, autem nesciunt ducimus aperiam, quos maiores odio consequuntur cum eos quasi dolores alias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto cum vel eaque modi?
                        <br />
                        <br />
                        Aliquid similique ut consectetur incidunt iste voluptate cum, numquam enim reiciendis eaque harum consequatur nam eligendi id magnam excepturi! Qui eaque temporibus eum cumque aliquam doloribus rerum officia magni! Laudantium esse, saepe nostrum accusantium eius asperiores maxime.</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis tempore officiis minima eos in iste dolores voluptatem rem aut, eligendi debitis esse exercitationem fugit dolorum quo velit culpa consectetur inventore sequi mollitia placeat sunt! Corporis corrupti veritatis, autem nesciunt ducimus aperiam,
                        <br />
                        <br />
                        quos maiores odio consequuntur cum eos quasi dolores alias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto cum vel eaque modi?
                        <br />
                        <br /> - Dynamic Sites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>

                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About