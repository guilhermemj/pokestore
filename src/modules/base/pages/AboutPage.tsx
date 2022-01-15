import Container from '@mui/material/Container';
import config from '../../../config';

export default function AboutPage() {
  return (
    <Container sx={{ py: 2 }}>
      {config.app.name} [v{config.app.version}]
    </Container>
  );
}
