import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function AppFooter() {
  return (
    <Box component='footer' sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}>
      <Container sx={{ py: 2 }}>
        Blablabla I'm a footer...
      </Container>

      <Box sx={{ bgcolor: 'primary.dark', py: 1, textAlign: 'center' }}>
        <Typography variant='body2' fontFamily='monospace'>
          &lt;/&gt; with ❤ by <Link color='inherit' href='https://github.com/guilhermemj' target='_blank'>@guilhermemj</Link>
        </Typography>
      </Box>
    </Box>
  );
}
