import styles from './spinner.module.css';

/* eslint-disable-next-line */
export interface SpinnerProps {}

export function Spinner(props: SpinnerProps) {
  return (
    <div className={styles['spinner']}/>
  );
}

export default Spinner;
