import Link from 'next/link';
import { auth } from '@/auth';
import { SignOutButton } from './SignOutButton';

export default async function Header() {
  const today = new Date().toLocaleDateString();

  const session = await auth();

  return (
    <header className="bg-blue-700 text-white p-4">
      <h1 className="text-2xl font-bold text-center">
        Springfield Ward
      </h1>

      <p className="text-center mb-4">
        {today}
      </p>

      <nav className="flex justify-center gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/meetings" className="hover:underline">
          Meetings
        </Link>

        {!session?.user ? (
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        ) : (
          <SignOutButton />
        )}
      </nav>
    </header>
  );
}