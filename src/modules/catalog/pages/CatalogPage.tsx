import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';

import { useCatalogStore } from '../store/hooks';
import CatalogProduct from '../components/CatalogProduct';

export default function CatalogPage() {
  const {
    results,
    error,
    isLoading,
    clearPokemonsList,
    fetchPokemonsList,
    clearAndFetchPokemonList,
  } = useCatalogStore();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => void fetchPokemonsList(), []);

  return (
    <Container sx={{ py: 2 }}>
      <p>
        <Button
          variant='outlined'
          disabled={isLoading}
          sx={{ mr: 2 }}
          onClick={() => clearPokemonsList()}
        >
          Clear
        </Button>

        <Button
          variant='outlined'
          disabled={isLoading}
          sx={{ mr: 2 }}
          onClick={() => clearAndFetchPokemonList()}
        >
          Clear and Fetch
        </Button>

        <Button
          variant='outlined'
          disabled={isLoading}
          sx={{ mr: 2 }}
          onClick={() => fetchPokemonsList()}
        >
          Fetch
        </Button>

        {isLoading && 'Loading...'}
      </p>

      {error && (
        <p>
          {`Error: "${error.message}"`}
        </p>
      )}

      <Grid container spacing={2}>
        {results.map((details) => (
          <Grid item xs={3} key={details.id}>
            <CatalogProduct details={details} />
          </Grid>
        ))}
      </Grid>


    </Container>
  );
};
