import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'


async function getData() {

    try {
        //const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session.data?.user?.name}`, fetcher)
        const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });
        let result = await res.json()
        return result

    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}
const Blog = async () => {
    const data = await getData()
    console.log("Data", data);
    return (
        <div>
            {data.map((item) => (
                <Link key={item.id} href={`/blog/${item._id}`} className={styles.container}>
                    <div className={styles.imgContainer}>
                        <Image src={item.image} width={400} height={250} alt='' className={styles.img} />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                </Link>
            ))}


        </div>
    )
}

export default Blog