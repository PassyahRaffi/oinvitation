import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Next App",
  description: "Description Home next app ray1234",
};

export default function Home() {
  return (
    <main className="bg-black text-white container max-w-[1400px] px-4 min-h-screen">
      <h1>Home pages</h1>
    </main>
  );
}
