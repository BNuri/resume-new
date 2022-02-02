const toyprojects = [
  {
    period: '2020.03-',
    title: 'Typerz',
    description: [
      `Typescript, React를 사용하여 만든 타자 연습 사이트입니다.`,
      `Express를 이용하여 api 서버를 만들어 사용하였습니다.`,
      `글을 등록할 수 있으며, 타자 연습을 할 수 있습니다.`,
      `연습이 끝난 후에 랭킹을 확인할 수 있습니다.`,
    ],
    stack: ['Typescript', 'React.js'],
    siteLink: 'https://agitated-pasteur-cee57f.netlify.com/#/',
    gitHubLink: 'https://github.com/BNuri/typerz',
  },
  // {
  //   period: '2020.02-2020.03',
  //   title: 'Portfolio',
  //   description: [`프로젝트를 소개하는 포트폴리오 사이트입니다.`],
  //   stack: ['React', 'Redux'],
  //   siteLink: 'https://www.bnuri.me',
  //   gitHubLink: 'https://github.com/BNuri/portfolio',
  // },
  {
    period: '2019.12-2020.02',
    title: 'Nomflex',
    description: [
      `영화 정보 조회 사이트입니다.`,
      `MovieAPI에서 데이터를 가져와서 사용했습니다.`,
      `영화, TV의 인기 리스트, 방영 리스트 및 상세 페이지를 조회할 수 있습니다.`,
      `Netlify에 배포하였습니다.`,
    ],
    stack: ['JavaScript', 'React.js'],
    siteLink: 'https://goofy-knuth-6c2cbf.netlify.com',
    gitHubLink: 'https://github.com/BNuri/nomflex',
  },
  // {
  //   period: '2019.06-2019.12',
  //   title: 'Wetube',
  //   description: [
  //     `동영상 공유 사이트입니다.`,
  //     `Github, Facebook 혹은 이메일을 통해 회원가입을 할 수 있습니다.`,
  //     `동영상을 녹화하거나 업로드할 수 있으며, 조회할 수 있습니다.`,
  //     `파일은 AWS S3로 관리하고 있으며, heroku에 배포하였습니다.`,
  //   ],
  //   stack: ['JavaScript', 'NodeJS', 'ES6', 'Express', 'MongoDB'],
  //   siteLink: 'https://whispering-ocean-42081.herokuapp.com',
  //   gitHubLink: 'https://github.com/BNuri/wetube',
  // },
];

