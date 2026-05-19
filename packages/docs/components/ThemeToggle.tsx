'use client';
import { useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <button
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.dataset.theme = next ? 'dark' : '';
      }}
      style={{
        fontFamily: 'var(--font-family-meta)',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        padding: '0.5rem 1rem',
        background: 'transparent',
        border: '1px solid var(--nui-rule-decorative)',
        color: 'var(--nui-text-primary)',
        cursor: 'pointer',
      }}
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
