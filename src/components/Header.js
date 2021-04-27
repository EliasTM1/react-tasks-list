import Button from './Button'

const Header = () => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h2>Task Tracker</h2>
            <Button color='green' text='Add' onClick={onClick} />
            
        </header>
    )
}
export default Header
