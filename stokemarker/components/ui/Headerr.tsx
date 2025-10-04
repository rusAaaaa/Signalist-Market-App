import Link from "next/link";
import Image from "next/image";
import UserDropdown from "../UserDripdown";
import NavItems from "../NavItems";
export default function Headerr() {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/public/assets/icons/logo.svg"
            alt="Signalist Logo"
            width="140"
            height="32"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
}
