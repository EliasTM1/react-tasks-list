import {useState} from 'react'
// No need to specify React import
const AddTask = ({onAdd}) => {
    // Here we define the component state (not App state for each input and we will set the default state vaule of the checkbos to false)
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    // When the form reveices the submit 
    const onSubmit = (e) => {
        // we prevent the default action of a submit for this case
    e.preventDefault()
    // Validate id the current state of text is actually text
    if(!text) {
        alert('Plase add task')
        return
    }
    //  If it is Text we call the onAdd function and we pass and an object with the new date and their values 
    onAdd({ text , day , reminder })
    // After this we clean the input fields, setting their state to an empty string

    setText('')
    setDay('')
    setReminder(false)
    }
    
    return (

        
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='date' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}></input>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
