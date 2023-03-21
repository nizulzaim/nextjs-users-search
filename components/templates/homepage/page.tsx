import MasterHeader from "@/components/common/master-header";
import useFetchUsers from "@/hooks/useFetchUsers";
import { ChangeEvent, useState } from "react";
import { PageContext } from "./context";
import Search from "./search.component";
import TableView from "./table.component";

export default function View() {
  const [query, setQuery] = useState("");
  const { data, refetch } = useFetchUsers({ query });

  return (
    <PageContext.Provider value={{ data, refetch, setQuery }}>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:justify-between">
            <MasterHeader
              title="Manage Users"
              description="Show users with their email and able to search using search function"
            />
            <Search />
          </div>
          <TableView />
        </div>
      </div>
    </PageContext.Provider>
  );
}
