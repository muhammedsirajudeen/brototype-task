import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import url from "../../helper/backendUrl";
import { toast, ToastContainer } from "react-toastify";
// import { useAppSelector } from "../../store/hooks";
interface userProps {
  email: string;
  password: string;
  profileImage: string;
  _id: string;
  address?: string;
  phone?: string;
  authorization?: string;
}

export default function Dashboard(): ReactElement {
  const data = useLoaderData() as userProps;
  const navigate = useNavigate();
  const [deletestate, setDeletestate] = useState<boolean>(false);
  const [deleteEmail, setDeleteEmail] = useState<string>("");
  // const [editstate,setEditstate]
  const [users, setUsers] = useState<Array<userProps>>();
  useEffect(() => {
    if (data.authorization !== "admin") {
      navigate("/");
    }
  }, [data.authorization, navigate]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = (
        await axios.get(url + "/admin/users", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
      ).data;
      setUsers(users.users);
    };
    fetchUsers();
  }, []);
  const deleteHandler = (email: string) => {
    setDeleteEmail(email);
    setDeletestate(true);
  };
  const deleteByEmail = async (email: string) => {
    console.log(email);
    const response = (
      await axios.delete(`${url}/admin/user/${email}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
    ).data;
    console.log(response);
    if (response.message === "success") {
      toast("deleted succcesfully");
      setTimeout(() => window.location.reload(), 1000);
    } else {
      toast(response.message);
    }
  };
  return (
    <>
      {deletestate && (
        <dialog
          className="h-96 flex items-center justify-start flex-col w-96 shadow-2xl mt-20 rounded-sm"
          open={deletestate}
        >
          <button
            className="text-xs font-bold mt-10"
            onClick={() => setDeletestate(false)}
          >
            x
          </button>
          <p className="text-xs mt-6">Do you wanna delete </p>
          <div className="font-bold text-xs mt-10">{deleteEmail}</div>
          <button
            className="bg-red-700 text-white rounded-sm p-2 mt-10"
            onClick={() => deleteByEmail(deleteEmail)}
          >
            <img src="delete.png" className="h-6 w-6" />
          </button>
        </dialog>
      )}
      {
        !deletestate &&
        <div className="flex flex-col items-center justify-center">
        <p className="font-light text-3xl mt-10">Admin Dashboard</p>
        {users?.map((user) => {
          return (
            <div
              key={user._id}
              className="shadow-2xl flex flex-col items-start justify-center mt-10 w-96 h-auto p-10"
            >
              <div className="flex justify-start items-center">
                <img
                  src={user.profileImage ?? "user.png"}
                  className="w-12 h-12 rounded-full"
                />
                <p className="font-bold text-xs w-3/4 ml-5">{user.email}</p>
              </div>
              <div className="flex mt-10 items-center w-full justify-between">
                <button
                  className="bg-red-700 text-white rounded-sm p-2"
                  onClick={() => deleteHandler(user.email)}
                >
                  <img src="delete.png" className="h-6 w-6" />
                </button>
                <button className="bg-black text-white rounded-sm p-2">
                  <img src="edit.png" className="h-6 w-6" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      }

      <ToastContainer />
    </>
  );
}
