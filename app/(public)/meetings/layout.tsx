import NavLinks from "@/components/NavLinks";

type LayoutProps = {
    children: React.ReactNode;
    };

export default function MeetingsLayout({
    children,
    }: LayoutProps) {
        return (
            <div>
                <NavLinks />
                {children}
            </div>
            );
}
