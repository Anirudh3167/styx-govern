import React, { useEffect, useState } from 'react';
import { Input, Button } from '@nextui-org/react'; // Assuming you have these components defined
import { POSTFetch } from '@/lib/FrontendUtils';
import { signIn } from 'next-auth/react';

const VerifyUserComponent = ({ email, password, onGoBack }: { email: string, password: string, onGoBack: () => void }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

    useEffect(()=>{
        console.log(email, password);
    },[]);

  const handleVerify = async () => {
    const res = await POSTFetch('/api/auth/register/verify', { email, verificationCode });
    if (res.status) {
        if (!res.verified) {alert('Invalid verification code'); return;}
      setIsVerified(true);
      await signIn('credentials', { email, password, callbackUrl: '/' });
    //   setTimeout(() => {
    //         const signInFunc = async () => {
    //         }
    //         signInFunc();
    //   }, 2000); // Give 2 seconds delay before redirecting
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-black mb-6">Verify Your Account</h2>
      {isVerified ? (
        <p className="text-green-500 font-bold mb-4">Your account has been verified!</p>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            variant="bordered"
            label="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="mb-4"
            required
          />
          <div className='flex flex-row justify-center gap-4'>
          <Button type="button" className="w-1/3 min-w-20 bg-blue-700 text-white" onClick={handleVerify}>
            Verify
          </Button>
          <Button type="button" variant="bordered" className="w-1/3 min-w-20" onClick={onGoBack}>
            Go Back
          </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default VerifyUserComponent;