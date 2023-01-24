import type { Dispatch, SetStateAction } from 'react';

type OutletDispatch<T> = [T, Dispatch<SetStateAction<T>>];

export default OutletDispatch;
