import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// necesasry for better typescript redux management (from docs)
