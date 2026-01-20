import React from 'react'

const page = () => {
  return (
    <>
      <div className="flex justify-center mt-1">
        <div className="flex flex-col w-screen items-center">
          <h1 className="text-4xl m-4">ToDo List</h1>
          <div className="mt-6 w-full flex justify-center">
            <form className="w-2/3 flex flex-col text-left">

              <label htmlFor="title" className="mb-2">
                Enter title for the task
              </label>
              <input
                name="title"
                id='title'
                type="text"
                placeholder="Enter Title"
                className="bg-zinc-400
                border-gray-700
                border-4 
                px-4 
                py-2 
                mb-4
                text-white" 
              />

              <label htmlFor="description" className="mb-2">
                Enter description of the task
              </label>
              <input
                name="description"
                id='description'
                type="text"
                placeholder="Enter Description"
                className="bg-zinc-400 
              border-gray-700 
                border-4 
                px-4 
                py-2 
                mb-4
                text-white"
              />

              <button
                type="button"
                className="bg-gray-500
                 px-6 
                 py-2
                 rounded-4xl
                 w-1/2 
                 self-center-safe
                 mt-4
                 mb-4"
              >
                ADD
              </button>

            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default page