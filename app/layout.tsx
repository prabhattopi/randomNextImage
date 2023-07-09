
import { AppContextProvider } from "./Appcontext";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://random-next-image-k1zfx308t-prabhattopi.vercel.app/"),
  title: {
    default: "Random Image",
    template: `%s | Explorer`,
  },
  description: "Randomly Image with data",
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