import Header from 'layouts/MainLayout/Header';

export default function DefaultView({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
