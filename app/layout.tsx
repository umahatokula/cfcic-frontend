import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Provider from "./Provider";
import toast, { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christ Family Ministry",
  description: "...a happy and successful people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Provider>
          <div className="w-full flex justify-center bg-[#FBFBFB]">
            {/* <Alert /> */}
            <main className="w-full laptop:w-[550px] desktop:w-[600px] min-h-screen shadow bg-white text-gray-800 pb-20">
              {children}
            </main>
          </div>
          <Toaster position="top-center" />
        </Provider>
      </body>
    </html>
  );
}
