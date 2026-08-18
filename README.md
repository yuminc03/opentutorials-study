# 생활코딩 강의 실습 모음
생활코딩 온라인 강의를 수강하며 진행한 실습 자료를 강의별로 모아 기록하는 저장소입니다.

## 저장소 구조
강의 하나당 최상위 폴더 하나를 사용합니다. 각 강의 폴더는 독립적으로 관리되며, 폴더별 상세 내용은 해당 폴더의 문서를 참고합니다.

```text
opentutorials/
├── opentutorials-agentic-workflow/                 # 에이전틱 워크플로우 (2026-07-11 ~ 07-14)
└── opentutorials-between-vibe-coding-hand-coding/  # 바이브 코딩과 손코딩 사이 (2026-08-15 ~ 08-17)
    ├── doc1/   # 에이전트 규칙 및 수업 순서 정리
    ├── app2/   # 정적 HTML 카운터 + Vercel 배포
    ├── app3/   # Next.js + Supabase 카운터
    └── app4/   # Next.js + Supabase + AI 연도별 사건 조회
```

## 강의 목록
| 강의명                           | 폴더                                                                                               | 기간                     | 핵심 주제                                                        |
| -------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------- |
| 에이전틱 워크플로우              | [`opentutorials-agentic-workflow/`](opentutorials-agentic-workflow/)                               | 2026-07-11 ~ 07-14 (4일) | Antigravity, Markdown, Git, GitHub 이슈, 커스텀 스킬             |
| 바이브 코딩과 손코딩 사이 어딘가 | [`opentutorials-between-vibe-coding-hand-coding/`](opentutorials-between-vibe-coding-hand-coding/) | 2026-08-15 ~ 08-17 (3일) | Antigravity, Markdown, HTML, Vercel 배포, Next.js, Supabase, AI |

## 1. 에이전틱 워크플로우
AI 에이전트와 협업하는 개발 워크플로우를 4일간 학습한 과정입니다. 상세 커리큘럼과 날짜별 학습 이력은 [강의 폴더의 README](opentutorials-agentic-workflow/README.md)에 정리되어 있습니다.

| Day   | 폴더                                                                                                                 | 주제                                       |
| ----- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Day 1 | [`20260711/`](opentutorials-agentic-workflow/20260711/)                                                              | AI 협업 환경 구축 및 Git 저장소 초기화     |
| Day 2 | [`20260712/`](opentutorials-agentic-workflow/20260712/), [`20260712-2/`](opentutorials-agentic-workflow/20260712-2/) | 버전 이력 추적 및 브랜치 격리              |
| Day 3 | [`20260713/`](opentutorials-agentic-workflow/20260713/)                                                              | 브랜치 병합 및 충돌 해결                   |
| Day 4 | [`20260714/`](opentutorials-agentic-workflow/20260714/)                                                              | GitHub 백업, 이슈 관리, 커스텀 스킬 자동화 |

이 강의에서 개발한 커스텀 스킬은 [`opentutorials-agentic-workflow/.agents/skills/`](opentutorials-agentic-workflow/.agents/skills/)에 있습니다.

## 2. 바이브 코딩과 손코딩 사이 어딘가
AI에게 전부 맡기는 바이브 코딩과 직접 작성하는 손코딩 사이의 균형점을 찾는 강의입니다. 수업은 Antigravity → Markdown → HTML → Next.js → Supabase → AI 순으로 진행되었으며, 동일한 "카운터" 예제를 정적 HTML(app2) → DB 연동(app3) → AI 연동(app4)으로 확장해 나갑니다.

