
import { AppContextProvider } from "./Appcontext";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://random-next-image.vercel.app"),
  title: {
    default: "Random Image",
    template: `%s | Explorer`,
  },
  description: "Explore the latest posts from my travel blog.",
  verification: {
    google: "google-site-verification=123123123",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
    
        {/* Padding for Navbar */}
        <AppContextProvider>
        <div>{children}</div>
        </AppContextProvider>
     
      </body>
    </html>
  );
}