interface PropTypes {
    style: string;
    title: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ title, style, handleClick }: PropTypes ) => {
    return (
        <button 
            type="submit" 
            className={style} 
            onClick={handleClick}>
                {title}
        </button>
    )
}

Button.propTypes = {};

export default Button;
