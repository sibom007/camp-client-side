import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { register, handleSubmit } = useForm();
  const update = useLoaderData();
  const { _id } = update;

  const onSubmit = (data) => {
    console.log(data);

    fetch(`https://assiment-12-server.vercel.app/Instructordata/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: " Update success full",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-9/12 h-full ml-10">
      <Helmet>
        <title>Adventure Campus || Update data</title>
      </Helmet>
      <div>
        <h1 className="text-center text-4xl font-bold text-slate-400 mt-5">
          ------------------------- <br /> Update Class
          <br /> ------------------------
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 mt-20">
            <input
              type="text"
              placeholder="Name"
              className="p-2 bg-gray-300 rounded-lg outline-none text-slate-600"
              {...register("name", { required: true })}
            />
            <input
              type="text"
              placeholder="Img Url"
              className="p-2 bg-gray-300 rounded-lg outline-none text-slate-600"
              {...register("img", { required: true })}
            />
            <input
              type="text"
              placeholder="Ablable sit"
              className="p-2 bg-gray-300 rounded-lg outline-none text-slate-600"
              {...register("Ablablesit", { required: true })}
            />
            <input
              type="text"
              placeholder="price"
              className="p-2 bg-gray-300 rounded-lg outline-none text-slate-600"
              {...register("price", { required: true })}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-blue-300 w-6/12  mt-6 px-2 py-2 text-white rounded-lg hover:shadow-lg duration-200">
              Update Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
