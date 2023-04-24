import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <ul className="flex flex-row justify-center gap-5 mb-5">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/posts">
          <li>Blog Posts</li>
        </Link>
      </ul>
    </>
  );
};

export default Navbar;
