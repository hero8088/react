# Window에서 개발 셋팅하기

### 1. npm install -g create-react-app

### 2. create-react-app .
###  2-0. create-react-app이 보안관련문제로 실행이 안되는 경우 아래 명령어 수행
###  2-1. Power Shell을 관리자 권한으로 실행
###  2-2. Set-ExecutionPolicy RemoteSigned  입력


# props, state
# 라이프사이클 : 버전별로 사라진 것들이 있음
# REDUX : 
### Redux의 주요 개념은 다음과 같습니다:
### Store: 애플리케이션의 상태를 보유하고 있는 단일 객체입니다. Redux에서 상태 변경은 불변성을 유지하며, 상태 변경은 액션에 의해서만 가능합니다.
### Actions: 상태를 변경하기 위한 이벤트입니다. 일반적으로 JavaScript 객체로 표현되며, type 필드를 가지고 있습니다. 예를 들어, 사용자가 로그인한 경우에는 "로그인" 액션이 발생할 수 있습니다.
### Reducers: 액션에 따라 상태를 어떻게 변경할지 정의합니다. Reducer는 이전 상태와 액션을 받아 새로운 상태를 반환하는 순수 함수입니다.
### Dispatch: 액션을 발생시키는 메소드로, 상태 변경을 알립니다.
# FUNCTION방식과 CLASS방식의 COMPONENT구현
