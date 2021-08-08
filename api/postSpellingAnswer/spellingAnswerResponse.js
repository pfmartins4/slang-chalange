export const spellingAnswerResponse = ({ data, status }) => {
  let { correct, "correct-answer": correctAnswer } = data;
  correctAnswer = Array.from(correctAnswer).map((letter, initialIndex) => {
    letter, initialIndex;
  });

  return { data: { correct, "correct-answer": correctAnswer }, status };
};
