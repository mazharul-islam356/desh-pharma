import RootLayout from "./RootLayout";

// app/layout.js
export const metadata = {
  title: "Desh Pharma",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <RootLayout></RootLayout>
      <body>{children}</body>
    </html>
  );
}
