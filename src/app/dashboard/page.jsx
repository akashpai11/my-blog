"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import styles from './page.module.css'

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
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    if (session.status === 'loading') {
        return <p>Loading...</p>
    }

    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login')
    }

    console.log("Session ", session);


    if (session.status === 'authenticated') {
        return (
            <div className={styles.container}>Dashboard</div>
        )
    }


}

export default Dashboard