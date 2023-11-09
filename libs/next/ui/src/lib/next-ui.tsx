import styles from './next-ui.module.css';

/* eslint-disable-next-line */
export interface NextUiProps {}

export function NextUi(props: NextUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NextUi!</h1>
    </div>
  );
}

export default NextUi;
