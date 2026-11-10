import type { ReactNode } from 'react';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "AchieveYou",
  description: "Платформа для демонстрации достижений",
  icons: {
    icon: "/favicon.svg",
  },
};


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}