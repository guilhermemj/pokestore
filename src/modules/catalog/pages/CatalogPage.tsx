import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../core/store/hooks';
import { fetchPokemonsList } from '../../../core/store/actions';

import {
  getCatalogError,
  getCatalogResults,
  isCatalogLoading,
} from '../store/selectors';

export default function CatalogPage() {
  const dispatch = useAppDispatch();

  const results = useAppSelector(getCatalogResults);
  const error = useAppSelector(getCatalogError);
  const isLoading = useAppSelector(isCatalogLoading);

  useEffect(() => {
    dispatch(fetchPokemonsList());
  }, [dispatch]);

  console.log('render');

  return (
    <Container sx={{ py: 2 }}>
      <p>
        <Button
          variant='outlined'
          disabled={isLoading}
          sx={{ mr: 2 }}
          onClick={() => dispatch(fetchPokemonsList())}
        >
          Refresh
        </Button>

        {isLoading && 'Loading...'}
      </p>

      {error && (
        <p>
          {`Error: "${error.message}"`}
        </p>
      )}

      {results.map((obj, i) => <p key={i}>{JSON.stringify(obj)}</p>)}
    </Container>
  );
};
