import { Reducer } from 'redux';
import { GamesState, ActionTypes } from './types';
import producer from 'immer';

const INITIAL_STATE = {
  games: [],
  error: false,
}

const gamesModules: Reducer<GamesState> = (state = INITIAL_STATE, action) => {
  return producer(state, draft => {
      switch (action.type) {
        case ActionTypes.loadGamesSuccess: {
          const { game } = action.payload;
          if(draft.games){
            draft.games = [];
            draft.games = [...game];
            draft.error = false;
          }
          break;
        }
          
        case ActionTypes.loadGamesFailure: {
          const {error} = action.payload;
          draft.error = error;
          break;
        }

        default:
          return draft;
      }
  })
}


export default gamesModules;