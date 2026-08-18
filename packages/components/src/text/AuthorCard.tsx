'use client';
import React, { CSSProperties } from 'react';
import { cx } from 'newspaperui-utils';

export interface AuthorCardProps {
  name: string;
  role?: string;
  bio?: string;
  avatar?: string;
  email?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * AuthorCard — 作者简介卡片（长篇报道末尾）
 *
 * @example
 * <AuthorCard name="Eleanor Whitcombe" role="Senior Correspondent" bio="..." avatar="/avatar.jpg" />
 */
export const AuthorCard: React.FC<AuthorCardProps> = ({
  name, role, bio, avatar, email, className, style,
}) => (
  <div
    className={cx('nui-author-card', className)}
    style={{
      borderTop: '1px solid var(--nui-rule-hairline)',
      paddingTop: 'var(--nui-space-4)',
      marginTop: 'var(--nui-space-6)',
      display: 'flex',
      gap: 'var(--nui-space-4)',
      alignItems: 'flex-start',
      ...style,
    }}
  >
    {avatar && (
      <img
        src={avatar}
        alt={name}
        loading="lazy"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
    )}
    <div>
      <div style={{
        fontFamily: 'var(--font-family-meta)',
        fontSize: '13px',
        fontWeight: 600,
        fontVariantCaps: 'small-caps',
        letterSpacing: '0.06em',
        color: 'var(--nui-text-primary)',
      }}>{name}</div>
      {role && (
        <div style={{
          fontFamily: 'var(--font-family-meta)',
          fontSize: '12px',
          color: 'var(--nui-text-muted)',
          marginTop: '2px',
        }}>{role}</div>
      )}
      {bio && (
        <p style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: '13px',
          lineHeight: 1.5,
          color: 'var(--nui-text-secondary)',
          margin: 'var(--nui-space-2) 0 0 0',
        }}>{bio}</p>
      )}
      {email && (
        <a href={`mailto:${email}`} style={{
          fontFamily: 'var(--font-family-meta)',
          fontSize: '11px',
          color: 'var(--nui-accent-primary)',
          textDecoration: 'none',
          marginTop: 'var(--nui-space-2)',
          minHeight: '44px',
          display: 'inline-flex',
          alignItems: 'center',
        }}>{email}</a>
      )}
    </div>
  </div>
);
