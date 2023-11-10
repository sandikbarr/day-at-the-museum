import styles from './page.module.css';

export default async function Index() {
  return (
    <div className={styles.page}>
      <h1>
        <span> Hello! </span>
        Welcome to Your Day At The Museum
      </h1>
    </div>
  );
}
