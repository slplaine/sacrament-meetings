import { createMeeting } from '@/lib/actions';
export default function NewMeetingPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Create Meeting
      </h1>

      <form action={createMeeting} className ="flex flex-col gap-4 max-w-md">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          className="border p-2"
        />

        <label htmlFor="presiding">Presiding</label>
        <input
          id="presiding"
          name="presiding"
          type="text"
          className="border p-2"
        />

        <label htmlFor="conducting">Conducting</label>
        <input
          id="conducting"
          name="conducting"
          type="text"
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Save Meeting
        </button>
      </form>
    </div>
  );
}