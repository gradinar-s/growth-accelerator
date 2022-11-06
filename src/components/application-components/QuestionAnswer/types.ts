export type answerOptionsT = {
  id: number;
  text: string;
};

export type QuestionAnswerPropsT = {
  question: string;
  answers: Array<answerOptionsT>;
  handleAnswer: (id: number) => void;
};
