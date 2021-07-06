export type Medium = {
  id: number;
  name: string;
  cover: string;
  languages: string[];
  status: MediumStatus;
  errorMessage?: string;
  createdAt: Date;
  updatedAt: Date;
};

export enum MediumStatus {
  Ready,
  Error,
  Transcribing,
}
