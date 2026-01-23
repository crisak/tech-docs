"use client";
import { restApi } from "@/utils/rest-api";
import { useRestContext } from "./RestProvider";
import { useState } from "react";

const tags = [...new Set(restApi.flatMap(({ tags }) => tags))];

export function Filters() {
  const { filters, setFilters } = useRestContext();
  const [localFilter, setLocalFilter] = useState(filters);

  const handlerApplyFilter = () => {
    setFilters(localFilter);
  };

  return (
    <div className="mb-5">
      <div className="flex gap-x-4">
        <input
          type="search"
          name="front"
          placeholder="Search front by any word"
          aria-label="Search"
          onChange={(e) =>
            setLocalFilter({ ...localFilter, front: e.target.value })
          }
          value={localFilter.front}
        />
        <input
          type="search"
          name="back"
          placeholder="Search back by any word"
          aria-label="Search"
          onChange={(e) =>
            setLocalFilter({ ...localFilter, back: e.target.value })
          }
          value={localFilter.back}
        />
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {tags.map((tag) => (
          <div key={tag} className="flex items-center">
            <input
              type="checkbox"
              id={tag}
              name={tag}
              onChange={(e) =>
                setLocalFilter({
                  ...localFilter,
                  tags: e.target.checked
                    ? [...localFilter.tags, tag]
                    : localFilter.tags.filter((t) => t !== tag),
                })
              }
              checked={localFilter.tags.includes(tag)}
            />
            <label htmlFor={tag}>{tag}</label>
          </div>
        ))}
      </div>

      <div className="mt-2">
        <button onClick={handlerApplyFilter}>Apply filters</button>
      </div>
    </div>
  );
}
