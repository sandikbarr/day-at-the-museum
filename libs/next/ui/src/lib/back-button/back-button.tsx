"use client";

import { PropsWithChildren, useEffect } from 'react';
import {
  useRouter,
} from 'next/navigation';

interface BackButtonProps extends PropsWithChildren {
  label?: string;
}

export function BackButton({children, label}: BackButtonProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        router.back();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const router = useRouter();
  return (
    <button type="button" aria-label={label ?? "back"} onClick={() => router.back()}>
      {children}
    </button>
  );
}

export default BackButton;
