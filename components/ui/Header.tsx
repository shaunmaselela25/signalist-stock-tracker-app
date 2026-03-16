import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import UsersDropdown from "./UserDropdown"

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" aria-label="Signalist home">
          <Image
            src="/assets/icons/logo.svg"
            alt="signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
            priority
          />
        </Link>
        <nav className="hidden sm:block">
            <NavItems initialStocks={[]} />
        </nav>
        <UsersDropdown />
        
      </div>
    </header>
  )
}

export default Header
