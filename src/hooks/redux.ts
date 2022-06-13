import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';

import { AppDispatch } from '../store';
import { AppState } from '../types';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
