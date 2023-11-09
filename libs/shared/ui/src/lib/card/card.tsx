import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  objectID: number;
  title: string;
  primaryImage?: string;
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
    <div key={props.objectID} className={styles.card}>
      <div>
        <h2>{props.title}</h2>
        {props.primaryImage && (
          <img
            width="400"
            src={props.primaryImage}
            alt={props.objectName}
          />
        )}
      </div>
      <div>
        <p>
          {props.artistDisplayName
            ? props.artistDisplayName
            : 'artist unknown'}
        </p>
        {props.artistDisplayBio && (
          <p>{props.artistDisplayBio}</p>
        )}
        {props.objectDate && <p>{props.objectDate}</p>}
        {props.medium && <p>{props.medium}</p>}
        <ul>
          {props.department && <li>{props.department}</li>}
          {props.culture && <li>{props.culture}</li>}
          {props.period && <li>{props.period}</li>}
        </ul>
        {props.creditLine && <p>{props.creditLine}</p>}
      </div>
    </div>
  );
}

export default Card;
