import Badge from './../../models/Badge.class';

// Badge[]
const INITIAL_STATE = [];

export default function badgesReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_BADGE':
      if (!(action.badge instanceof Badge)) {
        return state;
      } else if (state.find(badge => badge.id === action.badge.id)) {
        return state;
      } else {
        return [...state, action.badge];
      }
    default:
      return state;
  }
}
