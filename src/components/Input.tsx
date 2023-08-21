import { useFormikContext } from "formik";

interface PropTypes {
    style: string;
    type: string;
    name: string;
}

const Input = ({ style, type, name }: PropTypes ) => {
    const { handleChange } = useFormikContext();
    return (
        <input
            className={style}
            type={type}
            name={name}
            onChange={handleChange(name)}
            />
    )
}

export default Input;
