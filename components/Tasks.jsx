import React from 'react'

const Tasks = ({ task, onDelete, index }) => {
    return (
        <>
            <div>
                <h4>{task.Title}</h4>
                <h5>{task.Des}</h5>
                <button
                    className='
                bg-red-500
                rounded-2xl
                px-2
                py-4'
                    onClick={() => onDelete(index)}
                >
                    Delete</button>
                <hr className='w-screen mb-1 mt-4' />
                <hr className='w-screen' />
            </div>
        </>
    )
}

export default Tasks