### 2.1. 문서 및 정적 HTML (doc1, app2)
| 폴더                                                           | 파일                                                                                                  | 내용                                    |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`doc1/`](opentutorials-between-vibe-coding-hand-coding/doc1/) | [`AGENTS.md`](opentutorials-between-vibe-coding-hand-coding/doc1/AGENTS.md)                           | 에이전트 지시 규칙 정의                 |
| [`doc1/`](opentutorials-between-vibe-coding-hand-coding/doc1/) | [`study.md`](opentutorials-between-vibe-coding-hand-coding/doc1/study.md)                             | 수업 순서 및 개념 정리                  |
| [`app2/`](opentutorials-between-vibe-coding-hand-coding/app2/) | [`index.html`](opentutorials-between-vibe-coding-hand-coding/app2/index.html)                         | Counter 예제 HTML 페이지                |
| [`app2/`](opentutorials-between-vibe-coding-hand-coding/app2/) | [`diagram.md`](opentutorials-between-vibe-coding-hand-coding/app2/diagram.md)                         | 로컬 HTML 파일 실행 프로세스 다이어그램 |
| [`app2/`](opentutorials-between-vibe-coding-hand-coding/app2/) | [`VERCEL_DEPLOY_GUIDE.md`](opentutorials-between-vibe-coding-hand-coding/app2/VERCEL_DEPLOY_GUIDE.md) | Node.js 설치 및 Vercel CLI 배포 가이드  |

### 2.2. app3 — Next.js + Supabase 카운터 (2026-08-16)
`create-next-app`으로 스캐폴딩한 Next.js 16(App Router, TypeScript, Tailwind CSS v4) 프로젝트입니다. `useState` 기반 카운터로 시작해 클릭 수를 Supabase DB에 영구 저장하도록 확장했습니다.

- 스택: Next.js 16.3.1, React 19.2.8, TypeScript, Tailwind CSS v4, `@supabase/supabase-js`
- 데이터 흐름: 클릭 시 `counter` 테이블에 `{ value: 1 }` 행을 INSERT하고, 초기 렌더에서 전체 행의 `value` 합계를 조회해 총 클릭 수로 표시
- 주요 파일: [`app/page.tsx`](opentutorials-between-vibe-coding-hand-coding/app3/app/page.tsx) (클라이언트 컴포넌트), [`lib/supabase.ts`](opentutorials-between-vibe-coding-hand-coding/app3/lib/supabase.ts) (Supabase 클라이언트 초기화)
- 환경 변수: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2.3. app4 — Next.js + Supabase + AI 연도별 사건 조회 (2026-08-17)
app3의 카운터를 발전시켜, 카운터 값을 **연도**로 해석하고 해당 연도의 역사적 사건을 AI가 스트리밍으로 서술하는 프로젝트입니다.

- 스택: app3와 동일 + Vercel AI SDK(`ai`), Vercel AI Gateway(`openai/gpt-4o-mini`)
- 데이터 흐름: `counter` 테이블의 `id = 1` 행 하나를 UPDATE하는 단일 레코드 방식. 값이 바뀔 때마다 `/api/event`에 POST하여 `ReadableStream` 응답을 읽으며 화면에 점진적으로 출력
- 주요 파일: [`app/page.tsx`](opentutorials-between-vibe-coding-hand-coding/app4/app/page.tsx) (카운터 + 스트리밍 UI), [`app/api/event/route.ts`](opentutorials-between-vibe-coding-hand-coding/app4/app/api/event/route.ts) (AI 호출 Route Handler), [`lib/supabase.ts`](opentutorials-between-vibe-coding-hand-coding/app4/lib/supabase.ts)
- 보안: AI Gateway 키는 클라이언트 번들에 인라인되지 않도록 `NEXT_PUBLIC_` 접두사 없이 `AI_GATEWAY_API_KEY`로만 사용하며, AI 호출은 반드시 서버 Route Handler를 경유
- 환경 변수: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `AI_GATEWAY_API_KEY`
- 배포: Vercel(`.vercel/project.json`)

### app3 / app4 실행 방법
```bash
cd opentutorials-between-vibe-coding-hand-coding/app3  # 또는 app4
npm install
npm run dev   # http://localhost:3000
```

`.env.local`은 Git에 커밋하지 않으므로, 위 환경 변수를 각 프로젝트 루트의 `.env.local`에 직접 설정해야 합니다.

## 작업 규칙
- **브랜치 전략**: Git Flow (`feature/`, `develop`, `release/`, `hotfix/`)
- **커밋 메시지**: Conventional Commits 형식 (`feat:`, `docs:`, `chore:`, `fix:` 등)
- **커밋 단위**: 파일 및 작업 단위로 최소화하여 분리
