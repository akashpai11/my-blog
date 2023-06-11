"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import styles from './page.module.css'
import Image from 'next/image'

const Dashboard = () => {
    // const [data, setdata] = useState([])
    // const [isLoading, setisLoading] = useState(false)
    // const [error, seterror] = useState(false)

    // useEffect(() => {
    //     const getData = async () => {
    //         setisLoading(true)
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    //         if (!res.ok) {
    //             seterror(true)
    //         }
    //         const data = await res.json()
    //         setdata(data)
    //         setisLoading(false)
    //     }
    //     getData()
    // }, [])

    const session = useSession()
    const router = useRouter()

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session.data?.user?.name}`, fetcher)
    console.log("DATA", data);

    if (session.status === 'loading') {
        return <p>Loading...</p>
    }

    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = e.target[0].value
        const desc = e.target[1].value
        const image = e.target[2].value
        const content = e.target[3].value

        try {
            await fetch("/api/posts", {
                method: 'POST',
                body: JSON.stringify({
                    title, desc, image, content, username: session.data.user.name
                })
            })
            mutate()
            e.target.reset()
        } catch (error) {

        }
    }

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: 'DELETE'
            })
            mutate()
        } catch (error) {
            console.log(error);
        }
    }

    console.log("Session ", session);


    if (session.status === 'authenticated') {
        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {
                        data?.map((post) => (
                            <div className={styles.post} key={post._id}>
                                <div className={styles.imgContainer}>
                                    <Image src={post.image} alt='' width={200} height={100} />
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
                            </div>
                        ))
                    }
                </div>
                <form className={styles.new} onSubmit={handleSubmit}>
                    <h2>Add new Post</h2>
                    <input type="text" placeholder='Title' className={styles.input} />
                    <input type="text" placeholder='Desc' className={styles.input} />
                    <input type="text" placeholder='Image' className={styles.input} />
                    <textarea cols="30" rows="10" placeholder='Content' className={styles.textArea}></textarea>
                    <button className={styles.button}>Send</button>
                </form>
            </div>
        )
    }


}

export default Dashboard