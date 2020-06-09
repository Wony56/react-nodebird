# react-nodebird
ZeroCho님의 React강의를 보며 진행하는 프로젝트

# 강의 필기노트
## Next
- pages 디렉터리를 필수로 생성하여 내부에 각 페이지에 대한 파일을 생성! => 별도의 router를 설정할 필요없이 파일이름 자체로 라우팅 가능

## _app.js
pages디렉터리 내부에 있는 _app.js는 pages디렉터리 내부의 모듈들에 공통으로 
적용해야 할 코드를담고 있음.

## 웹 사이트는 반응형과 적응형으로 나눔.
- 반응형: 화면 크기에 따라 스타일링이 달라지는 것.
- 적응형: 데스크탑, 태블릿, 모바일에 따라 페이지가 각각 존재하는 것.
- 반응형으로 개발할 때는 가로부터 & 모바일부터, 즉 화면 사이즈가 작은 것부터 하는 것이 좋음.
- xs: 모바일, sm: 태블릿, md: 작은 데스크탑
- gutter: 컬럼 사이의 간격을 의미
- a를 사용하여 새창으로 사이트를 이동할 때는 rel속성으로 <b>noreferer</b>와 <b>noopener</b>를 꼭 사용해서 보안 위협을 막아줌.

## Hooks 커스터마이징
- Hooks는 리액트 코드 내부에 1depth로 적용.

## Tip!
- 스타일링을 할 때 컴포넌트에 style속성에다 객체를 넘겨주는 식으로 하면 안됨x
  => 페이지가 다시 그려질 때(rerendering) 이전에 생성된 객체와 동일한 것으로 인식되지 않기 때문에 매번 새로운 객체가 생성됨.
- React Hooks의 useCallback과 useMemo의 차이?
  => useCallback을 함수를 캐싱하는 것, useMemo는 값을 캐싱하는 것
- antd의 Form은 내부에 event의 preventDefault처리를 함.