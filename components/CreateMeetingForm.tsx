'use client';

import { useActionState } from 'react';
import { createMeeting, State } from '@/lib/actions';

const initialState: State = { 
  message: null,
  errors: {},
};

export default function NewMeetingPage() {
    const [state, formAction, isPending] = useActionState(createMeeting, initialState);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Create Meeting
      </h1>

      <form action={formAction} className ="flex flex-col gap-4 max-w-md">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          className="border p-2"
        />
        <div id="date-error" aria-live="polite">
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
          id="speaker1Name"
          name="speaker1Name"
          type="text"
          className="border p-2"
        />
        <div id="speaker1Name-error" aria-live="polite">
            {state.errors?.speaker1Name?.map((error) => (
                <p
                    key={error}
                    className="text-red-500 text-sm"
                >
                 {error}
                </p>
        ))}
        </div>

        <label htmlFor="speaker2Name">Speaker 2</label>
        <input
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
          className="bg-blue-600 text-white p-2 rounded"
        >
          Save Meeting
        </button>
      </form>
    </div>
  );
}