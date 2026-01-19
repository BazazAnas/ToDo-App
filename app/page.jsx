import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex justify-center mt-3'>
        <div className='flex flex-col justify-center text-center'>
          <h1 className='text-4xl m-4'>ToDo List</h1>
          <form>
            <input className='bg-zinc-400 border-white border-4 px-4 py-2 m-2' type="text" />
            <input className='bg-zinc-400 border-white border-4 px-4 py-2 m-2' type="text" />
            <button type="button">ADD</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default page