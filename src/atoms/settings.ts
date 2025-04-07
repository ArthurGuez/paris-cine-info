import { atomWithStorage } from 'jotai/utils';

export type TitleDisplay = 'original' | 'french' | 'both';

export const titleDisplayAtom = atomWithStorage<TitleDisplay>('title-display', 'both');
