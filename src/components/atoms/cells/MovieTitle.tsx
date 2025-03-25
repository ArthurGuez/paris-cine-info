import { useAtomValue } from 'jotai';
import { titleDisplayAtom } from '../../../atoms/settings';

interface Props {
  originalTitle: string;
  frenchTitle: string;
}

export default function MovieTitle({ originalTitle, frenchTitle }: Props) {
  const titleDisplay = useAtomValue(titleDisplayAtom);

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
