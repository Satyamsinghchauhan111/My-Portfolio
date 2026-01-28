import { users } from "@/utils";
import { useState } from "react";

const Pagination = () => {
  const [allUsers, setAllUsers] = useState(users);
  const [userPerPage, setUserPerPage] = useState(6);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(userPerPage);

  const handlePageindex = (index) => {
    setStartIndex(index * userPerPage);
    setEndIndex(index * userPerPage + userPerPage);
  };

  const handleNext = () => {
    setStartIndex(startIndex + userPerPage);
    setEndIndex(endIndex + userPerPage);
  };

  const handlePre = () => {
    setStartIndex(startIndex - userPerPage);
    setEndIndex(endIndex - userPerPage);
  };

  return (
    <div className="p-6">
      <table className="border-2">
        <thead className="border">
          <tr>
            <td>Name</td>
            <td>Role</td>
            <td>Email</td>
            <td>Activeness</td>
          </tr>
        </thead>
        <tbody className="border">
          {allUsers.slice(startIndex, endIndex).map((user, index) => (
            <tr className="border p-2" key={user.id}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border">{user.role}</td>
              <td>{user.email}</td>
              <td>{user.active ? "active" : "not Active"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          className=" p-2 px-4 border bg-stone-500"
          onClick={() => handlePre()}
          disabled={startIndex === 0}
        >
          pre
        </button>

        {Array.from({ length: allUsers.length / 5 }).map((_, index) => (
          <button
            onClick={() => handlePageindex(index)}
            key={index}
            className=" p-2 px-4 border bg-stone-500"
          >
            {index}
          </button>
        ))}
        <button
          className=" p-2 px-4 border bg-stone-500"
          onClick={() => handleNext()}
          disabled={endIndex >= allUsers.length}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
