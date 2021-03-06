#npm start 로 실행..

# react
react study

**참고사이트**<br/>
React : https://ko.reactjs.org/<br/>
	https://www.w3schools.com/react/default.asp
	 
Arrow Function : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98


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

**Events**<br/>
    Html과 React의 event 표현의 차이는 camelCase, {} 의 특징이 다르다.
	
    이벤트 구문을 컴포넌트 클래스 안에 배치하는것이 좋다.
	Arrow Function [ () => {} ]을 사용하면 그 function의 this는 Arrow Function의 정의된 Object(Class) 이다.
	class component에는 this 키워드가 기본적으로 정의 되지 않기 때문에 Arrow Function을 사용하지 않으면
	일반적인 function은 그것을 호출한 객체 [ button, window ] 가 this가 된다.
	
	ex) button onClick = { () => this.timeCheck() }  : 버튼을 누를 때 만 실행
	    button onClick = { this.timeCheck() }  : render()가 실행 될 때마다 실행
	
	다른 방법으로는 일반 function을 정의하고 class component의 생성자에 바인딩하는 방법이 있다.
	[ this.shoot = this.shoot.bind(this) ]
	
	**this**
	객체지향 언어의 this = 현재 객체
	자바스크립트의 this = 실행 context
	react가 render 한 객체의 이벤트 (ex: onClick)에서 호출되는 핸들러는
	선언시 에는 현재 클래스를 가르키지만 사용시 에는 window객체를 가르키기 때문에
	bind함수를 사용하면 click시에도 class객체를 가르키게 된다.
	Arrow Function의 this는 항상 외부함수의 this를 상속받기 때문에 this가 일정하다.
	onClick={ () => this.changeColor() }
	onClick={ this.changeColor.bind(this) }
	
	**function의 this**
		1. function은 자기자신의 인스턴트를 this로 갖는다.
		2. inner function은 전역객체를 this로 갖는다.
		3. 전역객체는 인스턴스를 참조 할 수 없으므로 function 내에서 필요한 값을
		    비전역 변수에 할당하여 inner function 이후의 값의 연결 문제를 해결 했다.
		4. 화살표함수는 this가 없기 때문에 바깥범위에서 this를 찾는다.
		5. 따라서 function (class도 function이다) 내부에 선언된 Arrow Function은
		   자신을 포함한 함수의 인스턴스를 this로 갖는다.

** 특이점 **
https://ko.reactjs.org/docs/react-component.html

componentDidUpdate()에서 setState()를 즉시 호출할 수도 있지만, 위의 예시처럼 조건문으로 감싸지 않으면 무한 반복이 발생할 수 있다는 점에 주의하세요.
이것때매 겁나 삽질을 .. 미완성 라이브러리라는 건가..
현재 값이 그 값이 아닌지의 if를 포함해야 한다는 얘긴가보다...

   	componentDidUpdate() {
		if(!this.state.username){
			if (this.state.clock !== 'Y'){
				this.setState({clock:'Y'});
			}
		}else{
			if (this.state.clock !== 'N'){
				this.setState({clock:'N'});
			}
		}
	}
