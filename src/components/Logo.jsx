import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
        <div className=" flex-shrink-0 border-2 border-white">
            <Link to='/' className=' text-2xl text-white' >ANIQUOTES</Link>
        </div>
    </>
  )
}

export default Logo