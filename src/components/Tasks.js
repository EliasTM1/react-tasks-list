import Taks from './Taks'

const Tasks = ({tasks, onDelete , onToggle}) => {
    
    return ( 

        <>
        {tasks.map((elem) => (
            <Taks 
            key={elem.id} 
            task={elem} 
            onDelete={onDelete} 
            onToggle={onToggle}
            />
            ))}
        </>
    )
}

export default Tasks