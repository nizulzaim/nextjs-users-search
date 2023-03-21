import { useContext } from "react";
import { PageContext } from "./context";
import Image from "next/image";
import Pagination from "@/components/common/pagination";

export default function TableView() {
  const { data, refetch } = useContext(PageContext);
  return (
    <div className="my-8 flow-root px-4">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 shadow border rounded-lg bg-white">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Verified
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data?.data.length == 0 && (
                <td
                  className="text-center text-gray-600 py-4 pl-4 text-sm"
                  colSpan={100}
                >
                  No Data Found
                </td>
              )}
              {data?.data.map((user) => (
                <tr key={user.email}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          width={150}
                          height={150}
                          className="h-10 w-10 rounded-full"
                          src={`https://i.pravatar.cc/150?u=${user.email}`}
                          alt="Avatar"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {user.email_verified_at ? (
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                        Not Verified
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          data={data}
          onButtonClick={(url: string) => refetch && refetch(url)}
        />
      </div>
    </div>
  );
}
