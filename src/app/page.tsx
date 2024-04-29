"use client";

import { useRef, useState } from "react";
import Tilt from "react-parallax-tilt";

export default function Home() {
  const [jokers, setJokers] = useState([
    { id: 0, name: "Canio" },
    { id: 1, name: "Chicot" },
    { id: 2, name: "Perkeo" },
    { id: 3, name: "Triboulet" },
    { id: 4, name: "Yorick" },
    { id: 5, name: "Joker" },
    { id: 6, name: "Smeared_Joker" },
    { id: 7, name: "Baron" },
    { id: 8, name: "Baseball_Card" },
    { id: 9, name: "Sixth_Sense" },
    { id: 10, name: "The_Duo" },
    { id: 11, name: "The_Trio" },
    { id: 12, name: "The_Family" },
    { id: 13, name: "The_Order" },
    { id: 14, name: "The_Tribe" },
  ]);

  const dragJoker = useRef<number>(0);
  const draggedOverJoker = useRef<number>(0);

  const handleSort = () => {
    const newJokers = [...jokers];
    const temp = newJokers[dragJoker.current];
    newJokers[dragJoker.current] = newJokers[draggedOverJoker.current];
    newJokers[draggedOverJoker.current] = temp;
    setJokers(newJokers);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-600">
      <section className="bg-[#394b4d] p-8 rounded-2xl border-4 border-[#b1c6c9] shadow-[0_6px_0_#777383] flex flex-col justify-center items-center">
        <div className="wrapper grid grid-cols-5 pb-2 -mx-2 gap-2 rounded-xl bg-[rgb(29,37,39)]">
          {jokers.map((joker, index) => (
            <div draggable
              onDragStart={() => dragJoker.current = index}
              onDragEnter={() => draggedOverJoker.current = index}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={handleSort}
            >
              <Tilt tiltReverse={true} tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <div className={`card card-delay-${(index % 4) + 1}`}>
                  <img src={`/images/jokers/${joker.name}.webp`} alt={joker.name} />
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
