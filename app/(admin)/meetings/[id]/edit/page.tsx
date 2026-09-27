import { getMeetingById } from '@/lib/meetings-db';
import { notFound } from 'next/navigation';
import EditMeetingForm from '@/components/EditMeetingForm';

export default async function EditMeetingPage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;
  const id = Number(params.id);

  const meeting = await getMeetingById(id);

  if (!meeting) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Edit Meeting
      </h1>

      <EditMeetingForm
        meeting={meeting}
        id={id}
      />
    </div>
  );
}