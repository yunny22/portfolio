# Taeyun Kim · Autonomous Driving Research Portfolio

학습 기반 자율주행, Sim-to-Real, 실차 자율주행 및 V2I 협력주행 연구 경험을 정리한 포트폴리오입니다.

이 사이트는 [Astro](https://astro.build/)로 만든 정적 웹사이트입니다. 프로젝트별 문제, 개인 기여, 구현 과정, 실험 결과와 한계를 이미지·영상 근거와 함께 보여줍니다.

## 주요 대회와 전공 수업

| 항목 | 개인 기여와 결과 |
|---|---|
| Team K.A.I. · 국토교통부 장관상 | 실차 로그에서 작은 우측 조향 요구에 대한 응답 부족을 찾아 보정 코드를 구현했다. 같은 속도대의 공통 직선 246m에서 평균 절대 경로 오차가 57.07cm에서 19.55cm로 줄었다. 팀은 자율주행구현 부문 대상과 창작기술 부문 특별상을 수상했다. [보정 전후 그래프](public/media/projects/kai-steering-error.jpg) |
| HL FMA 2026 · 장려상 | 건국대학교 SVE 팀에서 실차 자율주행 시스템의 전체 아키텍처를 설계하고 장애물 구간 경로 주행을 구현했다. [차량 시스템 저장소](https://github.com/yunny22/hl-ku-autonomous-vehicle) |
| 인공지능 응용 | DAgger 실습에서 11개 정책을 총 220회 폐루프 평가해 제출 모델을 선정했다. [실습과 결과](https://github.com/yunny22/AI-applications) |
| 거대언어모델 | 임베딩, 셀프 어텐션, 잔차 연결과 정규화를 중심으로 Transformer의 구조를 공부하고, 사전학습 데이터와 최적화 방법을 정리했다. |

## Local development

Node.js와 pnpm을 설치한 뒤 실행합니다.

```bash
pnpm install
pnpm dev
```

기본 개발 주소는 `http://localhost:4321`입니다.

정적 빌드와 빌드 결과 미리보기:

```bash
pnpm build
pnpm preview
```

## Project structure

```text
src/
├── components/       Shared header, footer and project card
├── data/projects.ts  Project content and research journey
├── layouts/          Base page layout
├── pages/            Home, project archive, details and academic record
└── styles/           Global design system

public/
├── docs/             Public academic record
└── media/            Project images, video and posters
```

## Deployment

GitHub Pages workflow는 `.github/workflows/deploy.yml`에 있습니다. 현재는 저장소를 공개하기 전 단계이므로 자동 배포하지 않으며, GitHub의 **Actions → Deploy to GitHub Pages → Run workflow**에서 수동으로 실행하도록 설정되어 있습니다.

`astro.config.mjs`는 GitHub Actions의 `GITHUB_REPOSITORY` 값을 사용해 사용자 페이지와 프로젝트 페이지의 base path를 구분합니다.
