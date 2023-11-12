import Link from 'next/link';
import styles from './card.module.css';

export interface CardProps {
  objectID: number;
  title: string;
  href: string;
  primaryImage?: string;
  imageWidth?: string;
  objectName?: string;
  artistDisplayName?: string;
  artistDisplayBio?: string;
  objectDate?: string;
  medium?: string;
  department?: string;
  culture?: string;
  period?: string;
  creditLine?: string;
}

export function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <div className="flex items-center flex-col">
        <Link href={props.href} className="flex flex-col items-center">
          <h2 className="text-xl">{props.title}</h2>
          {props.primaryImage && (
            <img
              width={props.imageWidth || "400"}
              src={props.primaryImage}
              alt={props.objectName}
            />
          )}
        </Link>
        <p>
          {props.artistDisplayName && (<>artist: {props.artistDisplayName}</>)}
        </p>
        <p>
          {props.department && (<>department: {props.department}</>)}
        </p>
      </div>
    </div>
  );
}

export default Card;
