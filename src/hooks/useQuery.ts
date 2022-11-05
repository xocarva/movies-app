import { useSearchParams } from 'react-router-dom';

export const useQuery = () => {
  const [queryParameters] = useSearchParams();
  return queryParameters.get('q');
}
