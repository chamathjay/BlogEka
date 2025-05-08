import React, { useState } from 'react';
import { User, Mail, KeyRound, Eye, EyeOff } from 'lucide-react';

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    // type: string;
    id?: string;
    value?: string;
    placeholder: string;
}

const InputBox: React.FC<InputBoxProps> = ({ name, type, id, value, placeholder }) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    return (
        <div className='flex items-center relative'>
            <input
                name={name}
                type={type === "password" ? (passwordVisibility ? "text" : "password") : type}
                placeholder={placeholder}
                id={id}
                defaultValue={value}
                className="input-box pl-12 mb-6"
            />

            {type == "text" && <User className='absolute left-3 text-gray-500' />}

            {type == "email" && <Mail className='absolute left-3 text-gray-500' />}

            {type === "password" && (<KeyRound className='absolute left-3 text-gray-500' />)}

            {type === "password" && (
                passwordVisibility ?
                    <EyeOff
                        className='absolute right-3 cursor-pointer'
                        onClick={togglePasswordVisibility}
                    /> :
                    <Eye
                        className='absolute right-3 cursor-pointer'
                        onClick={togglePasswordVisibility}
                    />
            )}

        </div>
    );
};

export default InputBox;