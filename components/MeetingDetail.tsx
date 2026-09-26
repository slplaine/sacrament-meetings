import { SacramentMeeting } from "@/lib/types";

type Props = {
    meeting: SacramentMeeting;
};
export default function MeetingDetail({ meeting }: Props) {
    return (
        <div>
            <h1>{meeting.date}</h1>
            <p>Presiding: {meeting.presiding}</p>
            <p>Conducting: {meeting.conducting}</p>
            <p>Opening Hymn: {meeting.openingHymn.number} - {meeting.openingHymn.title}</p>
            <p>Opening Prayer: {meeting.openingPrayer}</p>
            <p>Ward Business: {meeting.wardBusiness.map(b => b.description).join(', ')}</p>
            <p>Stake Business: {meeting.stakeBusiness ? 'Yes' : 'No'}</p>
            <p>Sacrament Hymn: {meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</p>
            <p>Speakers: {meeting.speakers.map(s => `${s.name} (${s.type})`).join(', ')}</p>
            <p>Closing Hymn: {meeting.closingHymn.number} - {meeting.closingHymn.title}</p>
            <p>Closing Prayer: {meeting.closingPrayer}</p>
            <p>Announcements: {meeting.announcements?.join(', ')}</p> 
        </div>
    );
}