import { PaginatedResponse } from "@/types/paginatedResponse";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

export default function useFetchUsers({ query }: { query?: string } = {}) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PaginatedResponse<User>>();
  const [url, setUrl] = useState(`${apiUrl}/api/users`)

  useEffect(() => {
    const fetchData = async () => {
      if (!apiUrl) return
      setLoading(true);
      var _url = new URL(url)
      if (query) {
        _url.searchParams.append('query', query)
      }
      const response = await fetch(_url);

      const data = await response.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [query, url, apiUrl]);

  const refetch = (newUrl: string) => {
    setUrl(newUrl)
  }

  return { loading, data, refetch };
}