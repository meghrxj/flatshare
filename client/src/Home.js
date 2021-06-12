import React from 'react'
import Form from './Form'

const Home = () => {
  return (
    <div className=' flex flex-col h-screen  bg-dark_blue bg-waves bg-bottom bg-no-repeat'>
      <div className='flex justify-center bg-purple'>
        <span className='font-bold text-3xl text-white p-4'>FlatShare</span>
      </div>
      <div className=' flex flex-col justify-center items-center '>
        <div>
          <span className='flex text-white font-bold text-4xl p-10 m-10'>
            Hey, We are still in private beta opening up soon!
          </span>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Home
