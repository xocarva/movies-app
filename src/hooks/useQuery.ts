import { useSearchParams } from 'react-router-dom';

export const useQuery = () => {
  const [ queryParameters ] = useSearchParams();

  const textQuery = queryParameters.get('q') || '';
  const pageQuery = queryParameters.get('page') || '1';

  let completeQuery = textQuery;
  if (pageQuery) completeQuery += `&page=${queryParameters.get('page')}`;

  return {completeQuery, textQuery, pageQuery};
}
