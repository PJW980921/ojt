# Next.js Page Router & App Router

> ( 2025/02/11(화) Next.js 주요 학습 내용 )

## Next.js란?

- Next.js란 리액트로 웹 애플리케이션을 편하게 구축할 수 있는 프레임워크입니다.Next.js는 React를 기반으로 한 프레임워크로, UI 구축을 React로 하고, 추가적인 최적화와 기능은 Next.js가 담당합니다. 이를 통해 개발자는 핵심 로직과 기능 개발에 집중할 수 있고, 개발의 복잡성이 줄어듭니다.

## Next.js 주요 특징

- 내장 최적화
웹사이트는 이미지, 폰트, 스크립트가 최적화되지 않으면 로딩 속도가 느려집니다.
하지만 Next.js는 이런 요소를 자동으로 최적화해, 빠르고 부드러운 사용자 경험(UX)을 제공합니다. `next/image` 를 사용하면 브라우저에 맞게 이미지를 자동 최적화하여 성능이 향상됩니다.

- 동적 HTML 스트리밍
Next.js는 전체 페이지를 다 준비할 때까지 기다리지 않고, 가능한 부분부터 먼저 화면에 표시하여 사용자 경험을 향상시킵니다.

- 리액트 서버 컴포넌트
클라이언트에서 실행하는 것이 아니라, 백스테이지(서버)에서 준비한 콘텐츠를 조용히 클라이언트로 보내기 때문에
불필요한 클라이언트 JavaScript를 줄이고 성능을 향상시킬 수 있습니다.

- 데이터 패칭
서버에서 미리 준비해서 보내줄 수도 있고 (SSR, SSG), 클라이언트가 직접 요청할 수도 있습니다. (CSR).

- 클라이언트 및 서버 렌더링
일부 페이지는 미리 생성해 빠르게 제공하고(Static Generation), 일부는 실시간으로 서버에서 렌더링할 수도 있습니다(SSR).

**ISR(Incremental Static Regeneration)**을 사용하면 예고편처럼 미리 만들어두고, 일정 시간이 지나면 자동으로 새로 갱신할 수도 있습니다.

```jsx
// app router 기반
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await res.json();

  return { props: { post }, revalidate: 10 }; // 10초마다 페이지 갱신

  // 페이지가 10초마다 자동으로 새로 고침되어 최신 데이터를 유지할 수 있습니다.
}
```

- Link Component
  - Next.js의 `<Link>` 는 정적 생성(Static Generation) 및 서버 사이드 렌더링(SSR)과 함께 사용하면 SEO에 최적화된 페이지를 생성 가능합니다.
또한, `<a>` 태그를 감싸지 않아도 SEO-friendly HTML을 자동으로 생성합니다.

  - SEO 최적화 → 검색 엔진이 페이지를 쉽게 인식하도록 도움
  - 동적 경로 지원 → 동적 URL로 다양한 페이지를 쉽게 관리
  - 페이지 리로드 없이 상태 유지 → 기존 데이터를 유지하며 자연스러운 전환

- Route Group & Dynamic Route
  - Next.js는 폴더/파일 구조 기반으로 라우팅을 생성해줍니다.
  - 폴더 명을 소괄호()로 감싸게 되면 그룹으로 묶어 레이아웃을 공유할 수 있습니다.
  - 폴더 명을 대괄호[]로 감싸게되면 동적 라우팅을 생성할 수 있습니다.

  - 예시 디렉토리 구조
`
📦(sub pages)
 ┣ 📂board
 ┃ ┣ 📂[keyword]
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂works
 ┃ ┃ ┗ 📂detail
 ┃ ┃ ┃ ┗ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂signIn
 ┃ ┗ 📜page.tsx
 ┣ 📂signUp
 ┃ ┗ 📜page.tsx
 ┗ 📜layout.tsx
`

- useRouter
  - useRouter는 Next.js에서 제공하는 Hook 중 하나로, 현재 페이지의 라우터 정보를 가져올 수 있게 해주는 기능입니다. 이 Hook을 사용하면 현재 페이지의 URL, 쿼리 파라미터, 라우트 매개변수 등과 같은 라우터 정보에 접근할 수 있습니다.

```jsx
router.push(url, as, options)
```

url: [필수] 라우팅 하려는 url
as: [선택] 브라우저 url 바에 보여지는 path
options: [선택] ]scroll(라우팅 후 스크롤업), shallow, locale 등의 옵션이 있습니다.
