import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="container max-w-[1400px] px-4">
      <h1>contact pages</h1>

      <div className="grid my-10">
        <Link href="/contact">Contact</Link>
        <Link href="/blogs">Blogs</Link>
      </div>

    </main>
  );
}
