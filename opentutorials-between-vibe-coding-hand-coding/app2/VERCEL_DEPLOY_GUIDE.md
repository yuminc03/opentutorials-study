# Node.js 설치 및 Vercel CLI 배포 가이드

본 문서는 Node.js 설치부터 Vercel CLI를 이용해 **lia_team** 팀 스코프에 **md-20268153** 프로젝트를 생성하고 프로덕션 배포를 완료하는 전체 과정을 단계별로 정리한 가이드입니다.

---

## 1. Node.js 설치 (macOS)
Node.js와 npm(패키지 매니저)이 설치되어 있지 않은 경우 아래 방법 중 하나로 설치합니다.

### 방법 A. Homebrew를 이용한 설치 (권장)
터미널을 열고 아래 명령어를 실행합니다:
```bash
# Homebrew 패키지 목록 업데이트
brew update

# Node.js 최신 LTS 버전 설치
brew install node

# 설치 확인
node -v
npm -v
```

### 방법 B. 공식 설치 프로그램 다운로드
- [Node.js 공식 홈페이지](https://nodejs.org/)에 접속하여 **LTS 버전** macOS 인스톨러(`.pkg`)를 다운로드한 후 설치를 진행합니다.

---

## 2. Vercel CLI 전역(Global) 설치
터미널 어디서든 `vercel` 명령어를 사용할 수 있도록 npm으로 전역 설치합니다.

```bash
# Vercel CLI 전역 설치
npm install -g vercel

# 설치 및 버전 확인
vercel --version
```

---

## 3. Vercel 계정 로그인
Vercel CLI를 사용자의 계정(또는 팀 계정)에 연동합니다.

```bash
vercel login
```
- 터미널에 로그인 수단 목록(GitHub, GitLab, Bitbucket, Email 등)이 나타납니다.
- 키보드 방향키로 계정 수단을 선택하고 `Enter`를 누릅니다.
- 브라우저가 자동으로 열리면 인증 승인(Confirm)을 진행하여 로그인을 완료합니다.

---

## 4. 팀 스코프 지정 및 프로젝트 배포

### 1) 프로젝트 디렉토리로 이동
배포할 HTML 파일이 있는 디렉토리로 이동합니다:
```bash
cd /Users/chuyumin/Documents/생활코딩/opentutorials/opentutorials-between-vibe-coding-hand-coding/app2
```

### 2) Vercel 초기 배포 명령어 실행
```bash
vercel
```

### 3) 대화형 프롬프트(Interactive CLI) 응답 가이드
명령어 실행 시 나타나는 질문에 아래와 같이 정확히 입력합니다:

- **Q1. Set up and deploy “...” [Y/n]?**
  - 입력: `Y` (또는 `Enter`)
- **Q2. Which scope should contain your project?**
  - 설명: 프로젝트를 소유할 팀/계정을 선택하는 질문입니다.
  - 입력: 키보드 화살표로 **`lia_team`**을 찾아 선택 후 `Enter`
- **Q3. Link to existing project? [y/N]**
  - 입력: `N` (신규 프로젝트 생성이므로 N 입력 후 `Enter`)
- **Q4. What’s your project’s name?**
  - 입력: **`md-20268153`** (직접 입력 후 `Enter`)
- **Q5. In which directory is your code located?**
  - 입력: `./` (현재 디렉토리이므로 바로 `Enter`)
- **Q6. Want to modify these settings? [y/N]**
  - 입력: `N` (기본 정적 사이트 설정 유지를 위해 `Enter`)

질문 응답이 끝나면 빌드가 진행되고 임시(Preview) 배포 URL이 생성됩니다.

---

## 5. 프로덕션(Production) 정식 배포
검증 및 실제 서비스용 정식 도메인으로 배포하려면 `--prod` 플래그를 추가하여 실행합니다:

```bash
vercel --prod
```

### 배포 완료 화면 예시
```text
🔍 Inspect: https://vercel.com/lia_team/md-20268153/xxxxxx [1s]
✅ Production: https://md-20268153.vercel.app [copied to clipboard] [2s]
```

---

## 6. 이후 코드 수정 및 재배포
`index.html` 등의 소스 코드를 수정한 후 웹에 반영할 때는 프로젝트 폴더에서 아래 명령어 한 줄만 실행하면 됩니다:

```bash
vercel --prod
```
