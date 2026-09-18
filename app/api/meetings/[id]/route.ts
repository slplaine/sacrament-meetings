import { getMeetingById } from "@/lib/meetings-db";


export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
    ) {
        const { id: paramId } = await params;
        const id = Number(paramId);
        if (Number.isNaN(id)) {
            return Response.json({ error: "Invalid id" }, { status: 400 });
        }
        const meeting = getMeetingById(id);
        if (!meeting) {
            return Response.json({ error: "Meeting not found" }, { status: 404 });
        }
        return Response.json(meeting);

}