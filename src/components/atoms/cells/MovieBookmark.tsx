import { useAtom } from 'jotai';
import { Component as Bookmark } from '../../../icons/bookmark.svg?svgUse';
import { bookmarksAtom } from '../../../atoms/bookmarks';
import type { SyntheticEvent } from 'react';

interface Props {
  movieId: string;
}

export default function MovieBookmark({ movieId }: Props) {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  const isMovieBookmarked = bookmarks.includes(movieId);

  function handleBookmark(event: SyntheticEvent) {
    event.stopPropagation();

    if (isMovieBookmarked) {
      setBookmarks((prevState) => prevState.filter((bookmark) => bookmark !== movieId));
      return;
    }

    setBookmarks((prevState) => prevState.concat(movieId));
  }

  return (
    <div className="flex cursor-pointer justify-center">
      <Bookmark
        color={isMovieBookmarked ? 'var(--accent)' : 'var(--background)'}
        stroke="var(--accent)"
        width="25px"
        onClick={handleBookmark}
      />
    </div>
  );
}
