'use client';

import { useState } from 'react';
import styles from './InstallCommand.module.css';

const command = 'pnpm add newspaperui';

export function InstallCommand() {
  const [status, setStatus] = useState('Copy');

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
      setStatus('Copied');
    } catch {
      setStatus('Copy failed');
    }
  }

  return (
    <div className={styles.command}>
      <code>{command}</code>
      <button type="button" onClick={copyCommand} aria-label="Copy install command">
        {status}
      </button>
      <span className={styles.status} role="status" aria-live="polite">{status === 'Copy' ? '' : status}</span>
    </div>
  );
}
