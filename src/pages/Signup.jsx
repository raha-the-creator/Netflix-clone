import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img 
          className='hidden: sm:block absolute w-full h-full object-cover' 
          src="https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg" 
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form>
                <input type="email" placeholder='Email' autoComplete='Email' />
                <input 
                  type="password" 
                  placeholder='Password' 
                  autoComplete='Password' 
                />
                <button></button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Signup