import { PaginatedResponse } from "@/types/paginatedResponse";
import { Dispatch, SetStateAction } from "react";

export default function Pagination({
  data,
  onButtonClick,
}: {
  data?: PaginatedResponse<any>;
  onButtonClick?: (url: string) => any;
}) {
  const normalClassName =
    "relative mt-10 sm:mt-0 items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex disabled:pointer-events-none disabled:text-gray-500 disabled:bg-gray-200 disabled:text-medium";

  const activeClassName =
    "z-10 bg-indigo-600 hover:bg-indigo-700 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  if (!data) {
    return <div />;
  }

  const onClick = (url: string) => {
    onButtonClick && onButtonClick(url);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
      <div className="block sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{data.from}</span> to{" "}
            <span className="font-medium">{data.to}</span> of{" "}
            <span className="font-medium">{data.total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {data.links.map((item, index) => (
              <button
                aria-current="page"
                key={index}
                onClick={() => onClick(item.url ?? "")}
                className={`
                  ${item.active ? activeClassName : ""} ${normalClassName} 
                  ${index === 0 && "rounded-l-md text-gray-500 font-normal"}
                  ${
                    index === data.links.length - 1 &&
                    "rounded-r-md text-gray-500 font-normal"
                  }
                `}
                disabled={
                  (index === 0 && !data.prev_page_url) ||
                  (index === data.links.length - 1 && !data.next_page_url)
                }
              >
                {index === 0
                  ? "Previous"
                  : data.links.length - 1 === index
                  ? "Next"
                  : item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
