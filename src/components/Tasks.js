import Taks from './Taks'

const Tasks = ({tasks}) => {
    
    return ( 

        <>
        {tasks.map((elem) => (<Taks key={elem.id} task={elem}/>))}
        </>
    )
}

export default Tasks