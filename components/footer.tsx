import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col w-screen mx-5 mb-6 px-5 xl:px-56 bg-white xl:mx-60 ">
      <div className=" mt-12 mb-6 pb-6 border-solid border-b xl:flex xl:justify-between xl:items-center">
        <div className=" xl:flex items-center">
          <h3>Logo</h3>
        </div>

        <div className="flex flex-col pt-6 gap-2 xl:flex xl:flex-row xl:gap-7 xl:pt-0">
          <Link
            className="text-sm font-medium text-gray-700 hover:underline"
            href="/"
            title="ABOUT US"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:underline"
            href="/"
            title="Terms of service"
          >
            Advertising Terms
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:underline"
            href="/"
            title="Privacy policy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      <aside>
        <p className="text-sm text-gray-500">© 2024 All rights reserved.</p>
      </aside>
    </footer>
  );
}
