import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });
  const handleAddDoctor = (data) => {

          const doctor = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            specialty: data.specialty,
            hospital:data.hospital,
            education:data.education,
            position:data.position,
            price:data.price,
          };
          console.log(data.phone);
          console.log(doctor);

          // save doctor info to the database //
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managedoctor");
            });
    
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-200 p-7 new" style={{
      position: "absolute",
      top: "50%",
      transform: "translate(465px, -40%)",
      
    }}>
      <h2 className="text-3xl inputcolor" style={{display: 'flex', justifyContent: 'center'}}>Add a Doctor</h2>

      {/* Doctors */}
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div style={{display: 'flex', justifyContent: 'center' ,}}>
          <div className="form-control w-full max-w-xs">
            <label className="">
              {" "}
              <span className="label-text inputcolor font-bold" style={{display: 'flex', justifyContent: 'center'}}>Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Enter Doctor Name"
              className="input input-bordered w-full max-w-xs"
            />
          
            {errors.name && (
              <p className="text-red-700">{errors.name?.message}</p>
            )}
          </div>
          {/* Test For Hospital */}
          <div className="form-control w-full max-w-xs">
            <label className="">
              {" "}
              <span className="label-text inputcolor font-bold" style={{display: 'flex', justifyContent: 'center'}}>Hospital</span>
            </label>
            <input
              type="text"
              {...register("hospital", {
                required: "Hospital is required",
              })}
              placeholder="Enter Hospital Name"
              className="input input-bordered w-full max-w-xs"
            />
          
            {errors.hospital && (
              <p className="text-red-700">{errors.hospital?.message}</p>
            )}
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {/* Test For education */}
          <div className="form-control w-full max-w-xs">
            <label className="">
              {" "}
              <span className="label-text inputcolor font-bold" style={{display: 'flex', justifyContent: 'center'}}>Degrees</span>
            </label>
            <input
              type="text"
              {...register("education", {
                required: "Education is required",
              })}
              placeholder="Enter Education"
              className="input input-bordered w-full max-w-xs"
            />
          
            {errors.education && (
              <p className="text-red-700">{errors.education?.message}</p>
            )}
          </div>


          {/* Test For position */}
          <div className="form-control w-full max-w-xs">
            <label className="">
              {" "}
              <span className="label-text inputcolor font-bold" style={{display: 'flex', justifyContent: 'center'}}>Current Position</span>
            </label>
            <input
              type="text"
              {...register("position", {
                required: "Position is required",
              })}
              placeholder="Enter Your Position"
              className="input input-bordered w-full max-w-xs"
            />
          
            {errors.position && (
              <p className="text-red-700">{errors.position?.message}</p>
            )}
          </div>
        </div>

        
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {/* Test For price */}
          <div className="form-control w-full max-w-xs">
            <label className="">
              {" "}
              <span className="label-text inputcolor font-bold" style={{display: 'flex', justifyContent: 'center'}}>Visit Fees</span>
            </label>
            <input
              type="text"
              {...register("price", {
                required: "Visit Fees is required",
              })}
              placeholder="Enter Your Visit Fees"
              className="input input-bordered w-full max-w-xs"
            />
          
            {errors.position && (
              <p className="text-red-700">{errors.position?.message}</p>
            )}
          </div>



          <div className="form-control w-full max-w-xs">
            <label className="">
              {" "}
              <span className="label-text inputcolor font-bold"style={{display: 'flex', justifyContent: 'center'}}>Phone</span>
            </label>
            <input
              type="number"
              {...register("phone", {
                required: "phone is required",
              })}
              placeholder="Your Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
          
            {errors.phone && (
              <p className="text-red-700">{errors.phone?.message}</p>
            )}
          </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="form-control w-full max-w-xs">
            <label className="">
              {" "}
              <span className="label-text inputcolor font-bold"style={{display: 'flex', justifyContent: 'center'}}>Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              placeholder="Enter doctor email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-700">{errors.email?.message}</p>
            )}
          </div>



          {/* selected doctor by data load */}
          <div className="form-control w-full max-w-xs">
            <label className="">
              {" "}
              <span className="label-text inputcolor font-bold"style={{display: 'flex', justifyContent: 'center'}}>Specialty</span>
            </label>
            <select
              {...register("specialty")}
              className="select input-bordered w-full font-bold max-w-xs custom-select"
            >
              {/* {specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))} */}
              <option value="Medicine ">Medicine</option>
              <option value="Cardiologists">Cardiologists</option>
              <option value="Gastroenterologists">Gastroenterologists</option>
          
            </select>
          </div>
        </div>
      
        

        <input
          className="btn btn-accent w-full mt-4 btnback3"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
