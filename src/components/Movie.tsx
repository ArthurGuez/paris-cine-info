const BASE_POSTER_URL = 'https://paris-cine.info/get_poster_nocors.php?id=';

interface Props {
  id: string;
}

export default function Movie({ id }: Props) {
  return (
    <div>
      <img src={`${BASE_POSTER_URL}${id}`} alt="" />
    </div>
  );
}