const careers = [
  {
    companyName: '일루넥스',
    period: '2020.06-재직중',
    projects: [
      {
        period: '2021.05-',
        title: '기술 검색 플랫폼',
        description: [
          '프론트엔드 기술환경 구성 및 기본 기능 구현',
          '코딩 컨벤션 작성',
          'React 기반 컴포넌트 계층 구조 설계',
        ],
        stack: ['JavaScript', 'React.js'],
      },
      {
        period: '2021.02-',
        title: '관계망',
        description: [
          'Keylines 라이브러리(그래프 데이터 시각화)를 사용하여 데이터 시각화',
          '사내 프로젝트에서 사용할 관계망 프로젝트 개발 및 외주 프로젝트 유지보수',
          '사내에서 공통으로 사용할 표준 프로젝트 개발',
          'React 기반 컴포넌트 계층 구조 설계 및 문서화',
          '노드 2000개 차트 렌더링 속도를 8s에서 5s로 개선',
        ],
        stack: ['JavaScript', 'React.js', 'GraphQL', 'Apollo'],
      },
      {
        period: '2020.08-2021.02',
        title: '글로벌 가치 체인 웹 서비스',
        description: [
          '10대 산업과 기술 데이터를 시각화 하여 비교할 수 있는 웹 서비스 api, 웹 개발',
          'option 값으로 테이블 그리는 함수 만들어 중복 코드 제거',
          'GoJS, FusionCharts 라이브러리를 사용하여 데이터 시각화',
        ],
        stack: ['JavaScript', 'Node.js', 'Express.js', 'ejs'],
      },
      {
        period: '2020.07-2020.10',
        title: '투자 플랫폼',
        description: [
          'VC 정보 CRUD api, 웹 개발',
          '기업 공통 interface 만들어 스타트업/vc 객체 별로 구현체 구분하여 사용하도록 리팩토링',
          'api 요청을 줄이기 위해 공통으로 사용하는 데이터 Context로 분리',
        ],
        stack: ['JavaScript', 'React.js', 'Spring', 'JPA'],
      },
      {
        period: '2020.06-2020.07',
        title: '투자 플랫폼 관리자 페이지',
        description: [
          '사업등록증 관리용 페이지 RESTful api, 웹 개발',
          'pagination 모듈 사내 npm 저장소에 배포',
        ],
        stack: ['JavaScript', 'Node.js', 'React.js', 'Express.js'],
      },
    ],
  },
  {
    companyName: '아이라자스',
    period: '2019.02-2019.10 (9개월)',
    projects: [
      {
        period: '2019.10',
        title: '트레일러닝 대회 등록 확인 페이지 개발',
        description: [
          `구글 시트에 업데이트 된 데이터를 DB에 업로드하는 api 개발`,
          `사용자가 등록 여부 확인할 수 있는 웹 페이지 개발`,
        ],
        stack: ['JavaScript', 'NodeJS', 'ExpressJS', 'MariaDB'],
      },
      {
        period: '2019.06-2019.10',
        title: '러닝 관리 웹, 앱 서비스 프로젝트 참여',
        description: [
          `사업계획서를 토대로 요구사항 정의 및 전체 일정 계획, 업무 분담`,
          `기능 정의, DB 테이블 설계, api 설계, 앱 화면 설계 및 관련 문서화 작업`,
        ],
        stack: [],
      },
      {
        period: '2019.02-2019.10',
        title: '소방업무 관리 웹 서비스 프로젝트 참여',
        description: [
          `반응형 웹으로 수정, 전체 UI 개선`,
          `테스트 시나리오 작성 및 테스트, 문서화 작업`,
          `디버깅, 유지보수`,
        ],
        stack: [
          'Java',
          'Spring',
          'HTML5',
          'CSS3',
          'Bootstrap',
          'MariaDB',
          'CVS',
        ],
      },
    ],
  },
];

const educations = [
  {
    period: '2020.03',
    title: 'ReactJS Online Bootcamp 수료',
    description: ['React, ES6 이론 학습', '넷플릭스 클론 프로젝트'],
    stack: ['React', 'ES6', 'Styled Components'],
  },
  {
    period: '2020.01',
    title: 'HTML/CSS Online Bootcamp 수료',
    description: ['HTML, CSS 이론 학습', '카카오톡 HTML/CSS 클론 프로젝트'],
    stack: ['HTML5', 'CSS3'],
  },
  {
    period: '2019.12',
    title: 'VanillaJS Online Bootcamp 수료',
    description: ['VanillaJS 이론 학습', '유튜브 클론 프로젝트'],
    stack: ['JavaScript', 'ES6'],
  },
  {
    period: '2018.05',
    title: '블록체인 기반 핀테크 서비스 개발 과정 수료',
    description: [
      '블록체인의 기본 이론에 대한 학습',
      'api를 활용하여 전자지갑 개발, 이틀간 서비스 기획과 간단한 구현',
    ],
    stack: [],
  },
  {
    period: '2017.09-2018.03',
    title: '웹 표준 웹 프로그래밍 고급 인력 양성 과정 수료',
    description: [
      '웹 프로그래밍의 기본 이론 학습',
      '3개월간 팀 프로젝트 진행 [위치 기반 자동 경로 추천 플랫폼 by 여행 SNS]',
    ],
    stack: [
      'Java',
      'Spring',
      'DBMS',
      '네트워크',
      'Servlet',
      'JSP',
      'HTML5',
      'CSS3',
      'JavaScript',
    ],
  },
  {
    period: '2017.08',
    title: 'JAVA Programming 수강',
    description: ['Java 기본 문법 학습'],
    stack: ['Java'],
  },
];

const certificates = [
  {
    period: '2018.08',
    title: '정보처리기사',
    publisher: '발행처: 한국산업인력공단',
  },
  {
    period: '2017.08',
    title: 'JLPT N1',
    publisher: '발행처: 일본국제교류기금',
  },
];

export { toyprojects, careers, educations, certificates };
