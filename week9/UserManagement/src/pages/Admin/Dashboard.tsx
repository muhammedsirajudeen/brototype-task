import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import url from "../../helper/backendUrl";
import { toast, ToastContainer } from "react-toastify";
import EditUser from "../../components/EditUser";
import CreateUser from "../../components/CreateUser";
import { useForm } from "react-hook-form";
import Select, { SingleValue } from "react-select";

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

interface searchProps {
  search: string;
}
interface optionProps {
  value: string;
  label: string;
}
const options: Array<optionProps> = [
  { value: "email", label: "email" },
  { value: "phone", label: "phone" },
  { value: "address", label: "address" },
];

export default function Dashboard(): ReactElement {
  const specialCharacterRegex = /[a-zA-Z0-9\s]/;

  const data = useLoaderData() as userProps;
  const navigate = useNavigate();
  const [deletestate, setDeletestate] = useState<boolean>(false);
  const [deleteEmail, setDeleteEmail] = useState<string>("");
  const [editstate, setEditstate] = useState<boolean>(false);
  const [createstate, setCreatestate] = useState<boolean>(false);
  const [searchstate, setSearchstate] = useState<string>("");
  const [users, setUsers] = useState<Array<userProps>>();
  const [user, setUser] = useState<userProps>();
  useEffect(() => {
    if (!data) {
      navigate("/");
    } else if (data.authorization !== "admin") {
      navigate("/");
    }
  }, [data, navigate]);
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<searchProps>();

  const onSubmit = (data:searchProps) => {
    // console.log(data.search)
    
    if (!searchstate) {
      toast("please select a search term");
      return
    } else {
      alert(data.search);
    }
  };
  const deleteHandler = (email: string) => {
    setDeleteEmail(email);
    setDeletestate(true);
  };
  const editHandler = (user: userProps) => {
    setEditstate(true);
    setUser(user);
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
  const createHandler = () => {
    //open the create dialog here
    setCreatestate(true);
  };

  const searchstateHandler = (value: SingleValue<optionProps>) => {
    setSearchstate(value?.value ?? "");
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
      {/* this is for editing the user data */}
      {editstate && (
        <EditUser
          user={user}
          setEditstate={setEditstate}
          editstate={editstate}
        />
      )}
      {createstate && (
        <CreateUser createstate={createstate} setCreatestate={setCreatestate} />
      )}
      {!deletestate && !editstate && !createstate && (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-evenly mt-10 w-full">
            <p className="font-light text-3xl  flex items-center">
              Admin Dashboard
            </p>
            <div className="flex items-center justify-center border border-black">
              <form
                className="flex items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  className="h-8 w-50 placeholder:text-xs"
                  {...register("search", {
                    required: "Search term is required",
                    minLength: {
                      value: 3,
                      message: "Search term must be at least 10 characters",
                    },

                    pattern: {
                      value: specialCharacterRegex,
                      message: "Invalid characters",
                    },
                  })}
                  placeholder="enter the search term"
                />
                <Select onChange={searchstateHandler} options={options} />
                <button
                  type="submit"
                  className="flex items-center justify-center"
                >
                  <img src="search.png" className="h-6 w-6" />
                </button>
                {errors.search && <p className="text-xs text-red-600" >{errors.search.message}</p>}

              </form>
            </div>
            <img src="create.png" className="h-4 w-4" onClick={createHandler} />
          </div>
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
                  <button
                    className="bg-black text-white rounded-sm p-2"
                    onClick={() => editHandler(user)}
                  >
                    <img src="edit.png" className="h-6 w-6" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <ToastContainer />
    </>
  );
}
