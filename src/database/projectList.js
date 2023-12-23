export const PROJECT_CATEGORY_LIST = [
  {
    id: 'app',
    title: '앱 서비스',
    projectList: [
      {
        id: 1,
        name: 'Cookiee-',
        memberNameList: ['경민서', '윤서희', '조영서', '황수연'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-app-1.png',
        githubClientUrl: 'https://github.com/APPS-sookmyung/2023-COOKIEE-client-react',
        githubServerUrl: 'https://github.com/APPS-sookmyung/2023-COOKIEE-server',
        stack: ['Spring Boot', 'React Native', 'AWS', 'MySQ'],
        projectSummary: '하루하루의 쿠키를 모아보세요!',
        serviceIntroduction:
          'Cookiee- 앱으로 여러분의 하루하루를 아름답게 기록해보세요! 사진으로 나만의 캘린더를 꾸미고, 그날 누구와 무엇을 했는지 기록하세요. 일상을 캘린더로 디자인하는 색다른 경험을 누려보세요!',
        serviceDescription: `
        🍪 캘린더로 한 달의 쿠키 모아보기
    
        하루하루의 쿠키를 모아 한 달의 일상을 캘린더로 한눈에 보여줍니다.
        
        🍪 그 날의 쿠키 조각을 모아보기
        
        하루동안의 쿠키 조각들을 보면서 누구와 어떤 시간을 보냈는지 리스트할 수 있습니다.
        
        🍪 카테고리 별 나의 일상 찾기
        
        나의 쿠키들을 카테고리 별로 정리하여 한눈에 볼 수 있습니다.
        `,
      },
      {
        id: 2,
        name: 'Pochak',
        memberNameList: ['김다연', '오지수', '하고은', '황수연'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-app-2.png',
        githubIosUrl: 'https://github.com/APPS-sookmyung/2023-POCHAK-ios',
        githubServerUrl: 'https://github.com/APPS-sookmyung/2023-POCHAK-server',
        stack: ['Sprint Boot', 'Swift'],
        projectSummary: '당신의 순간을 포착하세요!',
        serviceIntroduction:
          'Pochak은 사용자가 직접 사진을 올리는 것이 아니라, 친구들이 사용자를 중심으로 촬영한 사진을 통해 자연스럽게 일상을 기록하고 공유하는 특별한 소셜 미디어 플랫폼입니다. 다양한 시각에서의 일상을 통해 사용자들에게 새로운 경험을 제공합니다.',
        serviceDescription: `📸 친구들의 시선으로 기록되다:
        Pochak은 다른 사용자들이 당신의 일상을 기록하도록 하는 독특한 서비스입니다. 당신은 자신의 카메라를 통해 아름다운 순간들을 기록하지 않아도, 친구들이나 팔로워들이 당신을 찍은 사진을 피드에 올려 공유할 수 있습니다.
        
        🔄 상호 작용과 공유:
        Pochak은 사용자들이 서로의 순간에 참여하고 상호 작용할 수 있도록 하는 기능을 강조합니다. 댓글, 좋아요, 그리고 공유를 통해 순간들을 더 특별하게 만들어보세요!
        
        🌟 프로필의 다양성:
        당신의 Pochak 프로필은 다른 사람들이 기록한 당신의 순간들을 보여줍니다. 여러 시각으로부터의 사진들이 모여 하나의 아름다운 이야기를 만들어냅니다`,
      },
      {
        id: 3,
        name: 'CalenTime',
        memberNameList: ['김수현', '신진영', '하고은'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-app-1.png',
        githubUrl: 'https://github.com/APPS-sookmyung/2023-CalenTime',
        stack: ['Flutter', 'SQFlite'],
        projectSummary: '하나의 앱에서 캘린더와 시간표를 관리해요!',
        serviceIntroduction:
          '캘린더와 시간표를 하나의 플랫폼에서 사용하고 싶은 사람들을 위한 일정 관리 서비스입니다.',
        serviceDescription: `📅 캘린더와 시간표를 따로 사용하는 과정이 번거로운 사람들을 위해 하나의 앱에서 효과적으로 일정 관리를 할 수 있는 앱을 만들고 있습니다.

        - 시간표에서 과목, 시간, 강의실 등 학교 수업 관리
        - 과목을 클릭하여 과목별 할 일 추가
        - 캘린더에서 날짜별 할 일 추가
        - 시간표에 할 일과 날짜 등록 시 캘린더 페이지에 자동 반영

        CalenTime과 함께 효과적인 일정 관리를 해보세요!!`,
      },
      {
        id: 4,
        name: 'APPS Check',
        memberNameList: ['류미성', '신진영', '이채은'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-app-1.png',
        githubUrl: 'https://github.com/APPS-sookmyung/2023-AppsCheck',
        stack: ['React.js', 'Firebase'],
        projectSummary: '출석체크 어플을 통해 손쉽게 출석 기록을 관리해보아요!',
        serviceIntroduction:
          'Sookmyung APPS 부원들을 위한 출석 체크 앱, AppsCheck입니다. 세미나 장소에 도착해서 출석할 수 있는 기능과 함께, 나의 과거 출석 기록도 살펴볼 수 있습니다.',
        serviceDescription: `동아리 부원들은 세미나 장소에 도착하여 간편한 출석체크를 수행하며, 운영진은 실시간으로 부원들의 출석 상태를 효과적으로 관리할 수 있습니다.
    
        - 세미나 일정과 장소를 사전에 확인하고, 그날의 주요 공지사항을 손쉽게 접할 수 있습니다.
        - 출석이 불가한 경우, 동아리 부원들은 해당 사유를 작성하고 표시할 수 있습니다.
        - 동아리 운영진은 출석 시간을 실시간으로 받아보며, 부원별 출석 통계자료를 간편하게 확인할 수 있습니다.
        
        출석체크☑️ 간편하게 해보아요😁`,
      },
    ],
  },
  {
    id: 'web',
    title: '웹 서비스',
    projectList: [
      {
        id: 5,
        name: '새미새',
        memberNameList: ['김진영', '문채일', '정민주', '최민선'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-1.png',
        githubClientUrl: 'https://github.com/APPS-sookmyung/2023-BirdieBuddy',
        githubServerUrl: 'https://github.com/APPS-sookmyung/2023-BirdieBuddy-server',
        stack: ['Vanilla JS', 'Spring'],
        projectSummary: '새 도감 사이트',
        serviceIntroduction:
          '한국의 탐조인들 모여라! 탐조의 즐거움이 배가 되는, 새에 미친 새람들을 위한 사이트입니다.',
        serviceDescription: `- 도감
        새 이름으로 검색하기
        내가 발견한 새 특징으로 검색하기
        새의 종 이름으로 검색하기
        
        - 동정
        내가 동정 못하겠는 새 사진을 고수들에게 동정을 부탁하기
        동정을 정확히 해주고 포인트 받기
        
        - 기록
        내 탐조 여정을 기록해봐요!
        내 탐조 여정을 확인해봐요!
        
        -새뉴스 (할지 말지 미정)
        새들에 대한 뉴스를 접하기
        새에 대해서 빠삭한 고수가 되어 봅시다.
        
        -배지
        열심히 탐조활동 하라는 동기부여
        탐조에 대한 달성과제를 완료하여 포인트를 얻기
        
        -마이페이지
        모은 포인트로 내 아바타를 만들어봐요!`,
      },
    ],
  },
  {
    id: 'new-members',
    title: '신입부원',
    projectList: [
      {
        id: 6,
        name: 'SMSW Web',
        memberNameList: ['경민서'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-1.png',
        githubUrl: 'https://github.com/APPS-sookmyung/2023-SMSW-Web-Project-client',
        stack: ['React.js'],
        projectSummary: '새롭게 개선된 숙명여대 소프트웨어학부 홈페이지입니다!',
        serviceIntroduction:
          '기존의 숙명여자대학교 소프트웨어학부의 홈페이지의 부족한점을 포착하고 개선했습니다! 학생들에게 필요한 정보와 기능을 추가하였습니다 😃',
        serviceDescription: `정보와 기능을 둘다 담은 새로운 소프트웨어학부 홈페이지.

        ❄️ 전송소개, 커리큘럼, 교수님 소개와 같은 학과에 대한 정보는 기본으로 담았습니다!
        
        ❄️ 기존의 홈페이지에는 없던 전공 바구니 기능을 추가하였습니다!
        내가 들은 과목과 앞으로 들을 과목에 대해 계획을 세워볼 수 있습니다.
        
        ❄️ 학생회 페이지를 추가하여 1년 동안의 학생회 활동을 보면서 
        한 해 학과 행사를 기억할 수 있습니다!
        `,
      },
      {
        id: 7,
        name: 'DevInsight',
        memberNameList: ['류미성'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-2.png',
        githubUrl: 'https://github.com/APPS-sookmyung/2023-DevInsight',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectSummary: 'IT 기업들의 혁신적인 기술과 동향을 한 곳에 만나보세요!',
        serviceIntroduction:
          'IT 기업들의 혁신적인 기술과 동향을 소개하는 영상과 이야기 그리고 세미나들을 한 곳에서 손쉽게 찾고 경험할 수 있는 서비스입니다.',
        serviceDescription: `더 이상 번거로운 수백 개의 개발 기술 웹사이트를 돌아다니지 않아도 됩니다. 주요 IT 플랫폼 기업들인 토스, 네이버, 카카오, 그리고 우아한 형제들의 기술 영상과 세미나를 편리하게 한 곳에서 확인하세요.

        - 우수한 기술과 지식을 나누며 탁월함을 추구하는 기술 영상
        - 훌륭한 개발자들의 기술 노하우와 경험이 녹아든 개발 이야기
        - 온라인 및 오프라인에서 진행된 다양한 기술 공유 세미나 영상
        - 개발자들의 다양한 기술 이야기와 개발 경험을 직접 들을 수 있는 행사 소개
        
        🏆 모든 기술 영상과 세미나를 손쉽게 확인해보세요! 🏆`,
      },
      {
        id: 8,
        name: '나만의 운동일지',
        memberNameList: ['윤현서'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-2.png',
        githubUrl: 'https://github.com/gustj3104/2023-Diary',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectSummary: '운동 기록을 이모지로 한 눈에 확인해보세요',
        serviceIntroduction:
          '매일매일의 운동을 이모지로 기록하며 한눈에 운동 기록을 확인할 수 있습니다. 달력이 이모지로 채워나가는 것을 보며 뿌듯함과 즐거움을 느끼는 "나만의 운동일지"를 만들어나가는 서비스입니다.',
        serviceDescription: `- 이모지, 일기 내용 기록
        - 이모지가 반영된 달력 기능
        - 일기를 확인할 수 있는 목차형 페이지
        - 일기의 수정, 삭제`,
      },
      {
        id: 9,
        name: 'Basket',
        memberNameList: ['이지은'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-1.png',
        githubUrl: 'https://github.com/ljinny/2023-basket',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectSummary: '사려고 한 모든 것들, bsaket에 저장!',
        serviceIntroduction:
          '공유한 쇼핑몰 링크만 넘쳐나는 사람들, 장 볼 때 필요한 식재료보다 다른 물품을 더 많이 사오는 사람들, 다이소만 가면 사려고 했던 물건이 기억 안나는 사람들을 위한 일상을 담아두는 생활 관리 서비스입니다!',
        serviceDescription: `basket은 옷, 음식, 생활용품까지 사려고 했던 모든 물건들을 저장하여 한 곳에서 정리 가능한 생활 관리 서비스입니다.
      
        👗 Clothes 페이지 - 패션을 담다, 나만의 옷장 관리하기
      
        - 원하는 옷들의 사진과 링크를 업로드하여 저장
        - buy 버튼을 통해 해당 제품 페이지로 쉬운 이동
        - 구매하거나 옷이 마음에 안들 때 해당 제품을 삭제
      
        🍎 Grocery 페이지 - 건강한 식단을 위한 일상 기록하기
      
        - 일주일치의 식단 기록
        - 장 볼 목록 작성 및 관리
      
        🛒 Essential 페이지 - 생활 필수품을 체계적으로 관리하기
      
        - 상점의 종류에 따라 필요한 물품을 작성하여 저장
        - 구매 여부를 표시하여 물품 관리 용이
        `,
      },
      {
        id: 10,
        name: 'EzEat',
        memberNameList: ['이채은'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-1.png',
        githubUrl: 'https://github.com/APPS-sookmyung/2023-EzEat',
        stack: ['React.js', 'Firebase'],
        projectSummary: '오늘 점심 뭐먹지?',
        serviceIntroduction:
          "배는 고픈데, 뭐를 먹어야 잘 먹었다고 소문이 날까... '선택장애' 인 사람들을 위해 대신 메뉴를 정해드려요! 근방 몇분 거리 내의 음식점들을 찾아보고 싶거나, 땡기는 음식 종류가 있을 때! 한눈에 음식점들을 확인해볼 수 있어요:)",
        serviceDescription: `사용자가 메뉴선택 기준 ( 거리별 or 음식종류 별 ) 을 선택하여, 사용자의 상황에 맞는 음식을 선택할 수 있습니다. 또한, 여러 음식들 중 하나를 선택하는데 어려움이 있다면 '룰렛돌리기' 기능을 통해 랜덤으로 메뉴를 정할 수 있으며, 선택한 음식들은 자동으로 저장되어, 식단정리까지 이어지는 서비스를 구현했습니다.

        - 사용자가 거리별(5분, 10분 ..) or 음식종류별 중 어떤 기준으로 음식을 선택할지 선택
        - 사용자의 선택에 따라, 현재 위치와 가까운 순서대로 음식점들을 정렬
        - 음식점을 누르면, 음식점에서 파는 음식들에 대한 상세정보 확인 가능
        - 여러가지 음식을 누르고 '룰렛 돌리기' 를 선택할 시, 룰렛결과, 랜덤으로 메뉴 선정
        - 룰렛을 돌리지 않고 메뉴를 선택하거나, 룰렛을 돌려서 메뉴를 선택하는 경우 ( 최종선택 ) 모두 '그동안 먹은 음식들' 리스트에 자동으로 저장되어 기록
        
        🍽️EzEat 으로 고민시간은 최소로, 행복시간😋은 최대로 🍽️`,
      },
      {
        id: 11,
        name: 'Photoshop_HR',
        memberNameList: ['이해림'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-1.png',
        githubUrl: 'https://github.com/APPS-sookmyung/2023-web-project-photoshop',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectSummary: '사진을 편집해보고 자랑하세요!',
        serviceIntroduction:
          '사진을 좋아하고 또 편집에 관심 있는 여러분을 위한 사진 편집기 서비스입니다.',
        serviceDescription: `사진을 일반적인 편집과 더불어 여러 세부적인 기능들로 보다 더 정교한 편집이 이루어 질 수 있도록 하였습니다.
        
        - 일반 편집: 사진을 확대 및 축소 등등 일반적인 기능들로 구성되었습니다. 
        - 컬러 편집: 사진 위 자신의 그림을 그려보기도 하고 여러 색을 추출할 수 있는 색조 편집 기능들로 구성되었습니다.
        - 게시판: 다 편집한 사진들은 모두와 함께 공유하고 자랑해보세요`,
      },
      {
        id: 12,
        name: 'Frame',
        memberNameList: ['정서연'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-1.png',
        githubUrl: 'https://github.com/seoy-54/2023-Frame',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectSummary: '나의 시선을 업로드하고 타인의 시선을 체험해 보세요.',
        serviceIntroduction: `Frame은 다양한 주제와 스타일의 사진을 업로드하고 공유할 수 있는 공간으로 다양한 사용자의 사진들을 만나볼 수 있습니다.

          *업로드되는 사진은 모든 사용자에게 공개되며 저작권에 대한 사전 동의가 이루어집니다.`,
        serviceDescription: `실시간으로 업로드되는 사진들이 있는 전체 페이지와 주제별, 사용자별로 사진을 모아 볼 수 있게 했습니다. 또한 디지털카메라와 필름 카메라로 찍은 사진을 구분하고 필름의 종류에 따라 역시 모아 볼 수 있습니다.

        - 사진 업로드
        - 전체, 주제, 사용자로 나누어진 메뉴
        - 같은 필름 사진 모아보기
        - 사진 좋아요 및 실시간 인기 사진
        
        자신의 시선이 담긴 사진을 다른 사람들과 공유해 보세요.`,
      },
      {
        id: 13,
        name: 'Livre',
        memberNameList: ['정지원'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-1.png',
        githubUrl: 'https://github.com/codeJiwon',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectSummary: '독서동아리 부원들과 함께 서평을 나누고 소통하세요',
        serviceIntroduction:
          '독서동아리 부원들과 인상 깊은 책의 구절과 서평을 쓰며 소통할 수 있는 독서동아리 웹 서비스입니다. 다른 부원들의 글에 댓글과 이모지를 남길 수 있고, 공지사항과 사진들을 올리거나 확인 할 수 있습니다.',
        serviceDescription: `제가 만들었던 독서동아리에서 서평을 쓰고 피드백하는 것을 카톡방에서 진행했었는데, 웹 페이지로 만들면 더 효율적일 것 같아 이 서비스를 고안했습니다.
        - 인상 깊었던 구절과 그것에 대한 서평을 작성할 수 있는 공간 제공
        - 서평에 대해 코멘트나 이모지를 달 수 있는 기능
        - 정기모임을 공지할 수 있는 공지화면
        - 정기모임에서의 사진을 올릴 수 있는 갤러리
        - mt, 신입부원 모집 일정과 같은 이벤트 알림 화면
        - 각 기수의 활동을 볼 수 있는 메뉴바
        
        바쁜 현대사회 속에서 Livre를 통해 독서와 함께 서로의 생각을 나누고 교양을 쌓길 바랍니다`,
      },
      {
        id: 14,
        name: 'Colog',
        memberNameList: ['주아정'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-1.png',
        githubUrl: 'https://github.com/APPS-sookmyung/2023-Colog',
        stack: ['HTML', 'CSS', 'Javascript', 'React.js', 'Node.js'],
        projectSummary: '뿌듯함을 채워주고 성취감을 극대화하는 프로그래머 전용 타이머 앱, 코록',
        serviceIntroduction:
          '프로그래머만의 뿌듯함을 느끼고 싶으신가요? 나만의 코딩 기록 서비스, 코록은 타이머, 뽀모도로 등 집중을 위한 최적의 환경을 제공하고 월 별 통계를 통해 성취감을 극대화합니다. 코딩 시간, 기술 블로그 업로드 등 코딩 기록을 한 곳에 모아 보세요!',
        serviceDescription: `타이머, 뽀모도로 등 집중할 수 있는 환경을 제공하고 스스로 얼마만큼 코딩했는지 눈으로 쉽게 확인할 수 있도록 했습니다. 또한, 기술 블로그 업로드, Git 커밋 등 코딩과 관련된 공부를 객관적인 지표로 나타냅니다.

        - 스스로 얼마나 공부했는지 체크할 수 있는 타이머 기능 제공
        - 정해진 시간 내 최대 효율을 끌어올릴 수 있는 뽀모도로 기능 제공
        - 월 별 통계 및 일 별 통계 기능을 통한 객관적 지표 확인
        - 투두 리스트로 오늘의 할 일 체크`,
      },
      {
        id: 15,
        name: 'SNAPIX',
        memberNameList: ['최서윤'],
        imageUrl: '/images/thumbnail/img-thumbnail-sample-web-1.png',
        githubUrl: 'https://github.com/APPS-sookmyung/2023-SNAPIX',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectSummary: '순간을 영원하게.',
        serviceIntroduction:
          'SNAPIX는 사진 작가를 위한 온라인 플랫폼입니다. 사진에 관한 모든 것을 얻어가세요!',
        serviceDescription: `사진에 관한 다양한 아이디어와 레퍼런스를 제공하는 서비스를 고안했습니다.

        -원본 사진의 비율을 자르지 않고 업로드 할 수 있는 Gallery
        -사진 작가들과 소통할 수 있는 PicTalk
        -사진 관련 정보를 얻을 수 있는 Magazine
        
        순간을 영원하게, SNAPIX.`,
      },
    ],
  },
];
