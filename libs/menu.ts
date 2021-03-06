const NavMenu = [
  {
    id: 0,
    title: '회사소개',
    url: '/about',
    items: [
      { id: 0, subTitle: 'Why The Y', subUrl: '/about' },
      { id: 1, subTitle: '오시는 길', subUrl: '/about/locate' },
    ],
  },
  {
    id: 1,
    title: '교육 프로그램',
    url: '/education',
    items: [
      { id: 0, subTitle: '서비스 커뮤니케이션', subUrl: '/education/service' },
      { id: 1, subTitle: '비즈니스 커뮤니케이션', subUrl: '/education/business' },
      { id: 2, subTitle: '리더의 커뮤니케이션', subUrl: '/education/leader' },
      { id: 3, subTitle: '커뮤니케이션 진단 프로그램', subUrl: '/education/diagnosis' },
      { id: 4, subTitle: '직무역량강화', subUrl: '/education/empowerment' },
      { id: 5, subTitle: '성과관리 커뮤니케이션', subUrl: '/education/extended ' },
      { id: 6, subTitle: '맞춤형 교육', subUrl: '/education/customized' },
    ],
  },
  {
    id: 2,
    title: '온라인 프로그램',
    url: '/online',
  },
  {
    id: 3,
    title: 'The Y 이야기',
    url: '/stories',
  },
  {
    id: 4,
    title: '커뮤니티',
    url: '/notice',
    items: [
      { id: 0, subTitle: '공지사항', subUrl: '/notice' },
      { id: 1, subTitle: '교육문의', subUrl: '/qna' },
    ],
  },
];

export default NavMenu;
