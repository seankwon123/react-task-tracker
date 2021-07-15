import PropTypes from 'prop-types'

const Button = ({color, text, click}) => {
    return (
        <button 
            onClick={click} 
            style={{ backgroundColor: color }} 
            className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    click: PropTypes.func.isRequired,
}

export default Button