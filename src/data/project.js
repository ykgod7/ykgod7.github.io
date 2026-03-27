// HankAuction
import HankAuctionThumb from "@/assets/images/hankAuction/hankAuction-thumbnail.png";
import HankAuctionDetail1 from "@/assets/images/hankAuction/hankAuction_detailpage1.png";
import HankAuctionDetail2 from "@/assets/images/hankAuction/hankAuction_detailpage2.png";
import HankAuctionDetail3 from "@/assets/images/hankAuction/hankAuction-detailpage3.png";
import HankAuctionDetail4 from "@/assets/images/hankAuction/hankAuction-detailpage4.png";
import HankAuctionVideo from "@/assets/images/hankAuction/hankAuction-video.mp4";

// UniRanker
import UniRankerThumb from "@/assets/images/uniranker/uniranker-thumbnail.png";
import UniRankerMain1 from "@/assets/images/uniranker/uniranker-mainpage1.png";
import UniRankerMain2 from "@/assets/images/uniranker/uniranker-mainpage2.png";
import UniRankerDetail1 from "@/assets/images/uniranker/uniranker-detailpage1.png";
import UniRankerDetail2 from "@/assets/images/uniranker/uniranker-detailpage2.png";
import UniRankerDetail3 from "@/assets/images/uniranker/uniranker-detailpage3.png";
import UniRankerDetail4 from "@/assets/images/uniranker/uniranker-detailpage4.png";
import UniRankerDetail5 from "@/assets/images/uniranker/uniranker-detailpage5.png";

// LoL Map
import LolThumb from "@/assets/images/lol/lol-0.png";
import LolImg1 from "@/assets/images/lol/lol-1.png";
import LolImg2 from "@/assets/images/lol/lol-2.png";
import LolImg3 from "@/assets/images/lol/lol-3.png";
import LolImg4 from "@/assets/images/lol/lol-4.png";
import LolImg5 from "@/assets/images/lol/lol-5.png";
import LolVideo from "@/assets/images/lol/lol-video.mp4";

// Simple CMS Admin System
import SimpleCMSThumb from "@/assets/images/simple_cms_admin_system_thumb.png";
import SimpleCMSLogin from "@/assets/images/simpleCMS/cms-login.png";
import SimpleCMSRegister from "@/assets/images/simpleCMS/cms-register.png";
import SimpleCMSPosts from "@/assets/images/simpleCMS/cms-posts.png";
import SimpleCMSCreate from "@/assets/images/simpleCMS/cms-create.png";
import SimpleCMSAdmin from "@/assets/images/simpleCMS/cms-admin.png";
import SimpleCMSVideo from "@/assets/images/simpleCMS/cms-video.mp4";


