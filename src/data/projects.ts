export type ProjectStatus = 'Completed' | 'Ongoing';
export type ProjectKind = 'research' | 'engineering' | 'ongoing-research';
export type ProjectCategory =
  | 'Learning-based Autonomous Driving'
  | 'Autonomous Driving Systems'
  | 'Localization & Mapping'
  | 'Foundation / Other Experience';

export type Metric = { value: string; label: string };
export type ProjectMedia = {
  type: 'image' | 'video' | 'embed';
  src: string;
  poster?: string;
  alt: string;
  caption: string;
  fit?: 'cover' | 'contain';
};
export type ProjectSection = {
  label: string;
  title: string;
  items: string[];
  tone?: 'default' | 'result' | 'limit' | 'focus';
  wide?: boolean;
};
export type Repository = { url: string; label: string };
export type Project = {
  order: number;
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  period: string;
  status: ProjectStatus;
  kind: ProjectKind;
  category: ProjectCategory;
  featured: boolean;
  summary: string;
  problem?: { label: string; title: string };
  sections: ProjectSection[];
  metrics?: Metric[];
  tags: string[];
  image?: string;
  imageAlt?: string;
  media?: ProjectMedia[];
  repositories?: Repository[];
  accent: 'lime' | 'cyan' | 'orange' | 'violet';
};

