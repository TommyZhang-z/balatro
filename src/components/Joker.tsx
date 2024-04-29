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
    <Tilt tiltReverse={true} tiltMaxAngleX={15} tiltMaxAngleY={15}>
      <div className={`card card-delay-${(index % 4) + 1}`}>
        <img src={`/images/jokers/${joker}`} alt={joker} />
      </div>
    </Tilt>
  );
};

interface SortableJokerProps extends SortableElementProps {
  joker: string;
  index: number;
}

export const SortableJoker = SortableElement<SortableJokerProps>(
  ({ joker, index }) => <Joker index={index} joker={joker} />
);

interface SortableJokerGridProps {
  jokers: string[];
}

export const SortableJokerGrid = SortableContainer<SortableJokerGridProps>(
  ({ jokers }) => {
    return (
      <div className="wrapper grid grid-cols-5 pb-2 -mx-2 gap-2 rounded-xl bg-[rgb(29,37,39)]">
        {jokers.map((joker, index) => (
          <SortableJoker key={`joker-${index}`} index={index} joker={joker} />
        ))}
      </div>
    );
  }
);
