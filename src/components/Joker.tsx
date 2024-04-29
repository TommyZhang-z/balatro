import { FC } from "react";
import {
  SortableContainer,
  SortableElement,
  SortableElementProps,
} from "react-sortable-hoc";
import Tilt from "react-parallax-tilt";

export interface JokerProps {
  index: number;
  joker: string;
}

export const Joker: FC<JokerProps> = ({ index, joker }) => {
  return (
    <div draggable>
      <Tilt tiltReverse={true} tiltMaxAngleX={15} tiltMaxAngleY={15}>
        <div className={`card card-delay-${(index % 4) + 1}`}>
          <img src={`/images/jokers/${joker}`} alt={joker} />
        </div>
      </Tilt>
    </div>
  );
};
