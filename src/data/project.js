import exampleThumb from "@/assets/images/example.jpg";


export const projects = [
  {
    // Project Page
    slug: "uniranker",
    title: "UniRanker",
    role: "Frontend Developer",
    summary: "University ranking platform based on public data",
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
];
