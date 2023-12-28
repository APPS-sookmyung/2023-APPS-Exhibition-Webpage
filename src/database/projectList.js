import { PROJECT_CATEGORIES } from './projectCategoryList';

export const PROJECT_LIST = [
  {
    id: 1,
    name: 'Cookiee-',
    category: PROJECT_CATEGORIES.APP,
    imageUrl: '/images/thumbnail/img-thumbnail-1.png',
    youtubeVideoId: 'kBy6s-egpMo',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-COOKIEE-client-react',
      serverUrl: 'https://github.com/APPS-sookmyung/2023-COOKIEE-server',
    },
    summary: '하루하루의 쿠키를 모아보세요!',
    introduction:
      'Cookiee- 앱으로 여러분의 하루하루를 아름답게 기록해보세요!\n사진으로 나만의 캘린더를 꾸미고, 그날 누구와 무엇을 했는지 기록하세요.\n일상을 캘린더로 디자인하는 색다른 경험을 누려보세요!',
    description:
      '🍪 캘린더로 한 달의 쿠키 모아보기\n하루하루의 쿠키를 모아 한 달의 일상을 캘린더로 한눈에 보여줍니다.\n\n🍪 그 날의 쿠키 조각을 모아보기\n하루동안의 쿠키 조각들을 보면서 누구와 어떤 시간을 보냈는지 리스트할 수 있습니다.\n\n🍪 카테고리 별 나의 일상 찾기\n나의 쿠키들을 카테고리 별로 정리하여 한눈에 볼 수 있습니다.',
    memberList: [
      {
        id: 1,
        name: '경민서',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/경민서.png',
        retrospect:
          '팀 프로젝트이자 저의 첫 프로젝트였는데요. 저는 프론트로 참여 했지만 백엔드 영역에 너무나도 무지 했던 탓에 너무 많은거를 혼자서 구현하려 해서 프로젝트 중반까지 혼자 끙끙거렸는데 🥲 해커톤 이후 백엔드 연결을 살짝 경험해보고 프로젝트 후반을 잘 꾸려나갔던 것 같습니다 😅 첫 팀프로젝트여서 많이 헤매기도 했는데, 멋진 언니들과 같이 하면서 저도 지치지 않고 나아갈 수 있었습니다! 다같이 으쌰으쌰하면서 이런 멋진 앱도 만들어 성장하게 되어서 너무 뿌듯합니다 ㅎㅎ 😆',
      },
      {
        id: 2,
        name: '윤서희',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/윤서희.png',
        retrospect:
          '기획부터 개발까지 정신없이 달려온 소중한 경험이었어요! 처음 접하는 프론트엔드라, 어려운 점도 많았고 개발이 더딘 부분도 있었는데 팀원들에게 조언을 구하고 소통을 계속 하면서 성공적으로 프로젝트를 마무리할 수 있었다고 생각해요! 1년이라는 시간동안 정말 열심히 개발한 쿠키팀, 그리고 앱스 모든 부원들 넘 고생 많았어요! 쿠키팀은 최고의 팀원들이었어요~~!!! 내가 만든 쿠키~🍪❤️',
      },
      {
        id: 3,
        name: '조영서',
        role: 'LEADER',
        job: 'Back-end',
        imageUrl: '/images/member/조영서.png',
        retrospect:
          '제가 오랜 시간 생각했던 아이디어를 제가 APPS 부원들과 함께 실현시킬 수 있어서 행복했던 1년이었습니다. 아이디어를 구체화시키고 실현시키는 과정에서 같은 Cookiee 팀원들에게 많은 것들을 배우고 좋은 아이디어들을 접해볼 수 있었습니다. 길다면 긴 1년이라는 시간동안 프로젝트에 꾸준히, 성실히 참여해준 Cookiee 팀원들에게 고맙다는 말을 전하고 싶습니다. 1년동안 우리는 꾸준히 성장해왔고 서로에게 많은 점을 배웠다고 생각합니다. 특히 BE 파트너 수연이와 처음으로 백엔드 프로젝트를 진행하느라 많은 고난과 역경이 있었지만 하나하나 헤쳐나가는 과정에서 Spring과 서버에 대해 많은 것들을 배울 수 있었습니다.(지수에게도 고맙다는 말을 전합니다.) 웹페이지 전시회는 이제 오픈되지만, 3월에 있을 대면 전시회에서는 더 많은 기능과 서버 안정화를 이루고 싶습니다. 모두들 기대해주세요! 감사합니다.🍪',
      },
      {
        id: 4,
        name: '황수연',
        role: 'MEMBER',
        job: 'Back-end',
        imageUrl: '/images/member/황수연.png',
        retrospect:
          '백엔드는 완전 처음이었는데, 백엔드의 중요성을 정말 많이 느꼈습니다. 생각보다 백에서 처리하고 고려해줘야 할 사항이 엄청 많더라고요.. 너무너무 힘들었고 지금도 아주 힘들지만 같이 고생하는 백엔드 팀원이 있어서 그래도 한시름 놓을 수 있었습니다. 또 팀원들 모두 본인이 맡은 분야는 처음이라, 정말 아주 밑바닥부터 프로젝트를 시작해나갔어요. 그래도 다른 팀원들이 열심히 하는 모습을 보며 자극도 받고 저도 더 열심히 해서 진도나갈 수 있는 동기가 되었습니다! 이렇게 풀스택을 해보는 경험을 통해 시야를 더 넓힐 수 있어서 좋았습니다!',
      },
    ],
    techStackList: [
      {
        name: 'Spring Boot',
        imageUrl: '/images/techStack/springboot.png',
      },
      {
        name: 'React Native',
        imageUrl: '/images/techStack/react.png',
      },
    ],
  },
  {
    id: 2,
    name: 'POCHAK',
    category: PROJECT_CATEGORIES.APP,
    imageUrl: '/images/thumbnail/img-thumbnail-2.png',
    youtubeVideoId: 'w1iIRwRci_I',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-POCHAK-ios',
      serverUrl: 'https://github.com/APPS-sookmyung/2023-POCHAK-server',
    },
    summary: '당신의 순간을 포착하세요!',
    introduction:
      'Pochak은 사용자가 직접 사진을 올리는 것이 아니라, 친구들이 사용자를 중심으로 촬영한 사진을 통해 자연스럽게 일상을 기록하고 공유하는 특별한 소셜 미디어 플랫폼입니다. 다양한 시각에서의 일상을 통해 사용자들에게 새로운 경험을 제공합니다.',
    description:
      '📸 친구들의 시선으로 기록되다:\nPochak은 다른 사용자들이 당신의 일상을 기록하도록 하는 독특한 서비스입니다. 당신은 자신의 카메라를 통해 아름다운 순간들을 기록하지 않아도, 친구들이나 팔로워들이 당신을 찍은 사진을 피드에 올려 공유할 수 있습니다.\n\n🔄 상호 작용과 공유:\nPochak은 사용자들이 서로의 순간에 참여하고 상호 작용할 수 있도록 하는 기능을 강조합니다. 댓글, 좋아요, 그리고 공유를 통해 순간들을 더 특별하게 만들어보세요!\n\n🌟 프로필의 다양성:\n당신의 Pochak 프로필은 다른 사람들이 기록한 당신의 순간들을 보여줍니다. 여러 시각으로부터의 사진들이 모여 하나의 아름다운 이야기를 만들어냅니다',
    memberList: [
      {
        id: 1,
        name: '김다연',
        role: 'LEADER',
        job: 'Back-end',
        imageUrl: '/images/member/김다연.png',
        retrospect:
          '처음으로 서버를 맡아 참여했던 프로젝트였습니다 :) 우리 팀원들과 회의하면서 새로운 아이디어들을 어떻게 구현하면 좋을지 고민하고, 또 지금까지 시도해보지 않았던 새로운 기술들을 배우고 적용하면서 더 많이 성장할 수 있었던것 같습니다. 또 서버 팀원들이 언제나 부족한 부분들을 도와주고 보충해줘서 처음 서버를 맡아 진행한 프로젝트임에도 많이 배우고 성장할 수 있었습니다..❤️‍🔥 혼자였다면 절대 이렇게 성장하지 못했을거에요 우리 팀원들 항상 도와주고 바보같은 질문들에도 답해줘서 고마웠구 앞으로도 잘부탁합니다 🧚🏻🤍 사랑해욥🤍🎄',
      },
      {
        id: 2,
        name: '서정연',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/서정연.png',
        retrospect:
          '저의 첫 앱 개발 프로젝트였던 Pochak! iOS 개발의 매력은 깔끔한 UI가 한 몫한다고 생각했었는데 이번 프로젝트에서 디자인팀과 함께 협업을 하게 되면서 그 매력을 배로 느끼면서 즐겁게 개발할 수 있었어요. 재능 넘치는 친구들과 함께 프로젝트에 애정을 가지고 개발하다보니 정말 많이 배우고 성장할 수 있었습니다!✨ 포착이 앱스토어에 배포되는 날까지 더 열심히 개발하겠습니다~🏃🏻‍♀',
      },
      {
        id: 3,
        name: '오지수',
        role: 'MEMBER',
        job: 'Back-end',
        imageUrl: '/images/member/오지수.png',
        retrospect:
          'DynamoDB를 처음 사용해 보았는데 정말 쉽지 않은 도전이었어요🥲 원테이블 설계에 도전하고, AWS SDK, Spring Data Dynamodb를 사용하며 쿼리 하나 날리는 법까지 찾아봤던 과정은 시간은 비록 오래 걸렸을지라도 서버 팀원들의 성장에 큰 도움이 되었을 것 같아요! 앞으로 출시를 위해 다시 MySQL로 마이그레이션 하자는 결정이 났지만 지금까지의 노력이 뒷받침되어 더 좋은 서비스를 출시할 수 있게 되리라 믿습니다!! 끊임없는 도전의 시간에 함께해준 우리 포착 팀원분들 너무 고마워요🫶🏻📸',
      },
      {
        id: 4,
        name: '장나리',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/장나리.png',
        retrospect:
          'iOS개발은 처음이었는데 앱스를 통해 다양한 경험을 해볼 수 있어서 좋았습니다!! 또, 직접 디자이너를 구해 디자이너와 협업하는 경험도 해보았습니다. 이를 통해 디자이너와 커뮤니케이션하는 방법도 배울 수 있었습니다. POCHAK 프로젝트를 통해 새로운 경험을 많이 해볼 수 있었던 것 같습니다!!',
      },
      {
        id: 5,
        name: '하고은',
        role: 'MEMBER',
        job: 'Back-end',
        imageUrl: '/images/member/하고은.png',
        retrospect:
          '다양한 기술을 사용해서 개발을 해볼 수 있는 기회였습니다. 좋은 팀원분들과 함께 프로젝트를 구상하고, 개발을 하면서 정말 많은 것을 배우고, 성장할 수 있었던 점이 가장 좋았던 것 같아요. 프로젝트를 하며 아낌없는 칭찬과 응원을 해주었던 팀원들이 있어서 든든했습니다. 즐겁게 개발했던 기억을 가지고 앞으로도 열심히 개발해보겠습니다!! 😊',
      },
      {
        id: 6,
        name: '황수연',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/황수연.png',
        retrospect:
          '디자이너분들과 협업해보는 경험은 처음이었는데, 역시.. 전문가의 도움이 필요하다는 것을 절실히 느꼈습니다. 제대로 된 역할 분담.. 일이 그래도 순조롭게 돌아갈 수 있었던 것 같아요. iOS 파트로 참여하는 프로젝트는 처음인데, 생각보다 개발 환경이 까다로워서 정말 많은 우여곡절이 있었지만 같은 iOS 팀원들이 문제 생기면 항상 같이 해결해주어서 이보다 더는 든든할 수 없었습니다! 뿐만 아니라 팀원들 모두 능력있는 분들이라 아주 든든하고 더 다양한 것들을 볼 수 있어서 너무 좋았습니다. 실배포까지 열심히 달려보도록 하겠습니다..',
      },
    ],
    techStackList: [
      {
        name: 'Spring Boot',
        imageUrl: '/images/techStack/springboot.png',
      },
      {
        name: 'Swift',
        imageUrl: '/images/techStack/swift.png',
      },
    ],
  },
  {
    id: 3,
    name: 'CalenTime',
    category: PROJECT_CATEGORIES.APP,
    imageUrl: '/images/thumbnail/img-thumbnail-3.png',
    youtubeVideoId: '6VISSmcgKBY',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-CalenTime',
      serverUrl: null,
    },
    summary: '하나의 앱에서 캘린더와 시간표를 관리해요!',
    introduction:
      '캘린더와 시간표를 하나의 플랫폼에서 사용하고 싶은 사람들을 위한 일정 관리 서비스입니다.',
    description:
      '📅 캘린더와 시간표를 따로 사용하는 과정이 번거로운 사람들을 위해 하나의 앱에서 효과적으로 일정 관리를 할 수 있는 앱을 만들고 있습니다.\n\n- 시간표에서 과목, 시간, 강의실 등 학교 수업 관리\n- 과목을 클릭하여 과목별 할 일 추가\n- 캘린더에서 날짜별 할 일 추가 \n- 시간표에 할 일과 날짜 등록 시 캘린더 페이지에 자동 반영\n\nCalenTime과 함께 효과적인 일정 관리를 해보세요!!',
    memberList: [
      {
        id: 1,
        name: '김수현',
        role: null,
        job: 'Front-end',
        imageUrl: '/images/member/김수현.png',
        retrospect:
          '플러터 스터디원들과 함께 한 학기 동안 같이 공부하고 실제로 개발을 해 볼 수 있는 기회가 생겨서 좋았습니다. 앱 개발은 처음이었는데 팀원 언니들 덕분에 노션에 계획도 체계적으로 세우고, 피그마도 처음으로 사용해 보아서 좋은 경험이 되었다고 생각합니다!',
      },
    ],
    techStackList: [
      {
        name: 'Spring Boot',
        imageUrl: '/images/techStack/springboot.png',
      },
      {
        name: 'Swift',
        imageUrl: '/images/techStack/swift.png',
      },
    ],
  },
  {
    id: 4,
    name: 'APPS Check',
    category: PROJECT_CATEGORIES.APP,
    imageUrl: '/images/thumbnail/img-thumbnail-4.png',
    youtubeVideoId: '28qM1WwLsRo',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-AppsCheck',
      serverUrl: null,
    },
    summary: '출석체크 어플을 통해 손쉽게 출석 기록을 관리해보아요!',
    introduction:
      'Sookmyung APPS 부원들을 위한 출석 체크 앱, AppsCheck입니다. 세미나 장소에 도착해서 출석할 수 있는 기능과 함께, 나의 과거 출석 기록도 살펴볼 수 있습니다.',
    description:
      '동아리 부원들은 세미나 장소에 도착하여 간편한 출석체크를 수행하며, 운영진은 실시간으로 부원들의 출석 상태를 효과적으로 관리할 수 있습니다.\n\n- 세미나 일정과 장소를 사전에 확인하고, 그날의 주요 공지사항을 손쉽게 접할 수 있습니다. \n- 출석이 불가한 경우, 동아리 부원들은 해당 사유를 작성하고 표시할 수 있습니다.\n- 동아리 운영진은 출석 시간을 실시간으로 받아보며, 부원별 출석 통계자료를 간편하게 확인할 수 있습니다.\n\n출석체크☑️ 간편하게 해보아요😁',
    memberList: [
      {
        id: 1,
        name: '류미성',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/류미성.png',
        retrospect:
          '이번 프로젝트를 통해 유쾌한 팀원들을 만나 협업하는 방법도 배우고, 즐겁게 개발 할 수 있었습니다. 팀원들과 소통을 통해 서비스에 대한 아이디어를 나누고 머리 맞대어 고민하는 시간도 있었습니다. 또 서로의 부족한 부분을 채워가면서 개발에 참여하게 되어 즐거웠습니다. 이번 프로젝트에서 얻은 경험과 팀원들과의 소중한 협업 경험을 잊지 못 할 것 같습니다💗',
      },
      {
        id: 2,
        name: '신진영',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/신진영.png',
        retrospect:
          '첫 기획안을 제시한게 저였지만 개인적인 일정 조정이 어려워서 프로젝트에 제대로 참여하지 못한 것이 아쉽습니다. 하지만 앱스체크 마무리를 위해 겨울방학 일정을 조정해놨기 때문에 책임감을 가지고 개발해서 내년 앱스에서는 출석체크할때 꼭 이 앱을 사용해볼 수 있길 바라요 :) 저를 배려해주고 열심히 참여해준 채은이와 미성언니에게 너무 고맙다는 말을 꼭 남기고 싶습니다! 수고 많았고 감사해요💝',
      },
      {
        id: 3,
        name: '이채은',
        role: 'LEADER',
        job: 'Front-end',
        imageUrl: '/images/member/이채은.png',
        retrospect:
          '개인 프로젝트도 유익했지만, 아무래도 가장 재밌었던 건 다같이 하는 프로젝트였던 것 같습니다. 저는 이미 기획과 디자인이 마무리된 이후 투입되었습니다. 디자인과 기획에 시간을 쏟지 않고 오로지 개발에만 집중할 수 있었다는 점이 좋았던 것 같습니다. 또한, 함께 개발하는 과정에서 여러 컨벤션들을 지키면서 개발을 하는 경험을 해볼 수 있어서 매우 유익했습니다. AppsCheck 는 실제로 Apps 동아리 내에서 사용하고자 만든 앱입니다. 실제로 내년 2024년에는 해당 앱을 사용해서 출석체크를 진행했으면 하는 바람이 있습니다. 팀원들과 함께 즐거운 시간을 보내며 성장할 수 있어서 정말 기쁩니다. 감사합니다.',
      },
    ],
    techStackList: [
      {
        name: 'React',
        imageUrl: '/images/techStack/react.png',
      },
      {
        name: 'Firebase',
        imageUrl: '/images/techStack/firebase.png',
      },
    ],
  },
  {
    id: 5,
    name: '새미새',
    category: PROJECT_CATEGORIES.WEB,
    imageUrl: '/images/thumbnail/img-thumbnail-5.png',
    youtubeVideoId: 'I0p1C07SrjQ',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://apps-sookmyung.github.io/2023-BirdieBuddy/',
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-BirdieBuddy',
      serverUrl: 'https://github.com/APPS-sookmyung/2023-BirdieBuddy-server',
    },
    summary: '새 도감 사이트',
    introduction:
      '한국의 탐조인들 모여라! 탐조의 즐거움이 배가 되는, 새에 미친 새람들을 위한 사이트입니다.',
    description:
      '- 도감\n새 이름으로 검색하기\n내가 발견한 새 특징으로 검색하기\n새의 종 이름으로 검색하기\n\n- 동정\n내가 동정 못하겠는 새 사진을 고수들에게 동정을 부탁하기\n동정을 정확히 해주고 포인트 받기 \n\n- 기록 \n내 탐조 여정을 기록해봐요! \n내 탐조 여정을 확인해봐요!\n\n - 새뉴스\n새들에 대한 뉴스를 접하기 \n새에 대해서 빠삭한 고수가 되어 봅시다.\n\n- 배지\n열심히 탐조활동 하라는 동기부여\n탐조에 대한 달성과제를 완료하여 포인트를 얻기\n\n- 마이페이지\n모은 포인트로 내 아바타를 만들어봐요!',
    memberList: [
      {
        id: 1,
        name: '김진영',
        role: 'MEMBER',
        job: 'Back-end',
        imageUrl: '/images/member/김진영.png',
        retrospect:
          '같이 탐조라는 취미활동을 가진 지인과 함께 초기 아이디어를 구상하고, 팀원들과 함께 구체화하여 웹개발 프로젝트를 진행할 수 있어 뜻깊은 경험이었습니다. 관심깊었던 스프링 프레임워크를 사용하여 정말 알찬 개발 경험을 할 수 있었던 것 같습니다! 팀원분들 모두 잘 협력해주시고 막히는 부분들은 서로 도와가면서 개발했던 점이 가장 기억에 남네요😊 모두 고생 많으셨습니다!',
      },
      {
        id: 2,
        name: '문채일',
        role: 'MEMBER',
        job: 'Back-end',
        imageUrl: '/images/member/문채일.png',
        retrospect:
          '웹 개발 프로젝트에서 백엔드 기획과 개발 업무는 처음 해봤는데, 인텔리제이랑 스프링, 데이터베이스 다루는 데 많이 서툰 저를 같은 팀원들이 잘 이끌어줬습니다! 모두에게 고맙다는 말을 전하고 싶네요. 프로젝트 주제가 새여서 그런지, 평생 관심을 가져보지 않았던 새에 대한 흥미를 느끼게 되어서 신기하기도 합니다🪽🪽. 많이 바빴지만, 많은 도전이 있던 해였고, 여러 가지 경험을 하면서 큰 보폭의 성장을 이뤘다고 느껴지는 한 해였습니다! 언젠가 저희가 개발한 새미새 프로젝트를 출시해서 많은 한국 사람들이 해외 새 사이트인 ebird와 같이 우리나라의 새를 탐조하는 것에 대해 관심을 가지는 계기가 되었으면 좋겠습니다.🐦🐦내년에는 제 개발 능력이 더더욱 업그레이드되길 소망하고 🕊️🕊️ 프로젝트 무사히 마치고 모두 새처럼 날개를 달고 훨훨 날아오르시길 기원합니다.',
      },
      {
        id: 3,
        name: '정민주',
        role: 'LEADER',
        job: 'Front-end',
        imageUrl: '/images/member/정민주.png',
        retrospect:
          '처음 html 배울 때 그날 배운 개념 바로바로 실험 해보려고 만든 미니 프로젝트가 이렇게 커질 줄은 꿈에도 몰랐네요. 막판으로 이것저것 만들다가 어쩌다가 맨 처음에 만든 최초 페이지를 다시 한번 봤는데 와.... 뜯어 고치고 싶은 게 한 두 가지가 아니더라고요. 그 만큼 html css js 실력이 어느 정도 늘었다는 소리겠죠? 🤔 내가 프런트 작업에 집중할 수 있게 도와준 백앤드 친구들아 도와줘서 고맙다~ 내가 프런트 공부 더 해 올 터이니 너도 나도 강해져서 다음 프로젝트에서 만나자! (그렇다고 이 프로젝트 바로 놓으면 안된다 우리 추가로 넣어야 하는 기능 엄청 많아😥)',
      },
      {
        id: 4,
        name: '최민선',
        role: 'MEMBER',
        job: 'Back-end',
        imageUrl: '/images/member/최민선.png',
        retrospect:
          '스프링 공부에 많은 도움이 되었습니다. 혼자 했으면 유니티로 줄행랑쳤을 것 같은데 팀원이랑 같이 하면서 꾸역꾸역하니까 스프링도 공부하게 된 것 같네요. 우리 새미새팀 사랑해❤️❤️',
      },
    ],
    techStackList: [
      {
        name: 'Vanilla JS',
        imageUrl: '/images/techStack/javascript.png',
      },
      {
        name: 'Spring',
        imageUrl: '/images/techStack/springboot.png',
      },
    ],
  },
  {
    id: 6,
    name: 'Sookmyung Software!',
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-6.png',
    youtubeVideoId: 'KZv26cax0JI',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://2023-smsw-web-project-client.vercel.app/',
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-SMSW-Web-Project-client',
      serverUrl: null,
    },
    summary: '새롭게 개선된 숙명여대 소프트웨어학부 홈페이지입니다!',
    introduction:
      '기존의 숙명여자대학교 소프트웨어학부의 홈페이지의 부족한점을 포착하고 개선했습니다! 학생들에게 필요한 정보와 기능을 추가하였습니다 😃',
    description:
      '정보와 기능을 둘다 담은 새로운 소프트웨어학부 홈페이지.\n\n❄️ 전송소개, 커리큘럼, 교수님 소개와 같은 학과에 대한 정보는 기본으로 담았습니다!\n\n❄️ 기존의 홈페이지에는 없던 전공 바구니 기능을 추가하였습니다!\n내가 들은 과목과 앞으로 들을 과목에 대해 계획을 세워볼 수 있습니다.\n\n❄️ 학생회 페이지를 추가하여 1년 동안의 학생회 활동을 보면서\n한 해 학과 행사를 기억할 수 있습니다!',
    memberList: [
      {
        id: 1,
        name: '경민서',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/경민서.png',
        retrospect:
          '1학기에 운영진분들과 함께 배웠던 웹 지식들을 프로젝트에 바로 쓸 수 있어서 좋았습니다 😊 제가 그동안 생활하면서 학과 홈페이지에 더 다양한 내용들이 있으면 좋겠다구 부족하게 느꼈던 부분들을 실제로 고쳐볼 수 있는 기회였던 점에서 의미 있는 프로젝트였습니다! 첫 웹 프로젝트였던 만큼 중간에 완전히 새로 시작하면서 시행착오도 많았던 것 만큼 좋은 경험이 되었습니다 😇',
      },
    ],
    techStackList: [
      {
        name: 'React',
        imageUrl: '/images/techStack/react.png',
      },
    ],
  },
  {
    id: 7,
    name: 'DevInsight',
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-7.png',
    youtubeVideoId: '4Woys_q06vY',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://2023-dev-insight.vercel.app/',
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-DevInsight',
      serverUrl: null,
    },
    summary: 'IT 기업들의 혁신적인 기술과 동향을 한 곳에 만나보세요!',
    introduction:
      'IT 기업들의 혁신적인 기술과 동향을 소개하는 영상과 이야기 그리고 세미나들을 한 곳에서 손쉽게 찾고 경험할 수 있는 서비스입니다.',
    description:
      '더 이상 번거로운 수백 개의 개발 기술 웹사이트를 돌아다니지 않아도 됩니다. 주요 IT 플랫폼 기업들인 토스, 네이버, 카카오, 그리고 우아한 형제들의 기술 영상과 세미나를 편리하게 한 곳에서 확인하세요.\n\n- 우수한 기술과 지식을 나누며 탁월함을 추구하는 기술 영상\n- 훌륭한 개발자들의 기술 노하우와 경험이 녹아든 개발 이야기\n- 온라인 및 오프라인에서 진행된 다양한 기술 공유 세미나 영상\n- 개발자들의 다양한 기술 이야기와 개발 경험을 직접 들을 수 있는 행사 소개\n\n🏆 모든 기술 영상과 세미나를 손쉽게 확인해보세요! 🏆',
    memberList: [
      {
        id: 1,
        name: '류미성',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/류미성.png',
        retrospect:
          '첫 개인 프로젝트를 마무리하고 나니, 뿌듯한 마음이 가장 큰 것 같습니다. 이 프로젝트를 통해 기획부터 개발까지의 과정을 경험하면서 많은 것을 배울 수 있었습니다. 여러 레퍼런스를 찾아보며 내가 제공할 서비스의 좋은 UI/UX가 과연 무엇일지, 어떻게 하면 더 나은 방향으로 개선할 수 있을지 등에 대해 많은 고민을 하였습니다. 개발 과정에서는 해결되지 않은 부분이 있어 몇 일을 몰입해서 해결하려고 노력한 날 들도 있었는데, 이 과정에서도 많이 성장할 수 있었습니다. 이 프로젝트를 통해 스스로 얼마나 발전하고 성장했는지를 몸소 느낄 수 있었고, 앞으로의 프로젝트에서도 이번 경험을 살려 더 나은 결과물을 만들어 나가고 싶습니다😁',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStack/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStack/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStack/javascript.png',
      },
    ],
  },
  {
    id: 8,
    name: '나만의 운동일지',
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-8.png',
    youtubeVideoId: 'H0Gd2euCQ0U',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-SMSW-Web-Project-client',
      serverUrl: null,
    },
    summary: '운동 기록을 이모지로 한 눈에 확인해보세요',
    introduction:
      '매일매일의 운동을 이모지로 기록하며 한눈에 운동 기록을 확인할 수 있습니다. 달력이 이모지로 채워나가는 것을 보며 뿌듯함과 즐거움을 느끼는 "나만의 운동일지"를 만들어나가는 서비스입니다.',
    description:
      '- 이모지, 일기 내용 기록\n- 이모지가 반영된 달력 기능\n- 일기를 확인할 수 있는 목차형 페이지\n- 일기의 수정, 삭제',
    memberList: [
      {
        id: 1,
        name: '윤현서',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/윤현서.png',
        retrospect:
          'APPS를 통해 웹 프로그래밍 공부를 처음 시작하고, 프로젝트까지 도전해보는 소중한 경험이었습니다! 첫 프로젝트였던 만큼 어려움도 많았지만, 그 어려움을 스스로 극복해보며 많이 공부하고, 성장할 수 있었습니다. 이를 계기로 앞으로 진행하게 될 프로젝트에서는 더욱 좋은 결과를 만들어내는 개발자가 되고 싶습니다! 저의 첫 도전에 많은 도움과 조언을 주셨던 운영진분들 너무 감사합니다.💕',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStack/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStack/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStack/javascript.png',
      },
    ],
  },
  {
    id: 9,
    name: 'Basket',
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-9.png',
    youtubeVideoId: 'jAc52rCUx-k',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/ljinny/2023-basket',
      serverUrl: null,
    },
    summary: '사려고 한 모든 것들, bsaket에 저장!',
    introduction:
      '공유한 쇼핑몰 링크만 넘쳐나는 사람들, 장 볼 때 필요한 식재료보다 다른 물품을 더 많이 사오는 사람들, 다이소만 가면 사려고 했던 물건이 기억 안나는 사람들을 위한 일상을 담아두는 생활 관리 서비스입니다!',
    description:
      'basket은 옷, 음식, 생활용품까지 사려고 했던 모든 물건들을 저장하여 한 곳에서 정리 가능한 생활 관리 서비스입니다.\n\n👗 Clothes 페이지 - 패션을 담다, 나만의 옷장 관리하기\n- 원하는 옷들의 사진과 링크를 업로드하여 저장\n- buy 버튼을 통해 해당 제품 페이지로 쉬운 이동\n- 구매하거나 옷이 마음에 안들 때 해당 제품을 삭제\n\n🍎 Grocery 페이지 - 건강한 식단을 위한 일상 기록하기\n\n- 일주일치의 식단 기록\n- 장 볼 목록 작성 및 관리\n\n🛒 Essential 페이지 - 생활 필수품을 체계적으로 관리하기\n- 상점의 종류에 따라 필요한 물품을 작성하여 저장\n- 구매 여부를 표시하여 물품 관리 용이',
    memberList: [
      {
        id: 1,
        name: '이지은',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/이지은.png',
        retrospect:
          '웹의 다양한 기능을 경험해볼 수 있는 소중한 시간이었습니다. 웹의 디자인이 마음에 들지 않을 때, 원하는 기능을 구현하는 방법을 찾기 힘들 때 등 힘들었던 시간들도 있었지만 나만의 프로젝트를 하나 완성했다는 뿌듯함이 가장 기억에 남는 것 같습니다! 다음에는 다양한 팀원들과 더 완성도 있는 팀 프로젝트를 진행해보고 싶습니다!😄',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStack/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStack/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStack/javascript.png',
      },
    ],
  },
  {
    id: 10,
    name: 'EzEat',
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-10.png',
    youtubeVideoId: 'Q0Gk_Ajkhmo',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-EzEat',
      serverUrl: null,
    },
    summary: '오늘 점심 뭐먹지?',
    introduction:
      "배는 고픈데, 뭐를 먹어야 잘 먹었다고 소문이 날까... '선택장애' 인 사람들을 위해 대신 메뉴를 정해드려요! 근방 몇분 거리 내의 음식점들을 찾아보고 싶거나, 땡기는 음식 종류가 있을 때! 한눈에 음식점들을 확인해볼 수 있어요:)",
    description:
      "사용자가 메뉴선택 기준 ( 거리별 or 음식종류 별 ) 을 선택하여, 사용자의 상황에 맞는 음식을 선택할 수 있습니다. 또한, 여러 음식들 중 하나를 선택하는데 어려움이 있다면 '룰렛돌리기' 기능을 통해 랜덤으로 메뉴를 정할 수 있으며, 선택한 음식들은 자동으로 저장되어, 식단정리까지 이어지는 서비스를 구현했습니다.\n\n- 사용자가 거리별(5분, 10분 ..) or 음식종류별 중 어떤 기준으로 음식을 선택할지 선택\n- 사용자의 선택에 따라, 현재 위치와 가까운 순서대로 음식점들을 정렬\n- 음식점을 누르면, 음식점에서 파는 음식들에 대한 상세정보 확인 가능\n- 여러가지 음식을 누르고 '룰렛 돌리기' 를 선택할 시, 룰렛결과, 랜덤으로 메뉴 선정\n- 룰렛을 돌리지 않고 메뉴를 선택하거나, 룰렛을 돌려서 메뉴를 선택하는 경우 ( 최종선택 ) 모두 '그동안 먹은 음식들' 리스트에 자동으로 저장되어 기록\n\n🍽️EzEat 으로 고민시간은 최소로, 행복시간😋은 최대로 🍽️",
    memberList: [
      {
        id: 1,
        name: '이채은',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/이채은.png',
        retrospect:
          '기획과 디자인, 그리고 개발까지 모두 혼자 해야했던 개인 프로젝트여서 힘들었던 만큼 많은 걸 배울 수 있어서 좋았습니다. 앞으로 다양한 직군들과 커뮤니케이션을 할때에도 해당 프로젝트를 하면서 배운 것들을 잘 이용해볼 수 있을 것 같습니다. 또한, 혼자 개발을 하는 습관도 기를 수 있었다는 점에서 정말 유익했던 것 같습니다. 또한, react 로 개발을 하고 앱으로 전환하려고 하니 조금 까다롭더라고요. 안드로이드를 배우고 싶다는 생각도 하게 되었던 것 같습니다. 여러가지로 너무 즐거웠습니다. 감사합니다.',
      },
    ],
    techStackList: [
      {
        name: 'React',
        imageUrl: '/images/techStack/react.png',
      },
    ],
  },
  {
    id: 11,
    name: 'Photoshop_HR',
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-11.png',
    youtubeVideoId: 'X3UdlKpiqEk',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-SMSW-Web-Project-client',
      serverUrl: null,
    },
    summary: '사진을 편집해보고 자랑하세요!',
    introduction: '사진을 좋아하고 또 편집에 관심 있는 여러분을 위한 사진 편집기 서비스입니다.',
    description:
      '사진을 일반적인 편집과 더불어 여러 세부적인 기능들로 보다 더 정교한 편집이 이루어 질 수 있도록 하였습니다.\n\n- 일반 편집: 사진을 확대 및 축소 등등 일반적인 기능들로 구성되었습니다.\n- 컬러 편집: 사진 위 자신의 그림을 그려보기도 하고 여러 색을 추출할 수 있는 색조 편집 기능들로 구성되었습니다.\n- 게시판: 다 편집한 사진들은 모두와 함께 공유하고 자랑해보세요',
    memberList: [
      {
        id: 1,
        name: '이해림',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/이해림.png',
        retrospect:
          '여름방학부터 시작하여 제가 관심 있는 포토샵 웹페이지를 제작하였습니다. HTML과 JS를 이용하여 사진 편집 기능을 구현하고 게시판 기능까지 삽입하여 여러 사용자가 소통할 수 있도록 하였습니다. 물론 끝맺음이 상당히 아쉽지만 좋은 경험이었고 저는 이 프로젝트가 긴 시간이 걸리더라도 완성하고 싶습니다. 그래서 나중이라도 더 발전된 모습으로 배포하고 이 순간을 저의 성장의 뜻깊은 발디딤이라고 기억하고 추억하겠습니다.',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStack/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStack/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStack/javascript.png',
      },
    ],
  },
  {
    id: 12,
    name: 'Frame',
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-12.png',
    youtubeVideoId: 'nFRPFIcP-mw',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/seoy-54/2023-Frame',
      serverUrl: null,
    },
    summary: '나의 시선을 업로드하고 타인의 시선을 체험해 보세요.',
    introduction:
      'Frame은 다양한 주제와 스타일의 사진을 업로드하고 공유할 수 있는 공간으로 다양한 사용자의 사진들을 만나볼 수 있습니다.\n\n*업로드되는 사진은 모든 사용자에게 공개되며 저작권에 대한 사전 동의가 이루어집니다.',
    description:
      '실시간으로 업로드되는 사진들이 있는 전체 페이지와 주제별, 사용자별로 사진을 모아 볼 수 있게 했습니다. 또한 디지털카메라와 필름 카메라로 찍은 사진을 구분하고 필름의 종류에 따라 역시 모아 볼 수 있습니다.\n\n- 사진 업로드\n- 전체, 주제, 사용자로 나누어진 메뉴 \n- 같은 필름 사진 모아보기\n- 사진 좋아요 및 실시간 인기 사진\n\n자신의 시선이 담긴 사진을 다른 사람들과 공유해 보세요.',
    memberList: [
      {
        id: 1,
        name: '정서연',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/정서연.png',
        retrospect:
          '"Frame"은 정말 기획부터 개발까지 혼자 했던 첫 프로젝트입니다. 처음 하다 보니 당연히 어려움도 많았죠. 머릿속에 막연하게 존재하는 것을 개발로 눈으로 볼 수 있게 하는 작업은 절대 쉽지 않아 가끔은 PPT 만드는 것처럼 옮기고 싶다는 생각까지 했어요. 기획했던 모든 기능을 다 실현하지는 못했지만, 내 아이디어를 통해서 그럴듯한 결과물을 산출했다는 것에 저는 큰 의의를 두고 이 경험을 오래 기억할 것 같아요. 이 기억이 앞으로 하는 일에 힘이 되길 바라면서요. 처음 진행한 프로젝트! 다음엔 팀 프로젝트로 더욱 좋은 서비스를 제공할 수 있도록 노력하여 돌아오겠습니다~!',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStack/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStack/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStack/javascript.png',
      },
    ],
  },
  {
    id: 13,
    name: 'Livre',
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-13.png',
    youtubeVideoId: 'BR2tBkDYk4Q',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-Livre',
      serverUrl: null,
    },
    summary: '독서동아리 부원들과 함께 서평을 나누고 소통하세요',
    introduction:
      '독서동아리 부원들과 인상 깊은 책의 구절과 서평을 쓰며 소통할 수 있는 독서동아리 웹 서비스입니다. 다른 부원들의 글에 댓글과 이모지를 남길 수 있고, 공지사항과 사진들을 올리거나 확인 할 수 있습니다.',
    description:
      '제가 만들었던 독서동아리에서 서평을 쓰고 피드백하는 것을 카톡방에서 진행했었는데, 웹 페이지로 만들면 더 효율적일 것 같아 이 서비스를 고안했습니다.\n\n- 인상 깊었던 구절과 그것에 대한 서평을 작성할 수 있는 공간 제공 \n- 서평에 대해 코멘트나 이모지를 달 수 있는 기능\n- 정기모임을 공지할 수 있는 공지화면\n- 정기모임에서의 사진을 올릴 수 있는 갤러리\n- mt, 신입부원 모집 일정과 같은 이벤트 알림 화면\n- 각 기수의 활동을 볼 수 있는 메뉴바\n\n바쁜 현대사회 속에서 Livre를 통해 독서와 함께 서로의 생각을 나누고 교양을 쌓길 바랍니다',
    memberList: [
      {
        id: 1,
        name: '정지원',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/정지원.png',
        retrospect:
          '독서동아리의 부회장을 했었는데, 상 깊게 읽었던 구절과 서평을 기록하며 언제든 찾아볼 수 있는 웹사이트가 있으면 좋겠다고 생각해서 Livre 웹을 기획하게 됐습니다. 동아리의 분위기와 특성을 생각하며 색감을 정하고, JS를 이용해서 간단한 애니메이션을 구현한 게 재밌었고 기억에 남습니다. 앱 개발을 주로 했어서 웹 개발은 이번이 처음이었는데, 모르는 부분이나 필요한 부분을 스스로 찾고 공부하며 APPS 부원들의 적극적인 피드백도 받아서 만족스러운 결과물을 낼 수 있었습니다:)',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStack/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStack/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStack/javascript.png',
      },
    ],
  },
  {
    id: 14,
    name: 'Colog',
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-14.png',
    youtubeVideoId: 'BqSKfPj93rg',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-Colog',
      serverUrl: null,
    },
    summary: '뿌듯함을 채워주고 성취감을 극대화하는 프로그래머 전용 타이머 앱, 코록',
    introduction:
      '프로그래머만의 뿌듯함을 느끼고 싶으신가요? 나만의 코딩 기록 서비스, 코록은 타이머, 뽀모도로 등 집중을 위한 최적의 환경을 제공하고 월 별 통계를 통해 성취감을 극대화합니다. 코딩 시간, 기술 블로그 업로드 등 코딩 기록을 한 곳에 모아 보세요!',
    description:
      '타이머, 뽀모도로 등 집중할 수 있는 환경을 제공하고 스스로 얼마만큼 코딩했는지 눈으로 쉽게 확인할 수 있도록 했습니다. 또한, 기술 블로그 업로드, Git 커밋 등 코딩과 관련된 공부를 객관적인 지표로 나타냅니다.\n\n- 스스로 얼마나 공부했는지 체크할 수 있는 타이머 기능 제공\n- 정해진 시간 내 최대 효율을 끌어올릴 수 있는 뽀모도로 기능 제공\n- 월 별 통계 및 일 별 통계 기능을 통한 객관적 지표 확인\n- 투두 리스트로 오늘의 할 일 체크',
    memberList: [
      {
        id: 1,
        name: '주아정',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/주아정.png',
        retrospect:
          '리액트를 배우기만 했지, 쓸 기회가 없었는데 이번 프로젝트를 통해 리액트를 실제로 사용해봐서 좋았어요! 확실히 실제로 프로젝트하면서 몸으로 익히는 것과 강의를 통해 따라치는 것은 다르다는 걸 느꼈습니다. 여러 일정이 겹쳐 프로젝트 기간이 짧아 다양한 기능과 애니메이션을 구현하지 못해 아쉬웠어요. 추후에 꼭 프로젝트 디벨롭을 진행해보겠습니다... 백엔드도 구현하는 것이 저의 최종 목표! 타 프로젝트를 참고하며 열심히 공부할 수 있어 좋았습니다. 더 멋진 개발자가 되도록 노력하겠습니다!',
      },
    ],
    techStackList: [
      {
        name: 'React',
        imageUrl: '/images/techStack/react.png',
      },
    ],
  },
  {
    id: 15,
    name: 'SNAPIX',
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-15.png',
    youtubeVideoId: 'JWndRrDB40E',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-SNAPIX',
      serverUrl: null,
    },
    summary: '순간을 영원하게.',
    introduction:
      'SNAPIX는 사진 작가를 위한 온라인 플랫폼입니다. 사진에 관한 모든 것을 얻어가세요!',
    description:
      '사진에 관한 다양한 아이디어와 레퍼런스를 제공하는 서비스를 고안했습니다.\n\n- 원본 사진의 비율을 자르지 않고 업로드 할 수 있는 Gallery\n- 사진 작가들과 소통할 수 있는 PicTalk\n- 사진 관련 정보를 얻을 수 있는 Magazine\n\n순간을 영원하게, SNAPIX.',
    memberList: [
      {
        id: 1,
        name: '최서윤',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/최서윤.png',
        retrospect:
          '상상만 하던 웹페이지를 직접 만들어볼 수 있는 유익한 시간이었습니다. 혼자 구성과 디자인을 설계, 고민해보면서 얻은게 많은 것 같아요. 앞으로도 앱스에서 다양한 프로젝트를 통해 좋은 경험 쌓고 싶습니다!',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStack/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStack/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStack/javascript.png',
      },
    ],
  },
];
