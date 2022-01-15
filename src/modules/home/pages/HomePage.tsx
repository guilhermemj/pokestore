import Container from '@mui/material/Container';

export default function HomePage() {
  return (
    <Container sx={{ py: 2 }}>
      {Array(15).fill(null).map((_, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem porro quisquam modi esse saepe ut eligendi architecto soluta fugit. Rem cumque veniam, voluptate ipsa minus exercitationem iure dignissimos nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem porro quisquam modi esse saepe ut eligendi architecto soluta fugit. Rem cumque veniam, voluptate ipsa minus exercitationem iure dignissimos nulla.
        </p>
      ))}
    </Container>
  )
}
