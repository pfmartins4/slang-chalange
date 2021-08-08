export const spellingAnswerRequest = ({ letters, id }) => {
  const lettersToSend = letters.map(({ letter }) => letter);
  return { id, answer: lettersToSend.join("") };
};
