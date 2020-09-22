# react
react study

**CDN**
1. react cdn - 학습용으로 구동이 안되는 기능도 있다. <br/>
	<script src="https://unpkg.com/react@15/dist/react.js"></script><br/>
	<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
2. JSX cdn - JSX는 CDN이 별도로 없고 자바스크립트 컴파일러인 BABEL의 browser.js를 땡기면 된다. <br/>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>


**React LifeCycle = Lifecycle of Components (구성요소의 생명주기)**
<pre>
1. Mounting : Dom에 요소를 주입
	built-in Method : 	A. constructor() - 생성자 [ props를 인수로 받을 수 있고 state의 초기화 할 수 있다 ]
			B. getDerivedStateFormProps() [ Props로 부터 파생된 state : props를 기반으로 state를 setting  ]
			C. render() [ props를 인수로 받아서 state를 셋팅한 다음 render로 출력]
			D. componentDidMount() [ rendering 이후 state를 변경] ( 나 사용 됐어요~ )

2. Updating : Component의 변경 - state, props가 변경 될 때 마다 component가 update된다.
	built-in Method : 	A. getDerivedStateFromProps() [ state를 props기반으로 초기화 ]
			B. shouldComponentUpdate() [ 초기화된 state를 rendering 할지 결정 default : true ]
			C. render() [ 변경 된 state를 rendering - shouldComponentUpdate() {return false;} 로 처리하면 안함 ]
			D. getSnapshotBeforeUpdate() [ rendering 이 전 state와 props에 접근. - 
					이 메서드를 사용 할 경우 반드시 componnentDidUpdate() 를 같이 사용해야 한다. ]
			E. componnentDidUpdate() [ rendering 이후 state와 props에 접근 ] ( 나 변경 됐어요~ )

3. Unmountion : Component를 제거
	built-in Method : 	A. componentWillUnmount() - component의 마운트해제 시 호출되는 메소드 ( 나 집에 가요 ~ )

component가 mount된다는 것 : Dom에 사용되거나 다른 component의 rendering에 사용되는 경우
</pre>
