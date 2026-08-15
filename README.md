# 생활코딩 강의 실습 모음
생활코딩 온라인 강의를 수강하며 진행한 실습 자료를 강의별로 모아 기록하는 저장소입니다.

## 저장소 구조
강의 하나당 최상위 폴더 하나를 사용합니다. 각 강의 폴더는 독립적으로 관리되며, 폴더별 상세 내용은 해당 폴더의 문서를 참고합니다.

```text
opentutorials/
├── opentutorials-agentic-workflow/              # 에이전틱 워크플로우 (2026-07-11 ~ 07-14)
└── opentutorials-between-vibe-coding-hand-coding/  # 바이브 코딩과 손코딩 사이 (2026-08-15)
```

## 강의 목록

| 강의명 | 폴더 | 기간 | 핵심 주제 |
|---|---|---|---|
| 에이전틱 워크플로우 | [`opentutorials-agentic-workflow/`](opentutorials-agentic-workflow/) | 2026-07-11 ~ 07-14 (4일) | Antigravity, Markdown, Git, GitHub 이슈, 커스텀 스킬 |
| 바이브 코딩과 손코딩 사이 어딘가 | [`opentutorials-between-vibe-coding-hand-coding/`](opentutorials-between-vibe-coding-hand-coding/) | 2026-08-15 | Antigravity, Markdown, HTML, Vercel 배포 |

## 1. 에이전틱 워크플로우
AI 에이전트와 협업하는 개발 워크플로우를 4일간 학습한 과정입니다. 상세 커리큘럼과 날짜별 학습 이력은 [강의 폴더의 README](opentutorials-agentic-workflow/README.md)에 정리되어 있습니다.

| Day | 폴더 | 주제 |
|---|---|---|
| Day 1 | [`20260711/`](opentutorials-agentic-workflow/20260711/) | AI 협업 환경 구축 및 Git 저장소 초기화 |
| Day 2 | [`20260712/`](opentutorials-agentic-workflow/20260712/), [`20260712-2/`](opentutorials-agentic-workflow/20260712-2/) | 버전 이력 추적 및 브랜치 격리 |
| Day 3 | [`20260713/`](opentutorials-agentic-workflow/20260713/) | 브랜치 병합 및 충돌 해결 |
| Day 4 | [`20260714/`](opentutorials-agentic-workflow/20260714/) | GitHub 백업, 이슈 관리, 커스텀 스킬 자동화 |

이 강의에서 개발한 커스텀 스킬은 [`opentutorials-agentic-workflow/.agents/skills/`](opentutorials-agentic-workflow/.agents/skills/)에 있습니다.

## 2. 바이브 코딩과 손코딩 사이 어딘가
AI에게 전부 맡기는 바이브 코딩과 직접 작성하는 손코딩 사이의 균형점을 찾는 강의입니다. 수업 순서는 Antigravity → Markdown → HTML로 진행되었습니다.

| 폴더 | 파일 | 내용 |
|---|---|---|
| [`doc1/`](opentutorials-between-vibe-coding-hand-coding/doc1/) | [`AGENTS.md`](opentutorials-between-vibe-coding-hand-coding/doc1/AGENTS.md) | 에이전트 지시 규칙 정의 |
| [`doc1/`](opentutorials-between-vibe-coding-hand-coding/doc1/) | [`study.md`](opentutorials-between-vibe-coding-hand-coding/doc1/study.md) | 수업 순서 및 개념 정리 |
| [`app2/`](opentutorials-between-vibe-coding-hand-coding/app2/) | [`index.html`](opentutorials-between-vibe-coding-hand-coding/app2/index.html) | Counter 예제 HTML 페이지 |
| [`app2/`](opentutorials-between-vibe-coding-hand-coding/app2/) | [`diagram.md`](opentutorials-between-vibe-coding-hand-coding/app2/diagram.md) | 로컬 HTML 파일 실행 프로세스 다이어그램 |
| [`app2/`](opentutorials-between-vibe-coding-hand-coding/app2/) | [`VERCEL_DEPLOY_GUIDE.md`](opentutorials-between-vibe-coding-hand-coding/app2/VERCEL_DEPLOY_GUIDE.md) | Node.js 설치 및 Vercel CLI 배포 가이드 |

## 작업 규칙
- **브랜치 전략**: Git Flow (`feature/`, `develop`, `release/`, `hotfix/`)
- **커밋 메시지**: Conventional Commits 형식 (`feat:`, `docs:`, `chore:`, `fix:` 등)
- **커밋 단위**: 파일 및 작업 단위로 최소화하여 분리
