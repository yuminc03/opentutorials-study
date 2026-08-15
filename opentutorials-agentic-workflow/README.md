# opentutorials-agentic-workflow
생활코딩님께서 알려주는 에이전틱 워크플로우 온라인 강의 실습 자료

## 강의 소개
- **강의명**: 에이전틱 워크플로우 (Agentic Workflow)
- **주관**: 생활코딩
- **일정**: 2026년 7월 11일 ~ 14일 (4일 과정)
- **방식**: Zoom 온라인 참여

## 4일 커리큘럼

| Day | 주제 | 세부 내용 |
|---|---|---|
| Day 1 | AI 협업 환경 및 버전 관리 초기화 | - Antigravity IDE 설치 및 AI 지시 환경 구축<br>- 규칙 파일(AGENTS.md)을 통한 에이전트의 맥락 정의<br>- Git 저장소 초기화 및 최초 커밋 생성 |
| Day 2 | 버전 이력 추적 및 브랜치 격리 | - 버전 이력 확인 및 특정 시점으로의 복구(checkout)<br>- 원본 보호 및 격리된 작업을 위한 브랜치 생성 |
| Day 3 | 브랜치 병합 및 충돌 해결 | - 다른 브랜치의 작업 내용을 main으로 합치는 병합(merge)<br>- 공통 조상 비교를 통한 충돌(Conflict) 원리 파악 및 해결 |
| Day 4 | GitHub 백업, 이슈 관리 및 지시 스킬 자동화 | - 로컬 저장소의 GitHub 백업(push)<br>- GitHub 이슈를 이용한 할 일 추적 및 에이전트 연동<br>- 반복적인 에이전트 지시 흐름을 커스텀 명령어(Skill)로 자동화 |

## 날짜별 학습 이력

| 날짜 | 폴더 | 작업 내용 |
|---|---|---|
| 2026-07-11 | `20260711/project1/` | - Antigravity IDE 설치 및 AI 코딩 환경 구축<br>- 에이전트 규칙 파일(AGENTS.md) 작성<br>- Antigravity, Markdown, Git 개념 정리(`study.md`)<br>- Git 저장소 초기화 및 최초 커밋 생성 |
| 2026-07-12 | `20260712/`<br>`20260712-2/` | - Antigravity, Markdown, Git 개념 심화 정리(`study.md`)<br>- Antigravity 에이전트 상세 설명 추가 및 문서 보완 |
| 2026-07-13 | `20260713/` | - Git Flow 브랜치 전략 적용 실습<br>- 브랜치별 문서 분리: `antigravity.md`, `git.md` 생성 및 `study.md` 링크 연결<br>- Antigravity·Git 개념 문서 작성 후 main 병합<br>- GitHub 원격 저장소 push 및 이슈 연동 실습 시작<br>- 전역 규칙 파일(SKILL.md) 초안 작성 및 AGENTS.md 정리 |
| 2026-07-14 | `20260714/`<br>`.agents/skills/` | - GitHub 이슈 #1(Git 설명 추가) 해결: `issue-1-git` 브랜치 생성 → 작업 → main 병합 → 이슈 종료<br>- GitHub 이슈 #2(Git 설명 간략화) 해결: `issue-2-git` 브랜치 생성 → 작업 → main 병합 → 이슈 종료<br>- `auto-issue` 커스텀 스킬 개발: 이슈 조회·브랜치 생성·커밋·병합·댓글·이슈 종료 전 과정 자동화<br>- `commit` 커스텀 스킬 개발: 규칙 기반 커밋 메시지 자동 생성 및 사용자 승인 후 커밋 실행<br>- 4일차 복습 `study.md` 작성 |

## 커스텀 스킬

| 스킬명 | 경로 | 설명 |
|---|---|---|
| `auto-issue` | `.agents/skills/auto-issue/` | GitHub 오픈 이슈 조회 → 브랜치 생성 → 파일 수정 → 커밋 → 병합 → 댓글 등록 → 이슈 종료까지 전 과정을 자동화. `/auto-issue <작업명>` 형식으로 신규 이슈 생성도 가능 |
| `commit` | `.agents/skills/commit/` | `/commit` 명령 입력 시 스테이징된 변경 사항을 분석하여 규칙 기반 커밋 메시지를 자동 생성하고, 사용자 승인 후 커밋 실행 |
