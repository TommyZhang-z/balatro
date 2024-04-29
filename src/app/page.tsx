"use client";
import { Joker } from "@/components/Joker";

export default function Home() {
  const jokers = [
    "Canio.webp",
    "Chicot.webp",
    "Perkeo.webp",
    "Triboulet.webp",
    "Yorick.webp",
    "Joker.webp",
    "Smeared_Joker.webp",
    "Baron.webp",
    "Baseball_Card.webp",
    "Sixth_Sense.webp",
    "The_Duo.webp",
    "The_Family.webp",
    "The_Order.webp",
    "The_Tribe.webp",
    "The_Trio.webp",
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-600">
      <section className="bg-[#394b4d] p-8 rounded-2xl border-4 border-[#b1c6c9] shadow-[0_6px_0_#777383] flex flex-col justify-center items-center">
        <div className="wrapper grid grid-cols-5 pb-2 -mx-2 gap-2 rounded-xl bg-[rgb(29,37,39)]">
          {jokers.map((joker, index) => (
            <Joker key={index} index={index} joker={joker} />
          ))}
        </div>
      </section>
    </main>
  );
}
