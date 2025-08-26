export type CatPlacement = {
  top: number;
  left: number;
  width: number;
  rotate?: number;
  z?: number;
};

export const CAT_LAYOUT: CatPlacement[] = [
  { top: 77, left: 48, width: 12, z: 2 },
  { top: 79, left: 5, width: 12 },
  { top: 37, left: 30, width: 9, rotate: 10 },
  { top: 38, left: 62, width: 6, z: 3 },
  { top: 71, left: 55, width: 7 },
  { top: 12, left: 15, width: 10, rotate: 35 },
  { top: 99, left: 80, width: 16 },
  { top: 74, left: 33, width: 9 },
  { top: 24, left: 59, width: 7, rotate: -12, z: 4 },
  { top: 95, left: 6, width: 45, rotate: 30 },
];
