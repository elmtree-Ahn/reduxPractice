import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import Counter from "../components/Counter";
import {increase, decrease, setDiff} from '../modules/counter';


function CounterContatine() {
  // store에서 state값 가져오기
  const {number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }))

  // 액션들을 dispatch하는 함수 만들기
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff}>

    </Counter>
    
  )
}

export default CounterContatine;