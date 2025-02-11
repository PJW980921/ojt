# 수강 명 : 프론트엔드 개발 올인원 패키지 with React Online

> ( 2025/02/11(화) Part 30 주요 학습 내용 )

## Part 30-17 useMemo

- useMemo란?
  - useMemo란 결과값을 캐싱하는 Hook입니다. 이전에 연산된 값을 재사용하여 성능 최적화하여 성능적인 측면에서 최적화를 할 수있는 Hook입니다.
  - useMemo는 특정 값이 바뀌었을 때만 특정 함수를 실행해서 연산을 할 수 있도록 처리합니다.

- 예시 코드

```jsx
const calculator = useMemo(()=> CalculatorValue(num1,num2),[num1,num2])
```

- 첫번째 인자는 콜백함수이며, 이 함수에서 리턴하는 값이 메모됩니다.
- 두번째 인자는 deps라 불리고, 의존성 배열입니다.
- 특별히 최적화 하려는 계산 비용이 크지 않는 경우 오버헤드가 더 클수 있기 때문에 useMemo를 남발하는 행위는 지양하고있습니다.
- 추가로 의존성 배열의 값이 자주 변경되는 값이라면 성능의 이점을 보기 어렵기때문에 메모이제이션이 필요한 함수인지 아닌지 잘 판단하여 적절하게 사용하는걸 권장하고있습니다.

## Part 30-18 useCallback

- useCallback이란?
  - useCallback이란 함수를 캐싱하는 Hook입니다. 대표적으로 함수 재생성을 방지하기 위해 사용하고있습니다.

- 예시 코드

```jsx
function Example({ onClick }) {
  const handleClick = () => {
    console.log('button clicked');
    onClick();
  }; // before

  const handleClick = useCallback(()=> {
    console.log('button clicked')
    onClick();
  },[onClick]) // after

  return (
    <button onClick={handleClick}>Btn</button>
  );
}
```

before 코드로 버튼을 클릭시 setCount를 호출할 때마다 새로운 함수를 생성하게 됩니다.
반면에 after 코드, useCallback Hook을 활용하여 새로운 함수를 생성하는것을 방지하게 해줍니다.

## Part 30-19 React.memo

- React.memo란 useMemo와 다르게 컴포넌트가 불필요한 리렌더링 되는것을 방지하기 위한 React Hook입니다.

useMemo, useCallback, React.memo React Hook들을 남발하는것은 오히려 성능을 저하시킬 수 있기 때문에 정말 필요할 때 사용하는것을 권장하고있습니다.

## Part 30-22 Custom Hook

- custom Hook이란?
  - 자주 사용되는 값을 어디서나 재사용 가능하게끔 use 키워드를 붙혀 정의하는 Hook을 의미합니다. 즉, 반복되는 로직을 하나로 묶어 재사용하기 위해 custom Hook을 사용합니다.

    - 예시 코드

    ```jsx
    // hooks/useCount.js 
    import { useState } from React;

    export default function useCount() {
    const [ countValue, setCountValue ] = useState(0);
    //...
      return { countValue }
    }
    
     // components/CountButton.ts
     import { useCount } from 'hooks/Count.ts'

     const CountButton = () => {
        const { countValue } = useCount();
        //...
     }
      export default CountButton;     
    ```

  - useState, useEffect, useCallback 등 React Hook을 적절히 활용하여 정의하고 반환하는 코드를 정의하여 사용 할 수 있습니다.

## Part 30-23 Context API

- Context API란 컴포넌트 내부에서 데이터들 제공하고 제공 받을 수 있는 내장 API를 의미합니다.
- Context API를 활용함으로서 prop drilling을 방지할 수 있습니다.
- Context API는 자주 업데이트할 필요가 없는 데이터에 사용됩니다.
- Context API에서 state값을 변경하면, provider로 감싼 모든 자식 컴포넌트들이 리렌더링되므로 전역 상태 관리를 위한 도구가 아닌, 데이터를 쉽게 전달하고 공유하기 위한 목적으로 사용하는 것이 적합합니다.

- Context API를 사용하는 주요 이유
  - Props Drilling 문제 해결
  - 전역 상태 관리
  - 컴포넌트 간 데이터 공유 용이
  - 코드 재사용성 향상

- 예시 코드

```jsx
// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Context 생성
const ThemeContext = createContext();

// Provider 컴포넌트
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 커스텀 Hook
export function useTheme() {
  return useContext(ThemeContext);
}

// App.js
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <MainContent />
    </ThemeProvider>
  );
}

// Navbar.js
function Navbar() {
  const { isDark, setIsDark } = useTheme();
  
  return (
    <nav style={{ 
      background: isDark ? 'black' : 'white',
      color: isDark ? 'white' : 'black' 
    }}>
      <button onClick={() => setIsDark(!isDark)}>
        테마 변경
      </button>
    </nav>
  );
}

// MainContent.js
function MainContent() {
  const { isDark } = useTheme();
  
  return (
    <main style={{ 
      background: isDark ? '#333' : '#fff',
      color: isDark ? 'white' : 'black'
    }}>
      <h1>메인 콘텐츠</h1>
      <p>현재 테마: {isDark ? '다크' : '라이트'}</p>
    </main>
  );
}
```
