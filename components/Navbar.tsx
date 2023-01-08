import Link from 'next/link';
import ActiveLink from './ActiveLink';

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
        <ActiveLink link={item.link} text={item.text} key={item.link} />
      ))}
    </nav>
  );
}
