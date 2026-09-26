import { getMeetingById } from '@/lib/meetings-db';
import { updateMeeting } from '@/lib/actions';
export default async function EditMeetingPage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;
  const id = Number(params.id);

  const meeting = await getMeetingById(id);
  if (!meeting) {
    return <div>Meeting not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Edit Meeting
      </h1>

      <form action={updateMeeting.bind(null, id)} className="flex flex-col gap-4 max-w-md">
        <label htmlFor="date">Date</label>

        <input
          defaultValue={meeting.date}
          id="date"
          name="date"
          type="date"
          className="border p-2"
        />

        <label htmlFor="presiding">Presiding</label>

        <input
          defaultValue={meeting.presiding}
          id="presiding"
          name="presiding"
          type="text"
          className="border p-2"
        />

        <label htmlFor="conducting">Conducting</label>

        <input
          defaultValue={meeting.conducting}
          id="conducting"
          name="conducting"
          type="text"
          className="border p-2"
        />
        <label htmlFor="announcement">Announcements</label>
        <input
          defaultValue={meeting.announcements?.[0] ?? ''}
          id="announcement"
          name="announcement"
          type="text"
          className="border p-2"
        />

        <label htmlFor="openingHymnNumber">Opening Hymn Number</label>
        <input
          defaultValue={meeting.openingHymn.number}
          id="openingHymnNumber"
          name="openingHymnNumber"
          type="number"
          className="border p-2"
        />

        <label htmlFor="openingHymnTitle">Opening Hymn Title</label>
        <input
          defaultValue={meeting.openingHymn.title}
          id="openingHymnTitle"
          name="openingHymnTitle"
          type="text" 
          className="border p-2"
        />
        <label htmlFor="openingPrayer">Opening Prayer</label>
        <input
          defaultValue={meeting.openingPrayer}
          id="openingPrayer"
          name="openingPrayer"
          type="text"
          className="border p-2"
        />

        <label htmlFor="sacramentHymnNumber">Sacrament Hymn Number</label>
        <input
          defaultValue={meeting.sacramentHymn.number}
          id="sacramentHymnNumber"
          name="sacramentHymnNumber"
          type="number"
          className="border p-2"
        />  

        <label htmlFor="sacramentHymnTitle">Sacrament Hymn Title</label>
        <input
          defaultValue={meeting.sacramentHymn.title}
          id="sacramentHymnTitle"
          name="sacramentHymnTitle"
          type="text"
          className="border p-2"
        />
        <label htmlFor="speaker1Name">Speaker 1</label>
        <input
          defaultValue={meeting.speakers?.[0]?.name ?? ''}
          id="speaker1Name"
          name="speaker1Name"
          type="text"
          className="border p-2"
        />

        <label htmlFor="speaker2Name">Speaker 2</label>
        <input
          defaultValue={meeting.speakers?.[1]?.name ?? ''}
          id="speaker2Name"
          name="speaker2Name"
          type="text"
          className="border p-2"
        />
        <label htmlFor="closingHymnNumber">Closing Hymn Number</label>
        <input
          defaultValue={meeting.closingHymn.number}
          id="closingHymnNumber" 
          name="closingHymnNumber"
          type="number"
          className="border p-2"
        />

        <label htmlFor="closingHymnTitle">Closing Hymn Title</label>
        <input
          defaultValue={meeting.closingHymn.title}
          id="closingHymnTitle"
          name="closingHymnTitle" 
          type="text"
          className="border p-2"
        />

        <label htmlFor="closingPrayer">Closing Prayer</label>
        <input
          defaultValue={meeting.closingPrayer}
          id="closingPrayer"  
          name="closingPrayer"
          type="text"
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded"
        >
          Update Meeting
        </button>
      </form>
    </div>
  );
}