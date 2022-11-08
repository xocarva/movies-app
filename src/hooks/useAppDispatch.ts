import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
// necessary for better typescript redux management (from docs)
