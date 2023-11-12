'use client';

import {
  ReadonlyURLSearchParams,
  useSearchParams,
  usePathname,
  useRouter,
} from 'next/navigation';

import styles from './cursor.module.css';

export interface CursorProps {
  after?: number;
  return?: boolean;
}

export function Cursor(props: CursorProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function setCursorAfter(after?: number) {
    const params = new URLSearchParams(
      searchParams as ReadonlyURLSearchParams & {
        size: number;
      }
    );
    if (after) {
      params.set('after', after.toString());
    } else {
      params.delete('after');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <span className={styles.cursor}>
      {props.return && (<button onClick={() => setCursorAfter()} aria-label="Return to First Page">&lt;&lt;&lt;</button>)}
      {props.after && (<button onClick={() => setCursorAfter(props.after)}>Next Page &gt;</button>)}
    </span>
  );
}

export default Cursor;
