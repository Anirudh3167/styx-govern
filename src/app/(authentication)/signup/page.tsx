"use client";
// pages/signup.tsx
import { useState } from 'react';
import RegisterUserComponent from '@/app/(authentication)/signup/RegisterUserComponent';
import VerifyUserComponent from '@/app/(authentication)/signup/VerifyUserComponent';

const Signup = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [currStep, setCurrStep] = useState<number>(0);

    const onRegister = ({ email, password }: { email: string, password: string }) => {
        setEmail(email);
        setPassword(password);
        setCurrStep(1);
        console.log("Updating the details from the child component and passing it to other components: ", { email, password });
    }
    const goBack = () => {
        setCurrStep(0);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {currStep === 0 ? <RegisterUserComponent onRegister={onRegister} />
            : currStep === 1 ? <VerifyUserComponent email={email} password={password} onGoBack={goBack} />
            : <></>    
        }
        </div>
    );
};

export default Signup;