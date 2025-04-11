import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputBoxProps {
    name: string;
    type: string;
    id?: string;
    value?: string;
    placeholder: string;
}

const InputBox: React.FC<InputBoxProps> = ({ name, type, id, value, placeholder }) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    return (
        <div>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                id={id}
                defaultValue={value}
                className="input-box"
            />

            {
                type == "password" ?
                    <Eye className='left-[auto] right-4 cursor-pointer' />
                    : ""
            }

        </div>
    )
}

export default InputBox;