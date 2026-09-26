import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="p-6">
      <h1>Meeting not found</h1>
      <Link href="/meetings" className="text-blue-500 hover:underline">
        Back to Meetings
      </Link>
    </div>
  );
}