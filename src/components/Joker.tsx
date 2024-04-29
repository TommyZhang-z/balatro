import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FC } from "react";
import Tilt from "react-parallax-tilt";

export interface JokerProps {
  id: number;
  name: string;
}

export const Joker: FC<JokerProps> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Tilt
        tiltReverse={true}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
      >
        <div className={`card card-delay-${(props.id % 4) + 1}`}>
          <img src={`/images/jokers/${props.name}.webp`} alt={props.name} />
        </div>
      </Tilt>
    </div>
  );
};
