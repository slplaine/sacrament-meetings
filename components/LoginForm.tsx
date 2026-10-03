'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';

export function LoginForm() {
  const [errorMessage, formAction, isPending] =
    useActionState(authenticate, undefined);

  return (
    <form action={formAction}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full border p-2"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full border p-2"
      />

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        {isPending ? 'Signing In...' : 'Sign In'}
      </button>

      {errorMessage && (
        <p className="text-red-500">
          {errorMessage}
        </p>
      )}
    </form>
  );
}