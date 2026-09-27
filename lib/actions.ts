'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import {
  addMeeting,
  updateMeeting as updateMeetingDb,
  deleteMeeting as deleteMeetingDb,
} from '@/lib/meetings-db';


const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  presiding: z.string().min(2, 'Presiding is required'),
  conducting: z.string().min(2, 'Conducting is required'),

  announcement: z.string(),

  openingHymnNumber: z.string().min(1),
  openingHymnTitle: z.string().min(1),
  openingPrayer: z.string().min(1),

  sacramentHymnNumber: z.string().min(1),
  sacramentHymnTitle: z.string().min(1),

  speaker1Name: z.string(),
  speaker2Name: z.string(),

  closingHymnNumber: z.string().min(1),
  closingHymnTitle: z.string().min(1),
  closingPrayer: z.string().min(1),
});

export async function createMeeting(
  prevState: State,
  formData: FormData
): Promise<State> {
  const raw = {
    date: formData.get('date'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),

    announcement: formData.get('announcement'),

    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: formData.get('openingHymnTitle'),
    openingPrayer: formData.get('openingPrayer'),

    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: formData.get('sacramentHymnTitle'),

    speaker1Name: formData.get('speaker1Name'),
    speaker2Name: formData.get('speaker2Name'),

    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: formData.get('closingHymnTitle'),
    closingPrayer: formData.get('closingPrayer'),
    };
    


  const validated = MeetingFormSchema.safeParse(raw);

  if (!validated.success) {
    return {
        errors: validated.error.flatten().fieldErrors,
        message: 'Missing or invalid fields.',
    };
  }

  const data = validated.data;

try {
  await addMeeting({
    date: data.date,
    meetingType: 'regular',
    presiding: data.presiding,
    conducting: data.conducting,

    announcements: data.announcement
        ? [data.announcement]
        : [],

    openingHymn: {
        number: Number(data.openingHymnNumber),
        title: data.openingHymnTitle,
    },

    openingPrayer: data.openingPrayer,

    wardBusiness: [],

    stakeBusiness: false,

    sacramentHymn: {
        number: Number(data.sacramentHymnNumber),
        title: data.sacramentHymnTitle,
    },

    speakers: [
    ...(data.speaker1Name
        ? [{
            name: data.speaker1Name,
            topic: '',
            type: 'speaker' as const
        }]
      : []),

    ...(data.speaker2Name
        ? [{
            name: data.speaker2Name,
            topic: '',
            type: 'speaker' as const
        }]
      : []),
    ],

    closingHymn: {
        number: Number(data.closingHymnNumber),
        title: data.closingHymnTitle,
    },

    closingPrayer: data.closingPrayer,
 }); 

}catch (error) {
    console.error(error);
    return {
    message: 'Database Error. Failed to create meeting.',
    };
}
 revalidatePath('/meetings');
 redirect('/meetings');
}

export type State = {
  errors?: {
    date?: string[];
    presiding?: string[];
    conducting?: string[];

    announcement?: string[];

    openingHymnNumber?: string[];
    openingHymnTitle?: string[];
    openingPrayer?: string[];

    sacramentHymnNumber?: string[];
    sacramentHymnTitle?: string[];

    speaker1Name?: string[];
    speaker2Name?: string[];

    closingHymnNumber?: string[];
    closingHymnTitle?: string[];
    closingPrayer?: string[];
  };

  message?: string | null;
};

export async function updateMeeting(
  id: number,
  prevState: State,
  formData: FormData
): Promise<State> {
  const raw = {
  date: formData.get('date'),
  presiding: formData.get('presiding'),
  conducting: formData.get('conducting'),

  announcement: formData.get('announcement'),

  openingHymnNumber: formData.get('openingHymnNumber'),
  openingHymnTitle: formData.get('openingHymnTitle'),
  openingPrayer: formData.get('openingPrayer'),

  sacramentHymnNumber: formData.get('sacramentHymnNumber'),
  sacramentHymnTitle: formData.get('sacramentHymnTitle'),

  speaker1Name: formData.get('speaker1Name'),
  speaker2Name: formData.get('speaker2Name'),

  closingHymnNumber: formData.get('closingHymnNumber'),
  closingHymnTitle: formData.get('closingHymnTitle'),
  closingPrayer: formData.get('closingPrayer'),
};

  const validated = MeetingFormSchema.safeParse(raw);

  if (!validated.success) {
    return {
        errors: validated.error.flatten().fieldErrors,
        message: 'Missing or invalid fields.',
    };
  }
try {
 await updateMeetingDb(id, {
  date: validated.data.date,
  presiding: validated.data.presiding,
  conducting: validated.data.conducting,

  announcements: validated.data.announcement
    ? [validated.data.announcement]
    : [],

  openingHymn: {
    number: Number(validated.data.openingHymnNumber),
    title: validated.data.openingHymnTitle,
  },

  openingPrayer: validated.data.openingPrayer,

  sacramentHymn: {
    number: Number(validated.data.sacramentHymnNumber),
    title: validated.data.sacramentHymnTitle,
  },

  speakers: [
    ...(validated.data.speaker1Name
      ? [{
          name: validated.data.speaker1Name,
          topic: '',
          type: 'speaker' as const,
        }]
      : []),

    ...(validated.data.speaker2Name
      ? [{
          name: validated.data.speaker2Name,
          topic: '',
          type: 'speaker' as const,
        }]
      : []),
  ],

  closingHymn: {
    number: Number(validated.data.closingHymnNumber),
    title: validated.data.closingHymnTitle,
  },

  closingPrayer: validated.data.closingPrayer,
});
  
  console.log('Updating meeting:', id);
} catch (error) {
  console.error(error);

  return {
    message: 'Database Error. Failed to update meeting.',
  };
}
revalidatePath('/meetings');
redirect('/meetings');
}
export async function deleteMeeting(id: number) {
  try {
    await deleteMeetingDb(id);
    
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete meeting');
}
revalidatePath('/meetings');
redirect('/meetings');
}