export async function search(formData: FormData) {
  'use server';

  const query = formData.get('query');
  console.log(query);
}
