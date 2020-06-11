import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE: // 리덕스의 내용도 서버사이드 랜더링되도록 함.
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  post
});

export default rootReducer;