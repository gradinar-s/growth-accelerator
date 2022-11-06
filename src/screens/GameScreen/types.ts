export type answerOptionsType = {
  id: number;
  text: string;
};

export type currentItemType = {
  id: number;
  question: string;
  answerOptions: Array<answerOptionsType>;
};
