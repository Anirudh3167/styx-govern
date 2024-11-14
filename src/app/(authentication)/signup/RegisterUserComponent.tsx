import { POSTFetch } from '@/lib/FrontendUtils';
import { Input, Button, Checkbox, Link } from '@nextui-org/react';
import { useState } from 'react';

export default function RegisterUserComponent({ onRegister }: { onRegister: ({ username, email, password }: { username: string, email: string, password: string }) => void}) {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

    const registerUser = async () => {
        const res = await POSTFetch('/api/auth/register', { username, email, password });
        if (res.status) {
            onRegister({ username, email, password });
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle signup logic here
        console.log({ username, email, password, termsAccepted });
        if (termsAccepted && username && email && password && username !== '' && email !== '' && password !== '') {
        registerUser();
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-black mb-6">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <Input
            variant="bordered"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4"
            required
          />
          <Input
            variant="bordered"
            label="Email"
            type="email"
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
          <div className="flex items-center mb-4">
            <Checkbox
              isSelected={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
            />
            <span>
              I agree to the{' '}
              <Link href="/terms" color="primary" className="underline">
                Terms and Conditions
              </Link>{' '}
              and{' '}
              <Link href="/privacy" color="primary" className="underline">
                Privacy Policy
              </Link>.
            </span>
          </div>
          <Button type="submit" color="primary" className="w-full text-white">
            Sign Up
          </Button>
        </form>
        <p className="mt-4 text-center">
          Already using this?{' '}
          <Link href="/login" color="primary" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    );
}