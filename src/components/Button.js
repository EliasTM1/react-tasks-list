import PropTypes from 'prop-types'

const Button = ({text , color, onClick}) => {
    return ( <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
    )
}
// Addign the default props to the component 
Button.defaultProps = {
    color : 'steelblue'
}

Button.propTypes ={
    text: PropTypes.string, 
    color: PropTypes.string, 
    onClick: PropTypes.func

}


export default Button