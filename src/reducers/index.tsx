
import * as Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  counter: 0,
  reports: []
});

export function rootReducer(state: Immutable.Map<any, any>, action: any) {
  switch (action.type) {

    // Counter
    case 'INCREMENT_COUNTER':
      return state.set('counter', state.get('counter') + 1);
    case 'DECREMENT_COUNTER':
      return state.set('counter', state.get('counter') - 1);

    // Reports
    case 'FETCHED_REPORTS':
      return state.set('reports', action.payload.reports);
  }

  return state;
}
