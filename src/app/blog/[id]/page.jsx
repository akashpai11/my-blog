import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })

    if (!res.ok) {
        return notFound()
    }
    return res.json()
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title} </h1>
                    <p className={styles.desc}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus consectetur eveniet consequuntur quia atque illum unde perferendis non autem expedita sapiente rerum cumque dolore quae nesciunt vel doloremque nobis doloribus, maiores minima! Provident molestias possimus fugiat, reprehenderit deleniti dolorem facere!
                    </p>
                    <div className={styles.author}>
                        <Image src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' width={40} height={40} className={styles.avatar} />
                        <span className={styles.username}>Daisy Lee</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' fill={true} className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda, ullam ea eum distinctio sequi ipsa libero officiis, excepturi voluptates quos rem dicta earum molestiae dolores incidunt quo, quasi odio corrupti repellendus itaque omnis accusamus! Facere quam sequi cum velit asperiores eligendi tempora! Placeat non praesentium debitis dolor, expedita accusamus. Necessitatibus, dicta a. Aperiam, excepturi magni quidem ipsam error quas harum debitis repellat quibusdam! Quae, nostrum. Quae aperiam nam ad quo esse quibusdam, quas dolorem vero, iste ipsa, recusandae quaerat autem harum saepe tenetur reiciendis dolore quisquam? Vitae facere illo fugiat amet modi. Minima optio aspernatur quia magnam inventore fuga!
                </p>
            </div>
        </div>
    )
}

export default BlogPost