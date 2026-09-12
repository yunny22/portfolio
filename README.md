# Taeyun Kim Autonomous Driving Research Portfolio

김태윤의 대학원 진학용 자율주행 연구 포트폴리오입니다. 학습 기반 자율주행, 경로 계획과 제어, Sim-to-Real, 실차 시스템 통합과 V2I End-to-End driving 프로젝트를 정리합니다.

이 사이트는 [Astro](https://astro.build/)로 만든 정적 웹사이트입니다. 프로젝트별 문제, 개인 기여, 구현 과정, 실험 결과와 한계를 이미지·영상 근거와 함께 보여줍니다.

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
