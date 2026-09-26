'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6">
      <h2>Something went wrong</h2>

      <button onClick={() => reset()}>
        Try Again
      </button>

      <br />

      <Link href="/meetings" className="text-blue-500 hover:underline">
        Back to Meetings
      </Link>
    </div>
  );
}