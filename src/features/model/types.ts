export type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export interface StitchSymbols {
  ko: string;
  en: string;
  ja: string;
  zh: string;
  ru: string;
}

export interface Stitch {
  id: number;
  name: string;
  difficulty: Difficulty;
  description: string;
  usage: string;
  symbols: StitchSymbols;
  relatedTechniqueIds: number[];
}

export interface RelatedStitch {
  id: number;
  name: string;
}

export interface ApiResponse<T> {
  success: boolean;
  status: number;
  message: string;
  data: T;
}
