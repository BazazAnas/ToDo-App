import React from 'react'

const Tasks = (props) => {
    return (
        <>
            <div>
                {console.log(props.task.Title)}
                {console.log(props.task.Des)}
                <h4>{props.task.Title}</h4>
                <h5>{props.task.Des}</h5>
                <hr className='w-screen mb-1' />
                <hr className='w-screen' />
            </div>
        </>
    )
}

export default Tasks