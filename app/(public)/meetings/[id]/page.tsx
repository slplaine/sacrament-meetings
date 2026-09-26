import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";

export default async function MeetingPage({
    params,
}: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const meetingId = Number(id);

    if (Number.isNaN(meetingId)) {
        throw new Error('Invalid meeting id');
    }

const meeting = await getMeetingById(meetingId);
    return (
        <div>
            <MeetingDetail meeting={meeting!} />
        </div>
        );
}