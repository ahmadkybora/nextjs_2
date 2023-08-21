interface PropTypes {
    style: string,
    children: any
}

const Container = ({ children, style }: PropTypes ) => {
    return (
        <div className={style}>{children}</div>
    )
}

Container.propTypes = {};

export default Container;
