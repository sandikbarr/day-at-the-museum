import { Card } from './card';

import styles from './card-collection.module.css';

/* eslint-disable-next-line */
export interface CardCollectionProps {
  children?: React.ReactNode;
}

export function CardCollection({children}: CardCollectionProps) {
  return (
    <div className={styles.cardCollection}>
      {children}
    </div>
  );
}

export default CardCollection;
