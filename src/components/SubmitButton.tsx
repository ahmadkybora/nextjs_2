interface PropTypes {
    style: string;
    title: string;
}

const Button = ({ title, style }: PropTypes ) => {
    return (
        <button 
            type="submit" 
            className={style}>
                {title}
        </button>
    )
}

Button.propTypes = {};

export default Button;
