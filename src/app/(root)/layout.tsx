import Navigation from "@/components/navigation/navigation-full";
import NavigationMenu from "@/components/navigation/navigation-menu";
import FooterSection from "@/components/sections/footer";
import NotesSection from "@/components/sections/notes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <NavigationMenu />
      {children}
      <NotesSection />
      <FooterSection />
    </>
  );
}
