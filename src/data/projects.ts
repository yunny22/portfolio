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
    summary: "Mbed 보드에 IR 차선 센서, Hall 속도 센서, PSD 거리 센서를 연결해 차선 추종과 장애물 정지 기능을 갖춘 자율주행 모형차를 제작했습니다. 처음으로 차량을 직접 제작하면서 임베디드 환경에서 제어 주기와 센서 신뢰성이 얼마나 중요한지 경험했습니다.",
    problem: { label: 'Project Goal', title: "주어진 차량 플랫폼에 센서·제어기·구동부를 직접 조립하고 배선해 트랙을 완주할 수 있는 자율주행 모형차를 제작하는 것이 목표였습니다." },
    sections: [
      {
        label: 'Hardware Integration',
        title: "센서와 구동부 배선 및 통합",
        items: ["수업 회로도를 참고해 전원 회로와 센서 회로를 직접 납땜하고 배선했습니다.", "Mbed LPC1768 보드에 모터 드라이버, IR·Hall·PSD 센서, 서보 모터와 DC 모터를 연결해 차량을 구동했습니다."],
      },
      {
        label: 'Perception / Control Structure',
        title: '센서 입력을 조향·속도·정지 제어로 연결',
        items: ["IR 센서로 중앙선 오차를 측정하고 해당 오차에 따라 서보 조향을 제어했습니다.", "초기에는 Hall 센서의 속도 측정값을 이용해 PID 제어로 DC 모터의 PWM을 조절했고, SHARP PSD 센서로 전방 장애물 거리를 측정해 정지하도록 구성했습니다."],
      },
      {
        label: 'Speed Control / Embedded Optimization',
        title: "제어 구조 단순화를 통한 반응 속도 개선",
        tone: 'focus',
        items: ["초기에는 수업에서 배운 Hall 센서 기반 PID 속도 제어를 적용했습니다.", "하지만 차선 추종, 거리 측정, 조향을 Mbed 보드 하나에서 처리하면서 연산 부담이 커져 조향 반응까지 느려지는 문제가 발생했습니다.", "정밀한 속도 추종보다 빠른 조향 반응이 중요하다고 판단해 속도에 따라 모터 출력을 직접 조절하도록 제어 구조를 단순화했고, 주행 안정성이 개선되는 것을 확인했습니다."],
      },
      {
        label: 'PSD Distance Sensor Problem',
        title: 'PSD 거리 센서 간헐적 오작동',
        tone: 'limit',
        items: ["초기 튜닝에서는 장애물 앞에서 정상적으로 정지했지만, 장애물이 없는데도 가까운 거리값이 간헐적으로 출력되는 문제가 있었습니다.", "정지 기준값을 높이면 실제 장애물을 놓칠 위험이 있어 튜닝만으로 해결하기 어려웠고, 본선에서도 해당 센서 문제로 완주하지 못했습니다."],
      },
      {
        label: 'Result / Insight',
        title: '트랙 기능 구현과 남은 한계',
        tone: 'limit',
        items: ["직선·코너·언덕·비상제동이 포함된 트랙에서 테스트 주행까지 성공했지만, 대회 당일 센서 문제로 탈락했습니다.", "이 경험을 통해 임베디드 제어에서는 알고리즘뿐 아니라 일정한 제어 루프 주기와 센서 이상값 처리가 중요하다는 점을 배웠습니다."],
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
    summary: "CARLA에서 모방학습의 연속 조향과 규칙 기반 제어의 상황 대응을 결합한 하이브리드 주행 시스템을 구현했습니다. 정상 주행은 학습 모델이 담당하고, 장애물 회피와 신호 대응은 규칙 기반 제어로 전환하도록 구성했습니다.",
    problem: {
      label: 'Project Goal',
      title: "CARLA 환경에서 정상 주행은 모방학습으로, 장애물 회피와 신호 대응은 규칙 기반 제어로 처리하는 하이브리드 구조를 구현하는 것이 목표였습니다.",
    },
    sections: [
      {
        label: 'Approach',
        title: '사람 주행 대신 Pure Pursuit을 전문가 정책으로 사용',
        items: [
          "처음에는 CARLA 차량을 키보드로 직접 주행하며 데이터를 수집하려 했지만, 조향 편차가 커서 불안정한 조작까지 학습될 수 있다고 판단했습니다.",
          "키보드 시연 데이터 대신 기준 경로를 따라가는 Pure Pursuit 제어기를 전문가 정책으로 사용해 조향만 예측하는 Behavioral Cloning 모델을 학습시켰습니다.",
          "장애물 회피까지 학습하기에는 데이터가 부족해 모방학습은 정상적인 차선 추종에 집중하도록 범위를 정했습니다.",
        ],
      },
      {
        label: 'Implementation',
        title: '상황별 제어권 전환 구조',
        items: [
          "정상 경로에서는 모방학습 모델이 조향을 담당하고, 정적 장애물이 나타나면 Lattice Planner가 생성한 회피 경로를 따르도록 역할을 나눴습니다.",
          "보행자 진입과 신호등·정지선 대응은 규칙 기반 로직으로 처리했고, 속도 제어도 별도 규칙으로 분리했습니다.",
        ],
      },
      {
        label: 'Final Validation / Limitation',
        title: "다른 맵 적용 시 드러난 주행 가능 영역 문제",
        tone: 'limit',
        items: [
          "프로젝트 후반에 다른 CARLA 맵에 적용하면서 문제가 드러났습니다. 회피 방향을 좌우 후보의 비교 없이 장애물의 상대 위치만으로 선택했고, Lattice Planner 역시 차선과 연석 등 주행 가능 영역을 고려하지 못했습니다.",
          "그 결과 회피 경로가 도로 밖이나 연석 위로 생성되거나 장애물 판정 조건 때문에 회피 기능이 실행되지 않는 경우가 있었습니다. 문제를 마감 직전에 발견해 프로젝트 기간 안에 모두 해결하지 못했습니다.",
        ],
      },
      {
        label: 'Future Work',
        title: '회피 경로 선택 구조 보완 필요',
        items: [
          "앞으로는 장애물 충돌 여부만 판단하지 않고 좌우 회피 후보와 실제 주행 가능 영역을 함께 평가하도록 경로 선택 구조를 보완할 필요가 있습니다.",
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
    summary: "키보드 주행 시연을 통해 전방 카메라 영상과 조향 명령을 동기화해 수집하고, 직선·곡선 주행과 라바콘·보행자 회피에 모방학습을 적용했습니다. 정지선과 신호등처럼 규칙이 명확한 미션은 상태 머신으로 분리했습니다. 예선에서 45개 팀 중 2위(3랩 2:10.70, 벌점 0)를 기록하며 본선에 진출했습니다.",
    problem: {
      label: 'Project Goal',
      title: "사람이 키보드로 주행한 시연 데이터를 학습해 직선·곡선 주행부터 라바콘·보행자 회피까지 모델이 연속 조향 명령을 직접 출력하도록 하는 것이 목표였습니다.",
    },
    sections: [
      {
        label: 'Approach',
        title: '학습 파이프라인 구성',
        items: [
          "전방 카메라 영상에서 도로 영역(ROI)을 추출해 160×90 RGB로 축소했습니다. 이후 합성곱 4층(24·36·48·64채널), 평균 풀링, FC 계층을 이용해 tanh로 정규화된 조향값 하나를 출력하도록 구성했습니다.",
          "Smooth L1 손실과 AdamW(배치 64, 학습률 0.001, 30 epochs)를 사용해 학습한 뒤 실시간 ROS 2 추론 노드에 연결했습니다.",
          "증강된 샘플에는 타임스탬프·조향·속도·전처리 설정을 함께 기록하고, 같은 원본이 학습 및 검증 데이터에 동시에 포함되지 않도록 분리했습니다.",
        ],
      },
      {
        label: 'Implementation',
        title: '역할 분리 및 미션 중재 통합',
        items: [
          "데이터 수집기 제작부터 모델 학습, 실시간 ROS 2 추론 노드, 미션 중재 로직 통합까지 직접 구현했습니다. 다른 백본으로 교체할 수 있도록 구성했고, 후반 고속 주행 데이터는 팀원들과 함께 수집했습니다.",
          "가감속·정지와 신호등·어린이보호구역 등 규칙이 명확한 미션은 상태 머신이 처리하고, 연속 조향은 학습 모델이 담당하도록 역할을 분리했습니다.",
        ],
      },
      {
        label: 'Main Problem',
        title: '실행 주기(Hz) 흔들림과 고속 주행 한계',
        tone: 'limit',
        items: [
          "같은 모델을 사용해도 실행 PC 환경에 따라 조향 갱신 주기가 9~10Hz 사이에서 변동하는 문제가 있었습니다.",
          "저속에서는 영향이 크지 않았지만 속도를 높이면 곡선과 회피 구간에서 주행 궤적이 눈에 띄게 흔들렸습니다.",
        ],
      },
      {
        label: 'Data Iteration',
        title: '실패 구간 위주 데이터 재수집 & Closed-loop 검증',
        items: [
          "오프라인 데이터셋의 조향 예측 오차와 실제 폐루프 주행 성능이 다르다는 점을 확인했습니다. 코너와 회피 구간에서 실패할 때마다 해당 구간을 다시 주행하며 시연 데이터를 보강했습니다.",
          "재학습 후 같은 코스를 반복해서 폐루프로 주행하며 궤적이 개선되는지 확인했고, 대회 직전까지 데이터와 하이퍼파라미터를 조정했습니다.",
        ],
      },
      {
        label: 'Team Result',
        title: '국민대 예선 최종 2위 (45팀 중, 벌점 0)',
        tone: 'result',
        items: [
          "예선에서 3랩을 2분 10.70초에 완주했으며, 신호 위반·차선 이탈·충돌·어린이보호구역 위반 없이 벌점 0을 기록했습니다.",
          "예선 진행 중 한때 1위에 올랐으나 마지막 주행 결과까지 반영된 최종 순위는 2위였으며, 본선에 진출했습니다.",
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
    summary: "예선에서 경험한 고속 조향 진동을 통제된 환경에서 분석하기 위해 Gazebo 시뮬레이션을 구축했습니다. LR-ASPP MobileNetV3 세그멘테이션 기반 Canonical BEV 차선 표현(256×144)을 입력으로 BC와 오프라인 강화학습(TD3+BC)을 학습시켜 1/10 스케일 실차의 저속 주행까지 확인했습니다. 다만 고속에서는 좌우 진동이 다시 커지는 한계가 남았습니다.",
    problem: {
      label: 'Project Goal',
      title: "가상 카메라와 실차 카메라 사이의 색감·조명 차이(Domain Gap)를 줄일 공통 입력을 만들고, 시뮬레이션에서 학습한 정책을 1/10 스케일 실차로 옮겨 검증하는 것이 목표였습니다.",
    },
    sections: [
      {
        label: 'Why Simulation / Approach',
        title: "시뮬레이터와 실차 입력의 차선 표현 통일",
        items: [
          "예선 고속 주행에서 발생한 조향 진동을 실차에서만 반복 시험하기는 어려워 Gazebo 시뮬레이션 환경을 먼저 구축했습니다.",
          "원영상을 그대로 사용하면 도메인 차이가 커질 수 있어 LR-ASPP MobileNetV3 세그멘테이션 기반 Canonical BEV 차선 표현(256×144)을 공통 입력으로 구성했습니다.",
          "주행 로그에서 추출한 차선 표현으로 BC 기본 정책을 학습했고, 진행 방향의 변화를 반영하기 위해 연속된 두 프레임도 입력할 수 있도록 구성했습니다.",
          "이후 두 개의 Critic으로 상태–행동 가치를 추정하고 BC 정규화 항을 추가한 오프라인 강화학습(TD3+BC)으로 확장했습니다.",
        ],
      },
      {
        label: 'Validation',
        title: 'Gazebo 폐루프 검증에서 1/10 실차 이식까지',
        items: [
          "Gazebo 폐루프 환경에서 조향·속도 출력을 검증한 뒤 같은 파이프라인을 1/10 스케일 실차에 적용해 저속 주행이 가능한 것을 확인했습니다.",
        ],
      },
      {
        label: 'Limitation',
        title: '지연 보정 후에도 남은 고속 오실레이션',
        tone: 'limit',
        items: [
          "실차에서 측정한 센서·제어 지연과 조향 응답 특성을 시뮬레이터에 반영했지만, 속도를 높이면 좌우 진동이 다시 증폭됐습니다.",
          "시각적 차선 표현을 비슷하게 맞춘 뒤에도 타이어–노면 마찰과 차체 동역학의 비선형성 등 물리적 차이가 남아 있었습니다. 각각의 영향은 추가 검증이 필요한 상태입니다.",
        ],
      },
      {
        label: 'Next Project',
        title: '본선 주행을 위한 전략적 선택',
        tone: 'focus',
        items: [
          "대회 일정 안에 학습 기반 정책의 고속 주행 안정성을 확보하기 어렵다고 판단했습니다. 이에 본선에서는 팀과 함께 구성한 규칙 기반 주행 시스템(메트릭 중심선 추적 및 Pure Pursuit–Stanley 융합 제어)을 사용했고, 팀이 3랩을 완주했습니다.",
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
    summary: "Sim-to-Real 실험에서 원거리 차선 인지에 한계를 확인한 뒤, 본선에서는 Xbin으로 황색 중앙선을 추출해 차량 좌표계의 metric path로 변환하는 규칙 기반 시스템을 팀과 함께 구성했습니다. Pure Pursuit–Stanley 융합 제어와 미션 중재 로직을 통합해 본선에서 3랩을 완주했습니다.",
    problem: {
      label: 'Project Goal',
      title: "황색 중앙선을 더 먼 거리까지 추출해 metric path로 변환하고, 이를 본선용 규칙 기반 주행 시스템에 안정적으로 연결하는 것이 목표였습니다.",
    },
    sections: [
      {
        label: 'Xbin Lane Perception',
        title: '황색 중앙선을 차량 좌표계 metric path로 직접 변환',
        items: [
          "Wide 카메라 영상에서 Xbin 기반으로 황색 중앙선 점을 추출해 차량 좌표계의 metric path(`/perception/xbin_direct_centerline`)로 전달했습니다.",
          "전체 BEV 영상을 제어기에 직접 전달하는 대신 metric centerline을 사용하는 방식으로 변경했습니다.",
        ],
      },
      {
        label: 'System Architecture',
        title: '우선순위 중재 기반 본선 주행 구조',
        items: [
          "Xbin 경로를 Pure Pursuit–Stanley 융합 제어기에 연결해 기본 조향 후보를 만들고, YOLO(신호등·차량)와 LiDAR(콘·장애물 거리) 정보를 함께 활용했습니다.",
          "LR-ASPP는 기본 차선 추종이 아닌 숏컷(W1) 판정에만 사용했고, 콘 주행 경로 후보는 팀원 모듈에서 전달받았습니다.",
          "TRAFFIC → SHORTCUT → CONE → YOLO+LiDAR AVOIDANCE → RULE 우선순위로 제어권을 중재해 `/xycar_motor`에 최종 명령을 전달했습니다.",
        ],
      },
      {
        label: 'Team Result',
        title: '본선 3랩 통합 완주',
        tone: 'result',
        items: [
          "2026년 8월 23일 본선에서 팀이 통합한 주행 시스템으로 3랩 완주에 성공했습니다.",
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
    summary: "국민대 대회에서 주행 속도를 높이려면 안정적인 위치 추정이 필요하다고 판단해 2D LiDAR 지도 기반 Localization을 구현했습니다. 건국대학교와 국민대학교 트랙에서 실차 시험을 진행하며 환경 변화에 따른 정합 문제를 확인했습니다.",
    problem: { label: 'Project Goal', title: "고속 주행에 활용할 만큼 안정적인 2D LiDAR 지도 기반 위치 추정 시스템을 실차에 적용하는 것이 목표였습니다." },
    sections: [
      { label: 'Approach / Validation', title: '건국대 공학관 검증 후 국민대 트랙 적용', items: ["2D LiDAR로 점유 지도를 생성·저장하고, 현재 LiDAR 스캔을 저장된 지도와 정합해 차량 위치를 추정하도록 구성했습니다.", "건국대학교 공학관 복도에서는 지도 생성과 위치 추정부터 실차 주행까지 정상적으로 동작했습니다."] },
      { label: 'Result / Limitation', title: '환경 변화에 따른 정합 불안정', tone: 'limit', items: ["국민대학교 트랙에서는 의자와 책상 등의 배치가 수시로 바뀌면서 저장된 지도와 현재 스캔 사이의 정합이 불안정해졌습니다.", "대회 고속 주행에 사용하기에는 위치 추정이 충분히 안정적이지 않아 적용을 보류했습니다. 움직이는 구조물을 제외하거나 지도를 갱신하지 않으면 정적 지도 기반 매칭에 한계가 있다는 점을 확인했습니다."] },
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
    summary: "2026 대학생 AI·SW 모빌리티 경진대회를 준비하며 Team K.A.I. 차량이 직선에서 왼쪽으로 치우치는 문제를 ROS 2 주행 로그로 분석했습니다. 작은 우측 조향 명령을 보정하는 비선형 테이블을 직접 구현해 공통 직선 246m에서 평균 절대 횡오차를 65.7% 줄였습니다. 팀은 자율주행구현 부문 대상(국토교통부 장관상)과 창작기술 부문 특별상을 수상했습니다.",
    problem: { label: 'Project Goal', title: "대회용 자작자율차의 전체 자율주행 아키텍처를 설계하고, 실차 제작 전에 Gazebo에서 대회 환경과 알고리즘을 검증한 뒤 실제 차량에 적용하는 것이 목표였습니다." },
    sections: [
      {
        label: 'Personal Contribution', title: '작은 우측 조향각 보정 및 영점 조정', tone: 'focus',
        items: ["주행 로그를 분석해 경로 추종기가 작은 우측 조향 명령을 출력하더라도 실제 차량이 충분히 반응하지 않아 왼쪽으로 치우치는 현상을 확인했습니다.", "우측 1° 조향 요청에 2.3°를 출력하는 방식으로 작은 조향각 구간의 비선형 보정 테이블을 직접 구현했습니다. 좌측·중립과 우측 7° 이상의 조향값은 기존 설정을 유지했습니다.", "보정 후에도 약 16.9cm의 좌편향이 남아 조향 엔코더의 0° 기준과 기계적 직진 정렬에 차이가 있을 가능성을 확인했습니다. 이에 소프트웨어 영점 조정을 제안한 뒤 실제 조향 기준값을 수정했습니다."],
      },
      {
        label: 'Real-Vehicle Evaluation', title: '10월 17일 보정 전후 동일 직선 246m 비교', tone: 'result',
        items: ["10월 17일 보정 전후 주행 기록에서 6.5–7.5m/s의 속도 구간이 겹치는 공통 직선 246m를 추출해 1m 구간별 오차 중앙값을 비교했습니다.", "평균 좌편향은 57.02cm에서 16.93cm로, 평균 절대 횡오차는 57.07cm에서 19.55cm로 감소했습니다(65.7% 감소). 단, 실제 도로의 차로 중앙을 별도로 측량한 값은 아니며 측위 위치와 지도 경로 사이의 거리 기준입니다."],
      },
      {
        label: 'Competition Result', title: '자율주행구현 부문 대상 · 창작기술 부문 특별상',
        items: ["건국대학교 Team K.A.I.는 2026 대학생 AI·SW 모빌리티 경진대회에서 자작자율차 자율주행구현 부문 대상(국토교통부 장관상)과 창작기술 부문 특별상을 수상했습니다."],
      },
      { label: 'System Architecture & Gazebo', title: '전체 아키텍처 설계 및 실차 전 Gazebo 검증', items: ["GNSS 위치, 전역경로, 인지·미션 정보, 판단·제어를 하나의 시스템 흐름으로 연결해 설계했습니다.", "실차 제작이 끝나기 전에 한국교통안전공단 자동차안전연구원 시험로를 바탕으로 Gazebo 환경을 구축해 GNSS 전역경로 추종과 장애물·신호등 미션을 사전에 시험했습니다."] },
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
    summary: "UGV 웨이포인트 주행, UAV 비행, ArUco 마커 인식과 UAV 이착륙 기능을 팀원별로 나눠 개발한 뒤 ROS 2와 PX4를 이용한 하나의 UAV–UGV 협력 미션으로 통합했습니다.",
    problem: { label: 'Project Goal', title: "개별 개발한 UGV·UAV·비전 모듈을 하나의 순차 협력 미션으로 연결하고 Gazebo에서 검증하는 것이 목표였습니다." },
    sections: [
      { label: 'Mission Development', title: '기능별 모듈을 단일 미션 흐름으로 통합', items: ["UGV 주행 → ArUco 탐지 → UAV 이륙 및 탐색 → UGV 합류 → 착륙 순서로 미션 상태가 전환되도록 ROS 2/PX4 노드를 연결했습니다."] },
      { label: 'Landing & Result', title: '마커 기반 착륙 보완 및 Gazebo 검증', tone: 'result', items: ["처음에는 UGV 좌표만 이용한 착륙 오차가 커서 팀원이 개발한 ArUco 인식 결과(Detection3DArray)를 착륙 목표 선택과 NAV_LAND 게이트에 연결했습니다.", "Gazebo 주차장 환경에서 UAV와 UGV의 전체 협력 시나리오가 연속적으로 실행되는 것을 검증했습니다."] },
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
    summary: "국민대 자율주차 대회의 정적 지도에 31개 웨이포인트를 설정하고 Nav2 SmacPlannerHybrid, MPPI Ackermann 제어기, AMCL을 통합해 주차 미션을 구성했습니다. Gazebo에서는 제한 시간 안에 모든 단계를 완료했지만, 실제 대회장에서는 위치 추정이 불안정해지는 한계를 경험했습니다.",
    problem: { label: 'Project Goal', title: "정적 지도 기반 웨이포인트와 Nav2 경로 생성·추종 기능을 연결해 제한 시간 180초 안에 자율주차 미션을 완료하는 것이 목표였습니다." },
    sections: [
      { label: 'Mission & Planning', title: '31개 웨이포인트와 Nav2 경로 생성', items: ["제공된 PGM/YAML 정적 지도에 전·후진 전환을 위한 목표 포즈 31개를 설정하고, 미션 매니저가 NavigateToPose 액션을 통해 순서대로 요청하도록 구성했습니다.", "각 구간의 경로는 SmacPlannerHybrid(Reeds-Shepp)가 생성하고 MPPI Ackermann 제어기가 추종하도록 구성했습니다.", "VESC 이동거리와 IMU yaw 기반 오도메트리, 2D LiDAR 스캔을 결합한 AMCL로 위치를 추정했습니다."] },
      { label: 'Gazebo Validation', title: 'Gazebo 시뮬레이션 31/31단계 완주', tone: 'result', items: ["제한 시간 180초를 기준으로 Gazebo 시뮬레이션에서 31개 단계를 각각 105.1초와 113.6초 만에 모두 완료했습니다. 두 기록은 시뮬레이션에서 측정한 결과입니다."] },
      { label: 'Real Competition / Limitation', title: '임시 시험 환경과 실제 대회장의 차이', tone: 'limit', items: ["대회 전 임시 시험장에서는 정상 동작했으나 실제 대회장에서는 IMU 오차와 LiDAR–지도 정합 문제로 AMCL 위치 추정이 흔들렸습니다.", "현장 환경에 맞춰 파라미터를 다시 조정할 시간이 부족해 임시 시험장과 같은 수준의 안정적인 주행을 재현하지 못했습니다."] },
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
    summary: "2026 HL만도 자율주행 모빌리티 경진대회(HL FMA) 1/5 스케일 부문에서 팀이 장려상을 수상했습니다. Henes T8 Sports 실차의 전체 소프트웨어 아키텍처를 설계하고 Dual RTK GNSS 기반 경로 기록, Spline 스무딩, Pure Pursuit 추종과 장애물 구간 주행을 구현했습니다.",
    problem: { label: 'Project Goal', title: "RTK GNSS로 실차의 전역 경로를 기록하고, 경로를 매끄럽게 보정해 안정적으로 추종하는 1/5 스케일 자율주행 시스템을 구현하는 것이 목표였습니다." },
    sections: [
      { label: 'Personal Contribution', title: '전체 아키텍처 설계와 장애물 구간 주행 구현', tone: 'focus', items: ["위치 추정·전역경로·상위 판단·저수준 제어를 연결하는 전체 소프트웨어 구조를 설계했습니다.", "장애물 구간 경로 주행 기능을 직접 구현하고 팀원들과 인지·제어 모듈을 통합해 실차 시스템을 완성했습니다."] },
      { label: 'Vehicle System', title: 'Henes T8 Sports 실차 플랫폼 통합', items: ["NUCLEO-H743ZI2 저수준 제어 보드와 Linux/ROS 2 상위 PC를 연결했습니다.", "UM982 듀얼 안테나 RTK GNSS에서 위치·heading·속도 정보를 받아 고정 ENU 좌표계로 변환해 사용했습니다."] },
      { label: 'Route Improvement', title: 'Spline 스무딩으로 경로 추종 떨림 해결', items: ["초기에는 RTK GNSS로 기록한 웨이포인트를 그대로 추종하면서 경로의 굴곡에 따라 조향이 흔들리는 문제가 있었습니다.", "Pure Pursuit 게인 조정에만 의존하지 않고 natural cubic spline으로 기준 경로를 부드럽게 보정했습니다. 약 20Hz 루프에서 RouteFollower가 look-ahead 지점을 계산하도록 구성해 실차 주행을 안정화했습니다."] },
      { label: 'Competition Result', title: 'HL FMA [1/5] 부문 장려상 수상', tone: 'result', items: ["건국대학교 SVE 팀으로 참가해 2026년 10월 30일 HL FMA 1/5 스케일 부문 장려상을 수상했습니다."] },
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
    summary: "주정차 차량에 가려진 보행자는 차량 카메라만으로 늦게 발견할 수 있다는 문제에서 출발했습니다. 노변 카메라가 먼저 감지한 보행자 상태 벡터를 V2I로 전달했을 때 종방향 정책의 감속 시작 시점과 안전 여유 거리가 달라지는지 비교하는 졸업프로젝트를 진행하고 있습니다.",
    problem: { label: 'Research Question', title: "차량 시야 밖 보행자 정보를 V2I로 추가하면 감속 시점이 앞당겨지는지 확인하는 것이 연구 질문입니다." },
    sections: [
      { label: 'Problem Scenario', title: '주정차 차량 뒤 사각지대 보행자 상황', wide: true, items: ["동일한 직선 주행 상황에서 주정차 차량 뒤에 보행자가 가려져 있을 때 차량 카메라만 사용하는 정책과 노변 카메라의 V2I 정보를 추가한 정책을 비교하도록 설계했습니다."] },
      { label: 'Policy A vs B', title: '종방향 정책 A/B 비교 설계', tone: 'focus', items: ["정책 A(차량 관측)는 전방 RGB 영상과 실측 차속만 입력받아 목표속도를 예측하도록 설계했습니다.", "정책 B(노변 정보 추가)는 동일한 구조에 보행자 상대 위치·속도, 탐지 신뢰도, 메시지 경과시간·유효 여부를 함께 입력받아 목표속도를 예측하도록 설계했습니다.", "두 정책의 하위 제어(직선 경로 유지, 속도 추종기, 안전감독 모듈)는 동일하게 고정해 V2I 정보의 영향을 분리해 비교할 계획입니다."] },
      { label: 'Lightweight V2I Design', title: 'UniV2X 참고한 경량 상태 벡터 구조', items: ["UniV2X의 차량·인프라 융합 방식을 참고하되 통신 지연과 대역폭 제약을 고려해 인프라의 원본 영상 대신 보행자 상태 벡터만 전달하고, 정책 출력도 목표속도로 한정했습니다."] },
      { label: 'Current Progress', title: '현재 진행 단계 (설계 완료)', tone: 'limit', items: ["실험 시나리오와 A/B 정책의 입출력 인터페이스, 주요 평가 지표를 확정했습니다."] },
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
  { title: 'Vehicle & Control Foundation', detail: "센서와 구동부를 모형차에 직접 연결하면서 제어 루프 주기와 센서 신뢰성이 주행에 미치는 영향을 경험했습니다." },
  { title: 'Planning & Hybrid Driving', detail: "경로 추종은 모방학습으로, 장애물 회피와 신호 대응은 규칙 기반으로 분리해 하이브리드 주행을 구현했습니다." },
  { title: 'Learning-based Competition Driving', detail: "키보드 시연 데이터를 활용한 모방학습을 폐루프 주행과 실제 대회 예선 미션에 적용해 최종 2위로 본선에 진출했습니다." },
  { title: 'Sim-to-Real & Real-Vehicle Validation', detail: "TD3+BC와 Sim-to-Real 실험, 실차 주행 로그 분석을 통해 제어 지연과 차량 동역학의 차이를 살펴봤습니다." },
  { title: 'Cooperative End-to-End Driving', detail: "현재는 주정차 차량 뒤 사각지대 보행자 문제를 노변 카메라의 V2I 정보로 보완하는 종방향 E2E 주행을 설계하고 있습니다." },
];