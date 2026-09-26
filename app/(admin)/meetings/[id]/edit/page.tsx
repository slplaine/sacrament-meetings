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