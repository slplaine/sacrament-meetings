'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import {
  updateMeeting as updateMeetingDb,
  deleteMeeting as deleteMeetingDb,
} from '@/lib/meetings-db';

const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  presiding: z.string().min(2, 'Presiding is required'),
  conducting: z.string().min(2, 'Conducting is required'),
});
export async function createMeeting(formData: FormData) {
  const raw = {
    date: formData.get('date'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
  };

  const validated = MeetingFormSchema.safeParse(raw);

  if (!validated.success) {
    console.error(validated.error.flatten().fieldErrors);
    throw new Error('Invalid meeting data');
  }

  const data = validated.data;
  

  console.log('Meeting data received:', data);
}

export async function updateMeeting(
  id: number,
  formData: FormData
) {
  const raw = {
    date: formData.get('date'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
  };

  const validated = MeetingFormSchema.safeParse(raw);

  if (!validated.success) {
    console.error(validated.error.flatten().fieldErrors);
    throw new Error('Invalid meeting data');
  }

  await updateMeetingDb(id, {
    date: validated.data.date,
    presiding: validated.data.presiding,
    conducting: validated.data.conducting,
  });
  revalidatePath('/meetings');
  redirect('/meetings');
  console.log('Updating meeting:', id);
}

export async function deleteMeeting(id: number) {
  await deleteMeetingDb(id);
  revalidatePath('/meetings'); 
  redirect('/meetings');
  console.log('Deleting meeting:', id);
}