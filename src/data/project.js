import exampleThumb from "@/assets/images/example.jpg";

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
    slug: "uniranker",
    title: "UniRanker",
    role: "Frontend Developer",
    summary: "A university ranking platform utilizing public data to offer comprehensive insights. Features an intuitive interface for easy access to university metrics and comparisons.",
    thumbnail: exampleThumb,



    // Detail Page
    overview: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    metaRows: [
      { label: "Role", value: "Frontend Developer" },
      { label: "Period", value: "2025" },
      { label: "Tech Stack", value: "Vue · NestJS · MySQL · AWS" },
    ],
    features: [
      { title: "List Title", content: "This is a Paragraph. Click on on the text box to editing the content." },
      { title: "List Title", content: "This is a Paragraph. Click on on the text box to editing the content." },
      { title: "List Title", content: "This is a Paragraph. Click on on the text box to editing the content." },
    ],
    CSData: [
      { challenge: 'This is a Paragraph. Click on on the text', solution: 'This is a Paragraph. Click on on the text box to editing the content.This is a Paragraph. Click on on the text box to editing the content.' },
      { challenge: 'This is a Paragraph. Click on on the text', solution: 'This is a Paragraph. Click on on the text box to editing the content.This is a Paragraph. Click on on the text box to editing the content.' },
      { challenge: 'This is a Paragraph. Click on on the text', solution: 'This is a Paragraph. Click on on the text box to editing the content.This is a Paragraph. Click on on the text box to editing the content.' },
    ],
    imgList: [
      { src: exampleThumb, alt: '이미지 alt' },
      { src: exampleThumb, alt: '이미지 alt' },
      { src: exampleThumb, alt: '이미지 alt' },
      { src: exampleThumb, alt: '이미지 alt' },
      { src: exampleThumb, alt: '이미지 alt' },
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
