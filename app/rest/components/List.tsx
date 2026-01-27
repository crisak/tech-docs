"use client";

import { AnkiCard } from "@/types/AnkiCard";
import { useMemo, useState } from "react";
import { useRestContext } from "./RestProvider";

type ListProps = {
  list: AnkiCard[];
};

const cls = (str?: string | null) => (str || "").trim().toLowerCase();

export function List({ list }: ListProps) {
  const [selectedCard, setSelectedCard] = useState<AnkiCard | null>();
  const { filters } = useRestContext();

  const cards = useMemo(() => {
    const inputFront = cls(filters.front);
    const inputBack = cls(filters.back);
    const inputTags = [...new Set(filters.tags.map((a) => a.toLowerCase()))];

    if (!inputFront && !inputBack && !inputTags.length) {
      return list;
    }

    return list.filter((ele) => {
      if (inputFront && cls(ele.front).includes(inputFront)) {
        return true;
      }

      if (inputBack && cls(ele.back).includes(inputBack)) {
        return true;
      }

      if (inputTags.length > 0) {
        return ele.tags.find((tag) => inputTags.includes(tag));
      }

      return true;
    });
  }, [filters, list]);

  return (
    <>
      <div className="flex flex-col gap-2 mt-5">
        {cards.map((card, index) => (
          <article key={index} className="seo-list">
            <header>{card.front}</header>
            <p>{card.tags.join(", ")}</p>
            <p>
              <button
                className=""
                onClick={() => {
                  setSelectedCard(card);
                }}
              >
                View
              </button>
            </p>
          </article>
        ))}
      </div>

      <dialog>
        <article>
          <header>
            <button aria-label="Close" rel="prev"></button>
            <p>
              <strong>{selectedCard?.front}</strong>
            </p>
          </header>
          <p>{selectedCard?.back}</p>
          <ul>
            {selectedCard?.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </article>
      </dialog>
    </>
  );
}
