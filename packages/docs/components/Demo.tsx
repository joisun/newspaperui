'use client';

import { Check, Code, Copy } from '@phosphor-icons/react';
import { useId, useState } from 'react';
import styles from './Demo.module.css';

interface ComponentDemoProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
}

type CopyState = 'idle' | 'copied' | 'error';

export function ComponentDemo({ title, description, code, children }: ComponentDemoProps) {
  const sourceId = useId();
  const sourceLines = code.split('\n');
  const [sourceOpen, setSourceOpen] = useState(false);
  const [copyState, setCopyState] = useState<CopyState>('idle');

  async function copySource() {
    try {
      await navigator.clipboard.writeText(code);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
  }

  function toggleSource() {
    setSourceOpen((open) => !open);
    setCopyState('idle');
  }

  return (
    <section className={styles.frame} aria-label={`${title} demo`}>
      <header className={styles.previewHeader}>
        <div>
          <span className={styles.eyebrow}>Live preview</span>
          <strong className={styles.title}>{title}</strong>
        </div>
        {description && <p className={styles.description}>{description}</p>}
      </header>

      <div className={styles.preview}>{children}</div>

      <div className={styles.source}>
        <div className={styles.sourceHeader}>
          <span className={styles.sourceLabel}>
            <Code size={17} weight="bold" aria-hidden="true" />
            <span>Source</span>
            <span className={styles.language}>TSX</span>
          </span>
          {sourceOpen && (
            <button
              type="button"
              className={styles.copyButton}
              onClick={copySource}
              aria-label={copyState === 'copied' ? 'Source copied' : 'Copy source'}
            >
              {copyState === 'copied' ? (
                <Check size={17} weight="bold" aria-hidden="true" />
              ) : (
                <Copy size={17} weight="bold" aria-hidden="true" />
              )}
              <span>{copyState === 'copied' ? 'Copied' : 'Copy'}</span>
            </button>
          )}
        </div>

        <div
          id={sourceId}
          className={`${styles.sourceViewport} ${sourceOpen ? styles.expanded : styles.collapsed}`}
        >
          <pre className={styles.pre} tabIndex={0}>
            <code className={styles.code}>
              {sourceLines.map((line, index) => (
                <span className={styles.codeLine} data-source-line key={index}>
                  <span
                    className={styles.lineNumber}
                    data-line-number
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.lineText}>
                    {line || ' '}
                    {index < sourceLines.length - 1 ? '\n' : null}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>

        <div className={styles.sourceFooter}>
          <button
            type="button"
            className={styles.sourceToggle}
            onClick={toggleSource}
            aria-expanded={sourceOpen}
            aria-controls={sourceId}
          >
            {sourceOpen ? 'Hide source' : 'View source'}
          </button>
        </div>

        <p className={styles.status} role="status" aria-live="polite">
          {copyState === 'copied' ? 'Source copied to clipboard.' : ''}
        </p>
        {copyState === 'error' && (
          <p className={styles.error} role="alert">
            Copy failed. Select the source and copy it manually.
          </p>
        )}
      </div>
    </section>
  );
}

export const Demo = ComponentDemo;
