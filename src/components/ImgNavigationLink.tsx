import Image from 'next/image';
import { Link } from '../navigation';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ImgNavigationLink({ src, alt, className }: Props) {
  return (
    <Link href="/" passHref className={className + ' relative'}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ cursor: 'pointer' }}
      />
    </Link>
  );
}
