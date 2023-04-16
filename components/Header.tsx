import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 text-bold px-10 py-5">
      <div className="flex items-center justify-between space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://res.cloudinary.com/demo/image/fetch/https://lh3.googleusercontent.com/ogw/AOh-ky2yQjJy4pwRbngGun8YFnBA2Mk0sUTyXFhtQ1Mthg=s32-c-mo"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1 className="">JABBAR ++</h1>
      </div>

      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Check out my website
        </Link>
      </div>
    </header>
  );
}

export default Header;
