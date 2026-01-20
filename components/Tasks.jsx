import React from 'react'

const Tasks = ({ task, onDelete, index }) => {
    return (
        <>
                <div className='
                    flex 
                    flex-row 
                    w-dvh 
                    justify-between 
                    mx-7 
                    bg-zinc-900
                    rounded-lg
                    shadow-md
                    border  
                    border-zinc-700
                    px-2.5 
                    py-1.5'>
                    <div>
                        <h4 className=' text-white font-semibold'>TITLE : {task.Title}</h4>
                        <h5 className='font-medium  text-zinc-400'>Description : {task.Des}</h5>
                    </div>
                    <button
                        className='
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        rounded-full
                        px-5 py-2                       
                        '
                        onClick={() => onDelete(index)}
                    >
                        Delete</button>
                </div>
        </>
    )
}

export default Tasks