"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLinks() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-4 p-4">
            <Link href="/" className={pathname === "/" ? "text-blue-500" : "text-gray-500"}>Home</Link>
            <Link href="/meetings" className={pathname === "/meetings" ? "text-blue-500" : "text-gray-500"}>
            Meetings
            </Link>
        </nav>
        );
}