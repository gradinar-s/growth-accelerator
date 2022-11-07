export const config = {
  startPrize: 500,
  items: [
    {
      id: 0,
      question: "In the UK, the abbreviation NHS stands for National what Service?",
      answerOptions: [
        { text: "Humanity", id: 0 },
        { text: "Health", id: 1 },
        { text: "Honour", id: 2 },
        { text: "Household", id: 3 },
        { text: "Healthcare", id: 4 },
        { text: "Hurrible", id: 6 },
      ],
    },
    {
      id: 1,
      question: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
      answerOptions: [
        { text: "Pocahontas", id: 0 },
        { text: "Sleeping Beauty", id: 1 },
        { text: "Cinderella", id: 2 },
        { text: "Elsa", id: 3 },
      ],
    },
    {
      id: 2,
      question:
        "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
      answerOptions: [
        { text: "Hangar", id: 0 },
        { text: "Terminal", id: 1 },
        { text: "Concourse", id: 2 },
        { text: "Carousel", id: 3 },
      ],
    },
  ],
};

export const rightAnswers = {
  0: 1,
  1: 2,
  2: 0,
};
