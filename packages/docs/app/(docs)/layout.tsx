import { Sidebar } from '../../components/Sidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 65px)' }}>
      <Sidebar />
      <main
        style={{
          flex: 1,
          padding: '2rem 3rem',
          maxWidth: 'calc(100% - 240px)',
          overflow: 'auto',
        }}
      >
        {children}
      </main>
    </div>
  );
}
