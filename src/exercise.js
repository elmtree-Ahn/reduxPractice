import { createStore } from "redux";

// 리덕스 초기 상태
const initialState = {
  counter: 0,
  text: '',
  list: []
};

// 액션 타입 정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 액션 생성함수 정의
function increase() {
  return {
    type: INCREASE
  };
}

const decrease = () => ({
  type: DECREASE
})

const changeText = text => ({
  type: CHANGE_TEXT,
  text
})

const addToList = item => ({
  type: ADD_TO_LIST,
  item
})

// 리듀서 만들기
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
    return {
      ...state,
      list: state.list.concat(action.item)
    };
    default:
    return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

// 현재 score 안에 들어 있는 상태 조회
console.log(store.getState());

// 스토어안에 들어있는 상태가 바뀔 때 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
}

// 구독을 해지하는 함수
const unsubscribe = store.subscribe(listener);

// 액션들을 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕!"));
store.dispatch(addToList({id:1, text:"와우!"}))