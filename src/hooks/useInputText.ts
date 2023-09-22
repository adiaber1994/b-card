import { useState } from "react";


interface returnType {
    value:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}



export function useInputText(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);


    }

    return {
        value,
        onChange: handleChange
    }
}