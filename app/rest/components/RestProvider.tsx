"use client";

import { AnkiCard } from "@/types/AnkiCard";
import { createContext, useContext, useState } from "react";

export type Filters = {
  front: string;
  back: string;
  tags: string[];
};

export type RestContextType = {
  setData: React.Dispatch<React.SetStateAction<AnkiCard[]>>;
  data: AnkiCard[];
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  filters: Filters;
};

const RestContext = createContext<RestContextType | null>(null);

export function RestProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<AnkiCard[]>([]);
  const [filters, setFilters] = useState({
    front: "",
    back: "",
    tags: [] as string[],
  });

  return (
    <RestContext.Provider value={{ data, setData, filters, setFilters }}>
      {children}
    </RestContext.Provider>
  );
}

export const useRestContext = () => {
  const context = useContext(RestContext);

  if (!context) {
    throw new Error("useRestContext must be used within a RestProvider");
  }
  return context;
};
