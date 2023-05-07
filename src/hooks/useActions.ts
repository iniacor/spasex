import { useMemo } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions } from '@store/slices/favorites';

const rootActions = {
  ...actions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
