import CreateMeetingForm from '@/components/CreateMeetingForm';

export default function NewMeetingPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Create Meeting
      </h1>

      <CreateMeetingForm />
    </div>
  );
}