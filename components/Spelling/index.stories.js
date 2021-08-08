import { useEffect, useState } from "react";
import { Spelling } from ".";

export default {
  compnent: Spelling,
  title: "components/Spelling",
};

const Template = (args) => {
  const [letters, setLetters] = useState([]);
  useEffect(() => {
    setLetters(
      args.letters.map((letter, initialIndex) => ({ letter, initialIndex }))
    );
  }, []);
  return <Spelling {...args} letters={letters} setLetters={setLetters} />;
};

export const Default = Template.bind({});
Default.args = {
  letters: ["b", "a", "t", "a", "t", "a"],
};
