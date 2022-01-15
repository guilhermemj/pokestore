import type { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

type BaseLayoutProps = {
  children?: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Stack minHeight='100vh'>
      <AppHeader />

      <Box component='main' sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <AppFooter />
    </Stack>
  );
}
