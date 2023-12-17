import React, {useState} from "react"

import OddEvenResult from "./OddEvenResult";

const Counter = (counterProps) => {

    // console.log(counterProps);
    // cf. props 에서 하나만 받아올 수도 있다!
    

    // React의 useState 훅은 배열을 반환. 
    // 이 배열의 첫 번째 요소는 상태 값이고, 두 번째 요소는 상태를 변경하는 함수임.
    const [ count, setCount ] = useState(counterProps.initialValue);

    const onIncrease = () => {
        setCount( count + 1 );
    };

    const onDecrease = () => {
        setCount( count - 1 );
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult  count = {count} />
        </div>
    )
}


// 만약 부모 컴포넌트에서 prop 하지 않았는데 추가하고 싶을 경우.
Counter.defaultProps = {
    initialValue2 : 5,
}

export default Counter