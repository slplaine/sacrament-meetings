import { deleteMeeting } from '@/lib/actions';
import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";
type Props = {
    meeting: SacramentMeeting;
};

export default function MeetingCard({ meeting }: Props) {
    return (
        <div className="border rounded p-4 mb-4 shadow">
            <h2 className="text-xl font-bold mb-2">{meeting.date}</h2>      
            <p className="mb-2">Presiding: {meeting.presiding}</p>
            <p className="mb-2">Conducting: {meeting.conducting}</p>
            <p className="mb-2">Opening Hymn: {meeting.openingHymn.number} - {meeting.openingHymn.title}</p>
            <p className="mb-2">Sacrament Hymn: {meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</p>
            <p className="mb-2">Closing Hymn: {meeting.closingHymn.number} - {meeting.closingHymn.title}</p>
            <div className="flex gap-4 mt-4">
                <Link href={`/meetings/${meeting.id}/edit`} className="text-blue-500 hover:underline">Edit</Link>
                <form action= {async () => {'use server'; await deleteMeeting(meeting.id);}}>
                    <button className="text-red-600 hover:underline">Delete</button>
                </form>
            </div>
            <Link href={`/meetings/${meeting.id}`} className="text-blue-500 hover:underline">View Details</Link>
        </div>
    );
}   
