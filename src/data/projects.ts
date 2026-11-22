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
    summary: 'Mbed 보드에 IR 차선 센서, Hall 속도 센서와 PSD 거리 센서를 연결해 자율주행 모형차를 만들었다. 차선 추종과 속도 제어, 장애물 정지를 하나의 제어기에서 처리하면서 제어 주기와 센서 신뢰성이 실제 주행에 얼마나 중요한지 처음 경험했다.',
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
        items: ['초기에는 수업에서 학습한 방식대로 Hall sensor로 차량 속도를 측정하고 PID speed control을 적용했다.', 'line following, distance sensor 처리와 steering control 등 여러 기능을 하나의 Mbed에서 함께 실행하면서 제어 구조가 복잡해질수록 전체 차량 control response가 느려지고 steering response에도 영향을 주는 현상을 경험했다.', '실제 차량의 반응성을 우선해 Hall sensor로 현재 속도를 확인하면서, 속도에 따라 DC motor output을 직접 조절하는 보다 단순한 speed control 구조로 변경했다.', '정밀한 속도 추종보다 전체 제어 루프가 밀리지 않는 게 더 중요하다고 판단했다. 제어 구조를 단순하게 바꾼 뒤 실제 차량의 조향 반응이 나아지는 것을 확인했다.'],
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
    eyebrow: 'Research · Planning & Learning · Team of 2',
    period: '2026.03 - 2026.06',
    status: 'Completed',
    kind: 'research',
    category: 'Learning-based Autonomous Driving',
    featured: false,
    summary: 'CARLA에서 모방학습과 규칙 기반 제어를 결합한 하이브리드 주행 시스템을 만들었다. 평소에는 학습 모델이 경로를 따라 조향하고, 장애물 회피나 신호등 대응이 필요할 때는 규칙 기반 제어로 전환하도록 구성했다.',
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
          '문제를 최종 검증 단계에서 발견해 프로젝트가 끝나기 전까지 해결하지 못했다.',
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
    title: 'Kookmin Preliminary - Imitation Learning',
    shortTitle: 'Kookmin Preliminary',
    eyebrow: 'Engineering · Competition Preliminary',
    period: '2026.06',
    status: 'Completed',
    kind: 'engineering',
    category: 'Learning-based Autonomous Driving',
    featured: true,
    summary: '키보드 주행 시연으로 전방 카메라 영상과 조향 명령을 함께 모아 모방학습 모델을 학습시켰다. 직선·곡선 주행과 라바콘·보행자 회피는 모델이 조향하고, 정지선·신호등 미션은 상태 머신으로 처리했다. 예선에서 45개 팀 중 2위(3랩 2:10.70, 벌점 0)를 기록해 본선에 진출했다.',
    problem: {
      label: 'Project Goal',
      title: '키보드 주행 시연 데이터를 바탕으로 직선·곡선 주행과 라바콘·보행자 회피 구간의 연속적인 조향 판단을 학습 모델이 수행하도록 구현하는 것을 목표로 했다.',
    },
    sections: [
      {
        label: 'Approach',
        title: '키보드 주행 시연 기반 모방학습 파이프라인',
        items: [
          '전방 카메라 영상에서 도로 영역(ROI)을 크롭해 160×90 RGB로 리사이즈하고, 4층 합성곱(24·36·48·64채널) + 평균 풀링 + FC 네트워크로 tanh 정규화 조향각을 예측했다.',
          'Smooth L1 손실과 AdamW 옵티마이저(배치 64, 학습률 0.001, 30 epochs)로 학습하고 실시간 ROS 2 추론 노드에 연동했다.',
          '직선·곡선 주행과 라바콘·보행자 회피는 학습 모델이 담당하고, 정지선·신호등·어린이보호구역 등 명확한 규칙이 필요한 미션은 상태 머신으로 분리했다.',
        ],
      },
      {
        label: 'Implementation',
        title: '학습 기반 조향과 미션 중재 로직 통합',
        items: [
          '데이터 수집기 제작부터 모델 학습, 실시간 ROS 2 추론 노드 연동과 미션 중재 로직 통합까지 구현했다.',
          '다른 백본도 선택할 수 있도록 학습 구조를 구성했고, 후반 고속 주행 데이터 수집은 팀원들과 함께 진행했다.',
          '복제한 샘플은 타임스탬프·조향·속도·전처리 설정을 묶어 같은 원본이 학습과 검증 양쪽에 들어가지 않도록 분리했다.',
        ],
      },
      {
        label: 'Main Problem',
        title: '실행 주기(Hz) 변화와 고속 주행의 한계',
        tone: 'limit',
        items: [
          '동일한 모델이라도 실행 환경에 따라 조향 갱신 주파수가 9–10 Hz 수준으로 변동했다.',
          '저속에서는 영향이 작았지만, 속도를 높이자 곡선과 회피 궤적이 흔들리는 한계를 확인했다.',
        ],
      },
      {
        label: 'Data Iteration',
        title: '실패 구간 중심의 Closed-loop 데이터 재수집',
        items: [
          '곡선 진입이나 회피 구간에서 궤적이 흔들릴 때마다 해당 상황을 집중적으로 다시 주행해 시연 데이터를 보강했다.',
          '재학습 후에는 동일한 코스를 Closed-loop로 반복 주행하며 실제 궤적이 안정화되는지 검증했다.',
        ],
      },
      {
        label: 'Insight',
        title: 'Closed-loop 테스트의 중요성',
        items: [
          '정지된 데이터셋에서 조향값을 정확히 맞히는 것과, 모델이 내린 조향으로 바뀐 다음 장면에 연속적으로 대응하는 Closed-loop 주행은 전혀 다른 문제임을 확인했다.',
        ],
      },
      {
        label: 'Team Result',
        title: '국민대 예선 최종 2위 (45개 팀 중, 벌점 0)',
        tone: 'result',
        items: [
          '팀 3랩 기록 2분 10.70초로 완주했다.',
          '신호위반, 차선이탈, 충돌 및 어린이보호구역 위반 없이 벌점 0을 기록했다.',
          '45개 참가 팀 중 최종 예선 2위로 본선에 진출했다.',
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
    summary: '예선에서 겪은 고속 조향 진동을 다시 살펴보기 위해 Gazebo 시뮬레이션을 구축했다. 세그멘테이션(LR-ASPP MobileNetV3)으로 만든 Canonical BEV 차선 표현(256×144)을 입력으로 BC와 오프라인 RL(TD3+BC)을 학습시켜 1/10 실차 저속 주행까지 확인했다. 다만 속도를 높이면 좌우 진동이 다시 커지는 문제가 남았다.',
    problem: {
      label: 'Project Goal',
      title: '가상 카메라와 실차 카메라의 도메인 차이를 줄인 공통 입력을 설계하고, 시뮬레이션에서 학습한 BC·TD3+BC 정책을 1/10 스케일 실차로 이전해 검증하는 것을 목표로 했다.',
    },
    sections: [
      {
        label: 'Why Simulation / Approach',
        title: '시뮬레이터와 실차에 동일한 도메인 적용을 목표로',
        items: [
          '예선에서 겪은 고속 조향 진동의 원인을 통제된 환경에서 반복 검증하기 위해 Gazebo 시뮬레이션 환경을 구축했다.',
          '가상 카메라와 실차 카메라의 색감·조명 차이(Domain Gap)를 줄이기 위해 세그멘테이션(LR-ASPP MobileNetV3) 기반의 정준(Canonical) BEV 차선 표현(256×144)을 공통 입력으로 설계했다.',
          '주행 로그에서 추출한 차선 표현으로 Behavioral Cloning(BC) 기초 정책을 학습시키고, 연속 두 프레임을 함께 입력해 차량 진행 방향 변화까지 반영했다.',
          '두 개의 Critic 네트워크로 상태-행동 가치를 추정하고 BC 정규화 항을 결합한 오프라인 RL(TD3+BC)로 확장했다.',
        ],
      },
      {
        label: 'Validation',
        title: 'Gazebo Closed-loop 검증에서 1/10 실차 이식까지',
        items: [
          'Gazebo Closed-loop 환경에서 정책의 조향·속도 출력을 검증했다.',
          '동일한 파이프라인을 1/10 스케일 실차 플랫폼에 이식해 저속 주행을 성공적으로 수행했다.',
        ],
      },
      {
        label: 'Limitation',
        title: '지연 보정과 고속 진동의 원인',
        tone: 'limit',
        items: [
          '실차에서 계측한 센서·제어 지연과 조향 응답 특성을 시뮬레이터 파라미터에 반영했으나, 속도를 높이면 좌우 진동이 다시 증폭됐다.',
          '타이어–노면 마찰과 차체 동역학의 비선형성은 잔여 진동의 원인 후보이며, 각각의 영향은 추가 검증이 필요하다.',
        ],
      },
      {
        label: 'Insight',
        title: '시각적 도메인 정규화를 넘어 동역학적 일치까지',
        items: [
          '시각적 도로 표현을 일치시킨 뒤에도 실제 하드웨어에서 조향 명령이 인가되는 시점과 차체가 반응하는 동역학적 차이가 고속 주행 안정성을 좌우했다.',
        ],
      },
      {
        label: 'Next Project',
        title: '본선 주행을 위한 전략적 선택',
        tone: 'focus',
        items: [
          '대회 일정 안에 학습 기반 정책의 고속 주행을 안정화하기 어렵다고 판단했다. 본선에서는 팀과 함께 구성한 규칙 기반 주행 스택(메트릭 중심선 추적과 Pure Pursuit–Stanley 융합 제어)을 사용했고, 팀이 3랩을 완주했다.',
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
    summary: 'Sim-to-Real 실험에서 원거리 차선 인지에 한계를 느껴 본선에서는 규칙 기반 주행 시스템으로 전환했다. Xbin으로 황색 중앙선을 추출해 차량 좌표계의 metric path로 변환하고, Pure Pursuit–Stanley 융합 제어와 미션 중재 로직을 팀 시스템에 통합했다.',
    problem: {
      label: 'Project Goal',
      title: '더 먼 황색 중앙선을 직접 인지해 metric path로 변환하고, 이를 본선용 규칙 기반 차량 제어 구조에 통합하는 것을 목표로 했다.',
    },
    sections: [
      {
        label: 'Xbin Lane Perception',
        title: 'Yellow centerline을 차량 좌표계 metric path로 직접 변환',
        items: [
          'Wide camera 영상에서 Xbin 기반 yellow-centerline을 인지하고 중앙선 점을 추출했다.',
          '추출한 점을 vehicle-frame metric path로 직접 변환해 `/perception/xbin_direct_centerline`으로 전달했다.',
          '최종 기본 차선 주행은 전체 BEV/canonical image를 controller 입력으로 사용하는 구조가 아니라 direct metric centerline/path를 사용했다.',
        ],
      },
      {
        label: 'System Architecture',
        title: '후보 제어를 우선순위로 통합한 본선 주행 구조',
        items: [
          'Xbin direct metric path를 Pure Pursuit + Stanley fused controller에 연결해 RULE steering candidate를 생성했다.',
          'YOLO는 신호등·차량·mission 정보를, LiDAR는 cone boundary와 차량 거리·free-space 정보를 제공하도록 연결했다.',
          'LR-ASPP는 기본 차선 인지가 아니라 shortcut/W1 candidate에 사용됐고, cone candidate는 팀원의 cone subsystem에서 전달받았다.',
          'sequential hybrid driver가 TRAFFIC → SHORTCUT → CONE → YOLO+LiDAR AVOIDANCE → RULE 순서로 후보를 arbitration하고, final command gate가 `/xycar_motor`를 통해 외부 VESC 차량 인터페이스로 명령을 전달했다.',
        ],
      },
      {
        label: 'Team Result',
        title: '최종 통합 시스템의 팀 결과',
        tone: 'result',
        items: [
          'TeamKAI 최종 main README에 기록된 2026년 8월 23일 3-lap 통합 완주는 팀 결과이다.',
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
    summary: '국민대 대회에서 주행 속도를 높이려면 위치 추정부터 안정적이어야 한다고 생각했다. 2D LiDAR로 지도를 만들고 이를 이용해 차량 위치를 추정하는 시스템을 구성해 건국대와 국민대에서 실차로 시험했다. 국민대에서는 주변 구조가 바뀌면서 지도와 스캔의 정합이 불안정해지는 한계가 있었다.',
    problem: { label: 'Project Goal', title: '국민대 대회에서 차량의 주행 속도를 높이기 위해 2D LiDAR 지도 기반 Localization을 실제 차량에 적용하는 것을 목표로 했다.' },
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
    title: 'Team K.A.I. · 실차 직선 주행 좌편향 개선',
    shortTitle: 'Team K.A.I. · 국토교통부 장관상',
    eyebrow: 'Engineering · Autonomous Driving System',
    period: '2026.03 – 2026.10',
    status: 'Completed',
    kind: 'engineering',
    category: 'Autonomous Driving Systems',
    featured: true,
    summary: '2026 대학생 AI·SW 모빌리티 경진대회를 준비하면서 Team K.A.I. 차량이 직선에서 왼쪽으로 치우치는 문제를 ROS 2 주행 로그로 분석했다. 작은 우측 조향 명령에 보정값을 더하는 비선형 테이블을 직접 구현했고, 공통 직선 246m에서 평균 절대 횡오차가 65.7% 줄었다. 팀은 자율주행구현 부문 대상(국토교통부 장관상)과 창작기술 부문 특별상을 받았다.',
    problem: { label: 'Project Goal', title: '자작자동차 대회용 자율주행 시스템의 전체 아키텍처를 설계하고, 실차 완성 전 Gazebo에서 대회 환경과 주행 알고리즘을 먼저 검증한 뒤 실차에 적용하는 것을 목표로 했다.' },
    sections: [
      {
        label: 'Personal Contribution', title: '작은 우측 조향 요구에서 부족한 응답을 보정', tone: 'focus',
        items: ['직선 주행 로그에서 경로 추종기가 작은 우측 조향을 요구해도 차량이 충분히 반응하지 않는 현상을 확인했다. 우측 요구의 크기에 따라 송신각을 추가하는 방식을 제안하고 직접 구현했다.', '예를 들어 우측 1° 요구에는 2.3°를 송신했다. 중립, 좌측 요구, 우측 7° 이상에서는 추가량을 0으로 두었다.', '보정 뒤에도 좌편향이 남아 엔코더 0°와 실제 직진 기준이 다를 가능성을 검토하고 영점 조정을 제안했다.'],
      },
      {
        label: 'Real-Vehicle Evaluation', title: '같은 날, 같은 속도대의 직선 246m에서 전후 비교', tone: 'result',
        items: ['10월 17일 보정 전후 주행에서 실제 속도 6.5–7.5m/s를 공통으로 만족한 직선을 골랐다. 각 1m 구간의 오차 중앙값에 같은 가중치를 주었다.', '평균 좌편향은 57.02cm에서 16.93cm로, 평균 절대 경로 오차는 57.07cm에서 19.55cm로 감소했다. 기준은 측위로 추정한 차량 위치와 지도 목표 경로 사이의 횡거리다. 실제 노면의 차로 중앙은 별도로 측량하지 않았다.'],
      },
      {
        label: 'Competition Result', title: '자율주행구현 부문 대상 · 창작기술 부문 특별상',
        items: ['10월 31일 최종 본선 로그에서 신호 정지 3회와 결승 정지 완료를 확인했다.', '건국대학교 Team K.A.I.는 2026 대학생 AI·SW 모빌리티 경진대회에서 자작자율차 자율주행구현 부문 대상(국토교통부 장관상)과 자작자율차 창작기술 부문 특별상을 수상했다.'],
      },
      { label: 'System Architecture', title: '대회 차량을 위한 전체 자율주행 Architecture', items: ['GNSS 기반 차량 위치 정보, Global Route, Perception / Mission information, Decision / Planning과 Vehicle Control을 하나의 시스템 흐름으로 연결했다.', '전체 Architecture 안에 판단과 planning 구조를 배치해 인지된 상황이 최종 차량 제어로 이어지도록 설계했다.'] },
      { label: 'Gazebo Simulation Environment', title: '실차 제작 전 대회 환경을 가상 공간에 구현', items: ['실차 제작이 완료되기 전에 알고리즘을 반복 개발하고 검증할 수 있도록 Gazebo simulation을 구축했다.', '한국교통안전공단 자동차안전연구원 시험로를 바탕으로 대회 환경을 Gazebo에 구현했다.', 'GNSS 기반 전역경로 주행, 장애물 상황과 회피, 신호등 및 대회 mission 상황을 포함한 통합 자율주행 시스템을 검증했다.'] },
      { label: 'GNSS-based Global Route Driving', title: 'GNSS 위치를 이용한 전역경로 주행', items: ['실제 대회 차량에서 사용할 수 있도록 GNSS 위치 정보를 기반으로 Global Route를 구성했다.', '차량이 전역경로를 연속적으로 추종하도록 주행 알고리즘을 설계하고 Gazebo에서 검증했다.'] },
      { label: 'Competition Scenario Integration', title: '대회 상황을 하나의 Architecture로 통합', items: ['Gazebo 환경에 장애물, 신호등 등 대회에서 발생할 수 있는 상황을 구현했다.', '전역경로 주행 → 상황 인지 → 판단 → 장애물·신호등 대응 → 차량 제어가 하나의 Architecture 안에서 동작하도록 통합했다.'] },
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
    summary: 'UGV 주행, UAV 비행, ArUco 마커 인식과 이착륙 기능을 팀원들과 나눠 개발한 뒤 하나의 협력 미션으로 연결했다. ROS 2와 PX4를 이용해 각 기능의 실행 순서를 통합하고 Gazebo에서 전체 미션을 시험했다.',
    problem: { label: 'Project Goal', title: '각 팀원이 독립적으로 개발한 UGV 주행, UAV 비행, ArUco 인식과 UAV 이착륙 기능을 하나의 협력 mission으로 연결해 UAV와 UGV가 순차적으로 임무를 수행하도록 통합하는 것을 목표로 했다.' },
    sections: [
      { label: 'Mission Development', title: '독립적으로 검증한 기능을 하나의 협력 mission으로 연결', items: ['UGV waypoint 주행, UAV waypoint 비행, ArUco marker 인식과 UAV 이륙·착륙 기능을 각각 검증한 뒤 ROS2/PX4/Gazebo 기반 mission으로 연결했다.', 'UGV waypoint 주행 → ArUco detection → UAV mission → UAV takeoff → waypoint exploration → UGV rendezvous → landing 순서로 UAV와 UGV가 협력하도록 구성했다.'] },
      { label: 'Landing', title: '좌표 기반 착륙을 marker 정보로 보완', items: ['초기에는 UGV의 좌표만을 이용해 착륙 위치를 지정했지만, 좌표만으로는 실제 착륙 위치 정확도가 충분하지 않았다.', 'UAV 이륙·착륙과 mission 연결 과정에서 teammate Detection3DArray 기반 ArUco 결과를 landing target 선택과 NAV_LAND gate에 사용하도록 통합했다. ArUco detector 알고리즘 자체를 새로 구현한 것은 아니다.'] },
      { label: 'Result', title: 'Gazebo에서 협력 mission 통합 확인', tone: 'result', items: ['각 팀원이 독립적으로 개발한 기능을 하나의 협력 mission으로 통합했다.', 'Gazebo에서 UAV와 UGV가 연결된 전체 mission의 동작을 확인했다.'] },
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
    summary: '국민대 자율주차 대회용 정적 지도 위에 31개 웨이포인트를 잡고, Nav2 SmacPlannerHybrid와 MPPI Ackermann 제어기, AMCL을 연결해 주차 미션을 구성했다. Gazebo에서는 31단계를 모두 마쳤지만 실제 대회장에서는 위치 추정이 흔들려 시험 환경과 실차 환경의 차이를 경험했다.',
    problem: { label: 'Project Goal', title: '정적 지도 기반 웨이포인트 정의와 Nav2 경로 생성·추종을 결합해 제한 시간 안에 자율주차 미션을 완료하는 것을 목표로 했다.' },
    sections: [
      { label: 'Waypoint / Mission Structure', title: '31개의 waypoint로 주차 mission 구성', items: ['대회에서 제공된 정적 지도 위에 31개의 주행 목표 waypoint와 goal pose를 직접 정의했다.', '각 waypoint는 연속 trajectory가 아니라 주행·조향·전후진 전환을 위한 mission 목표로 사용했다.', 'mission manager가 각 goal pose를 Nav2 NavigateToPose action으로 순서대로 전달해 다음 목표까지 이동하도록 구성했다.'] },
      { label: 'Nav2 Path Planning / Control', title: 'waypoint 사이 경로는 Nav2가 생성·추종', items: ['각 waypoint 사이의 실제 주행 경로는 Nav2의 SmacPlannerHybrid가 Reeds-Shepp motion model을 기반으로 생성했다.', 'MPPI Ackermann controller가 생성된 경로를 Ackermann 차량 모델에 맞춰 추종하도록 구성했다.'] },
      { label: 'Localization', title: 'VESC·IMU odometry와 정적 지도 기반 AMCL', items: ['VESC 이동거리와 IMU gyro yaw를 이용해 odometry를 생성했다.', '2D LiDAR scan과 대회 측에서 제공한 PGM/YAML 정적 지도를 AMCL에 입력해 주행 중 현재 위치를 지속적으로 갱신했다.'] },
      { label: 'Gazebo Validation', title: 'Gazebo simulation 전체 mission 검증', tone: 'result', items: ['Gazebo simulation에서 31/31 mission stages를 완료했다.', '두 차례 시험에서 105.1초와 113.6초를 기록했다.', '실제 대회장 실차 기록이 아니라 Gazebo simulation 결과이며, 대회 제한 시간은 180초였다.'] },
      { label: 'Real Competition / Limitation', title: '임시 시험 환경과 실제 대회장의 차이', tone: 'limit', items: ['대회 전에는 실제 대회장이 아닌 별도의 임시 시험 환경에서 시스템을 개발하고 조정했으며, 그 환경에서는 waypoint 기반 주행이 가능했다.', '실제 대회장에서는 IMU 오차와 LiDAR-map 정합 불안정으로 AMCL Localization이 흔들렸다.', '실제 대회 환경에 맞춰 센서와 Localization, 주행 파라미터를 충분히 다시 보정할 시간이 부족해 시험 환경에서의 주행을 안정적으로 재현하지 못했다.'] },
      { label: 'Insight', title: '실차에서는 Localization reliability가 전체 주행을 좌우한다', items: ['경로 계획과 제어가 simulation에서 정상적으로 동작하더라도, 실차에서는 Localization의 안정성이 전체 주행 성능을 크게 좌우했다. 특히 임시 시험 환경에서 동작한 시스템도 실제 대회장의 센서 오차와 지도-scan 정합 차이에 따라 성능이 크게 달라질 수 있었고, 실제 환경에서의 반복 검증과 Localization 보정이 중요하다는 점을 경험했다.'] },
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
    summary: '2026 HL만도 자율주행 모빌리티 경진대회(HL FMA) 1/5 스케일 부문에서 팀이 장려상을 받았다. Henes T8 Sports의 소프트웨어 아키텍처를 설계하고, Dual RTK GNSS 기반 경로 기록과 Spline 스무딩, Pure Pursuit 추종 및 장애물 구간 주행을 구현했다.',
    problem: { label: 'Project Goal', title: '실제 차량에서 위치·heading·speed를 이용해 전역 경로를 기록하고, 스무딩된 경로를 안정적으로 추종하는 실차 자율주행 시스템을 구현하는 것을 목표로 했다.' },
    sections: [
      { label: 'Personal Contribution', title: '전체 아키텍처 설계와 장애물 구간 주행 구현', tone: 'focus', items: ['차량 위치와 전역경로, 상위 주행 판단, 저수준 조향·구동 제어를 연결하는 전체 구조를 설계했다.', '장애물 구간의 경로 주행 기능을 직접 구현했다. 팀은 장애물 인지와 경로 주행을 포함한 실차 시스템 개발을 완료했다.'] },
      { label: 'Competition Result', title: 'HL FMA [1/5] 장려상', tone: 'result', items: ['건국대학교 SVE 팀으로 HL FMA(Future Mobility Award) 2026 자율주행 경진대회에 참가해 2026년 10월 30일 장려상을 수상했다.'] },
      { label: 'Vehicle System', title: 'Henes T8 Sports에 GNSS·저수준 제어·ROS 2 통합', items: ['Henes T8 Sports 실차 플랫폼을 구성하고 NUCLEO-H743ZI2 기반 저수준 제어와 Linux/ROS 2 상위 시스템을 연결했다.', 'UM982 dual-antenna RTK GNSS에서 position, heading, speed를 처리하고 이를 fixed ENU 좌표계로 변환해 차량 주행에 사용했다.'] },
      { label: 'Route Recording', title: '실제 차량으로 global route 기록', items: ['RTK GNSS를 이용해 실제 차량의 global route를 기록하고, 기록한 waypoint와 route를 reference path로 관리했다.', '초기에는 기록 waypoint를 그대로 따라가면서 path가 불규칙해지고 steering이 흔들리는 문제를 확인했다.'] },
      { label: 'Route Improvement', title: 'Spline smoothing과 continuous tracking으로 경로 개선', items: ['문제를 Pure Pursuit parameter만으로 해결하지 않고, natural cubic spline을 적용해 reference route 자체를 연속적이고 부드럽게 만들었다.', '현재 차량 위치를 route에 projection하고 진행 방향의 virtual target/look-ahead point를 선택하는 RouteFollower를 구성했다.', '약 20 Hz control loop에서 Pure Pursuit 기반 continuous tracking을 적용해 smooth route를 연속적으로 추종하도록 구현·튜닝했다.'] },
      { label: 'Real-Vehicle Validation', title: '실차 route following 검증', tone: 'result', items: ['smoothing한 RTK global route를 실제 차량이 추종하는 것을 확인했다.', 'Dual RTK GNSS 기반 위치·heading과 RouteFollower, Pure Pursuit를 연결해 실제 차량에서 continuous route tracking을 검증했다.'] },
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
    summary: '주정차 차량 뒤에 가려진 보행자를 차량 카메라보다 노변 카메라가 먼저 볼 수 있다는 점에서 출발한 졸업프로젝트다. 노변에서 감지한 보행자 정보를 V2I 상태 벡터로 전달했을 때 전방 카메라·차속만 쓰는 기준 정책보다 감속 시점과 안전 여유 거리가 달라지는지 비교 실험을 설계하고 있다.',
    problem: { label: 'Research Question', title: '차량 시야 밖 보행자 정보를 V2I로 결합하면 감속 시작 시점과 안전 여유 거리가 앞당겨질까?' },
    sections: [
      { label: 'Problem Scenario', title: '주정차 차량 뒤에 가려진 보행자 상황', wide: true, items: ['주정차 차량 뒤에 가려진 보행자는 차량 탑재 카메라만으로는 뒤늦게 포착된다.', '노변 카메라가 먼저 감지한 보행자 상태 정보를 V2I로 차량 정책에 결합했을 때, 동일한 직선 주행 상황에서 감속 시작 시점과 안전 여유 거리가 유의미하게 개선되는지 검증한다.'] },
      { label: 'Policy A vs B', title: '종방향 정책 A/B 비교 설계', tone: 'focus', items: ['정책 A (차량 관측): 전방 RGB 영상 + 실측 차속 특징을 결합해 목표속도를 예측한다.', '정책 B (노변 보행자 정보 추가): 동일 구조에 보행자 상대 위치·속도, 탐지 신뢰도, 메시지 경과시간·유효 여부 벡터를 융합해 목표속도를 예측한다.', '공통 하위 제어: 직선 경로 유지, 속도 추종 제어기, 독립 안전감독 모듈을 동일하게 적용한다.'] },
      { label: 'Lightweight V2I Design', title: '객체 상태 중심의 경량 V2I 설계 (UniV2X 참고)', items: ['UniV2X의 차량·인프라 정보 융합을 참고하되, 통신 지연과 대역폭 제약을 고려해 메시지를 보행자 상태 벡터로 경량화했다.', '정책 출력을 목표속도로 좁혀 외부 V2I 정보의 기여도를 명확하게 분리하고자 했다.'] },
      { label: 'Evaluation Plan', title: 'V-모델 기반 시험 계획 및 정량 지표', items: ['노변 카메라의 보행자 관측 가능 구간과 차량 기준 좌표 변환 위치를 먼저 확인한 뒤, 동일 횡단 조건에서 감속 시작 시점과 최소 여유 거리를 비교한다.'] },
      { label: 'Current Progress', title: '현재 진행 단계 (설계 완료)', tone: 'limit', items: ['실험 시나리오와 A/B 입출력 인터페이스, 핵심 평가 지표를 확정했다.', 'CNN 백본 및 시계열 입력 구성을 검토 중이며, 다음 단계로 데이터 수집과 정책 학습·제동 성능 비교 실험을 진행할 예정이다.'] },
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
  { title: 'Vehicle & Control Foundation', detail: '센서와 구동부를 모형차에 직접 연결하면서 제어 주기가 밀리거나 센서값이 불안정할 때 주행에 어떤 문제가 생기는지 경험했다.' },
  { title: 'Planning & Hybrid Driving', detail: '경로 추종은 모방학습으로, 장애물 회피와 신호 대응은 규칙 기반으로 나눠 하이브리드 주행을 구현했다.' },
  { title: 'Learning-based Competition Driving', detail: '키보드 시연 데이터를 모아 학습시킨 뒤 폐루프에서 반복 주행했고, 실제 대회 예선에도 적용했다.' },
  { title: 'Sim-to-Real & Real-Vehicle Validation', detail: 'TD3+BC와 Sim-to-Real 실험을 해보고, 실차 주행 로그를 분석하면서 제어 지연과 차량 동역학 차이를 살펴봤다.' },
  { title: 'Cooperative End-to-End Driving', detail: '현재는 주정차 차량 뒤 보행자 사각지대 문제를 노변 카메라 V2I 정보로 보완하는 종방향 E2E 주행을 설계하고 있다.' },
];