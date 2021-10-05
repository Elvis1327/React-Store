import { useState } from 'react';

export const useForm = (initialState) => {
    const [ inputsValues, setInputsValues ] = useState(initialState);

    const handleOnChange = (  e) => {
        console.log(e);
        // const { name, value } = target;
        // console.warn(name, value)
        // setInputsValues({
        //     ...inputsValues,
        //     [name]: value
        // });
    };
    return { inputsValues, handleOnChange};
};

