"use client";
// pages/login.tsx
import { useEffect, useState } from 'react';
import { Input, Button, Checkbox, Link } from '@nextui-org/react';
import { signIn } from 'next-auth/react';

const Login = () => {
  const [urlParams, setUrlParams] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  
  useEffect(()=>{
    setUrlParams( (new URLSearchParams(window.location.search)).get('callbackUrl') );
  },[])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, termsAccepted });
    signIn('credentials', { email, password, callbackUrl: urlParams??'/' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-black mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <Input
            variant="bordered"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
            required
          />
          <Input
            variant="bordered"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
            required
          />
          <Checkbox
            isSelected={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mb-4"
          >
            Remember me
          </Checkbox>
          <Button type="submit" color="primary" className="w-full text-white">
            Login
          </Button>
        </form>
        <p className="mt-4 text-center">
          New user?{' '}
          <Link href="/signup" color="primary" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;