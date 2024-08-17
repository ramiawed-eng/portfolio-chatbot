import Navigation from "@/components/navigation/navigation-full";
import NavigationMenu from "@/components/navigation/navigation-menu";

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
    </>
  );
}
