import news1_img1 from '@/assets/images/news/news1_1.webp'
import news2_img1 from '@/assets/images/news/news2_1.webp'
import news3_img1 from '@/assets/images/news/news3_1.webp'
import news3_img2 from '@/assets/images/news/news3_2.webp'
import news3_img3 from '@/assets/images/news/news3_3.webp'
import news3_img4 from '@/assets/images/news/news3_4.webp'
import news3_img5 from '@/assets/images/news/news3_5.webp'
import news5_1 from '@/assets/images/news/news5_1.jpg'
import news4_1 from '@/assets/images/news/news4_1.png'
import news4_2 from '@/assets/images/news/news4_2.png'
import news4_1_1 from '@/assets/images/news/news4_1_1.png'
import news4_1_2 from '@/assets/images/news/news4_1_2.png'
import news6_1 from '@/assets/images/news/news6_1.jpg'
import news7_1 from '@/assets/images/news/news7_1.jpg'
import news7_2 from '@/assets/images/news/news7_2.jpg'
import news7_3 from '@/assets/images/news/news7_3.jpg'
import news7_4 from '@/assets/images/news/news7_4.jpg'
import news8_1 from '@/assets/images/news/news8_1.jpg'
import news9_1 from '@/assets/images/news/news9_1.jpg'
import news10_1 from '@/assets/images/news/news10_1.webp'
import news11_1 from '@/assets/images/news/news11_1.jpg'
import news11_2 from '@/assets/images/news/news11_2.jpg'
import news12_1 from '@/assets/images/news/news12_1.jpg'
import news12_2 from '@/assets/images/news/news12_2.jpg'
import news12_3 from '@/assets/images/news/news12_3.jpg'
import news13_1 from '@/assets/images/news/news13_1.jpg'
import news14_1 from '@/assets/images/news/news14_1.webp'
import news14_2 from '@/assets/images/news/news14_2.webp'
import news15_1 from '@/assets/images/news/news15_1.webp'
import news16_1 from '@/assets/images/news/news16_1.jpg'
import news17_1 from '@/assets/images/news/news17_1.webp'
import news17_1_1 from '@/assets/images/news/news17_1_1.webp'
import news18_1 from '@/assets/images/news/news18_1.webp'
import news18_1_1 from '@/assets/images/news/news18_1_1.webp'
import news19_1 from '@/assets/images/news/news19_1.jpg'
import news20_1 from '@/assets/images/news/news20_1.jpg'
import news21_1 from '@/assets/images/news/news21_1.jpg'
import news21_2 from '@/assets/images/news/news21_2.jpg'
import news22_1 from '@/assets/images/news/news22_1.avif'
import news24_1 from '@/assets/images/news/news24_1.webp'
import news24_2 from '@/assets/images/news/news24_2.webp'
import news26_1 from '@/assets/images/news/news26_1.jpg'
import news27_1 from '@/assets/images/news/news27_1.jpg'
import news27_2 from '@/assets/images/news/news27_2.jpg'
import news28_1 from '@/assets/images/news/news28_1.webp'

