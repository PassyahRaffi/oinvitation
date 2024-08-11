import Link from "next/link";

export default function Footer() {
  const socialMedia = [
    {
      title: "Gmail",
      url: "www.google.com",
    },
    {
      title: "Instagram",
      url: "www.google.com",
    },
    {
      title: "Whatsapp",
      url: "www.google.com",
    },
  ];
  return (
    <footer className="container max-w-[1400px]">
      <div className="flex justify-between gap-10 px-4">
        <div>
          <Link href={"/"}>© 2024 - 2025 oinvitation.com</Link>
        </div>
        
        <ul className="flex gap-5">
          {socialMedia.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
