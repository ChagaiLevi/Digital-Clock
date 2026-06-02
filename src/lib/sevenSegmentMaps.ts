export const SEGMENT_NAMES = ["a", "b", "c", "d", "e", "f", "g"] as const;

export type SegmentName = (typeof SEGMENT_NAMES)[number];

export const DIGIT_SEGMENTS: Record<number, SegmentName[]> = {
  0: ["a", "b", "c", "d", "e", "f"],
  1: ["b", "c"],
  2: ["a", "b", "g", "e", "d"],
  3: ["a", "b", "g", "c", "d"],
  4: ["b", "g", "f", "c"],
  5: ["a", "f", "g", "c", "d"],
  6: ["a", "f", "e", "d", "c", "g"],
  7: ["a", "b", "c"],
  8: ["a", "f", "b", "g", "e", "c", "d"],
  9: ["g", "f", "a", "b", "c", "d"],
};

export const LETTER_SEGMENTS: Partial<Record<string, SegmentName[]>> = {
  A: ["a", "g", "f", "b", "e", "c"],
  B: ["g", "f", "e", "d", "c", "b", "a"],
  C: ["a", "d", "e", "f"],
  D: ["f", "a", "b", "e", "c", "d"],
  E: ["a", "g", "d", "f", "e"],
  F: ["a", "g", "f", "e"],
  G: ["a", "d", "g", "f", "b", "c"],
  H: ["g", "f", "b", "e", "c"],
  I: ["a", "d", "b", "c"],
  J: ["d", "c", "b"],
  L: ["d", "e", "f"],
  M: ["a", "f", "e", "b", "c"],
  N: ["a", "b", "c", "f", "e"],
  O: ["a", "d", "f", "b", "e", "c"],
  P: ["a", "g", "f", "b", "e"],
  R: ["a", "b", "e", "f", "g"],
  S: ["a", "g", "d", "f", "c"],
  T: ["a", "b", "c"],
  U: ["d", "f", "b", "e", "c"],
  V: ["d", "e", "c"],
  W: ["d", "e", "c", "f", "b"],
  Y: ["f", "b", "c", "g", "d"],
};
