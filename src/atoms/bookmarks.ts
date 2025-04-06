import { atomWithStorage } from 'jotai/utils';

export type Bookmarks = string[];

export const bookmarksAtom = atomWithStorage<Bookmarks>('bookmarks', []);
