# front_end_react
react 학습

프로젝트 생성방법

$ npx create-react-app blog

프로젝트 실행방법

cd [프로젝트 이름]
$ npm start

소스 경로 : project -> src -> app.js
index.js 가 public에 있는 index.html 실행시켜서 사용 가능

axios 가 없을때(비동기통신)
$npm install axios

react-router-dom이 없을때(link)
$npm install react-router-dom --save

react에서 json 통신이 안될때 해결방법 (cross origin resource sharing error)
![image](https://user-images.githubusercontent.com/46347052/117524410-1a203280-aff8-11eb-9264-3e6c389ea49b.png)
해결책 : https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9


컴포넌트란?
- 클래스, 함수를 컴포넌트라고 칭하는것 같다.

props, state는 컴포넌트에서 다룰 수 있는 데이터

props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값
자식 컴포넌트는 props를 받아오기만하고 받아온 props를 직접 수정할 수 없다.
반면 state는 컴포넌트 내부에 선언하며 내부에서 값을 변경할 수 있다.
자세한 설명 : https://velopert.com/3629

setState 메소드 : state의 값을 바꾸기 위해서는 무조건 setState를 거쳐야 함.

이함수가 호출되면 리렌더링 되게 되어있음.

컴포넌트 선언방식은 함수형과 클래스형이있는데 둘의 차이점이 있음
최신이 권장하는 방식은 함수형 컴포넌트를 사용하면서 hook을 사용하는것
함수형 컴포넌트는 render함수를 사용못함. useState로 사용해야함. state사용할때

css중에서 display: flex가있는데 이해를못하겠다. float사용은 구식인것 같다.

next.js : react를 사용할때 필요한것들이 있는듯함 (정확히는 몬지모름)

<Link to'/'> 를 사용할때 밑줄과 색상을 없애려면 새로운 클래스를 정의해서 하면 됨
ex)
.default-link{
  color : inherit;
  text-decoration: none !important;
}
