import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Addclass = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newdata = {
      name: user?.displayName,
      img: data.img,
      instructor: data.instructor,
      instorctoremail: user?.email,
      status: data.status,
      Enroll: parseFloat(0),
      availableSeats: parseFloat(data.availableSeats),
      price: parseFloat(data.price),
    };

    fetch("https://assiment-12-server.vercel.app/Instructoradddata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: " add Class success full",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-9/12 mt-2 ml-10  h-full">
      <Helmet>
        <title>Adventure Campus || Add Class</title>
      </Helmet>
      <h1 className="text-center text-4xl font-bold text-slate-400">
        ------------------------- <br /> Add Class
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
            hidden
            defaultValue={"pending"}
            {...register("status", { required: true })}
          />
          {/* <input
            type="text"
            hidden
            defaultValue={0}
            {...register("Enroll", { required: true })}
          /> */}

          <input
            type="text"
            placeholder="Ablable sit"
            className="p-2 bg-gray-300 rounded-lg outline-none text-slate-600"
            {...register("availableSeats", { required: true })}
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
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addclass;
