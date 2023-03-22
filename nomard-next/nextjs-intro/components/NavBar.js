import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  console.log(router);

  return (
    <nav className={"nav"}>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/about"
        className={router.pathname === "/about" ? "active" : ""}
      >
        About
      </Link>
      {/* <style jsx>{``}</style> */}
    </nav>
  );
}