export const news = [
  {
    id: 1,
    title: 'post.p1.title',
    paragraphs: 'post.p1.paragraphs',
    date: '2025-08-21',
    image: [news1_img1],
    category: 'fargoNews',
    featured: true,
  },
  {
    id: 2,
    title: 'post.p2.title',
    paragraphs: 'post.p2.paragraphs',
    date: '2025-08-21',
    image: [news2_img1],
    category: 'fargoNews',
    featured: true,
  },
  {
    id: 3,
    title: 'post.p3.title',
    paragraphs: 'post.p3.paragraphs',
    date: '2025-08-21',
    image: [news3_img1, news3_img2, news3_img3, news3_img4, news3_img5],
    category: 'fargoNews',
    featured: true,
  },
  {
    id: 4,
    title: 'post.p4.title',
    paragraphs: 'post.p4.paragraphs',
    date: '2025-08-26',
    image: [news4_1, news4_2],
    category: 'marketUpdates',
    children: [
      {
        id: 1,
        title: 'post.p4.c1.title',
        paragraphs: 'post.p4.c1.paragraphs',
        image: [news4_1_1],
      },
      {
        id: 2,
        title: 'post.p4.c2.title',
        paragraphs: 'post.p4.c2.paragraphs',
        image: [news4_1_2],
      },
    ],
  },
  {
    id: 5,
    title: 'post.p5.title',
    paragraphs: 'post.p5.paragraphs',
    date: '2025-08-26',
    image: [news5_1],
    category: 'marketUpdates',
  },
  {
    id: 6,
    title: 'post.p6.title',
    paragraphs: 'post.p6.paragraphs',
    date: '2025-08-26',
    image: [news6_1],
    category: 'fargoNews',
  },
  {
    id: 7,
    title: 'post.p7.title',
    paragraphs: 'post.p7.paragraphs',
    date: '2025-08-26',
    image: [news7_1, news7_2, news7_3, news7_4],
    category: 'fargoNews',
  },
  {
    id: 8,
    title: 'post.p8.title',
    paragraphs: 'post.p8.paragraphs',
    date: '2025-08-29',
    image: [news8_1],
    category: 'fargoNews',
    featured: true,
    children: [
      {
        id: 1,
        title: 'post.p8.c1.title',
        paragraphs: 'post.p8.c1.paragraphs',
        image: [],
      },
      {
        id: 2,
        title: 'post.p8.c2.title',
        paragraphs: 'post.p8.c2.paragraphs',
        image: [],
      },
      {
        id: 3,
        title: 'post.p8.c3.title',
        paragraphs: 'post.p8.c3.paragraphs',
        image: [],
      },
      {
        id: 4,
        title: 'post.p8.c4.title',
        paragraphs: 'post.p8.c4.paragraphs',
        image: [],
      },
    ],
  },
  {
    id: 9,
    title: 'post.p9.title',
    paragraphs: 'post.p9.paragraphs',
    date: '2025-08-26',
    image: [news9_1],
    category: 'fargoNews',
  },
  {
    id: 10,
    title: 'post.p10.title',
    paragraphs: 'post.p10.paragraphs',
    date: '2025-09-05',
    image: [news10_1],
    category: 'fargoNews',
  },
  {
    id: 11,
    title: 'post.p11.title',
    paragraphs: 'post.p11.paragraphs',
    date: '2025-09-05',
    image: [news11_1, news11_2],
    category: 'fargoNews',
  },
  {
    id: 12,
    title: 'post.p12.title',
    paragraphs: 'post.p12.paragraphs',
    date: '2025-09-12',
    image: [news12_1, news12_2, news12_3],
    category: 'fargoNews',
    children: [
      {
        id: 1,
        title: 'post.p12.c1.title',
        paragraphs: 'post.p12.c1.paragraphs',
        image: [],
      },
      {
        id: 2,
        title: 'post.p12.c2.title',
        paragraphs: 'post.p12.c2.paragraphs',
        image: [],
      },
      {
        id: 3,
        title: 'post.p12.c3.title',
        paragraphs: 'post.p12.c3.paragraphs',
        image: [],
      },
    ],
  },
  {
    id: 13,
    title: 'post.p13.title',
    date: '2025-09-12',
    image: [news13_1],
    category: 'fargoNews',
    children: [
      {
        id: 1,
        title: 'post.p13.c1.title',
        paragraphs: 'post.p13.c1.paragraphs',
        image: [],
      },
      {
        id: 2,
        title: 'post.p13.c2.title',
        paragraphs: 'post.p13.c2.paragraphs',
        image: [],
      },
      {
        id: 3,
        title: 'post.p13.c3.title',
        paragraphs: 'post.p13.c3.paragraphs',
        image: [],
      },
      {
        id: 4,
        title: 'post.p13.c4.title',
        paragraphs: 'post.p13.c4.paragraphs',
        image: [],
      },
      {
        id: 5,
        title: 'post.p13.c5.title',
        paragraphs: 'post.p13.c5.paragraphs',
        image: [],
      },
    ],
  },
  {
    id: 14,
    title: 'post.p14.title',
    paragraphs: 'post.p14.paragraphs',
    date: '2025-09-12',
    image: [news14_1, news14_2],
    category: 'marketUpdates',
  },
  {
    id: 15,
    title: 'post.p15.title',
    paragraphs: 'post.p15.paragraphs',
    date: '2025-09-12',
    image: [news15_1],
    category: 'marketUpdates',
  },
  {
    id: 16,
    title: 'post.p16.title',
    paragraphs: 'post.p16.paragraphs',
    date: '2025-09-12',
    image: [news16_1],
    category: 'fargoNews',
  },
  {
    id: 17,
    title: 'post.p17.title',
    paragraphs: 'post.p17.paragraphs',
    date: '2025-09-12',
    image: [news17_1],
    category: 'marketUpdates',
    children: [
      {
        id: 1,
        title: 'post.p17.c1.title',
        paragraphs: 'post.p17.c1.paragraphs',
        image: [news17_1_1],
      },
      {
        id: 2,
        title: 'post.p17.c2.title',
        paragraphs: 'post.p17.c2.paragraphs',
      },
    ],
  },
  {
    id: 18,
    title: 'post.p18.title',
    paragraphs: 'post.p18.paragraphs',
    date: '2025-09-12',
    image: [news18_1],
    category: 'marketUpdates',
    children: [
      {
        id: 1,
        title: 'post.p18.c1.title',
        paragraphs: 'post.p18.c1.paragraphs',
        image: [news18_1_1],
      },
    ],
  },
  {
    id: 19,
    title: 'post.p19.title',
    paragraphs: 'post.p19.paragraphs',
    date: '2025-09-23',
    image: [news19_1],
    category: 'fargoNews',
    children: [
      {
        id: 1,
        title: 'post.p19.c1.title',
        paragraphs: 'post.p19.c1.paragraphs',
      },
      {
        id: 2,
        title: 'post.p19.c2.title',
        paragraphs: 'post.p19.c2.paragraphs',
      },
      {
        id: 3,
        title: 'post.p19.c3.title',
        paragraphs: 'post.p19.c3.paragraphs',
      },
      {
        id: 4,
        title: 'post.p19.c4.title',
        paragraphs: 'post.p19.c4.paragraphs',
      },
    ],
  },
  {
    id: 20,
    title: 'post.p20.title',
    paragraphs: 'post.p20.paragraphs',
    image: [news20_1],
    date: '2025-09-23',
    category: 'fargoNews',
    children: [
      {
        id: 1,
        title: 'post.p20.c1.title',
        paragraphs: 'post.p20.c1.paragraphs',
      },
      {
        id: 2,
        title: 'post.p20.c2.title',
        paragraphs: 'post.p20.c2.paragraphs',
      },
      {
        id: 3,
        title: 'post.p20.c3.title',
        paragraphs: 'post.p20.c3.paragraphs',
      },
      {
        id: 4,
        title: 'post.p20.c4.title',
        paragraphs: 'post.p20.c4.paragraphs',
      },
    ]
  },
  {
    id: 21,
    title: 'post.p21.title',
    paragraphs: 'post.p21.paragraphs',
    date: '2025-09-23',
    image: [news21_1, news21_2],
    category: 'fargoNews',
  },
  {
    id: 22,
    title: 'post.p22.title',
    paragraphs: 'post.p22.paragraphs',
    date: '2025-09-23',
    image: [news22_1],
    category: 'fargoNews',
  },
  {
    id: 23,
    title: 'post.p23.title',
    paragraphs: 'post.p23.paragraphs',
    date: '2025-09-23',
    category: 'fargoNews',
    children: [
      {
        id: 1,
        title: 'post.p23.c1.title',
        paragraphs: 'post.p23.c1.paragraphs',
      },
      {
        id: 2,
        title: 'post.p23.c2.title',
        paragraphs: 'post.p23.c2.paragraphs',
      },
    ],
  },
  {
    id: 24,
    title: 'post.p24.title',
    paragraphs: 'post.p24.paragraphs',
    date: '2025-09-23',
    image: [news24_1, news24_2],
    category: 'fargoNews',
    children: [
      {
        id: 1,
        title: 'post.p24.c1.title',
        paragraphs: 'post.p24.c1.paragraphs',
      },
    ],
  },
  {
    id: 25,
    title: 'post.p25.title',
    paragraphs: 'post.p25.paragraphs',
    date: '2025-09-23',
    category: 'fargoNews',
  },
  {
    id: 26,
    title: 'post.p26.title',
    paragraphs: 'post.p26.paragraphs',
    date: '2025-09-23',
    image: [news26_1],
    category: 'fargoNews',
  },
  {
    id: 27,
    title: 'post.p27.title',
    paragraphs: 'post.p27.paragraphs',
    date: '2025-09-23',
    image: [news27_1, news27_2],
    category: 'fargoNews',
    children: [
      {
        id: 1,
        title: 'post.p27.c1.title',
        paragraphs: 'post.p27.c1.paragraphs',
      },
      {
        id: 2,
        title: 'post.p27.c2.title',
        paragraphs: 'post.p27.c2.paragraphs',
      },
      {
        id: 3,
        title: 'post.p27.c3.title',
        paragraphs: 'post.p27.c3.paragraphs',
      },
    ],
  },
  {
    id: 28,
    title: 'post.p28.title',
    paragraphs: 'post.p28.paragraphs',
    date: '2025-09-25',
    image: [news28_1],
    category: 'fargoNews',
    children: [
      {
        id: 1,
        title: 'post.p28.c1.title',
        paragraphs: 'post.p28.c1.paragraphs',
      },
      {
        id: 2,
        title: 'post.p28.c2.title',
        paragraphs: 'post.p28.c2.paragraphs',
      },
      {
        id: 3,
        title: 'post.p28.c3.title',
        paragraphs: 'post.p28.c3.paragraphs',
      },
    ],
  },
]
