import { FC } from "react";
import Tilt from "react-parallax-tilt";
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export interface JokerProps {
  index: number;
  joker: string;
}

export const Joker: FC<JokerProps> = ({ index, joker }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: index });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Tilt tiltReverse={true} tiltMaxAngleX={15} tiltMaxAngleY={15}>
        <div className={`card card-delay-${(index % 4) + 1}`}>
          <img src={`/images/jokers/${joker}.webp`} alt={joker} />
        </div>
      </Tilt>
    </div>
  );
};
