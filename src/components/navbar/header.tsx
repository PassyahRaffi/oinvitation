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
    <nav>
      <div className="flex justify-between gap-10">
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
