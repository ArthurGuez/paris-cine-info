import { atom } from 'jotai';

export type TitleDisplay = 'original' | 'french' | 'both';

export const titleDisplayAtom = atom<TitleDisplay>('both');
