import { useDebounce } from "@/hooks/useDebounce";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "./context";

export default function Search() {
  const { setQuery } = useContext(PageContext);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    setQuery(debouncedSearchTerm);
  }, [debouncedSearchTerm, setQuery]);

  return (
    <div className="mt-2">
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full min-w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
