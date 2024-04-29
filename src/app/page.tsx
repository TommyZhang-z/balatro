"use client";

import { Joker } from "@/components/Joker";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";

export default function Home() {
  const [jokers, setJokers] = useState([
    { id: 1, name: "Canio" },
    { id: 2, name: "Chicot" },
    { id: 3, name: "Perkeo" },
    { id: 4, name: "Triboulet" },
    { id: 5, name: "Yorick" },
    { id: 6, name: "Joker" },
    { id: 7, name: "Smeared_Joker" },
    { id: 8, name: "Baron" },
    { id: 9, name: "Baseball_Card" },
    { id: 10, name: "Sixth_Sense" },
    { id: 11, name: "The_Duo" },
    { id: 12, name: "The_Trio" },
    { id: 13, name: "The_Family" },
    { id: 14, name: "The_Order" },
    { id: 15, name: "The_Tribe" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setJokers((jokers) => {
        const oldIndex = jokers.findIndex((j) => j.id === active.id);
        const newIndex = jokers.findIndex((j) => j.id === over.id);
        return arrayMove(jokers, oldIndex, newIndex);
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-600">
      <section className="bg-[#394b4d] p-8 rounded-2xl border-4 border-[#b1c6c9] shadow-[0_6px_0_#777383] flex flex-col justify-center items-center">
        <div className="wrapper grid grid-cols-5 pb-2 -mx-2 gap-2 rounded-xl bg-[rgb(29,37,39)]">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={jokers.map((joker) => joker.id)}
              strategy={rectSortingStrategy}
            >
              {jokers.map((joker) => (
                <Joker key={joker.id} {...joker} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </section>
    </main>
  );
}
