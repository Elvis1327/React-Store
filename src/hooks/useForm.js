import { useState } from 'react';

export const useForm = (initialState) => {
    const [ inputsValues, setInputsValues ] = useState(initialState);

    const handleOnChange = ({target}) => {
        const { name, value } = target;
        setInputsValues({
            ...inputsValues,
            [name]: value
        });
    };
    return { inputsValues, handleOnChange};
};

