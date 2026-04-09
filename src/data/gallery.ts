export interface GalleryImage {
  id: number;
  src: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1,  src: '/gallery/0ef6e9bc-d2bc-4562-b4e9-90e7ec9475a7.jpg' },
  { id: 2,  src: '/gallery/44490c2d-d064-4883-b775-81c541ec70eb.jpg' },
  { id: 3,  src: '/gallery/7004e8ab-2eb9-44eb-a35e-e0abd682dd3b.jpg' },
  { id: 4,  src: '/gallery/9673482a-bb46-4eb6-a9a7-c17a16d3a694.jpg' },
  { id: 5,  src: '/gallery/a61f7278-3b9a-4b11-aafc-cf35cfd59a67.jpg' },
  { id: 6,  src: '/gallery/a7fd0dca-b1d8-4373-a4ed-9125b0bacded.jpg' },
  { id: 7,  src: '/gallery/abc0a658-4c11-4974-aa85-22cd63c58b99.jpg' },
  { id: 8,  src: '/gallery/b600b00a-bd04-4ca6-87bc-d93ebd076a6b.jpg' },
  { id: 9,  src: '/gallery/ca67360b-712b-4a69-a504-a667afb7b144.jpg' },
  { id: 10, src: '/gallery/cacc83ec-6775-47be-bbdc-d3282480f7d4.jpg' },
  { id: 11, src: '/gallery/photo_2026-04-09_20-32-43%20(2).jpg' },
  { id: 12, src: '/gallery/photo_2026-04-09_20-32-43%20(3).jpg' },
  { id: 13, src: '/gallery/photo_2026-04-09_20-32-43%20(4).jpg' },
  { id: 14, src: '/gallery/photo_2026-04-09_20-32-43%20(5).jpg' },
  { id: 15, src: '/gallery/photo_2026-04-09_20-32-43.jpg' },
  { id: 16, src: '/gallery/photo_2026-04-09_20-32-44%20(2).jpg' },
  { id: 17, src: '/gallery/photo_2026-04-09_20-32-44%20(3).jpg' },
  { id: 18, src: '/gallery/photo_2026-04-09_20-32-44.jpg' },
  { id: 19, src: '/gallery/photo_2026-04-09_20-33-03.jpg' },
];

// Collage rotation & vertical offsets — deterministic so layout is consistent
export const collageStyles: { rotate: number; translateY: number }[] = [
  { rotate: -3.0, translateY:  2 },
  { rotate:  2.5, translateY: -3 },
  { rotate: -1.5, translateY:  4 },
  { rotate:  3.2, translateY: -2 },
  { rotate: -2.8, translateY:  3 },
  { rotate:  1.8, translateY: -4 },
  { rotate: -3.5, translateY:  2 },
  { rotate:  2.2, translateY: -3 },
  { rotate: -1.2, translateY:  5 },
  { rotate:  3.8, translateY: -2 },
  { rotate: -2.5, translateY:  3 },
  { rotate:  1.5, translateY: -4 },
  { rotate: -3.2, translateY:  2 },
  { rotate:  2.8, translateY: -3 },
  { rotate: -1.8, translateY:  4 },
  { rotate:  3.5, translateY: -2 },
  { rotate: -2.2, translateY:  3 },
  { rotate:  1.2, translateY: -4 },
  { rotate: -3.8, translateY:  2 },
];