export const projects = [
  {
    // Project Page
    slug: 'uniranker',
    title: 'UniRanker',
    role: 'Full Stack Developer',
    summary: '대학알리미 등 공공 데이터를 기반으로 국내 대학의 취업률·등록금·연구지표를 종합 분석해 순위를 제공하는 대학 정보 플랫폼입니다. 지역 필터·키워드 검색과 상세 지표 시각화 등 직관적인 인터페이스를 구현했습니다.',
    thumbnail: UniRankerThumb,
    link: 'https://uniranker.co.kr',



    // Detail Page
    overview: '대학알리미 등 공공기관 공개 데이터를 수집·정규화하여, 취업 성과·교육환경·연구력·연구비·특허 등 다양한 지표를 가중치 방식으로 종합 산출한 대학 순위 서비스입니다. 사용자는 지역 필터와 키워드 검색으로 원하는 대학을 빠르게 찾고, 상세 페이지에서 입학·취업·교원·연구 지표를 차트와 카드 형태로 한눈에 확인할 수 있습니다.',
    metaRows: [
      { label: 'Role', value: 'Full Stack Developer' },
      { label: 'Period', value: '2025' },
      { label: 'Tech Stack', value: 'Vue · NestJS · TypeORM · MySQL · Vercel · AWS' },
    ],
    features: [
      { title: '대학 순위 테이블 및 필터 검색', content: '전국 대학 TOP 100 순위를 테이블로 표시하고, 지역 드롭다운과 키워드 검색으로 원하는 대학을 즉시 필터링할 수 있습니다. 검색 조건은 URL query parameter에 동기화되어 공유 및 뒤로가기가 자연스럽게 동작합니다.' },
      { title: '대학 상세 지표 시각화', content: '각 대학의 입학·취업·교원 구성·연구·기숙사 지표를 KPI 카드, 도넛 차트, 리스트 카드로 구분하여 시각화했습니다. Chart.js 기반 도넛 그래프로 교원 구성 비율을 직관적으로 표현합니다.' },
      { title: '공공 데이터 기반 종합 순위 산정', content: '취업률·취업유지율·전임교원 비율·신입생 충원률·연구 지표 등 20여 개 세부 지표를 백분위 정규화 후 가중치를 적용해 종합점수를 산출합니다. NestJS + TypeORM으로 연도별 통계 데이터를 관리하고 최신 연도 기준으로 자동 집계됩니다.' },
    ],
    CSData: [
      { challenge: '검색·지역 필터 상태를 URL query parameter에 반영하는 과정에서 watch와 route.query 간 무한 루프가 발생했습니다.', solution: '필터 상태 → URL 갱신은 debounce로 처리하고, URL → 필터 상태 동기화 시 현재 값과 동일하면 router.replace를 호출하지 않도록 분기하여 루프를 방지했습니다.' },
      { challenge: '모바일에서 네이티브 select 요소가 OS별로 스타일이 다르고 커스터마이징이 불가능하여 디자인 일관성이 깨졌습니다.', solution: '모바일 환경에서는 네이티브 select를 숨기고 커스텀 Bottom Sheet 다이얼로그를 직접 구현했습니다. aria 속성과 focus 관리를 추가해 접근성도 함께 고려했습니다.' },
      { challenge: '대학 로고 이미지가 없는 경우 broken image 아이콘이 그대로 노출되어 UI가 깨지는 문제가 발생했습니다.', solution: 'img 태그의 @error 이벤트 핸들러를 활용해 로고 로딩 실패 시 default.png로 폴백 처리하여 항상 일관된 UI를 유지했습니다.' },
    ],
    imgList: [
      { src: UniRankerMain1, alt: 'UniRanker 메인 페이지' },
      { src: UniRankerMain2, alt: 'UniRanker 메인 페이지 2' },
      { src: UniRankerDetail1, alt: 'UniRanker 대학 상세 페이지 1' },
      { src: UniRankerDetail2, alt: 'UniRanker 대학 상세 페이지 2' },
      { src: UniRankerDetail3, alt: 'UniRanker 대학 상세 페이지 3' },
      { src: UniRankerDetail4, alt: 'UniRanker 대학 상세 페이지 4' },
      { src: UniRankerDetail5, alt: 'UniRanker 대학 상세 페이지 5' },
    ]
  },
  {
    // Project Page
    slug: "lol-map",
    title: "LoL Map",
    role: "3D Designer / Frontend Developer",
    summary: "Blender로 직접 모델링한 League of Legends 맵을 Three.js로 웹 브라우저에서 인터랙티브하게 감상할 수 있도록 구현한 3D 뷰어 프로젝트입니다.",
    thumbnail: LolThumb,
    link: 'https://portfolio-lol-map.vercel.app/',

    // Detail Page
    overview: "Blender로 제작한 League of Legends 맵을 Three.js를 활용해 웹 브라우저에서 인터랙티브하게 감상할 수 있도록 구현한 3D 뷰어 프로젝트입니다. 로우폴리 스타일로 맵의 주요 오브젝트를 직접 모델링하고 GLB 포맷으로 내보내 웹에 렌더링했습니다.",
    metaRows: [
      { label: "Role", value: "3D Designer / Frontend Developer" },
      { label: "Period", value: "2025" },
      { label: "Tech Stack", value: "Blender · Three.js · Vue · Vite" },
    ],
    features: [
      { title: "로우폴리 3D 모델링", content: "타워, 몬스터, 나무, 지형 등 맵의 주요 요소를 Blender로 직접 제작하고 GLB 포맷으로 최적화하여 내보냈습니다." },
      { title: "인터랙티브 3D 뷰어", content: "Three.js와 OrbitControls를 활용해 마우스로 자유롭게 회전·줌·패닝이 가능한 웹 기반 3D 뷰어를 구현했습니다." },
      { title: "Emission 애니메이션", content: "타워 위 수정 오브젝트에 emissive 머티리얼과 부유 애니메이션을 적용해 맵에 생동감을 더했습니다." },
    ],
    CSData: [
      { challenge: 'GLB 내 특정 오브젝트만 선택적으로 애니메이션을 적용해야 했으나, 노드 이름 구조를 파악하기 어려웠음.', solution: 'model.traverse()로 전체 노드를 순회하며 emissive 머티리얼 여부와 조상 노드 이름을 함께 확인하는 방식으로 대상 메시를 정확히 분류했습니다.' },
      { challenge: 'emissive 오브젝트가 tone mapping의 영향을 받아 의도한 것보다 어둡게 렌더링됨.', solution: 'material.toneMapped = false 설정과 emissiveIntensity 값 조정으로 항상 밝게 빛나도록 처리했습니다.' },
    ],
    imgList: [
      { src: LolImg1, alt: 'LoL Map 정면 뷰' },
      { src: LolImg2, alt: 'LoL Map Teemo 확대 뷰' },
      { src: LolImg3, alt: 'LoL Map Garen 확대 뷰' },
      { src: LolImg4, alt: 'LoL Map Red monster 확대 뷰' },
      { src: LolImg5, alt: 'LoL Map Blue monster 확대 뷰' },
      { src: LolVideo, alt: 'LoL Map 작동 영상' },
    ]
  },
  {
    // Project Page
    slug: 'hank-auction',
    title: 'Auction Alert',
    role: 'Full Stack Developer',
    summary: '행크옥션 경매 물건을 자동으로 크롤링하고, 지역·물건종류·가격·특수조건 필터에 맞는 신규 물건을 매주 카카오톡으로 알려주는 풀스택 자동화 서비스입니다.',
    thumbnail: HankAuctionThumb,

    // Detail Page
    overview: '행크옥션에 등록된 경매 물건을 Playwright로 자동 크롤링하고, 사용자가 웹에서 설정한 필터(지역·물건종류·가격범위·특수조건)를 적용해 조건에 맞는 신규 물건만 매주 월요일 카카오톡으로 발송하는 풀스택 자동화 서비스입니다. GitHub Actions로 스케줄링하며, 유찰 후 재등록된 물건도 입찰일 변경 시 재알림을 보냅니다.',
    metaRows: [
      { label: 'Role', value: 'Full Stack Developer' },
      { label: 'Period', value: '2026' },
      { label: 'Tech Stack', value: 'Next.js · TypeScript · Tailwind CSS · Python · Playwright · Supabase · GitHub Actions · Kakao API · Vercel' },
    ],
    features: [
      { title: '필터 설정 UI', content: 'Next.js + Tailwind CSS로 제작한 웹 필터 페이지에서 지역(17개 시도), 물건종류(주거용/상업용), 가격범위(감정가·최저입찰가), 특수조건(유치권·지분경매 등 10종)을 칩 형태로 직관적으로 설정할 수 있습니다. 설정값은 Supabase에 저장됩니다.' },
      { title: '자동 크롤링 및 스케줄링', content: 'Playwright(headless Chromium)로 행크옥션을 크롤링하여 최신 경매 물건을 수집합니다. GitHub Actions 스케줄러(매주 월요일 오전 9시 KST)가 자동으로 실행하며, 이미 발송한 물건은 Supabase sent_items 테이블로 중복 발송을 방지합니다.' },
      { title: '카카오톡 알림 발송', content: '카카오 나에게 보내기 API를 통해 조건에 맞는 물건 정보(지역·물건종류·감정가·최저입찰가·입찰기일·특수조건 등)를 텍스트 메시지로 발송합니다. 리프레시 토큰으로 액세스 토큰을 매 실행 시 자동 갱신하여 토큰 만료 문제를 해결했습니다.' },
      { title: '유찰 재알림', content: '동일 물건이 유찰된 후 새 입찰일로 재등록되면 다시 알림을 보냅니다. sent_items 테이블의 PK를 (case_number, bid_date) 복합키로 설계하여 날짜가 변경된 물건을 신규로 처리합니다.' },
    ],
    CSData: [
      { challenge: '행크옥션은 JavaScript로 목록을 렌더링하기 때문에 requests + BeautifulSoup으로는 데이터를 가져올 수 없었습니다.', solution: 'Playwright(headless Chromium)로 전환하여 JS 렌더링이 완료된 후 DOM을 파싱했습니다. 정렬 변경 후 page.wait_for_selector()로 렌더링 완료를 확인한 뒤 데이터를 추출합니다.' },
      { challenge: 'GitHub Actions가 Ubuntu 24.04로 업데이트되면서 playwright install-deps 명령이 libasound2 패키지명 변경으로 실패했습니다.', solution: 'install-deps 대신 Ubuntu 24.04에 맞는 패키지명(libasound2t64 등)으로 직접 apt-get install하는 방식으로 우회했습니다.' },
      { challenge: '카카오 액세스 토큰은 6시간 후 만료되어 매주 수동으로 갱신해야 하는 운영 부담이 있었습니다.', solution: '리프레시 토큰(60일 유효, 사용 시 자동 연장)을 GitHub Secrets에 저장하고 크롤러 실행 시마다 자동으로 새 액세스 토큰을 발급받도록 구현했습니다. 매주 실행하면 리프레시 토큰이 계속 연장되어 사실상 영구 운영이 가능합니다.' },
    ],
    imgList: [
      { src: HankAuctionVideo, alt: '행크옥션 경매 알림 작동 영상' },
      { src: HankAuctionDetail1, alt: '행크옥션 경매 알림 필터 페이지' },
      { src: HankAuctionDetail2, alt: '행크옥션 카카오톡 알림 메시지' },
      { src: HankAuctionDetail3, alt: '행크옥션 경매 알림 상세 페이지' },
      { src: HankAuctionDetail4, alt: '행크옥션 경매 알림 썸네일' },
    ]
  },
  {
    // Project Page
    slug: "simple-cms-admin-sysmtem",
    title: "Simple CMS Admin System",
    role: "Full Stack Developer",
    summary: "Vue.js 3와 PHP를 활용해 구축한 RESTful API 기반의 경량화된 CMS 관리자 시스템입니다. 세션 인증, CRUD, 권한 관리 등 핵심 기능을 포함하며 확장성을 고려해 설계했습니다.",
    thumbnail: SimpleCMSThumb,



    // Detail Page
    overview: "Vue.js 3와 PHP를 활용하여 구축한 경량화된 콘텐츠 관리 시스템(CMS) 관리자 대시보드입니다. RESTful API 설계를 통해 프론트엔드와 백엔드를 분리하여 확장성을 고려한 아키텍처를 구현했습니다. 사용자 인증, 게시글 CRUD, 권한 관리 등 관리자 시스템의 핵심 기능을 효율적으로 제공합니다.",
    metaRows: [
      { label: "Role", value: "Full Stack Developer" },
      { label: "Period", value: "2025.01" },
      { label: "Tech Stack", value: "Vue · PHP · MySQL" },
    ],
    features: [
      { title: "세션 기반 인증 시스템 (Authentication)", content: "회원가입, 로그인, 로그아웃 기능을 구현하고 httpOnly 쿠키를 활용한 세션 관리로 보안성을 강화했습니다. 로그인 상태에 따라 GNB(Global Navigation Bar) 및 페이지 접근 권한을 동적으로 제어하여 사용자 경험을 최적화했습니다." },
      { title: "게시글 관리 및 Soft Delete (CRUD)", content: "게시글 작성, 상세 조회, 목록 조회(페이지네이션), 삭제 기능을 구현했습니다. 데이터의 안전한 보존을 위해 DB에서 레코드를 직접 삭제하지 않고 deleted_at 타임스탬프를 활용한 논리적 삭제(Soft Delete)를 적용했습니다." },
      { title: "SPA 아키텍처 및 REST API 연동", content: "Vite와 Vue 3를 사용한 SPA(Single Page Application) 구조로 빠른 페이지 전환과 부드러운 UX를 제공합니다. PHP로 구축한 REST API와 Axios를 통해 비동기 통신하며, CORS 이슈를 해결하여 안정적인 데이터 교환 환경을 구축했습니다." },
    ],
    CSData: [
      { challenge: '프론트엔드와 백엔드 포트 불일치로 인한 CORS 에러 및 세션 쿠키 미전송 문제 발생.', solution: '백엔드 헤더에 Access-Control-Allow-Credentials를 설정하고 프론트엔드 요청에 withCredentials 옵션을 추가했습니다. 이를 통해 크로스 도메인 환경에서도 인증 정보가 안전하게 전달되도록 통신 환경을 구축했습니다.' },
      { challenge: 'PHP의 (int) 캐스팅과 ?? 연산자 우선순위 혼동으로 인한 로직 오류 및 Warning 발생.', solution: "(int)($_GET['key'] ?? 0)와 같이 괄호를 명시적으로 사용하여 연산 순서를 제어했습니다. 데이터가 없는 경우의 기본값 처리와 타입 안정성을 확보하여 잠재적인 버그를 해결했습니다." },
      { challenge: '사용자 입력값을 쿼리에 직접 삽입 시 발생할 수 있는 SQL Injection 보안 취약점.', solution: 'PHP PDO의 Prepared Statement를 도입하여 모든 쿼리에 파라미터 바인딩을 적용했습니다. 외부 입력값을 철저히 분리하여 처리함으로써 데이터베이스 보안을 강화했습니다.' },
    ],
    imgList: [
      { src: SimpleCMSLogin, alt: 'Simple CMS 로그인 페이지' },
      { src: SimpleCMSRegister, alt: 'Simple CMS 회원가입 페이지' },
      { src: SimpleCMSPosts, alt: 'Simple CMS 게시글 목록 페이지' },
      { src: SimpleCMSCreate, alt: 'Simple CMS 게시글 생성 페이지' },
      { src: SimpleCMSAdmin, alt: 'Simple CMS 관리자 페이지' },
      { src: SimpleCMSVideo, alt: 'Simple CMS 작동 영상' },
    ]
  },
];
