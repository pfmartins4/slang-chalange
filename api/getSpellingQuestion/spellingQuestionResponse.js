export const spellingQuestionResponse = ({ data, status }) => {
  const { "audio-url": audioUrl, id, "letter-pool": letters } = data;
  return {
    data: {
      audioUrl,
      id,
      letters: letters.map((letter, initialIndex) => ({
        letter,
        initialIndex,
      })),
    },
    status,
  };
};
