import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return ( <header className = 'header' >
        <h2> Task Tracker </h2> 
        <h1>{title}</h1>
        <Button color = {showAdd ? 'red' : 'green'}
        text = {showAdd ? 'Close': 'Add'}
        onClick = { onAdd }    
        />

        </header>
    )
}
export default Header