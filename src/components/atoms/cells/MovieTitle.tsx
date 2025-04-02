import { useAtomValue } from 'jotai';
import type { TitleDisplay } from '../../../atoms/settings';
import { titleDisplayAtom } from '../../../atoms/settings';

function renderTitle(titleDisplay: TitleDisplay, originalTitle: string, frenchTitle: string) {
  switch (titleDisplay) {
    case 'french':
      return <p className="font-bold">{frenchTitle}</p>;
    case 'original':
      return <p className="font-bold">{originalTitle.length > 0 ? originalTitle : frenchTitle}</p>;
    default:
      return (
        <div>
          <p className="font-bold">{frenchTitle}</p>
          {originalTitle.length > 0 && <p className="text-sm text-gray-500">{originalTitle}</p>}
        </div>
      );
  }
}

interface Props {
  originalTitle: string;
  frenchTitle: string;
  isNew: boolean;
}

export default function MovieTitle({ originalTitle, frenchTitle, isNew }: Props) {
  const titleDisplay = useAtomValue(titleDisplayAtom);

  return (
    <div className="flex items-center justify-between">
      {renderTitle(titleDisplay, originalTitle, frenchTitle)}
      {isNew && (
        <div
          title="Nouveauté"
          aria-label="Nouveauté"
          className="rounded-full bg-accent px-1.5 py-0.5 font-bold"
        >
          N
        </div>
      )}
    </div>
  );
}
