import React from 'react'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'

const UsersPage = () => {
  return (
    <>
    <div><h1>Users Page</h1></div>
    <div><Link href="/">Home</Link></div>
    <div><Link href="users/new">New</Link></div>
    </>
  )
}

export default UsersPage