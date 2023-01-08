import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  link: string;
  text: string;
};

const activeStyle = {
  color: '#0070f3',
  textDecoration: 'underline',
};

const generalStyle = {
  marginRight: '10px',
};

export default function ActiveLink({ link, text }: Props) {
  const { asPath } = useRouter();
  const styles =
    asPath === link ? { ...generalStyle, ...activeStyle } : generalStyle;

  return (
    <Link style={styles} href={link}>
      {text}
    </Link>
  );
}
