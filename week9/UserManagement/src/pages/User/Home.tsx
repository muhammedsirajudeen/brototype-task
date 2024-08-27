import { ReactElement, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";

export default function Home(): ReactElement {
  const data = useLoaderData();

  const navigate = useNavigate();
  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [navigate, data]);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <img src="/home.jpg" className="h-96 w-96 rounded-lg" />
        <p className="font-light text-3xl mt-20">Furniture for every home</p>
      </div>
    </>
  );
}
