import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const HomeClassdata = () => {
  const [classdatas, setclassdatas] = useState([]);
  const navigate = useNavigate();

  const { user } = useAuth();

  useEffect(() => {
    fetch("https://assiment-12-server.vercel.app/classdatalimit")
      .then((res) => res.json())
      .then((data) => {
        setclassdatas(data);
      });
  }, []);

  const Handlerenroll = (classdata) => {
    const { _id, name, img, instructor, price } = classdata;
    if (user && user?.email) {
      const Enrolldata = {
        enrollid: _id,
        name,
        img,
        price,
        instructor,
        email: user.email,
      };
      fetch("https://assiment-12-server.vercel.app/Enroll", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(Enrolldata),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Cart add success full",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in please!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/Login");
        }
      });
    }
  };

  return (
    <div className="bg-zinc-200 mt-5 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Join Our Top Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {classdatas.map((classdata) => (
          <div key={classdata._id}>
            <div className="bg-zinc-100 p-6 rounded-lg shadow-md">
              <img
                src={classdata.img}
                alt="Cycling Class"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {classdata.name}
              </h3>
              <p className="text-gray-600 ">
                instructor : {classdata.instructor}
              </p>
              <p className="text-gray-600">From ${classdata.price}</p>
              <p className="text-gray-600">
                Available seats: {classdata.availableSeats}
              </p>
              <p className="text-gray-600">Enrolled: {classdata.Enroll}</p>
              <div className="card-actions justify-center">
                <Link>
                  <button
                    onClick={() => Handlerenroll(classdata)}
                    className="btn btn-outline btn-info duration-500">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeClassdata;
