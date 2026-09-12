export type ProjectStatus = 'Completed' | 'Ongoing';
export type ProjectKind = 'research' | 'engineering' | 'ongoing-research';
export type ProjectCategory =
  | 'Learning-based Autonomous Driving'
  | 'Autonomous Driving Systems'
  | 'Localization & Mapping'
  | 'Foundation / Other Experience';

export type Metric = { value: string; label: string };
export type ProjectMedia = {
  type: 'image' | 'video';
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
  contributionLead: string;
  role: string[];
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
    period: '2023.08 — 2023.12',
    status: 'Completed',
    kind: 'engineering',
    category: 'Foundation / Other Experience',
    featured: false,
    summary: 'Mbed 기반 제어기에 IR 차선 센서, Hall 속도 센서와 PSD 거리 센서를 연결하고, servo steering과 DC motor control을 통합해 차선 추종·속도 제어·장애물 정지를 수행하는 자율주행 모형차를 개발한 프로젝트다. 실제 차량을 제작·튜닝하면서 제한된 임베디드 환경의 제어 반응성과 센서 신뢰성 문제를 처음 경험했다.',
    contributionLead: 'Mbed control · Sensor/actuator integration · Control optimization',
    role: [
      '수업에서 제공된 회로 구성을 바탕으로 power / sensor circuit을 납땜하고 차량 배선을 구성했다.',
      'Mbed LPC1768에 IR, Hall, PSD 센서와 servo/DC motor actuator를 연결했다.',
      'line following, speed control과 obstacle stop 기능을 하나의 주행 코드로 통합했다.',
      '초기 PID speed control을 Hall sensor 기반의 단순한 motor output control로 변경하고, 기능 증가에 따른 control response 저하를 줄이기 위해 코드 구조와 실행 주기를 단순화했다.',
      'PSD distance sensor의 간헐적인 측정 불안정 문제를 확인하고 주행 조건을 반복적으로 튜닝했다.',
    ],
    problem: { label: 'Project Goal', title: '제공된 차량 플랫폼에 센서, 제어기와 구동부를 직접 조립·연결하고, Mbed에서 차선 추종·속도 제어와 장애물 정지를 통합해 실제 트랙을 자율주행하는 모형차를 구현하는 것을 목표로 했다.' },
    sections: [
      {
        label: 'Hardware Integration',
        title: '제공된 플랫폼에 센서·구동부 통합',
        items: ['수업에서 제공된 회로 구성을 바탕으로 power circuit과 sensor circuit을 직접 납땜하고 차량 배선을 구성했다.', 'Mbed LPC1768, motor driver, IR/Hall/PSD 센서와 servo/DC motor를 실제 차량에 연결했다.', '하드웨어 제작과 배선 과정에서 반복적인 시행착오를 겪으며 센서와 구동부를 하나의 시스템으로 통합했다.'],
      },
      {
        label: 'Perception / Control Structure',
        title: '센서 입력을 조향·속도·정지 제어로 연결',
        items: ['IR lane sensor가 중앙선에 대한 차량의 lateral error를 인식하고 servo steering으로 연결되도록 구성했다.', '초기에는 Hall sensor로 DC motor 회전과 vehicle speed를 측정하고 PID speed control을 거쳐 DC motor PWM을 제어했다.', 'SHARP GP2Y0A21YK PSD distance sensor로 전방 장애물 거리를 측정하고 obstacle stop으로 연결했다.'],
      },
      {
        label: 'Speed Control / Embedded Optimization',
        title: '제어 구조를 단순화해 vehicle response 개선',
        tone: 'focus',
        items: ['초기에는 수업에서 학습한 방식대로 Hall sensor로 차량 속도를 측정하고 PID speed control을 적용했다.', 'line following, distance sensor 처리와 steering control 등 여러 기능을 하나의 Mbed에서 함께 실행하면서 제어 구조가 복잡해질수록 전체 차량 control response가 느려지고 steering response에도 영향을 주는 현상을 경험했다.', '실제 차량의 반응성을 우선해 Hall sensor로 현재 속도를 확인하면서, 속도에 따라 DC motor output을 직접 조절하는 보다 단순한 speed control 구조로 변경했다.', '정밀한 speed tracking보다 전체 control loop의 연산 부담을 줄이고 steering과 vehicle response를 빠르게 유지하는 데 초점을 두었으며, 실제 차량 반응이 개선되는 것을 확인했다.'],
      },
      {
        label: 'PSD Distance Sensor Problem',
        title: 'PSD 거리 센서의 간헐적인 측정 불안정',
        tone: 'limit',
        items: ['PSD 거리 센서를 이용한 장애물 정지는 초기 튜닝에서는 정상적으로 동작했지만, 일부 상황에서 센서 자체가 실제 가까운 장애물과 구분하기 어려운 거리값을 간헐적으로 출력하는 문제가 있었다.', '단순히 정지 threshold를 변경하면 실제 장애물 정지 성능까지 영향을 받을 수 있어 튜닝만으로 해결하기 어려웠고, 최종 대회에서 이 문제가 다시 발생하며 정상 주행에 실패했다.'],
      },
      {
        label: 'Competition Context',
        title: '복합 미션이 포함된 실제 주행 트랙',
        items: ['직선·코너와 언덕, 선 불연속, 장애물 및 비상제동 미션이 포함된 트랙을 주행 대상으로 삼았다.'],
      },
      {
        label: 'Result / Limitation',
        title: '통합한 기능과 최종 대회 한계',
        tone: 'limit',
        items: ['센서·제어기·구동부를 하나의 실제 차량에 통합하고 line following, speed control과 obstacle stop 기능을 개발·튜닝했다.', '개발 과정에서는 정상 주행과 장애물 정지를 확인했지만, 최종 대회에서 PSD distance sensor의 간헐적인 측정 문제가 재발해 안정적인 최종 주행에는 실패했다.'],
      },
      {
        label: 'Insight',
        title: '실제 주행에서는 control response와 센서 신뢰성을 함께 고려해야 했다',
        items: ['임베디드 자율주행 시스템에서는 알고리즘 자체뿐 아니라 control loop의 실행 주기를 유지하는 것이 실제 주행 안정성에 중요하다는 점을 경험했다.', '이 경험을 통해 실제 자율주행 시스템에서는 제어기의 복잡도와 실행 속도뿐 아니라 센서 자체의 신뢰성까지 전체 시스템 관점에서 고려해야 한다는 점을 배웠다.'],
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
    eyebrow: 'Research · Planning & Learning',
    period: '2026.03 — 2026.06',
    status: 'Completed',
    kind: 'research',
    category: 'Learning-based Autonomous Driving',
    featured: true,
    summary: 'Imitation Learning의 부드러운 조향과 Rule-based 제어의 안정적인 상황 대응을 결합하기 위해, 학습 기반 경로 추종과 규칙 기반 장애물·신호 제어를 하나의 Hybrid 주행 시스템으로 통합한 프로젝트다.',
    contributionLead: 'Team size 2 · Co-developer',
    role: [
      '2인 팀으로 Hybrid 시스템 전체 설계와 구현을 공동 수행했다.',
      'Pure Pursuit expert 기반 데이터 수집 구조를 공동 구성했다.',
      'Behavioral Cloning 학습과 주행 검증을 공동 수행했다.',
      'IL과 Lattice Planner의 제어권 통합을 공동 수행했다.',
      '다른 map에서 발견한 회피 실패와 제어 로직 분석을 공동 수행했다.',
    ],
    problem: {
      label: 'Project Goal',
      title: '모방학습의 부드러운 조향과 Rule-based 방식의 안정적인 상황 대응을 결합한 Hybrid 주행 시스템을 구현하는 것을 목표로 했다.',
    },
    sections: [
      {
        label: 'Approach',
        title: '사람의 주행 대신 일관된 expert policy를 사용',
        items: [
          '초기에는 keyboard로 CARLA 차량을 직접 주행해 데이터를 수집하려 했지만, 조향 편차가 커 불안정한 steering까지 학습될 수 있다고 판단했다.',
          'keyboard data는 최종 학습에서 제외하고, CARLA 기준 경로를 안정적으로 추종하는 Pure Pursuit controller를 expert policy로 사용했다.',
          'Pure Pursuit의 조향을 모방하는 steer-only Behavioral Cloning 모델을 학습했다.',
          '장애물 회피 데이터는 충분히 확보하기 어려워 IL은 정상 경로 추종 steering에 집중하도록 했다.',
        ],
      },
      {
        label: 'Implementation',
        title: '상황에 따라 제어권을 전환하는 통합 구조',
        items: [
          '정상 경로 추종은 Imitation Learning, 정적 장애물 회피는 Lattice Planner가 담당하도록 역할을 분리했다.',
          '보행자나 끼어들기 상황에서는 정지하고, 신호와 정지선은 Rule-based control로 처리했다.',
          'IL은 정상 경로의 steering을 담당하고, 속도 제어는 별도 Rule-based control로 관리했다.',
          '각 제어기를 하나의 master control 구조에 통합해 주행 상황에 따라 최종 제어권을 전환하도록 구현했다.',
        ],
      },
      {
        label: 'Final Validation / Limitation',
        title: '다른 맵에서 발견한 주행 가능 영역의 한계',
        tone: 'limit',
        items: [
          '프로젝트 후반에 동일한 Hybrid 구조를 다른 CARLA 맵에 적용하는 과정에서 한계를 발견했다. 회피 방향은 좌우 후보를 비교하지 않고 장애물의 상대 위치로 먼저 정했으며, Lattice Planner의 경로 평가에는 차선·연석과 같은 주행 가능 영역 정보가 포함되지 않았다.',
          '장애물 검출에는 카메라 정보를 사용했지만, 일부 상황에서는 회피 경로가 실제 도로가 아닌 연석이나 주행 가능 영역 밖으로 향했다. 또한 장애물 판정 조건이 충돌해 의도한 정적 장애물 회피가 실행되지 않는 경우도 확인했다.',
          '해당 문제는 최종 검증 단계에서 발견돼 프로젝트 기간 내 수정까지 진행하지 못했다.',
        ],
      },
      {
        label: 'Insight',
        title: '회피 경로에는 주행 가능 영역의 이해가 필요하다',
        items: [
          '다른 환경으로 확장했을 때, 장애물의 위치만으로 회피 방향을 결정하는 방식에는 한계가 있었다. 장애물 회피에서는 충돌 여부뿐 아니라 차선과 연석 등 실제 주행 가능 영역을 함께 고려해야 한다는 점을 확인했다.',
        ],
      },
      {
        label: 'Future Work',
        title: '회피 경로 선택 구조 개선',
        items: [
          '좌·우 회피 후보와 실제 주행 가능 영역을 함께 평가하도록 회피 경로 선택 구조를 개선할 필요가 있다.',
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
    title: 'Kookmin Preliminary – Imitation Learning',
    shortTitle: 'Kookmin Preliminary',
    eyebrow: 'Engineering · Competition Preliminary',
    period: '2026.06',
    status: 'Completed',
    kind: 'engineering',
    category: 'Learning-based Autonomous Driving',
    featured: true,
    summary: '사람이 직접 주행해 수집한 데이터로 Imitation Learning의 수행 범위를 직선·곡선에서 장애물·보행자 회피까지 확장하고, 폐루프 주행에서 control frequency와 데이터 구성이 미치는 영향을 확인한 프로젝트다.',
    contributionLead: 'Training data · Closed-loop validation · Mission integration',
    role: [
      '자이트론 자체 제작 시뮬레이션에서 camera image와 keyboard steering을 함께 수집하고 학습 데이터 구성을 반복했다.',
      'Imitation Learning 모델 학습과 폐루프 주행 검증을 수행했다.',
      '실행 환경에 따른 steering update frequency 차이와 실패 구간을 분석했다.',
      '학습 기반 주행과 신호등·어린이보호구역 Rule-based mission을 최종 실행 구성으로 통합했다.',
    ],
    problem: {
      label: 'Project Goal',
      title: '이전 Hybrid 프로젝트에서 steer-only Imitation Learning의 가능성을 확인한 뒤, 사람이 직접 주행해 수집한 데이터를 이용해 직선·곡선 주행뿐 아니라 장애물·보행자 회피까지 학습 모델이 수행하도록 확장하는 것을 목표로 했다.',
    },
    sections: [
      {
        label: 'Approach',
        title: '사람이 직접 주행해 수집한 데이터를 학습에 사용',
        items: [
          '자이트론 자체 제작 시뮬레이션에서 camera image와 사람이 keyboard로 조작한 steering 값을 함께 수집했다.',
          '사람이 직접 주행해 수집한 데이터를 학습 데이터로 사용해 Imitation Learning 모델을 학습했다.',
          '직선·곡선 주행과 장애물·보행자 회피는 학습 모델이 담당하도록 했다.',
          '신호등과 어린이보호구역처럼 명확한 정지나 속도 조절이 필요한 미션에서만 Rule-based logic이 개입하도록 구성했다.',
        ],
      },
      {
        label: 'Implementation',
        title: '학습 기반 주행과 Rule-based 개입의 역할 분리',
        items: [
          'Learning-based driving은 직선·곡선 주행과 장애물·보행자 회피를 담당했다.',
          'Rule-based intervention은 신호등과 어린이보호구역 등 명시적인 정지·속도 조절 미션을 담당했다.',
        ],
      },
      {
        label: 'Main Problem',
        title: '실행 환경에 따라 달라진 제어 주기',
        tone: 'limit',
        items: [
          '같은 모델과 코드로 실행해도 시뮬레이션을 구동하는 컴퓨터에 따라 실제 steering update frequency가 약 9~10 Hz 범위에서 달라졌다.',
          '저속에서는 영향이 작았지만, 속도가 높아질수록 작은 제어 주기 차이가 누적돼 곡선 주행과 장애물 회피 궤적에 큰 차이를 만들었다.',
        ],
      },
      {
        label: 'Data Iteration',
        title: '실패 구간을 데이터로 보완하며 재학습',
        items: [
          '주행이 실패하는 구간을 반복해서 확인하고, 해당 상황의 학습 데이터를 다시 수집하거나 보완해 재학습했다.',
          '여러 차례의 데이터 수집과 재학습을 거치며 모델 구조뿐 아니라 학습 데이터의 품질과 상황 분포가 실제 주행 성능에 큰 영향을 준다는 점을 경험했다.',
        ],
      },
      {
        label: 'Insight',
        title: '폐루프 주행은 모델·제어 주기·데이터가 함께 결정',
        items: [
          '모방학습의 폐루프 주행 성능은 모델만으로 결정되지 않았다. 같은 모델이라도 실행 환경과 제어 주기에 따라 주행 결과가 달라졌으며, 다양한 상황을 포함한 일관된 학습 데이터를 구성하는 것이 중요했다.',
        ],
      },
      {
        label: 'Team Result',
        title: '국민대 예선 최종 2위',
        tone: 'result',
        items: [
          '팀은 3-lap을 2분 10.70초에 완료했다.',
          '팀 기록은 신호위반, 차선이탈, 충돌과 어린이보호구역 위반 없이 penalty 0이었다.',
          '45개 참가팀 중 마지막 기록 반영 전까지 팀 순위 1위였고 최종 2위로 마쳤다.',
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
      { type: 'image', src: 'media/kookmin-leaderboard.png', alt: '마지막 기록 반영 전 팀 카이가 1위였던 순위표', caption: '마지막 기록 반영 전 1위 · 최종 결과 45팀 중 2위', fit: 'contain' },
    ],
    repositories: [{ url: 'https://github.com/yunny22/kookmin-imitation-learning', label: 'Public Repository · Kookmin Preliminary' }],
    accent: 'orange',
  },
  {
    order: 4,
    slug: 'sim-to-real-driving',
    title: 'Kookmin Final – Reinforcement Learning & Sim-to-Real',
    shortTitle: 'Kookmin Final · Sim-to-Real',
    eyebrow: 'Research · Reinforcement Learning & Sim-to-Real',
    period: '2026.06 — 2026.08',
    status: 'Completed',
    kind: 'research',
    category: 'Learning-based Autonomous Driving',
    featured: true,
    summary: 'Taeyun Kim이 단독으로 수행한 연구 프로젝트로, 예선 Imitation Learning의 고속 oscillation을 개선하기 위해 Reinforcement Learning과 Gazebo 기반 Sim-to-Real을 시도하고 고속 주행에서 남은 물리적 차이를 분석했다.',
    contributionLead: 'Individual Project · Sim-to-Real pipeline · Offline RL · Real-vehicle validation',
    role: [
      'Canonical perception, camera preprocessing, dataset/transition 생성과 Behavioral Cloning baseline을 포함한 전체 연구 방향을 단독으로 설계·구현했다.',
      'camera-speed policy와 offline TD3+BC actor/critic 학습, reward·termination·replay·temporal input 실험을 구성했다.',
      'Gazebo closed-loop 환경·정책 평가와 simulation data collection을 수행하고, 실차 저속 policy 적용까지 검증했다.',
      '실차 sensor/control delay와 차량 거동을 측정해 simulation 보정과 Sim-to-Real transfer를 진행하고 고속 gap을 분석했다.',
    ],
    problem: {
      label: 'Project Goal',
      title: '예선 Imitation Learning에서 고속 주행 시 발생한 좌우 oscillation을 개선하기 위해 Reinforcement Learning을 시도하고, 반복 학습을 위한 simulation과 실차 이전 구조를 구축하는 것을 목표로 했다.',
    },
    sections: [
      {
        label: 'Individual Project',
        title: '전체 Sim-to-Real 연구 pipeline을 단독으로 수행',
        items: [
          'Canonical perception과 Behavioral Cloning부터 offline TD3+BC, Gazebo 폐루프 평가, 실차 delay·차량 거동 측정과 simulation calibration까지 전체 연구 pipeline을 단독으로 설계하고 구현했다.',
          '이 연구는 Team KAI의 국민대 본선 맥락에서 진행됐지만, 별도의 최종 대회 차량 시스템 전체를 개인 프로젝트로 주장하지는 않는다.',
        ],
      },
      {
        label: 'Why Simulation / Approach',
        title: '고속 oscillation 개선을 위해 학습 범위를 확장',
        items: [
          '예선에서 사람의 주행 데이터를 이용해 직선·곡선·장애물·보행자 회피까지 구현했지만, 속도를 높이자 차선 주행 중 차량이 좌우로 흔들리는 oscillation이 나타났다.',
          '이를 개선하기 위해 주행 결과에 따른 보상을 이용하는 Reinforcement Learning을 시도했다.',
          '반복 주행이 필요한 강화학습을 실제 차량에서 계속 수행하기 어려워, 대회 환경을 모사한 Gazebo simulation을 구축했다.',
          'simulation과 real camera image의 차이를 줄이기 위해 Canonical BEV 표현을 사용하고, Behavioral Cloning 이후 temporal TD3+BC까지 확장했다.',
          '실차의 sensor delay, control delay와 차량 거동을 반복 측정해 simulation 파라미터와 동역학을 실제 차량에 가깝게 보정하려 했다.',
        ],
      },
      {
        label: 'Validation',
        title: 'Simulation에서 실차 저속 주행까지',
        items: [
          'Behavioral Cloning과 TD3+BC 정책을 Gazebo 폐루프 주행에서 검증했다.',
          '시뮬레이션에서 학습한 정책을 실차에 적용해 저속 주행까지 확인했다.',
        ],
      },
      {
        label: 'Limitation',
        title: '고속에서 다시 커진 Sim-to-Real gap',
        tone: 'limit',
        items: [
          'sensor/control delay와 차량 동역학을 반복 측정해 반영했지만, 속도가 높아질수록 마찰, 노면·타이어 상호작용과 실제 차량 거동처럼 simulator에서 완전히 재현하기 어려운 물리적 차이의 영향이 커졌다. Canonical BEV와 파라미터 보정만으로는 고속 주행 안정성을 충분히 확보하지 못했다.',
        ],
      },
      {
        label: 'Insight',
        title: 'Sim-to-Real은 영상 표현 정규화만으로 끝나지 않는다',
        items: [
          'Sim-to-Real 성능은 perception gap뿐 아니라 시뮬레이션의 물리적 재현 수준에도 크게 영향을 받았다. 실차의 지연과 차량 거동을 측정해 보정했지만, 마찰과 실제 차량 동역학을 완전히 재현하지 못하면서 고속 영역에서 차이가 남았다.',
        ],
      },
      {
        label: 'Next Project',
        title: '본선 시스템으로의 전환',
        tone: 'focus',
        items: [
          '고속 주행에서 simulation과 real vehicle 사이의 차이를 대회 일정 내 충분히 줄이지 못했고, 이 과정에서 얻은 perception 및 control-frequency 경험을 바탕으로 최종 본선용 Rule-based 시스템과 새로운 중앙선 인지 모델을 설계했다.',
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
    title: 'Kookmin Final – Rule-based Autonomous Driving System',
    shortTitle: 'Kookmin Final · Rule-based System',
    eyebrow: 'Engineering · Competition Final',
    period: '2026.08',
    status: 'Completed',
    kind: 'engineering',
    category: 'Autonomous Driving Systems',
    featured: false,
    summary: '이전 Sim-to-Real 과정에서 사용한 canonical perception 경험을 바탕으로, LR-ASPP로 white/yellow mask를 생성해 BEV와 canonical road representation으로 변환하고 Stanley와 Pure Pursuit를 adaptive fusion하는 본선용 Rule-based 자율주행 시스템을 구성한 프로젝트다.',
    contributionLead: 'Perception · Control architecture · Real-vehicle validation',
    role: [
      '본선 자율주행 시스템의 전체 control architecture를 설계했다.',
      'LR-ASPP 기반 perception과 white/yellow mask → BEV → canonical road representation 흐름을 구성했다.',
      '경로 상태에 따라 Stanley와 Pure Pursuit의 제어 비중을 조정하는 adaptive fusion controller를 구성했다.',
      'perception과 fused control을 Rule-based driving architecture에 통합했다.',
      '실차 기반 시스템 검증과 조정을 수행했다.',
    ],
    problem: {
      label: 'Project Goal',
      title: 'Sim-to-Real 과정에서 확인한 perception 경험을 바탕으로, LR-ASPP 기반 perception을 BEV와 canonical road representation으로 연결하고 adaptive Stanley + Pure Pursuit control을 본선용 Rule-based 시스템에 통합하는 것을 목표로 했다.',
    },
    sections: [
      {
        label: 'Perception',
        title: 'LR-ASPP 기반 canonical road representation 구성',
        items: [
          '이전 Sim-to-Real 과정에서 사용한 canonical representation 경험을 바탕으로 본선용 perception/control stack을 재구성했다.',
          'camera image에서 LR-ASPP semantic segmentation으로 white boundary와 yellow centerline mask를 생성했다.',
          '생성한 mask를 BEV로 변환하고 canonical road representation을 구성해 중심선 경로 생성과 제어에 연결했다.',
          '실제 주행에서 inference frequency가 중요하다고 판단해 perception 모델을 가볍게 구성하려 했다.',
        ],
      },
      {
        label: 'System Architecture',
        title: 'Perception과 adaptive fusion control을 하나의 주행 구조로 통합',
        items: [
          '본선 자율주행 시스템의 전체 control architecture를 설계했다.',
          'LR-ASPP 기반 perception과 canonical road representation을 차선 주행 경로 생성에 연결했다.',
          '경로 상태에 따라 Stanley와 Pure Pursuit의 제어 비중을 조정하는 adaptive fusion controller를 구성했다.',
          'perception과 fused control을 Rule-based driving architecture에 통합하고 실차 주행 시스템에서 검증했다.',
        ],
      },
      {
        label: 'Post-Competition Reflection',
        title: '대회 이후 돌아본 인지 정확도와 실행 주기의 균형',
        tone: 'limit',
        items: [
          '본선 당시에는 높은 inference frequency를 확보하는 것이 중요하다고 판단해 중앙선 인지 모델을 많이 경량화했다.',
          '대회 이후 주행 결과와 개발 과정을 다시 검토하면서, 모델을 지나치게 줄인 것이 중앙선 인지 성능을 제한했을 수 있다고 판단했다.',
          '더 많은 학습 데이터와 다양한 주행 상황이 필요했다고 느꼈으며, inference frequency만 높이는 것이 아니라 perception accuracy와 Hz 사이의 균형을 다시 설계할 필요가 있다고 판단했다.',
          'Stanley와 Pure Pursuit 등 제어 파라미터도 더 체계적으로 조정하고 검증할 필요성을 느꼈다.',
        ],
      },
      {
        label: 'Insight',
        title: '인지와 제어 주기는 함께 설계해야 한다',
        items: [
          '처음에는 높은 inference frequency를 확보하는 데 집중했지만, 대회 이후 결과를 다시 검토하면서 인지 정확도와 실행 주기 사이의 균형이 더 중요하다고 판단했다. 또한 충분한 학습 데이터와 체계적인 제어 파라미터 검증이 함께 필요했다.',
        ],
      },
    ],
    tags: ['LR-ASPP', 'BEV', 'Canonical Representation', 'Stanley', 'Pure Pursuit', 'Rule-based'],
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
    title: 'Kookmin – SLAM / Localization',
    shortTitle: 'LiDAR SLAM & Localization',
    eyebrow: 'Research · Localization',
    period: '2026.07',
    status: 'Completed',
    kind: 'research',
    category: 'Localization & Mapping',
    featured: false,
    summary: '국민대 대회에서 더 빠른 주행을 위한 안정적인 Localization을 목표로 LiDAR 지도 기반 위치 추정을 구현하고, 건국대와 국민대 환경에서 실제 차량으로 검증한 프로젝트다.',
    contributionLead: 'LiDAR mapping · Localization · Real-vehicle validation',
    role: ['slam_toolbox 기반 2D LiDAR 지도 생성과 실차 주행 검증을 수행했다.', '건국대와 국민대 환경의 성공·실패 차이를 지도–scan 정합 관점에서 분석했다.'],
    problem: { label: 'Project Goal', title: '국민대 대회에서 차량의 주행 속도를 높이기 위해 안정적인 위치 추정이 필요했고, 2D LiDAR 지도 기반 Localization을 실제 차량에 적용하는 것을 목표로 했다.' },
    sections: [
      { label: 'Approach / Validation', title: '지도 생성부터 실제 차량 적용까지', items: ['2D LiDAR로 지도를 생성하고 저장했다.', '저장 지도와 현재 LiDAR scan을 이용해 차량 위치를 추정하는 구조를 구성했다.', '먼저 건국대학교 공학관에서 지도 생성, Localization과 실제 차량 주행을 검증했다.', '이후 같은 구조를 국민대학교 주행 트랙에 적용했다.'] },
      { label: 'Result', title: '환경 변화에서 불안정해진 Localization', tone: 'result', items: ['건국대학교 공학관에서는 지도 생성과 지도 기반 실제 주행에 성공했다.', '국민대학교 트랙에서는 의자와 책상 등 주변 구조가 바뀌면서 저장 지도와 현재 scan의 정합이 불안정해졌다.', '따라서 국민대에서는 빠른 주행에 적용할 만큼 안정적인 Localization을 확보하지 못했다.'] },
      { label: 'Limitation / Insight', title: '빠른 주행에는 지속적인 위치 안정성이 필요하다', tone: 'limit', items: ['빠른 주행에서는 단순히 Localization이 동작하는 것보다 환경 변화에도 안정적인 위치를 지속적으로 제공하는 것이 중요했다.', '국민대처럼 주변 구조가 자주 바뀌는 환경에서는 정적 지도 기반 scan matching의 한계가 있었다.', 'Map update 또는 변화하는 구조물을 Localization 기준에서 제외하는 방법은 후속 개선 방향으로 남았다.'] },
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
    title: 'KAI Competition Autonomous Driving System',
    shortTitle: 'KAI Autonomous Driving System',
    eyebrow: 'Engineering · Autonomous Driving System',
    period: '2026.03 — Ongoing',
    status: 'Ongoing',
    kind: 'engineering',
    category: 'Autonomous Driving Systems',
    featured: false,
    summary: '자작자동차 대회를 위해 전체 자율주행 Architecture를 설계하고, 한국교통안전공단 자동차안전연구원 시험로를 Gazebo에 구현해 GNSS 기반 전역경로 주행과 장애물·신호등 대응을 먼저 개발·검증한 뒤, 현재 실제 차량으로 이전해 테스트와 보정을 진행하고 있는 프로젝트다.',
    contributionLead: 'Architecture design · Gazebo simulation · GNSS route · Real-vehicle transfer',
    role: [
      '자작자동차 대회를 위한 전체 자율주행 Architecture를 설계했다.',
      '한국교통안전공단 자동차안전연구원 시험로를 Gazebo에 구현하고 대회 상황 통합 검증을 진행했다.',
      'GNSS 기반 전역경로 주행 알고리즘을 설계했다.',
      '장애물 회피와 신호등 등 mission을 전체 시스템과 통합했다.',
      'simulation에서 개발한 알고리즘을 실차에 적용해 현재 테스트와 보정을 진행 중이다.',
    ],
    problem: { label: 'Project Goal', title: '자작자동차 대회에 사용할 자율주행 시스템의 전체 Architecture를 설계하고, 실차가 완성되기 전 Gazebo에서 실제 대회 환경과 주행 알고리즘을 먼저 개발·검증한 뒤 이를 실제 차량에 적용하는 것을 목표로 했다.' },
    sections: [
      { label: 'System Architecture', title: '대회 차량을 위한 전체 자율주행 Architecture', items: ['GNSS 기반 차량 위치 정보, Global Route, Perception / Mission information, Decision / Planning과 Vehicle Control을 하나의 시스템 흐름으로 연결했다.', '전체 Architecture 안에 판단과 planning 구조를 배치해 인지된 상황이 최종 차량 제어로 이어지도록 설계했다.'] },
      { label: 'Gazebo Simulation Environment', title: '실차 제작 전 대회 환경을 가상 공간에 구현', items: ['실차 제작이 완료되기 전에 알고리즘을 반복 개발하고 검증할 수 있도록 Gazebo simulation을 구축했다.', '한국교통안전공단 자동차안전연구원 시험로를 바탕으로 대회 환경을 Gazebo에 구현했다.', 'GNSS 기반 전역경로 주행, 장애물 상황과 회피, 신호등 및 대회 mission 상황을 포함한 통합 자율주행 시스템을 검증했다.'] },
      { label: 'GNSS-based Global Route Driving', title: 'GNSS 위치를 이용한 전역경로 주행', items: ['실제 대회 차량에서 사용할 수 있도록 GNSS 위치 정보를 기반으로 Global Route를 구성했다.', '차량이 전역경로를 연속적으로 추종하도록 주행 알고리즘을 설계하고 Gazebo에서 검증했다.'] },
      { label: 'Competition Scenario Integration', title: '대회 상황을 하나의 Architecture로 통합', items: ['Gazebo 환경에 장애물, 신호등 등 대회에서 발생할 수 있는 상황을 구현했다.', '전역경로 주행 → 상황 인지 → 판단 → 장애물·신호등 대응 → 차량 제어가 하나의 Architecture 안에서 동작하도록 통합했다.'] },
      { label: 'Current Work / Real Vehicle Validation', title: '실차 이전과 현재 진행 중인 검증', tone: 'focus', items: ['2026년 9월 초 실제 차량 제작이 완료됐다.', '현재 Gazebo에서 개발한 알고리즘을 실제 차량으로 이전하고 있다.', 'simulation과 real vehicle 사이에서 나타나는 위치 추정, 차량 거동과 제어 응답 차이를 확인하면서 알고리즘과 파라미터를 조정하고 있다.'] },
    ],
    tags: ['ROS2 Humble', 'Gazebo Harmonic', 'GNSS', 'Global Planning', 'Autonomous Driving'],
    image: 'media/kai-gazebo.jpg',
    imageAlt: 'RViz 전역 지도와 Gazebo 차량을 함께 표시한 KAI 개발 화면',
    media: [{ type: 'video', src: 'media/projects/kai-gazebo-drive.mp4', poster: 'media/projects/kai-gazebo-drive-poster.jpg', alt: 'KAI Gazebo 통합 주행 시험', caption: 'KAI 통합 주행 · RViz 경로 상태와 Gazebo 차량 거동 동시 검증' }],
    accent: 'cyan',
  },
  {
    order: 8,
    slug: 'uav-ugv-cooperation',
    title: 'UAV–UGV Cooperative Autonomous System',
    shortTitle: 'UAV–UGV Cooperation',
    eyebrow: 'Engineering · System Integration Experience',
    period: '2026.06',
    status: 'Completed',
    kind: 'engineering',
    category: 'Foundation / Other Experience',
    featured: false,
    summary: 'UGV waypoint 주행, UAV waypoint 비행, ArUco 인식과 UAV 이착륙을 팀원별로 나누어 개발한 뒤, 이들을 ROS2/PX4 기반 하나의 UAV–UGV 협력 mission으로 통합한 프로젝트다.',
    contributionLead: 'UAV takeoff/landing · Mission integration · ROS2/PX4',
    role: [
      'UAV 이륙·착륙 기능을 구현하고 단독 동작을 검증했다.',
      '팀원들이 각각 개발한 UGV waypoint 주행, UAV waypoint 비행, ArUco marker 인식 모듈을 하나의 ROS2/PX4 기반 mission 흐름으로 통합했다.',
    ],
    problem: { label: 'Project Goal', title: '각 팀원이 독립적으로 개발한 UGV 주행, UAV 비행, ArUco 인식과 UAV 이착륙 기능을 하나의 협력 mission으로 연결해 UAV와 UGV가 순차적으로 임무를 수행하도록 통합하는 것을 목표로 했다.' },
    sections: [
      { label: 'Team Development Structure', title: '기능을 나누어 독립적으로 개발·검증', items: ['자동차 담당은 waypoint를 생성·추출하고 UGV가 waypoint를 따라 주행하도록 구현했다.', '드론 담당은 UAV waypoint를 구성하고 waypoint를 따라 비행하도록 구현했다.', 'ArUco 담당은 marker 인식 기능을 구현하고 독립적으로 테스트했다.', 'UAV 이륙·착륙 기능은 별도로 구현하고 단독 동작을 검증했다.'] },
      { label: 'System Integration', title: '독립적으로 검증한 기능을 하나의 mission sequence로 연결', items: ['각 기능을 먼저 독립적으로 개발·검증한 뒤, ROS2/PX4/Gazebo 기반 전체 mission 안에서 순서대로 동작하도록 연결했다.', 'UGV waypoint 주행 → UAV mission 시작 → UAV waypoint 비행 → ArUco marker 인식 → UAV 착륙 → mission 종료 흐름을 구성했다.', '서로 다른 팀 모듈을 하나의 협력 mission으로 묶어 UAV와 UGV가 순차적으로 임무를 수행하도록 통합했다.'] },
      { label: 'Landing', title: '좌표 기반 착륙을 marker 정보로 보완', items: ['초기에는 UGV의 좌표만을 이용해 착륙 위치를 지정했지만, 좌표만으로는 실제 착륙 위치 정확도가 충분하지 않았다.', '이를 보완하기 위해 팀원이 구현한 ArUco marker 인식 결과를 착륙 과정에서 활용하도록 전체 mission에 통합했다.', 'UAV 이륙·착륙 기능 구현과 mission 연결을 담당했으며, ArUco 인식 알고리즘 자체는 팀원이 구현한 모듈을 사용했다.'] },
      { label: 'Result', title: 'Gazebo에서 협력 mission 통합 확인', tone: 'result', items: ['각 팀원이 독립적으로 개발한 기능을 하나의 협력 mission으로 통합했다.', 'Gazebo에서 UAV와 UGV가 연결된 전체 mission의 동작을 확인했다.'] },
    ],
    tags: ['PX4', 'ROS2', 'Gazebo', 'UAV–UGV', 'Mission Integration'],
    image: 'media/uav-ugv-gazebo.jpg',
    imageAlt: 'Gazebo 주차장 환경의 UAV–UGV 협력 시스템',
    media: [{ type: 'video', src: 'media/projects/uav-ugv-cooperative-drive.mp4', poster: 'media/projects/uav-ugv-cooperative-drive-poster.jpg', alt: 'Gazebo UAV–UGV 협력 시험', caption: 'Gazebo 협력 임무 · UAV 접근, UGV 위치와 marker 상태 연동' }],
    repositories: [{ url: 'https://github.com/yunny22/uav-ugv-cooperative-autonomy', label: 'Public Repository · UAV–UGV' }],
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
    summary: '국민대 자율주차 대회에서 제공된 정적 지도 위에 31개의 waypoint를 직접 정의하고, Nav2의 SmacPlannerHybrid와 MPPI Ackermann controller, AMCL Localization을 이용해 자율주차 mission을 구성한 프로젝트다. Gazebo에서는 전체 mission을 완료했지만, 실제 대회장에서는 Localization 불안정과 환경 차이의 영향을 경험했다.',
    contributionLead: 'Waypoint mission · Nav2 integration · Localization validation',
    role: [
      '31개의 waypoint와 goal pose를 직접 정의했다.',
      'Nav2 기반 주차 mission을 구성했다.',
      'SmacPlannerHybrid, Reeds–Shepp와 MPPI Ackermann 설정 및 통합을 수행했다.',
      'VESC + IMU odometry와 AMCL Localization 기반 주행을 구성했다.',
      'Gazebo에서 전체 mission을 검증하고 실제 대회장 주행 실패 원인을 분석했다.',
    ],
    problem: { label: 'Project Goal', title: '국민대학교 자율주차 대회에서 제공된 정적 지도를 기반으로 주차 mission을 수행하기 위한 waypoint를 직접 정의하고, Nav2가 waypoint 사이의 경로를 생성·추종하도록 구성해 제한 시간 안에 자율주차 mission을 완료하는 것을 목표로 했다.' },
    sections: [
      { label: 'Waypoint / Mission Structure', title: '31개의 waypoint로 주차 mission 구성', items: ['대회에서 제공된 정적 지도 위에 31개의 주행 목표 waypoint와 goal pose를 직접 정의했다.', '각 waypoint는 연속 trajectory가 아니라 주행·조향·전후진 전환을 위한 mission 목표로 사용했다.', 'mission manager가 각 goal pose를 Nav2 NavigateToPose action으로 순서대로 전달해 다음 목표까지 이동하도록 구성했다.'] },
      { label: 'Nav2 Path Planning / Control', title: 'waypoint 사이 경로는 Nav2가 생성·추종', items: ['각 waypoint 사이의 실제 주행 경로는 Nav2의 SmacPlannerHybrid가 Reeds–Shepp motion model을 기반으로 생성했다.', 'MPPI Ackermann controller가 생성된 경로를 Ackermann 차량 모델에 맞춰 추종하도록 구성했다.'] },
      { label: 'Localization', title: 'VESC·IMU odometry와 정적 지도 기반 AMCL', items: ['VESC 이동거리와 IMU gyro yaw를 이용해 odometry를 생성했다.', '2D LiDAR scan과 대회 측에서 제공한 PGM/YAML 정적 지도를 AMCL에 입력해 주행 중 현재 위치를 지속적으로 갱신했다.'] },
      { label: 'Gazebo Validation', title: 'Gazebo simulation 전체 mission 검증', tone: 'result', items: ['Gazebo simulation에서 31/31 mission stages를 완료했다.', '두 차례 시험에서 105.1초와 113.6초를 기록했다.', '실제 대회장 실차 기록이 아니라 Gazebo simulation 결과이며, 대회 제한 시간은 180초였다.'] },
      { label: 'Real Competition / Limitation', title: '임시 시험 환경과 실제 대회장의 차이', tone: 'limit', items: ['대회 전에는 실제 대회장이 아닌 별도의 임시 시험 환경에서 시스템을 개발하고 조정했으며, 그 환경에서는 waypoint 기반 주행이 가능했다.', '실제 대회장에서는 IMU 오차와 LiDAR–map 정합 불안정으로 AMCL Localization이 흔들렸다.', '실제 대회 환경에 맞춰 센서와 Localization, 주행 파라미터를 충분히 다시 보정할 시간이 부족해 시험 환경에서의 주행을 안정적으로 재현하지 못했다.'] },
      { label: 'Insight', title: '실차에서는 Localization reliability가 전체 주행을 좌우한다', items: ['경로 계획과 제어가 simulation에서 정상적으로 동작하더라도, 실차에서는 Localization의 안정성이 전체 주행 성능을 크게 좌우했다. 특히 임시 시험 환경에서 동작한 시스템도 실제 대회장의 센서 오차와 지도–scan 정합 차이에 따라 성능이 크게 달라질 수 있었고, 실제 환경에서의 반복 검증과 Localization 보정이 중요하다는 점을 경험했다.'] },
    ],
    metrics: [
      { value: '31 / 31', label: 'Gazebo mission stages' },
      { value: '105.1 s', label: 'best Gazebo run' },
      { value: '180 s', label: 'competition time limit' },
    ],
    tags: ['Nav2', 'Waypoint Mission', 'SmacPlannerHybrid', 'Reeds–Shepp', 'MPPI Ackermann'],
    image: 'media/parking-route.png',
    imageAlt: '주차장 점유 지도 위 31단계 자율주차 경로',
    media: [{ type: 'video', src: 'media/projects/autonomous-parking-drive.mp4', poster: 'media/projects/autonomous-parking-drive-poster.jpg', alt: '국민대 자율주차 대회 차량 주행', caption: '국민대 자율주차 대회 주행 · 영상 중간 10초 구간', fit: 'contain' }],
    repositories: [{ url: 'https://github.com/yunny22/autonomous-parking-nav2', label: 'Public Repository · Autonomous Parking' }],
    accent: 'lime',
  },
  {
    order: 10,
    slug: 'hl-ku-autonomous-vehicle',
    title: 'HL_KU Autonomous Vehicle System',
    shortTitle: 'HL_KU Autonomous Vehicle',
    eyebrow: 'Engineering · Real-Vehicle Integration',
    period: '2026.08 — Ongoing',
    status: 'Ongoing',
    kind: 'engineering',
    category: 'Autonomous Driving Systems',
    featured: false,
    summary: 'Henes T8 Sports 기반 실차 플랫폼을 구성하고, Dual-antenna RTK GNSS로 차량 위치와 heading을 확보해 직접 기록한 전역경로를 자체 RouteFollower와 Pure Pursuit로 추종한 프로젝트다. 초기 경로가 불필요하게 굴곡지는 문제를 확인해 cubic spline 기반 smoothing으로 reference route를 개선했으며, 현재는 YOLO 기반 장애물 인지를 확장하고 있다.',
    contributionLead: 'Real-vehicle platform · Dual RTK GNSS · Global route driving · Route smoothing',
    role: [
      'Henes T8 Sports 기반 실차 플랫폼을 구성하고 모터 드라이버와 배선을 연결했다.',
      'NUCLEO-H743ZI2를 하위 제어기로 사용해 상위 Linux/ROS2 시스템과 조향·모터 제어 역할을 분리했다.',
      'Dual RTK GNSS 기반 위치·heading을 이용해 전역경로 주행 구조를 구성했다.',
      'RTK waypoint와 주행 경로를 기록하고 smoothing을 적용해 reference route를 구성했다.',
      '자체 RouteFollower와 Pure Pursuit를 실차 경로 추종에 적용했으며, 현재 YOLO 장애물 인지 학습을 진행하고 있다.',
    ],
    problem: { label: 'Project Goal', title: 'Henes T8 Sports를 기반으로 실제 자율주행 차량을 구성하고, Dual-antenna RTK GNSS로 차량의 위치와 heading을 확보한 뒤, 직접 기록한 전역경로를 실제 차량이 안정적으로 추종하도록 구현하는 것을 목표로 했다.' },
    sections: [
      { label: 'Vehicle Platform', title: 'Henes T8 Sports 기반 실차·상하위 제어 구조', items: ['Henes T8 Sports 기반 실차 플랫폼을 구성하고 모터 드라이버와 배선을 연결했다.', 'Linux/ROS2 상위 시스템에서 주행 경로와 제어 명령을 생성하고, NUCLEO-H743ZI2에서 steering angle PID, PWM output, watchdog과 emergency/safety protection을 담당하도록 역할을 분리했다.'] },
      { label: 'Dual RTK GNSS', title: '전역 위치와 heading을 확보하는 Dual-antenna RTK', items: ['UM982 Dual-antenna RTK GNSS로 차량의 위치·heading·speed를 확보했다. 두 안테나를 사용해 차량이 바라보는 방향을 함께 얻을 수 있도록 했다.', 'GNSS 위도·경도 좌표를 대회장 기준 local x-y 좌표로 변환하고, 안테나 위치와 차량 기준점 사이의 차이를 보정해 전역경로 추종에 사용했다.'] },
      { label: 'Route Recording', title: 'RTK 기반 reference route 구성', items: ['정지 상태에서 RTK waypoint를 직접 기록하고, 차량을 이동시키며 일정 간격으로 실제 주행 경로를 기록했다.', '기록된 waypoint와 route를 차량이 추종할 reference route로 구성해 관리했다.'] },
      { label: 'Route Smoothing', title: '불필요한 굴곡을 줄인 offline smoothing', items: ['초기 전역경로가 waypoint 사이에서 불필요하게 굴곡지는 문제를 확인해 단순히 Pure Pursuit 파라미터만 조절하는 것이 아니라 reference path 자체를 개선할 필요가 있다고 판단했다.', 'Natural cubic spline 기반 offline smoothing을 적용해 보다 연속적이고 부드러운 reference route를 생성했다.'] },
      { label: 'Route Tracking', title: '자체 RouteFollower와 Pure Pursuit 기반 연속 추종', items: ['차량의 현재 GNSS 위치를 reference route에 투영하고 경로 진행도를 연속적으로 관리했다.', '경로 앞쪽의 virtual target을 lookahead로 선택해 Pure Pursuit로 smooth route 전체를 추종하도록 자체 RouteFollower를 구현·적용했다.'] },
      { label: 'Real-Vehicle Validation', title: 'RTK 기록 경로의 실차 주행 확인', tone: 'result', items: ['RTK GNSS로 기록한 전역경로를 smoothing한 뒤 실제 차량이 해당 route를 따라 주행하는 것을 확인했다.', 'Dual GNSS 기반 위치와 heading을 전역경로 추종에 사용하고, 실차에서 route tracking 동작을 검증했다.'] },
      { label: 'Current Work', title: 'YOLO 장애물 인지와 차량 통합을 진행 중이다', items: ['현재는 전역경로 주행 이후 단계로 카메라 기반 YOLO 장애물 인지를 학습하고 있다.', 'Mission Manager에는 신호, 장애물, 언덕과 주차 등의 상태 구조가 있지만 모든 mission이 실차에서 완성된 것은 아니다.', '인지 결과를 Mission Manager와 실제 차량 주행 시스템에 통합하는 작업을 진행하고 있다.'] },
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
    summary: '차량 전방 ego camera에 보이지 않는 사각지대 보행자를 infrastructure camera가 검출하고 위치를 추정한 뒤, 차량 기준의 상대 위치·거리 정보로 변환해 V2I로 전달하고 ego image와 함께 사용하는 V2I-assisted End-to-End driving 구조를 설계하고 있다.',
    contributionLead: 'Problem definition · V2I system design · Experiment design',
    role: [
      'ego camera에서 보이지 않는 보행자 상황을 문제 시나리오로 정의했다.',
      'Ego-camera-only baseline과 V2I-assisted E2E 비교 구조를 정의했다.',
      'infrastructure camera가 보행자를 검출하고 위치를 추정한 뒤, 차량 기준의 상대 위치·거리 정보로 변환해 전달하는 입력 구조를 설계하고 있다.',
      '동일 시나리오에서 collision, minimum distance와 braking response timing을 비교할 평가 계획을 설계했다.',
    ],
    problem: { label: 'Research Question', title: 'Can V2I pedestrian position and distance information enable an earlier safety response than ego-camera-only end-to-end driving?' },
    sections: [
      { label: 'Problem Scenario', title: '가려진 어린이의 갑작스러운 진입', wide: true, items: ['주·정차 차량 때문에 어린이가 ego camera에 보이지 않지만, infrastructure camera에서는 해당 어린이를 먼저 관측할 수 있는 상황을 다룬다.', '어린이가 차량과 가까운 위치에서 도로로 진입할수록 ego-camera-only E2E의 대응 시간이 줄어드는 조건을 평가한다.', '같은 조건에서 V2I-assisted E2E가 얼마나 더 이르게 감속·정지할 수 있는지 비교할 계획이다.'] },
      { label: 'Hypothesis', title: '가려진 보행자의 위치·거리가 더 이른 대응을 가능하게 하는가', tone: 'focus', items: ['ego camera에서 아직 보이지 않는 보행자의 위치·거리 정보를 infrastructure camera가 먼저 제공하면, V2I-assisted E2E가 ego-camera-only E2E보다 더 이른 감속 또는 정지 판단을 할 수 있을 것이라는 가설을 세웠다.'] },
      { label: 'Camera-based V2I Information', title: '인프라 카메라가 생성한 위치·거리 정보를 E2E 입력으로 사용', items: ['실제 도로 인프라로의 확장 가능성을 고려해 infrastructure camera를 사용한다.', 'infrastructure camera가 사각지대의 pedestrian을 검출하고 위치를 추정한 뒤, 차량 기준의 상대 위치·거리 정보로 변환한다.', 'raw infrastructure image 자체를 차량에 전달하지 않고, 변환한 pedestrian position/distance information을 V2I로 전달한다.', '차량에서는 ego camera image와 V2I pedestrian information을 함께 End-to-End driving model의 입력으로 사용한다.'] },
      { label: 'Baseline vs Proposed', title: '같은 시나리오에서 두 정책 비교', items: ['Baseline: Ego-camera-only End-to-End Driving', 'Proposed: Ego camera + V2I pedestrian position/distance information'] },
      { label: 'Evaluation Plan', title: '안전 지표 중심의 비교 계획', items: ['어린이가 사각지대에서 등장하는 위치와 차량과의 거리를 변화시킨다.', '동일한 조건에서 Ego-camera-only E2E와 V2I-assisted E2E를 비교한다.', 'collision 여부 또는 collision rate, minimum distance와 감속·제동 시점을 이용해 안전 대응을 정량적으로 평가할 계획이다.'] },
      { label: 'Current Progress', title: '현재 단계', tone: 'limit', items: ['가려진 어린이 진입 시나리오와 Ego-camera-only / V2I-assisted E2E 비교 구조를 정의했다.', 'Infrastructure sensor는 camera로 방향을 정했으며, 인프라 카메라에서 보행자의 위치를 추정해 차량 기준의 상대 위치·거리 정보로 변환하고 차량의 E2E 입력으로 사용하는 시스템 구조를 설계하고 있다.', '이후 모델 학습과 정량 비교 실험을 진행할 예정이다.', '기본 V2I 효과를 확인한 뒤 통신 지연, 패킷 손실과 연결 끊김 조건으로 확장할 예정이다.'] },
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
  { title: 'Vehicle & Control Foundation', detail: '센서·구동·제어를 실제 차량 시스템에 통합' },
  { title: 'Planning & Hybrid Driving', detail: '경로 계획과 Rule-based 판단을 거쳐 학습 기반 주행과의 결합으로 확장' },
  { title: 'Learning-based Competition Driving', detail: '사람 주행 데이터 기반 Imitation Learning을 실제 폐루프 주행에 적용' },
  { title: 'Sim-to-Real & Real-Vehicle Validation', detail: 'Offline RL과 simulation–real gap을 경험하고 실제 차량 시스템으로 검증 범위를 확장' },
  { title: 'Cooperative End-to-End Driving', detail: '현재는 사각지대 문제를 V2I 정보로 보완하는 Cooperative E2E Driving을 연구' },
];