const projectEntries: Project[] = [
  {
    order: 1,
    slug: 'mechatronics-model-car',
    title: 'Mechatronics Autonomous Model Car',
    shortTitle: 'Mechatronics Model Car',
    eyebrow: 'Engineering · Vehicle Foundation',
    period: '2023.08 - 2023.12',
    status: 'Completed',
    kind: 'engineering',
    category: 'Foundation / Other Experience',
    featured: false,
    summary: 'Mbed 보드에 IR 차선 센서, Hall 속도 센서, PSD 거리 센서를 붙여서 차선 추종이랑 장애물 정지까지 도는 자율주행 모형차를 만들었다. 처음 해본 실차 프로젝트였는데 임베디드에서 제어 주기랑 센서 신뢰성이 왜 중요한지 여기서 제대로 겪었다.',
    problem: { label: 'Project Goal', title: '주어진 차량 플랫폼에 센서랑 제어기, 구동부를 직접 조립하고 배선해서 트랙을 완주하는 모형차를 만드는 게 목표였다.' },
    sections: [
      {
        label: 'Hardware Integration',
        title: '센서랑 구동부 직접 배선하고 통합',
        items: ['수업 회로도를 참고해서 전원 회로랑 센서 회로를 직접 납땜하고 배선했다.', 'Mbed LPC1768 보드에 모터 드라이버, IR/Hall/PSD 센서, 서보/DC 모터를 연결해서 굴러가게 맞췄다.'],
      },
      {
        label: 'Perception / Control Structure',
        title: '센서 입력을 조향·속도·정지 제어로 연결',
        items: ['IR 센서가 중앙선 오차를 읽으면 서보 조향을 돌리게 구성했다.', '처음엔 Hall 센서로 속도를 재고 PID 제어로 DC 모터 PWM을 돌렸고, SHARP PSD 센서로 전방 장애물 거리를 재서 정지시켰다.'],
      },
      {
        label: 'Speed Control / Embedded Optimization',
        title: '제어 구조 단순화해서 반응 속도 확보',
        tone: 'focus',
        items: ['초반에는 수업에서 배운 대로 Hall 센서 기반 PID 속도 제어를 넣었다.', '근데 차선 추종, 거리 측정, 조향을 Mbed 하나에서 다 돌리니까 연산이 무거워져서 조향 반응까지 같이 느려지는 문제가 생겼다.', '정밀한 속도 추종보다는 반응 속도가 급해서, 속도에 따라 모터 출력을 바로 조절하는 단순한 구조로 바꿨더니 주행이 훨씬 안정됐다.'],
      },
      {
        label: 'PSD Distance Sensor Problem',
        title: 'PSD 거리 센서 간헐적 오작동',
        tone: 'limit',
        items: ['초기 튜닝 때는 장애물 앞에서 잘 멈췄는데, 간헐적으로 실제 장애물이 없는데도 가까운 거리값이 튀는 현상이 있었다.', '정지 기준값을 함부로 높이면 진짜 장애물 앞에서 못 멈출 수 있어서 튜닝으로 못 잡았고, 결국 본선 대회에서도 이 문제가 터져서 완주에 실패했다.'],
      },
      {
        label: 'Result / Insight',
        title: '트랙 기능 구현과 남은 한계',
        tone: 'limit',
        items: ['직선·코너·언덕·비상제동이 섞인 트랙에서 테스트 주행까지는 성공했지만 대회 당일 센서 문제로 탈락했다.', '임베디드 쪽에서는 알고리즘 자체보다 루프 주기가 안 밀리게 유지하는 거랑 센서 튀는 걸 거르는 게 훨씬 크다는 걸 체감했다.'],
      },
    ],
    tags: ['Mbed LPC1768', 'IR Lane Sensor', 'Hall Speed Sensor', 'PSD Distance Sensor', 'PID Control'],
    image: 'media/projects/mechatronics-build.jpg',
    imageAlt: '자율주행 모형차의 센서와 회로를 점검하는 제작 과정',
    media: [
      { type: 'image', src: 'media/projects/mechatronics-car.jpg', alt: '센서와 제어기를 장착한 자율주행 모형차', caption: '모형차 통합 구성 · 센서, 제어기, 전원과 구동부 배선' },
      { type: 'image', src: 'media/projects/mechatronics-board.jpg', alt: '직접 납땜한 센서 인터페이스 보드', caption: '센서 인터페이스 보드 · 직접 납땜한 회로 배선', fit: 'contain' },
    ],
    accent: 'lime',
  },
  {
    order: 2,
    slug: 'hybrid-path-planning',
    title: 'Learning- and Rule-based Hybrid Path Planning',
    shortTitle: 'Hybrid Path Planning',
    eyebrow: 'Research · Planning & Learning · Team of 2',
    period: '2026.03 - 2026.06',
    status: 'Completed',
    kind: 'research',
    category: 'Learning-based Autonomous Driving',
    featured: false,
    summary: '모방학습의 부드러운 조향이랑 규칙 기반 제어의 안정적인 상황 대응을 섞어보려고 만든 하이브리드 주행 시스템이다. 정상 주행은 학습 모델이 잡고, 장애물이나 신호등은 규칙 기반으로 넘기는 식으로 짰다.',
    problem: {
      label: 'Project Goal',
      title: 'CARLA 환경에서 정상 주행은 모방학습으로, 장애물·신호 대응은 Rule-based로 처리하는 하이브리드 구조를 구현하는 게 목표였다.',
    },
    sections: [
      {
        label: 'Approach',
        title: '사람 주행 대신 Pure Pursuit을 전문가 정책으로 사용',
        items: [
          '처음엔 키보드로 직접 CARLA 차량을 몰아서 데이터를 모으려 했는데, 조향 편차가 너무 커서 모델이 이상한 습관까지 배울 것 같았다.',
          '키보드 데이터는 버리고, 기준 경로를 깔끔하게 따라가는 Pure Pursuit 제어기를 전문가로 써서 steer-only Behavioral Cloning 모델을 학습시켰다.',
          '장애물 회피 데이터까지 학습으로 커버하기엔 데이터가 모자라서 IL은 정상 차선 추종에만 집중시켰다.',
        ],
      },
      {
        label: 'Implementation',
        title: '상황별 제어권 전환 구조',
        items: [
          '정상 경로는 IL이 조향하고, 정적 장애물이 뜨면 Lattice Planner로 회피 경로를 타도록 역할을 나눴다.',
          '보행자 끼어들기나 신호등·정지선은 Rule-based가 잡아서 멈추고, 속도 제어도 별도 규칙으로 뺐다.',
        ],
      },
      {
        label: 'Final Validation / Limitation',
        title: '다른 맵으로 옮겼을 때 터진 주행 가능 영역 문제',
        tone: 'limit',
        items: [
          '프로젝트 막판에 다른 CARLA 맵에 그대로 올려봤는데 문제가 생겼다. 회피 방향을 좌우 후보 비교 없이 장애물 상대 위치만 보고 바로 정했고, Lattice Planner도 차선이나 연석 같은 주행 가능 영역 정보를 안 봤다.',
          '그러다 보니 회피 경로가 도로 밖이나 연석 위로 뻗어버리거나, 장애물 판정 조건이 꼬여서 회피 자체가 안 도는 경우가 있었다. 마감 직전에 발견해서 기간 안에 다 고치진 못했다.',
        ],
      },
      {
        label: 'Future Work',
        title: '회피 경로 선택 구조 보완 필요',
        items: [
          '장애물 충돌 여부만 볼 게 아니라 좌우 회피 후보랑 실제 주행 가능 영역을 같이 평가하도록 뜯어고쳐야 한다.',
        ],
      },
    ],
    tags: ['CARLA 0.9.16', 'Behavioral Cloning', 'LiDAR', 'Lattice Planner', 'ROS2 Humble'],
    image: 'media/hybrid-carla.jpg',
    imageAlt: 'CARLA에서 주행 중인 Hybrid Path Planning 실험 화면',
    media: [{ type: 'video', src: 'media/projects/hybrid-drive.mp4', poster: 'media/projects/hybrid-drive-poster.jpg', alt: 'CARLA Hybrid Path Planning 주행 시험', caption: 'CARLA 폐루프 주행 · IL 주행과 Lattice 회피 전환 시험' }],
    repositories: [{ url: 'https://github.com/yunny22/hybrid-path-planning', label: 'Public Repository · Hybrid Path Planning' }],
    accent: 'lime',
  },
  {
    order: 3,
    slug: 'kookmin-preliminary',
    title: 'Kookmin Preliminary - Imitation Learning',
    shortTitle: 'Kookmin Preliminary',
    eyebrow: 'Engineering · Competition Preliminary',
    period: '2026.06',
    status: 'Completed',
    kind: 'engineering',
    category: 'Learning-based Autonomous Driving',
    featured: true,
    summary: '키보드 주행 시연으로 전방 카메라 영상이랑 조향 명령을 동기화해서 모으고, 정지선·신호등처럼 규칙이 딱 정해진 미션만 상태 머신으로 뺐다. 직선·곡선이랑 라바콘·보행자 회피는 모방학습으로 돌렸고 예선 45팀 중 2위(3랩 2:10.70, 벌점 0)로 본선에 올라갔다.',
    problem: {
      label: 'Project Goal',
      title: '사람의 키보드 시연 데이터를 학습시켜서 직선·곡선 주행부터 라바콘·보행자 회피까지 연속 조향을 모델이 직접 내보내게 만드는 게 목표였다.',
    },
    sections: [
      {
        label: 'Approach',
        title: '학습 파이프라인 구성',
        items: [
          '전방 카메라에서 도로 영역(ROI)만 크롭해서 160×90 RGB로 줄이고, 합성곱 4층(24·36·48·64채널) + 평균 풀링 + FC로 tanh 정규화 조향각 1개를 뽑았다.',
          'Smooth L1 손실에 AdamW(배치 64, lr 0.001, 30 epochs)로 학습해서 실시간 ROS 2 추론 노드에 붙였다.',
          '복제한 샘플은 타임스탬프·조향·속도·전처리 설정을 하나로 묶어서 같은 원본이 train이랑 val 양쪽에 들어가지 않게 막았다.',
        ],
      },
      {
        label: 'Implementation',
        title: '역할 분리 및 미션 중재 통합',
        items: [
          '데이터 수집기 제작부터 학습, 실시간 ROS 2 추론 노드, 미션 중재 로직 통합까지 직접 짰다. 다른 백본도 갈아끼울 수 있게 해두고 후반 고속 주행 데이터는 팀원들이랑 같이 모았다.',
          '가감속·정지나 신호등·어린이보호구역 같은 규칙성 미션은 상태 머신이 잡고, 연속 조향만 모델이 담당하는 구조다.',
        ],
      },
      {
        label: 'Main Problem',
        title: '실행 주기(Hz) 흔들림과 고속 주행 한계',
        tone: 'limit',
        items: [
          '똑같은 모델인데 실행하는 PC 환경에 따라 조향 갱신 주기가 9~10Hz 사이로 들쑥날쑥했다.',
          '저속일 땐 티가 별로 안 났는데 속도를 올리니까 곡선이나 회피 구간에서 궤적이 눈에 띄게 흔들렸다.',
        ],
      },
      {
        label: 'Data Iteration',
        title: '실패 구간 위주 데이터 재수집 & Closed-loop 검증',
        items: [
          '정지된 데이터셋에서 조향 오차 줄이는 거랑 실제 폐루프 주행은 완전히 다른 문제였다. 코너나 회피에서 궤적이 터질 때마다 그 구간만 다시 주행해서 시연 데이터를 보강했다.',
          '재학습하고 나서도 같은 코스를 계속 폐루프로 돌려보면서 궤적이 잡히는지 확인했고, 대회 직전까지 하이퍼파라미터랑 데이터를 반복 조정했다.',
        ],
      },
      {
        label: 'Team Result',
        title: '국민대 예선 최종 2위 (45팀 중, 벌점 0)',
        tone: 'result',
        items: [
          '3랩 기록 2분 10.70초, 신호위반·차선이탈·충돌·어린이보호구역 위반 없이 벌점 0으로 완주했다.',
          '예선 도중 1위까지 찍었다가 마지막 주행 반영 후 최종 2위로 본선에 진출했다.',
        ],
      },
    ],
    metrics: [
      { value: '2nd / 45', label: 'team final rank' },
      { value: '02:10.70', label: 'team 3-lap time' },
      { value: '0', label: 'team penalties' },
    ],
    tags: ['Behavioral Cloning', 'PyTorch', 'ONNX', 'ROS2', 'Competition'],
    image: 'media/projects/kookmin-preliminary-driving.jpg',
    imageAlt: '국민대학교 자율주행대회 예선 트랙을 주행 중인 차량과 ROS2 실행 화면',
    media: [
      { type: 'video', src: 'media/projects/kookmin-drive.mp4', poster: 'media/projects/kookmin-drive-poster.jpg', alt: '국민대 예선 주행 리플레이', caption: '국민대 예선 주행 리플레이 · CNN 조향과 미션 Rule 통합' },
      { type: 'image', src: 'media/kookmin-leaderboard.png', alt: '국민대 예선 순위표', caption: '예선 도중 순위표 · 최종 결과 45팀 중 2위', fit: 'contain' },
    ],
    repositories: [{ url: 'https://github.com/yunny22/kookmin-imitation-learning', label: 'Public Repository · Kookmin Preliminary' }],
    accent: 'orange',
  },
  {
    order: 4,
    slug: 'sim-to-real-driving',
    title: 'Kookmin Final - Reinforcement Learning & Sim-to-Real',
    shortTitle: 'Kookmin Final · Sim-to-Real',
    eyebrow: 'Research · Individual Project · Reinforcement Learning & Sim-to-Real',
    period: '2026.06 - 2026.08',
    status: 'Completed',
    kind: 'research',
    category: 'Learning-based Autonomous Driving',
    featured: true,
    summary: '예선에서 겪은 고속 조향 진동 원인을 통제된 환경에서 뜯어보려고 Gazebo 시뮬레이션을 직접 깔았다. 세그멘테이션(LR-ASPP MobileNetV3) 기반 정준(Canonical) BEV 차선 표현(256×144)으로 BC랑 오프라인 RL(TD3+BC)을 학습시켜서 1/10 실차 저속 주행까지는 붙였는데, 고속에서 좌우 진동이 다시 커지는 문제에 부딪혔다.',
    problem: {
      label: 'Project Goal',
      title: '가상 카메라랑 실차 카메라의 색감·조명 차이(Domain Gap)를 줄인 공통 입력을 만들고, 시뮬레이션에서 학습한 정책을 1/10 실차로 옮겨서 검증하는 게 목표였다.',
    },
    sections: [
      {
        label: 'Why Simulation / Approach',
        title: '시뮬레이터랑 실차 입력을 같은 차선 표현으로 맞추기',
        items: [
          '예선 고속 주행 때 생긴 조향 진동을 실차로만 계속 테스트하긴 어려워서 Gazebo 시뮬레이션 환경을 먼저 구축했다.',
          '원영상 그대로 넣으면 도메인 차이가 커서, 세그멘테이션(LR-ASPP MobileNetV3) 기반 정준 BEV 차선 표현(256×144)을 공통 입력으로 짰다.',
          '로그에서 뽑은 차선 표현으로 BC 기초 정책을 먼저 학습시켰고, 진행 방향 변화까지 보려고 연속 두 프레임을 같이 넣을 수 있게 구성했다.',
          '여기에 Critic 2개로 상태-행동 가치를 추정하고 BC 정규화 항을 붙인 오프라인 RL(TD3+BC)까지 확장해봤다.',
        ],
      },
      {
        label: 'Validation',
        title: 'Gazebo 폐루프 검증에서 1/10 실차 이식까지',
        items: [
          'Gazebo 폐루프 환경에서 조향·속도 출력을 먼저 검증하고, 같은 파이프라인을 그대로 1/10 스케일 실차 플랫폼에 올려서 저속 주행까지 돌아가는 걸 확인했다.',
        ],
      },
      {
        label: 'Limitation',
        title: '지연 보정 후에도 남은 고속 오실레이션',
        tone: 'limit',
        items: [
          '실차에서 계측한 센서·제어 지연이랑 조향 응답 특성을 시뮬레이터 파라미터에 반영해봤는데도 속도를 높이면 좌우 진동이 다시 증폭됐다.',
          '시각적 도로 표현을 아무리 똑같이 맞춰도 타이어–노면 마찰이나 차체 동역학의 비선형성처럼 시뮬레이터가 못 따라가는 물리적 차이가 남아 있었고, 각각의 영향은 추가 검증이 필요한 상태로 남았다.',
        ],
      },
      {
        label: 'Next Project',
        title: '본선 주행을 위한 전략적 선택',
        tone: 'focus',
        items: [
          '대회 일정 안에 학습 기반 정책의 고속 안정성을 잡기엔 시간이 부족하다고 판단해서, 실제 본선에서는 팀이랑 같이 짠 규칙 기반 주행 스택(메트릭 중심선 추적 + Pure Pursuit–Stanley 융합 제어)을 올려서 완주했다.',
        ],
      },
    ],
    tags: ['Canonical BEV', 'Behavioral Cloning', 'TD3+BC', 'Sim-to-Real'],
    image: 'media/projects/sim-gazebo-drive-poster.jpg',
    imageAlt: '국민대 형상 Gazebo 트랙에서 Sim-to-Real 정책을 검증하는 Xycar 주행 화면',
    media: [
      { type: 'image', src: 'media/projects/sim-gazebo-track-topdown.png', alt: '국민대 형상 Gazebo 트랙 평면도', caption: 'Gazebo 학습 트랙 · 실차 코스 형상을 반영한 폐루프 환경', fit: 'contain' },
      { type: 'video', src: 'media/projects/sim-gazebo-drive.mp4', poster: 'media/projects/sim-gazebo-drive-poster.jpg', alt: '국민대 형상 Gazebo 환경의 Xycar 주행', caption: 'Gazebo 주행 환경 · 학습 데이터 수집과 폐루프 정책 검증' },
      { type: 'image', src: 'media/projects/sim-normalization-real-vs-gazebo.jpg', alt: '실차 rosbag과 Gazebo 영상이 같은 canonical 차선 표현으로 정규화된 비교', caption: 'Sim-to-Real 인지 정규화 · 위: 실차 rosbag, 아래: Gazebo · 서로 다른 원영상을 같은 256×144 canonical 입력으로 변환', fit: 'contain' },
      { type: 'image', src: 'media/projects/sim-real-rosbag-sequence.jpg', alt: '실차 rosbag 주행 구간별 원영상, BEV, canonical 차선과 추적 결과', caption: '실차 시퀀스 점검 · 주행 위치별 Rectified 원영상 → BEV → canonical 입력 → sliding-window 추적 결과', fit: 'contain' },
    ],
    repositories: [{ url: 'https://github.com/yunny22/kookmin-sim-to-real', label: 'Public Repository · Sim-to-Real' }],
    accent: 'violet',
  },
  {
    order: 5,
    slug: 'kookmin-final-rule-based',
    title: 'Kookmin Final - Rule-based Autonomous Driving System',
    shortTitle: 'Kookmin Final · Rule-based System',
    eyebrow: 'Engineering · Competition Final',
    period: '2026.08',
    status: 'Completed',
    kind: 'engineering',
    category: 'Autonomous Driving Systems',
    featured: false,
    summary: 'Sim-to-Real 하면서 원거리 차선 인지가 짧아서 생기는 한계를 겪고 나서, 본선용으로는 Xbin 기반 황색 중앙선을 차량 좌표계 metric path로 바로 뽑아 쓰는 규칙 기반 시스템을 팀과 함께 짰다. Pure Pursuit–Stanley 융합 제어랑 미션 중재 로직을 통합해 본선 3랩을 완주했다.',
    problem: {
      label: 'Project Goal',
      title: '더 먼 황색 중앙선을 직접 뽑아 metric path로 바꾸고, 이걸 본선용 규칙 기반 제어 구조에 안정적으로 붙이는 게 목표였다.',
    },
    sections: [
      {
        label: 'Xbin Lane Perception',
        title: '황색 중앙선을 차량 좌표계 metric path로 직접 변환',
        items: [
          'Wide 카메라 영상에서 Xbin 기반으로 황색 중앙선 점을 뽑아 vehicle-frame metric path(`/perception/xbin_direct_centerline`)로 바로 넘겼다.',
          '전체 BEV 이미지를 제어기에 그대로 넣는 대신 직관적인 metric centerline을 쓰는 쪽으로 선회했다.',
        ],
      },
      {
        label: 'System Architecture',
        title: '우선순위 중재 기반 본선 주행 구조',
        items: [
          'Xbin 경로를 Pure Pursuit + Stanley 융합 제어기에 연결해 기본 조향 후보를 만들고, YOLO(신호등·차량)랑 LiDAR(콘·장애물 거리)를 엮었다.',
          'LR-ASPP는 기본 차선이 아니라 숏컷(W1) 판정에만 썼고, 콘 주행 후보는 팀원 모듈에서 받아왔다.',
          'TRAFFIC → SHORTCUT → CONE → YOLO+LiDAR AVOIDANCE → RULE 순서로 제어권을 중재해서 `/xycar_motor`로 내보냈다.',
        ],
      },
      {
        label: 'Team Result',
        title: '본선 3랩 통합 완주',
        tone: 'result',
        items: [
          '2026년 8월 23일 본선에서 팀 통합 시스템으로 3랩 완주에 성공했다.',
        ],
      },
    ],
    tags: ['Xbin', 'Direct Metric Path', 'Stanley', 'Pure Pursuit', 'YOLO', 'LiDAR', 'Rule-based'],
    image: 'media/projects/kookmin-final-rule-drive-poster.jpg',
    imageAlt: '국민대 본선 Rule-based 시스템의 실차 주행 기록',
    media: [
      { type: 'video', src: 'media/projects/kookmin-final-rule-drive.mp4', poster: 'media/projects/kookmin-final-rule-drive-poster.jpg', alt: '국민대 본선 Rule-based 실차 주행 기록', caption: '본선 Rule-based 실차 주행 기록', fit: 'contain' },
    ],
    repositories: [{ url: 'https://github.com/yunny22/kookmin-rule-based-autonomous-driving', label: 'Public Repository · Rule-based Final' }],
    accent: 'orange',
  },
  {
    order: 6,
    slug: 'lidar-slam-localization',
    title: 'Kookmin - SLAM / Localization',
    shortTitle: 'LiDAR SLAM & Localization',
    eyebrow: 'Research · Localization',
    period: '2026.07',
    status: 'Completed',
    kind: 'research',
    category: 'Localization & Mapping',
    featured: false,
    summary: '국민대 대회에서 속도를 더 올리려면 안정적인 위치 추정이 필요해서 2D LiDAR 지도 기반 Localization을 만들어 건국대랑 국민대 트랙에서 실차 테스트를 해봤다.',
    problem: { label: 'Project Goal', title: '고속 주행에서 쓸 수 있을 만큼 안정적인 2D LiDAR 지도 기반 위치 추정을 실차에 붙이는 게 목표였다.' },
    sections: [
      { label: 'Approach / Validation', title: '건국대 공학관 검증 후 국민대 트랙 적용', items: ['2D LiDAR로 점유 지도를 따서 저장해두고, 현재 LiDAR 스캔이랑 매칭해서 차량 위치를 추정하는 구조를 짰다.', '건국대학교 공학관 복도에서는 지도 생성부터 위치 추정, 실차 주행까지 무난하게 돌아갔다.'] },
      { label: 'Result / Limitation', title: '환경 변화에 따른 정합 불안정', tone: 'limit', items: ['막상 국민대학교 트랙에 올리니까 주변 의자나 책상 배치가 수시로 바뀌면서 저장 지도랑 현재 스캔 정합이 자꾸 튀었다.', '결국 대회에서 빠른 주행에 바로 쓸 만큼 위치가 안정적으로 안 나와서 보류했다. 변화하는 구조물을 거르거나 지도를 계속 업데이트하지 않으면 정적 맵 기반 매칭은 한계가 뚜렷했다.'] },
    ],
    tags: ['2D LiDAR', 'slam_toolbox', 'SLAM', 'Localization', 'ROS2', 'Real Vehicle'],
    image: 'media/projects/slam-konkuk-map.png',
    imageAlt: '건국대학교 공학관에서 2D LiDAR로 생성한 점유 지도',
    media: [
      { type: 'image', src: 'media/projects/slam-route-overlay.png', alt: 'LiDAR 지도 위 계획 경로와 실제 주행 궤적', caption: '생성 지도 기반 경로 · 계획 궤적과 실제 위치 추정 결과 비교', fit: 'contain' },
      { type: 'video', src: 'media/projects/slam-real-drive.mp4', poster: 'media/projects/slam-real-drive-poster.jpg', alt: '건국대학교 공학관 LiDAR 지도 기반 주행', caption: '건국대학교 공학관 실차 주행 · 생성 지도와 LiDAR 위치 추정 사용', fit: 'contain' },
      { type: 'image', src: 'media/projects/slam-kookmin-occupancy-map.png', alt: '국민대학교 메인 트랙의 LiDAR 점유 지도와 전역 경로 및 위치 추정 궤적', caption: '국민대학교 메인 트랙 기록 · LiDAR occupancy map 위에 909개 점의 전역 경로(파랑), 기록 pose(빨강), 불안정한 route-localization 출력(초록)을 비교', fit: 'contain' },
    ],
    repositories: [{ url: 'https://github.com/yunny22/lidar-slam-localization', label: 'Public Repository · LiDAR SLAM / Localization' }],
    accent: 'cyan',
  },
  {
    order: 7,
    slug: 'kai-decision-architecture',
    title: 'Team K.A.I. · 실차 직선 주행 좌편향 개선',
    shortTitle: 'Team K.A.I. · 국토교통부 장관상',
    eyebrow: 'Engineering · Autonomous Driving System',
    period: '2026.03 – 2026.10',
    status: 'Completed',
    kind: 'engineering',
    category: 'Autonomous Driving Systems',
    featured: true,
    summary: '2026 대학생 AI·SW 모빌리티 경진대회에서 Team K.A.I. 자작자율차가 직선에서 자꾸 왼쪽으로 쏠리는 문제를 ROS 2 주행 로그로 잡았다. 작은 우측 조향 명령을 보정하는 비선형 테이블을 짜서 넣었더니 공통 직선 246m 기준 평균 절대 횡오차가 65.7% 줄었고, 대회에서 자율주행구현 부문 대상(국토교통부 장관상)이랑 창작기술 부문 특별상을 받았다.',
    problem: { label: 'Project Goal', title: '자작자동차 대회용 자율주행 전체 아키텍처를 설계하고, 실차가 나오기 전 Gazebo에서 대회 환경과 알고리즘을 먼저 검증한 뒤 실차에 올리는 게 목표였다.' },
    sections: [
      {
        label: 'Personal Contribution', title: '미소 우측 조향 보정 및 영점 조정 제안', tone: 'focus',
        items: ['주행 로그를 까보니까 경로 추종기가 오른쪽으로 조금 꺾으라고 명령을 줘도 실제 차가 거의 반응을 안 해서 왼쪽으로 계속 흘렀다.', '그래서 우측 1° 조향 요청이 들어오면 2.3°를 쏘는 식으로 미소 조향 구간 비선형 보정 테이블을 직접 짜서 넣었다. 좌측·중립이랑 우측 7° 이상은 기존 값 그대로 뒀다.', '보정 후에도 약 16.9cm 정도 좌편향이 남길래 조향 엔코더 0° 기준점이 기계적 직진 정렬이랑 미세하게 어긋나 있다고 보고 소프트웨어 영점 조정을 추가로 제안했다.'],
      },
      {
        label: 'Real-Vehicle Evaluation', title: '10월 17일 보정 전후 동일 직선 246m 비교', tone: 'result',
        items: ['같은 날(10월 17일) 보정 전후 주행에서 속도가 6.5–7.5 m/s로 겹치는 공통 직선 246m를 잘라서 1m 구간별 오차 중앙값으로 비교했다.', '평균 좌편향은 57.02cm에서 16.93cm로, 평균 절대 횡오차는 57.07cm에서 19.55cm(65.7% 감소)로 떨어졌다. 참고로 실제 도로 차로 중앙을 따로 측량한 건 아니고 측위 위치랑 지도 경로 사이 거리 기준이다.'],
      },
      {
        label: 'Competition Result', title: '자율주행구현 부문 대상 · 창작기술 부문 특별상',
        items: ['결과적으로 건국대학교 Team K.A.I.는 2026 대학생 AI·SW 모빌리티 경진대회에서 자작자율차 자율주행구현 부문 대상(국토교통부 장관상)과 창작기술 부문 특별상을 수상했다.'],
      },
      { label: 'System Architecture & Gazebo', title: '전체 아키텍처 설계 및 실차 전 Gazebo 검증', items: ['GNSS 위치, 전역경로, 인지·미션 정보, 판단·제어를 하나의 흐름으로 묶어서 설계했다.', '실차 제작이 끝나기 전에 한국교통안전공단 자동차안전연구원 시험로 기반으로 Gazebo 환경을 먼저 띄워서 GNSS 전역경로 추종이랑 장애물·신호등 미션을 미리 돌려봤다.'] },
    ],
    tags: ['ROS2 Humble', 'Gazebo Harmonic', 'GNSS', 'Global Planning', 'Autonomous Driving'],
    image: 'media/projects/kai-award-team.jpg',
    imageAlt: '대회 차량과 자율주행구현 부문 대상기를 든 건국대학교 Team K.A.I.',
    media: [
      { type: 'image', src: 'media/projects/kai-steering-error.jpg', alt: '10월 17일 직선에서 보정 전후의 진행거리별 경로 오차와 분포', caption: '10월 17일 ROS 2 주행 로그 · 같은 속도대의 공통 직선 246m에서 평균 절대 경로 오차 57.07 → 19.55cm', fit: 'contain' },
      { type: 'video', src: 'media/projects/kai-gazebo-drive.mp4', poster: 'media/projects/kai-gazebo-drive-poster.jpg', alt: 'KAI Gazebo 통합 주행 시험', caption: 'KAI 통합 주행 · RViz 경로 상태와 Gazebo 차량 거동 동시에 검증' },
      { type: 'embed', src: 'https://drive.google.com/file/d/1NldNiUlET7BHCehUOvWPRHPefprOieol/view?usp=drivesdk', alt: '2026 AI·SW 모빌리티 경진대회 K.A.I. 주행 시각화 및 실차 기록 영상', caption: 'K.A.I. 대회 주행 영상 · 주행 시각화와 실차 주행 장면', fit: 'contain' },
    ],
    accent: 'cyan',
  },
  {
    order: 8,
    slug: 'uav-ugv-cooperation',
    title: 'UAV-UGV Cooperative Autonomous System',
    shortTitle: 'UAV-UGV Cooperation',
    eyebrow: 'Engineering · System Integration Experience',
    period: '2026.06',
    status: 'Completed',
    kind: 'engineering',
    category: 'Foundation / Other Experience',
    featured: false,
    summary: 'UGV 웨이포인트 주행, UAV 비행, ArUco 마커 인식, UAV 이착륙을 팀원별로 나눠서 만든 뒤 ROS 2랑 PX4 기반으로 하나의 UAV–UGV 협력 미션으로 엮었다.',
    problem: { label: 'Project Goal', title: '각자 만든 UGV·UAV·비전 모듈을 하나의 순차 협력 미션으로 통합해 Gazebo에서 돌리는 게 목표였다.' },
    sections: [
      { label: 'Mission Development', title: '기능별 모듈을 단일 미션 흐름으로 통합', items: ['UGV 주행 → ArUco 탐지 → UAV 이륙 및 탐색 → UGV 합류 → 착륙 순서로 상태가 넘어가게 ROS 2/PX4 미션 노드를 연결했다.'] },
      { label: 'Landing & Result', title: '마커 기반 착륙 보완 및 Gazebo 검증', tone: 'result', items: ['처음에 UGV 좌표만 보고 착륙시키려니 오차가 커서, 팀원이 만든 ArUco 인식 결과(Detection3DArray)를 착륙 타겟 선택이랑 NAV_LAND 게이트에 붙여서 정확도를 맞췄다.', 'Gazebo 주차장 환경에서 UAV랑 UGV 전체 협력 시나리오가 끊기지 않고 도는 걸 검증했다.'] },
    ],
    tags: ['PX4', 'ROS2', 'Gazebo', 'UAV-UGV', 'Mission Integration'],
    image: 'media/uav-ugv-gazebo.jpg',
    imageAlt: 'Gazebo 주차장 환경의 UAV-UGV 협력 시스템',
    media: [{ type: 'video', src: 'media/projects/uav-ugv-cooperative-drive.mp4', poster: 'media/projects/uav-ugv-cooperative-drive-poster.jpg', alt: 'Gazebo UAV-UGV 협력 시험', caption: 'Gazebo 협력 임무 · UAV 접근, UGV 위치와 marker 상태 연동' }],
    repositories: [{ url: 'https://github.com/yunny22/uav-ugv-cooperative-autonomy', label: 'Public Repository · UAV-UGV' }],
    accent: 'violet',
  },
  {
    order: 9,
    slug: 'autonomous-parking',
    title: 'AMCL + Hybrid-A* Autonomous Parking',
    shortTitle: 'Autonomous Parking',
    eyebrow: 'Engineering · Planning & Control',
    period: '2026.08',
    status: 'Completed',
    kind: 'engineering',
    category: 'Autonomous Driving Systems',
    featured: false,
    summary: '국민대 자율주차 대회 정적 지도 위에 31개 웨이포인트를 찍어두고, Nav2 SmacPlannerHybrid랑 MPPI Ackermann 제어기, AMCL을 묶어서 주차 미션을 구성했다. Gazebo에서는 제한 시간 안에 완주했는데 실제 대회장에선 위치 추정이 흔들려서 환경 차이를 꽤 체감했다.',
    problem: { label: 'Project Goal', title: '정적 지도 기반 웨이포인트랑 Nav2 경로 생성·추종을 엮어서 제한 시간(180초) 안에 자율주차 미션을 끝내는 게 목표였다.' },
    sections: [
      { label: 'Mission & Planning', title: '31개 웨이포인트와 Nav2 경로 생성', items: ['제공된 PGM/YAML 정적 지도 위에 전·후진 전환용 목표 포즈 31개를 직접 찍어두고, 미션 매니저가 NavigateToPose 액션으로 순서대로 넘기게 짰다.', '각 구간 경로는 SmacPlannerHybrid(Reeds-Shepp)가 생성하고 MPPI Ackermann 제어기가 따라가도록 붙였다.', '위치 추정은 VESC 이동거리·IMU yaw 오도메트리에 2D LiDAR 스캔을 묶은 AMCL로 돌렸다.'] },
      { label: 'Gazebo Validation', title: 'Gazebo 시뮬레이션 31/31단계 완주', tone: 'result', items: ['제한 시간 180초 기준 Gazebo 시뮬레이션에서는 31단계를 각각 105.1초, 113.6초 만에 전부 돌았다. (단, 이 수치는 시뮬레이션 결과다.)'] },
      { label: 'Real Competition / Limitation', title: '임시 시험 환경과 실제 대회장의 차이', tone: 'limit', items: ['대회 전에 임시 시험장에서는 잘 돌던 세팅이 실제 대회장에 가니까 IMU 오차랑 LiDAR-맵 정합이 틀어지면서 AMCL이 흔들렸다.', '현장 환경에 맞춰 파라미터를 다시 잡을 시간이 모자라서 시험장만큼 안정적인 주행을 재현하진 못했다.'] },
    ],
    metrics: [
      { value: '31 / 31', label: 'Gazebo mission stages' },
      { value: '105.1 s', label: 'best Gazebo run' },
      { value: '180 s', label: 'competition time limit' },
    ],
    tags: ['Nav2', 'Waypoint Mission', 'SmacPlannerHybrid', 'Reeds-Shepp', 'MPPI Ackermann'],
    image: 'media/parking-route.png',
    imageAlt: '주차장 점유 지도 위 31단계 자율주차 경로',
    media: [{ type: 'video', src: 'media/projects/autonomous-parking-drive.mp4', poster: 'media/projects/autonomous-parking-drive-poster.jpg', alt: '국민대 자율주차 대회 차량 주행', caption: '국민대 자율주차 대회 주행 · 영상 중간 10초 구간', fit: 'contain' }],
    repositories: [{ url: 'https://github.com/yunny22/autonomous-parking-nav2', label: 'Public Repository · Autonomous Parking' }],
    accent: 'lime',
  },
  {
    order: 10,
    slug: 'hl-ku-autonomous-vehicle',
    title: 'HL FMA 2026 · 실차 자율주행 시스템과 장애물 구간 주행',
    shortTitle: 'HL FMA 2026 · 장려상',
    eyebrow: 'Engineering · Real-Vehicle Integration',
    period: '2026.08 – 2026.10',
    status: 'Completed',
    kind: 'engineering',
    category: 'Autonomous Driving Systems',
    featured: false,
    summary: '2026 HL만도 자율주행 모빌리티 경진대회(HL FMA) 1/5 스케일 부문에서 장려상을 받았다. Henes T8 Sports 실차 전체 SW 아키텍처를 설계하고, Dual RTK GNSS 기반 경로 기록·Spline 스무딩·Pure Pursuit 추종이랑 장애물 구간 주행을 직접 구현했다.',
    problem: { label: 'Project Goal', title: '실차에서 RTK GNSS로 전역 경로를 따두고, 경로를 부드럽게 다듬어 안정적으로 추종하는 1/5 스케일 자율주행 시스템을 만드는 게 목표였다.' },
    sections: [
      { label: 'Personal Contribution', title: '전체 아키텍처 설계와 장애물 구간 주행 구현', tone: 'focus', items: ['위치·전역경로·상위 판단·저수준 제어를 잇는 전체 SW 구조를 잡았다.', '장애물 구간 경로 주행 기능을 직접 짰고, 팀원들이랑 인지·제어를 통합해 실차 시스템을 완성했다.'] },
      { label: 'Vehicle System', title: 'Henes T8 Sports 실차 플랫폼 통합', items: ['NUCLEO-H743ZI2 저수준 제어 보드랑 Linux/ROS 2 상위 PC를 연결했다.', 'UM982 듀얼 안테나 RTK GNSS에서 위치·heading·속도를 받아 고정 ENU 좌표계로 변환해 썼다.'] },
      { label: 'Route Improvement', title: 'Spline 스무딩으로 경로 추종 떨림 해결', items: ['처음에 RTK로 찍은 웨이포인트를 그대로 따라가니까 경로가 각져서 조향이 자꾸 흔들렸다.', 'Pure Pursuit 게인만 만지지 않고 natural cubic spline으로 기준 경로 자체를 매끄럽게 폈고, 약 20Hz 루프에서 RouteFollower가 look-ahead 점을 짚어주게 짜서 실차 주행을 안정화했다.'] },
      { label: 'Competition Result', title: 'HL FMA [1/5] 부문 장려상 수상', tone: 'result', items: ['건국대학교 SVE 팀으로 참가해 2026년 10월 30일 HL FMA 1/5 스케일 부문 장려상을 수상했다.'] },
    ],
    tags: ['Henes T8 Sports', 'Dual RTK GNSS', 'Global Route', 'Pure Pursuit', 'ROS2'],
    image: 'media/projects/hl-ku-drive-feature.jpg',
    imageAlt: 'HL_KU 실차 주행 테스트 장면',
    media: [
      { type: 'image', src: 'media/projects/hl-ku-route-smoothing.png', alt: 'HL_KU 전역경로 smoothing 전후 비교', caption: '전역경로 smoothing · 불필요한 굴곡을 줄인 reference route 비교', fit: 'contain' },
      { type: 'image', src: 'media/projects/hl-ku-monitor.png', alt: 'HL_KU 실차 주행 상태를 표시한 Foxglove 대시보드', caption: 'Foxglove 주행 모니터링 · 실차 상태와 경로를 확인하는 분석 화면', fit: 'contain' },
      { type: 'video', src: 'media/projects/hl-ku-drive.mp4', poster: 'media/projects/hl-ku-drive-poster.jpg', alt: 'HL_KU 실차 주행 테스트', caption: 'HL_KU 실차 주행 테스트 · 초반 주행 구간 10초', fit: 'contain' },
    ],
    repositories: [{ url: 'https://github.com/yunny22/hl-ku-autonomous-vehicle', label: 'Public Repository · HL_KU' }],
    accent: 'orange',
  },
  {
    order: 11,
    slug: 'v2i-cooperative-e2e',
    title: 'V2I Cooperative End-to-End Driving',
    shortTitle: 'V2I Cooperative E2E',
    eyebrow: 'Ongoing Research · Graduation Project',
    period: '2026.09 — Ongoing',
    status: 'Ongoing',
    kind: 'ongoing-research',
    category: 'Learning-based Autonomous Driving',
    featured: true,
    summary: '주정차 차량 뒤에 가려진 보행자는 차에 달린 카메라만으로는 늦게 잡힌다. 노변 카메라가 먼저 감지한 보행자 상태 벡터를 V2I로 받아서 종방향 정책에 같이 넣었을 때, 감속 시작 시점이랑 안전 여유 거리가 실제로 당겨지는지 검증하는 졸업프로젝트를 진행 중이다.',
    problem: { label: 'Research Question', title: '차량 시야 밖 보행자 정보를 V2I로 더하면 감속 시점이 앞당겨질까?' },
    sections: [
      { label: 'Problem Scenario', title: '주정차 차량 뒤 사각지대 보행자 상황', wide: true, items: ['똑같은 직선 주행 상황에서 주정차 차량 뒤에 보행자가 가려져 있을 때, 차량 카메라 단독 주행이랑 노변 카메라 V2I 정보를 섞은 주행을 비교한다.'] },
      { label: 'Policy A vs B', title: '종방향 정책 A/B 비교 설계', tone: 'focus', items: ['정책 A (차량 관측): 전방 RGB 영상 + 실측 차속만 받아서 목표속도를 예측한다.', '정책 B (노변 정보 추가): 동일 구조에 보행자 상대 위치·속도, 탐지 신뢰도, 메시지 경과시간·유효 여부를 융합해 목표속도를 예측한다.', '하위 제어(직선 경로 유지, 속도 추종기, 안전감독 모듈)는 둘 다 똑같이 고정해서 V2I 정보 영향만 분리해서 본다.'] },
      { label: 'Lightweight V2I Design', title: 'UniV2X 참고한 경량 상태 벡터 구조', items: ['UniV2X의 차량·인프라 융합 방식을 참고하되, 통신 지연이랑 대역폭 제약을 고려해서 인프라 원본 영상 대신 보행자 상태 벡터만 넘기고 정책 출력도 목표속도로 좁혔다.'] },
      { label: 'Current Progress', title: '현재 진행 단계 (설계 완료)', tone: 'limit', items: ['실험 시나리오, A/B 입출력 인터페이스, 핵심 평가 지표까지 확정했다.', '지금은 CNN 백본이랑 시계열 입력 구성을 검토하고 있고, 다음 단계로 데이터 수집이랑 제동 성능 비교 실험을 돌릴 예정이다.'] },
    ],
    tags: ['V2I', 'End-to-End Driving', 'Occlusion', 'Infrastructure Camera'],
    accent: 'violet',
  },
];

