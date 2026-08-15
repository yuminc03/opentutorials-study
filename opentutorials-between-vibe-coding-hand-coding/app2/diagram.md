# 로컬 HTML 파일 실행 프로세스 다이어그램

## 1. 시퀀스 다이어그램 (Sequence Diagram)
```mermaid
sequenceDiagram
    autonumber
    actor User as 사용자
    participant Browser as 웹 브라우저
    participant OS_FS as 로컬 파일 시스템 (내 컴퓨터)
    participant Engine as 브라우저 렌더링 엔진

    Note over User, Browser: 1. 파일 열기 실행
    User->>Browser: index.html 열기 (더블 클릭 / file:/// 경로 입력)

    Note over Browser, OS_FS: 2. 로컬 디스크 읽기
    Browser->>OS_FS: file:// 프로토콜로 index.html 파일 데이터 요청
    OS_FS-->>Browser: HTML 파일 내용 전달 (바이트 데이터)

    Note over Browser, Engine: 3. 화면 파싱 및 렌더링
    Browser->>Engine: HTML 바이트 데이터 전달
    Engine->>Engine: HTML 구문 분석 (DOM 트리 생성)
    Engine->>Engine: 스타일 및 레이아웃 연산
    Engine->>Engine: 화면 페인팅 (Paint)

    Engine-->>Browser: 최종 렌더링 화면
    Browser-->>User: 브라우저 화면에 웹페이지 출력
```

## 2. 플로우차트 (Flowchart)
```mermaid
flowchart TD
    A["사용자: index.html 파일 브라우저로 열기"] --> B["웹 브라우저: 로컬 파일 시스템에 읽기 요청 (file:///...)"]
    B --> C["로컬 파일 시스템: index.html 파일 데이터 읽어 브라우저로 반환"]
    C --> D["렌더링 엔진: HTML 파싱 및 DOM 트리 생성"]
    D --> E["렌더링 엔진: 레이아웃 계산 및 화면 그리기 (Painting)"]
    E --> F["웹 브라우저: 모니터 화면에 최종 웹페이지 출력"]
```

## 3. 핵심 단계 설명
- **파일 열기**: 사용자가 로컬에 있는 `index.html`을 브라우저로 실행합니다.
- **로컬 파일 I/O**: 브라우저가 네트워크 서버가 아닌 내 컴퓨터의 파일 시스템(`file:///`)에 직접 접근하여 HTML 텍스트를 읽어옵니다.
- **파싱 및 화면 렌더링**: 읽어온 HTML 코드를 브라우저 렌더링 엔진이 해석(DOM 트리 구성)하고 레이아웃을 계산하여 화면에 표시합니다.
