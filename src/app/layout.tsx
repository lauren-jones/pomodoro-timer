import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-red-400 to-blue-400 h-screen p-10">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
