import { ReactNode } from 'react';
import MainHeader from '@/Layouts/main/Header';
import ScrollText from '@/Components/ScrollText';
import { Container } from '@mui/material';
import MainFooter from '@/Layouts/main/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <MainHeader />
      <ScrollText />
      <Container maxWidth="xl">{children}</Container>
      <MainFooter />
    </>
  );
}
