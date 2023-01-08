import Link from 'next/link';

type ItemNavbar = {
  link: string;
  text: string;
};

export default function Navbar() {
  const itemsNavbar: ItemNavbar[] = [
    { link: '/', text: 'Home' },
    {
      link: '/about',
      text: 'About',
    },
    {
      link: '/contact',
      text: 'Contact',
    },
  ];
  return (
    <nav>
      {itemsNavbar.map((item) => (
        <Link href={item.link} key={item.link}>
          {item.text}
        </Link>
      ))}
    </nav>
  );
}
