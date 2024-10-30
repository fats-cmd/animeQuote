import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
        <div className=" h-screen flex flex-col items-center justify-center space-y-3 ">
            <h1 className='  text-2xl text-gray-800 font-semibold'>404 NOT FOUND</h1>
            <img width={200} height={200} src="/src/assets/images/content/tinified/luffy-not-found.png" alt="" />
            <Link to="/" className='px-6 py-2 text-lg text-white rounded-md bg-yellow-500'>Go back home</Link>
        </div>
    </>
  )
}

export default NotFound;