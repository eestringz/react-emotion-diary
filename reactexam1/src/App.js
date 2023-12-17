// 1. css 방식의 스타일링
// import './App.css';

import React from 'react';

import Container from './Container';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';

function App() {
  // 2. 인라인 방식의 스타일링 -> 태그 내에서  style={style.App} 이런 식으로 접근 가능
  // const style = {
  //   App : {
  //     backgroundColor: "black"
  //   },
  //   h2 : {
  //     color : "red",
  //   }
  // }


  // 자식 컴포넌트에게 prop 하기 -> 객체 생성 후 spread 연산자를 이용하여 전달.
  const counterProps = {
    a : 1,
    b : 2,
    c : 3,
    initialValue : 0, 
  }


  return (
    // 컴포넌트를 컴포넌트의 prop 으로 이용하는 법.
    // Container 컴포넌트에 html div 영역이 prop 된다! 
    <Container>
      <div>
        <MyHeader />
        <Counter { ...counterProps }/>
        <MyFooter />
      </div>
    </Container>
  );
}

export default App;
