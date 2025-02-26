import type { SearchAllResponse } from './types';

export async function searchAll(): Promise<SearchAllResponse> {
  const res = await fetch(
    'https://paris-cine.info/get_pcimovies.php?selday=week&selcard=ugc&seladdr=Paris',
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
