import { useCallback, useRef, useState } from "react";
import { Letter, Letters } from "./styles";
/**
 *  inspired on  https://github.com/asatraitis/react-hooks-dragndrop/blob/master/src/components/DragNDrop.js
 */
export const Spelling = ({ letters, setLetters }) => {
  const [isDragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragItemNode = useRef();

  const handleDragStart = useCallback((event, index) => {
    dragItemNode.current = event.target;
    dragItemNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = index;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  }, []);
  const handleDragEnter = (event, index) => {
    if (dragItemNode.current !== event.target) {
      let newList = JSON.parse(JSON.stringify(letters));
      newList.splice(index, 0, newList.splice(dragItem.current, 1)[0]);
      dragItem.current = index;
      setLetters(newList);
    }
  };
  const handleDragEnd = useCallback(() => {
    dragItem.current = null;
    dragItemNode.current.removeEventListener("dragend", handleDragEnd);
    dragItemNode.current = null;

    setDragging(false);
  }, []);

  return (
    <Letters>
      {letters.map(({ letter, initialIndex }, index) => (
        <Letter
          key={initialIndex}
          draggable
          onDragStart={
            !isDragging ? (event) => handleDragStart(event, index) : null
          }
          onDragEnter={
            isDragging ? (event) => handleDragEnter(event, index) : null
          }
          isDragging={isDragging && index === dragItem.current}>
          {letter}
        </Letter>
      ))}
    </Letters>
  );
};
