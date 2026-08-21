'use client';

import { useState } from 'react';
import { useLocale } from './LocaleContext';
import styles from './InstallCommand.module.css';

const command = 'pnpm add newspaperui';

export function InstallCommand() {
  const { messages } = useLocale();
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
  }

  const statusLabel = status === 'idle'
    ? messages.install.copy
    : status === 'copied'
      ? messages.install.copied
      : messages.install.failed;

  return (
    <div className={styles.command}>
      <code>{command}</code>
      <button type="button" onClick={copyCommand} aria-label={messages.install.ariaLabel}>
        {statusLabel}
      </button>
      <span className={styles.status} role="status" aria-live="polite">{status === 'idle' ? '' : statusLabel}</span>
    </div>
  );
}
