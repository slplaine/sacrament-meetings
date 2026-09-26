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

        <label htmlFor="announcement">Announcements</label>
        <input
          id="announcement"
          name="announcement"
          type="text"
          className="border p-2"
        />

        <label htmlFor="openingHymnNumber">Opening Hymn Number</label>
        <input
          id="openingHymnNumber"
          name="openingHymnNumber"
          type="number"
          className="border p-2"
        />

        <label htmlFor="openingHymnTitle">Opening Hymn Title</label>
        <input
          id="openingHymnTitle"
          name="openingHymnTitle"
          type="text" 
          className="border p-2"
        />
        <label htmlFor="openingPrayer">Opening Prayer</label>
        <input
          id="openingPrayer"
          name="openingPrayer"
          type="text"
          className="border p-2"
        />

        <label htmlFor="sacramentHymnNumber">Sacrament Hymn Number</label>
        <input
          id="sacramentHymnNumber"
          name="sacramentHymnNumber"
          type="number"
          className="border p-2"
        />  

        <label htmlFor="sacramentHymnTitle">Sacrament Hymn Title</label>
        <input
          id="sacramentHymnTitle"
          name="sacramentHymnTitle"
          type="text"
          className="border p-2"
        />
        <label htmlFor="speaker1Name">Speaker 1</label>
        <input
          id="speaker1Name"
          name="speaker1Name"
          type="text"
          className="border p-2"
        />

        <label htmlFor="speaker2Name">Speaker 2</label>
        <input
          id="speaker2Name"
          name="speaker2Name"
          type="text"
          className="border p-2"
        />
        <label htmlFor="closingHymnNumber">Closing Hymn Number</label>
        <input
          id="closingHymnNumber" 
          name="closingHymnNumber"
          type="number"
          className="border p-2"
        />

        <label htmlFor="closingHymnTitle">Closing Hymn Title</label>
        <input
          id="closingHymnTitle"
          name="closingHymnTitle" 
          type="text"
          className="border p-2"
        />

        <label htmlFor="closingPrayer">Closing Prayer</label>
        <input
          id="closingPrayer"  
          name="closingPrayer"
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