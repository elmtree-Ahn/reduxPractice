

// 액션 타입을 만듭니다.
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수를 만듭니다.
export const setDiff = diff => ({type: SET_DIFF, diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// 초기 상태를 선언합니다.
const initialState = {
  number: 0,
  diff: 1
}

// 리듀서 선언
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state;
  }
}