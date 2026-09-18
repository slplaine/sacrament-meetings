import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Sacrament Meeting Planner</h1>
      <Image src="/globe.svg" alt="Globe icon" width={150} height={150} priority />
      <p className="text-gray-600 mb-8">Manage and view sacrament meeting programs.</p>
      <button className="bg-blue-700 text-white p-3 rounded px-6 py-3 font-semibold shadow-lg">
        <Link href="/meetings">
          View Meetings
        </Link>
      </button>
    </main>
  );
}
