"use client"

import { useSession } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'

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
    console.log("Session ", session);

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard