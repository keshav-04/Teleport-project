import "./globals.css";

import { ThemeProvider } from "../components/comp";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

export const metadata = {
  title: "KAYAK",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <ThemeProvider>
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex h-full w-full">
            <Sidebar />
            <div className="flex w-full">{children}</div>
          </div>
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
