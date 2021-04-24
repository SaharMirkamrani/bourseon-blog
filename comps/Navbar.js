import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' '}
        <Link href="/about">
          <a>About</a>
        </Link>
        {' '}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
    </div>
  );
};


export default Navbar;
