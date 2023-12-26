import { createAction, props } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';

export const increment = createAction(
  INCREMENT,
  props<{value: number}>()
);

export const decrement = createAction(
  DECREMENT,
  props<{value: number}>()
);
