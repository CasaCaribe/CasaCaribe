import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casa Caribe",
  description: "Welcome to Casa Caribe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
