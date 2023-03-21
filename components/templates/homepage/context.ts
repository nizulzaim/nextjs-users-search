import { PaginatedResponse } from "@/types/paginatedResponse";
import { User } from "@/types/user";
import { createContext, Dispatch, SetStateAction } from "react";

type ContextInput = {
  data?: PaginatedResponse<User>,
  refetch?: (url: string) => void
  setQuery: Dispatch<SetStateAction<string>>
}
export const PageContext = createContext<ContextInput>({ data: undefined, refetch: () => { }, setQuery: () => { } });