<div align="center">
  <p>내 손 안에 간편한 행사 관리 시스템</p>
  <h1>CheckMate | 체크메이트</h1>
</div>

<br />

<div id="1"></div>

## 💁🏻 웹 서비스 소개

행사 참석자들의 출석 확인을 쉽고 빠르게 하고, 주최자가 참석 이력을 효율적으로 관리할 수 있는 서비스를 제공한다.
<br />

<div id="2"></div>

<br />

## 💻 Development Techs

### Front-end

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black"><img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">

### Version Control

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Deployment Tool

<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

<br>

## 📖 Using Library

| 라이브러리 | 사용 목적 | Management Tool |
| :--------: | :-------: | :-------------: |

<br>

## 📌 Git Convention

### 🔵 Commit Convention

- `feat` : 새로운 기능 추가
- `fix` : 버그, 오류 해결
- `modify` : 코드 수정 (기능의 변화가 있을 때)
- `docs` : README나 WIKI 등의 문서 수정
- `remove` : 폴더 또는 파일 삭제, 쓸모없는 코드 삭제
- `rename` : 파일 이름 변경 또는 파일 이동시
- `refactor` : 기능 추가나 버그 수정이 없는 코드 변경 ( 코드 구조 변경 등의 리팩토링 )
- `style` : 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
- `design` : CSS 등 사용자 UI 디자인 변경
- `test` : 테스트 코드, 리팩토링 테스트 코드 추가
- `chore` : src 또는 test 파일을 수정하지 않는 기타 변경 사항 ( 빌드/패키지 매니저 설정 변경 등 )
- `merge` : merge 하는 경우
- `!BREAKING CHANGE` : 커다란 API 변경의 경우
- `!HOTFIX` : 급하게 치명적인 버그를 고쳐야 하는 경우

### 커밋 예시

- git commit -m "커밋 태그: 커밋 내용"
  - `ex ) git commit -m "feat: 회원가입 기능 구현"`

<br>

### 🔵 Branch Convention

- `main` : 최종 배포
- `dev` : 주요 개발, main merge 이전에 거치는 branch
- `feat` : 각자 개발, 기능 추가
- `fix` : 에러 수정, 버그 수정
- `docs` : README, 문서
- `refactor` : 코드 리펙토링 (기능 변경 없이 코드만 수정할 때)
- `modify` : 코드 수정 (기능의 변화가 있을 때)

### 브랜치 명 예시

- feat/기능 이름
  - `ex) feat/login`

<br>

### 🔵 Branch Strategy

- Git-flow 전략을 기반으로 `main`, `dev` 브랜치와 `feat` 보조 브랜치를 운용했습니다.
- `main`, `dev`, `feat` 브랜치로 나누어 개발을 하였습니다.
  - `main` 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
  - `dev` 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
  - `feat` 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

### 🔵 Issue Convention

- `[공통]` : 공통적으로 적용되는 경우
- `[행사 전]` : 행사 전에 필요한 기능을 구현 하는 경우
- `[행사 당일]` : 행사 당일에 필요한 기능을 구현 하는 경우
- `[행사 후]` : 행사 후에 필요한 기능을 구현 하는 경우

### 이슈 명 예시

- [이슈 항목] 개발 내용
  - `ex) [공통] 홈화면 구현`

## 📅 개발 기간

2024.05.05 ~ ing
