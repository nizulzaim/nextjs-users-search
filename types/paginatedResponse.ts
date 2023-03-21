export type PaginatedResponse<T extends object> = {
  data: T[];
  from: number;
  to: number;
  total: number;
  current_page: number;
  first_page_url: string | null;
  last_page_url: string | null;
  prev_page_url: string | null;
  next_page_url: string | null;
  path: string;
  per_page: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[]
}