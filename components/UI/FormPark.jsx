'use client'

import ContinueButton from "@/components/UI/ContinueButton";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import SelectTw from "./SelectTw";

const FormPark = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      vehicle: { type: "", plate: "", department: ""},
      location: null,
    }
  });
  const onSubmit = data => {
    console.log(data)
    history.push('/location')
  }

//  console.log(watch('location'))

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <>
    <form className="flex flex-col justify-center items-start w-fit mx-auto" onSubmit={handleSubmit(onSubmit)}>
    
      {step === 1 && (
        <>
          <SelectTw />
          <label htmlFor="price" className="text-md font-medium leading-6 text-gray-900 w-fit flex items-start">
            Location
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-2 ml-14  top-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <input
            {...register("location", { required: 'This field is required' })}
            type="number"
            id="location"
            className="block w-[280px] rounded-md border-0 py-2 pl-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 shadow-sm"
            placeholder="Location number"
            />
          <p className='text-red-500'>{errors.location?.message}</p>
        </>
      )}
      {step === 2 && (
        <>
          <label htmlFor="price" className="text-md font-medium leading-6 text-gray-900 w-fit flex items-start mt-4">
            Password
          </label>
          <input
            {...register("password", { required: 'This field is required' })}
            type="password"
            id="password"
            className="block w-[280px] rounded-md border-0 py-2 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 shadow-sm"
            placeholder="Please enter your email"
            />
          <p className='text-red-500'>{errors.password?.message}</p>
        </>
      )}
      {step === 3 && (
        <input type='submit' value="Submit" className='mt-5 mx-auto bg-blue-600 text-md font-medium py-2 px-[20%] rounded-xl min-w-[280px] tracking-tight text-white border' />
      )}
       
    </form>
    {step < 3 && (
      <div className="mt-5">
      <ContinueButton text="Continue" handleClick={handleNext} />
    </div>
    )}
    </>
  );
};

export default FormPark;