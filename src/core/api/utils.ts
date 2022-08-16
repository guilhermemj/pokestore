export async function simulateRequest<T = any>(response: T): Promise<T> {
  await new Promise((r) => setTimeout(r, 750));

  if (Math.random() < 0.25) throw new Error('Not your lucky day?');

  return response;
}

export function getIdFromUrl(url: string) {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
}

export function getImageUrl(id: string) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}
