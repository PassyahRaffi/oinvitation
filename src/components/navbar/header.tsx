import Link from "next/link";

export default function Header() {
  const nav = [
    /*     {
      title: "OINVITATION",
      path: "/",
    }, */
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "blogs",
      path: "/blogs",
    },
  ];
  return (
    <nav className="container max-w-[1400px]">
      <div className="flex justify-between gap-10 px-4">
        <div>
          <Link href={"/"}>OINVITATION</Link>
        </div>
        <ul className="flex gap-5">
          {nav.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
