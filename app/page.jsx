"use client"
import Tasks from '@/components/Tasks';
import React, { useState } from 'react'

const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Title, setTitle] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Des, setDes] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Task, setTask] = useState([]);

  const handleDelete = (index) => {
    let copyTask = [...Task];
    copyTask.splice(index,1);
    setTask(copyTask);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...Task, { Title, Des }])
    setTitle("");
    setDes("");
  }

  return (
    <>

      <div className="flex justify-center mt-1">
        <div className="flex flex-col w-screen items-center">
          <h1 className="text-4xl m-4">ToDo List</h1>
          <div className="mt-6 w-full flex justify-center">
            <form className="w-2/3 flex flex-col text-left" onSubmit={handleSubmit}>

              <label htmlFor="title" className="mb-2">
                Enter title for the task
              </label>
              <input
                name="title"
                id='title'
                type="text"
                placeholder="Enter title here"
                className="bg-zinc-400
                border-gray-700
                border-4 
                px-4 
                py-2 
                mb-4
                text-white"
                value={Title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              />

              <label htmlFor="description" className="mb-2">
                Enter description of the task
              </label>
              <input
                name="description"
                id='description'
                type="text"
                placeholder="Enter description here"
                className="bg-zinc-400 
              border-gray-700 
                border-4 
                px-4 
                py-2 
                mb-4
                text-white"
                value={Des}
                onChange={(e) => {
                  setDes(e.target.value)
                }}
              />

              <button
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

          <hr className='w-screen mb-1' />
          <hr className='w-screen' />

        </div>
      </div>
      <div className=' py-4 w-screen flex justify-around'>
        {Task.map((t, i) => {
          return <Tasks task={t} onDelete={handleDelete} index={i} key={i} />
        })}
      </div>

    </>
  )
}

export default page