export const projects = [...projectEntries].sort((a, b) => a.order - b.order);
export const featuredProjects = projects.filter((project) => project.featured);
export const projectCategoryOrder: ProjectCategory[] = [
  'Learning-based Autonomous Driving',
  'Autonomous Driving Systems',
  'Localization & Mapping',
  'Foundation / Other Experience',
];
export const researchJourney = [
  { title: 'Vehicle & Control Foundation', detail: '센서·구동·제어를 실제 모형차에 붙여보면서 임베디드 루프 주기랑 센서 신뢰성 문제를 처음 겪었다.' },
  { title: 'Planning & Hybrid Driving', detail: '경로 계획이랑 규칙 기반 판단을 학습 기반 조향 모델과 엮어서 하이브리드로 돌려봤다.' },
  { title: 'Learning-based Competition Driving', detail: '키보드 시연 기반 모방학습을 폐루프 주행과 실제 대회 예선 미션에 적용해 2위로 통과했다.' },
  { title: 'Sim-to-Real & Real-Vehicle Validation', detail: 'TD3+BC와 Sim-to-Real 실험, 실차 주행 로그 분석을 거치면서 제어·동역학 간극을 직접 뜯어봤다.' },
  { title: 'Cooperative End-to-End Driving', detail: '현재는 주정차 차량 뒤 보행자 사각지대 문제를 노변 카메라 V2I로 보완하는 종방향 E2E 연구를 진행 중이다.' },
];