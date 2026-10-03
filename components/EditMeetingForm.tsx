'use client';

import { useActionState } from 'react';
import { updateMeeting, State } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

const initialState: State = {
  message: null,
  errors: {},
};

export default function EditMeetingForm(
  {
    meeting,
    id,
  }: {
    meeting: SacramentMeeting;
    id: number;
  }
) {
  const updateMeetingWithId =
    updateMeeting.bind(null, id);

  const [state, formAction, isPending] =
    useActionState(updateMeetingWithId, initialState);

    return (
    <div className="p-6">
      

      <form action={formAction} className="flex flex-col gap-4 max-w-md">
       <label htmlFor="date">Date</label>

        <input
            defaultValue={meeting.date}
            id="date"
            name="date"
            type="date"
            className="border p-2"
            aria-describedby="date-error"
        />

        <div
            id="date-error"
            aria-live="polite"
        >
            {state.errors?.date?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="presiding">Presiding</label>

        <input
          defaultValue={meeting.presiding}
          id="presiding"
          name="presiding"
          type="text"
          className="border p-2"
        />
        <div id="presiding-error" aria-live="polite">
            {state.errors?.presiding?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="conducting">Conducting</label>

        <input
          defaultValue={meeting.conducting}
          id="conducting"
          name="conducting"
          type="text"
          className="border p-2"
        />

        <div id="conducting-error" aria-live="polite">
            {state.errors?.conducting?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="announcement">Announcements</label>
        <input
          defaultValue={meeting.announcements?.[0] ?? ''}
          id="announcement"
          name="announcement"
          type="text"
          className="border p-2"
        />
        <div id="announcement-error" aria-live="polite">
            {state.errors?.announcement?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="openingHymnNumber">Opening Hymn Number</label>
        <input
          defaultValue={meeting.openingHymn.number}
          id="openingHymnNumber"
          name="openingHymnNumber"
          type="number"
          className="border p-2"
        />  
        <div id="openingHymnNumber-error" aria-live="polite">
            {state.errors?.openingHymnNumber?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="openingHymnTitle">Opening Hymn Title</label>
        <input
          defaultValue={meeting.openingHymn.title}
          id="openingHymnTitle"
          name="openingHymnTitle"
          type="text" 
          className="border p-2"
        />
        <div id="openingHymnTitle-error" aria-live="polite">
            {state.errors?.openingHymnTitle?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="openingPrayer">Opening Prayer</label>
        <input
          defaultValue={meeting.openingPrayer}
          id="openingPrayer"
          name="openingPrayer"
          type="text"
          className="border p-2"
        />
        <div id="openingPrayer-error" aria-live="polite">
            {state.errors?.openingPrayer?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="sacramentHymnNumber">Sacrament Hymn Number</label>
        <input
          defaultValue={meeting.sacramentHymn.number}
          id="sacramentHymnNumber"
          name="sacramentHymnNumber"
          type="number"
          className="border p-2"
        />  
        <div id="sacramentHymnNumber-error" aria-live="polite">
            {state.errors?.sacramentHymnNumber?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="sacramentHymnTitle">Sacrament Hymn Title</label>
        <input
          defaultValue={meeting.sacramentHymn.title}
          id="sacramentHymnTitle"
          name="sacramentHymnTitle"
          type="text"
          className="border p-2"
        />
        <div id="sacramentHymnTitle-error" aria-live="polite">
            {state.errors?.sacramentHymnTitle?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

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
        <div id="speaker2Name-error" aria-live="polite">
            {state.errors?.speaker2Name?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="closingHymnNumber">Closing Hymn Number</label>
        <input
          defaultValue={meeting.closingHymn.number}
          id="closingHymnNumber" 
          name="closingHymnNumber"
          type="number"
          className="border p-2"
        />
        <div id="closingHymnNumber-error" aria-live="polite">
            {state.errors?.closingHymnNumber?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="closingHymnTitle">Closing Hymn Title</label>
        <input
          defaultValue={meeting.closingHymn.title}
          id="closingHymnTitle"
          name="closingHymnTitle" 
          type="text"
          className="border p-2"
        />
        <div id="closingHymnTitle-error" aria-live="polite">
            {state.errors?.closingHymnTitle?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="closingPrayer">Closing Prayer</label>
        <input
          defaultValue={meeting.closingPrayer}
          id="closingPrayer"  
          name="closingPrayer"
          type="text"
          className="border p-2"
        />
        <div id="closingPrayer-error" aria-live="polite">
            {state.errors?.closingPrayer?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

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