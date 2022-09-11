import React, {useEffect} from 'react';


const Task = ({task, takeId}) => {
    console.log(task)
    const onClick = () => {
        takeId(task.id)
    }


    return (
        <div>
            Name - {task.name}
            Description - {task.description}
            <button onClick={()=>{onClick()}}>Delete</button>
        </div>
    );
};

export default Task;