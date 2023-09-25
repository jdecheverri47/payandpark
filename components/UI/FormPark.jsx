'use client'

import ContinueButton from "@/components/UI/ContinueButton";
import { StepContext } from "@/context/StepContext";
import { useState, useContext } from "react";
import { useForm, Controller } from 'react-hook-form'

const vehicles = [
  {
    id: 1,
    type: 'Car',
    plate: 'KHS123',
    dep: 'ATL'
  },

]

const stepTwoClasses = "block w-[30vw] rounded-md border-0 py-3 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 shadow-sm";

const FormPark = () => {
  const { step, setStep } = useContext(StepContext);
  const { register, control, handleSubmit, watch, trigger, formState: { errors }, formState } = useForm({
    defaultValues: {
      vehicle: vehicles[0],
      location: '',
      time: {
        duration: '1',
        timeunit: 'minutes'
      }
    }
  });

  const watchFieldsStep = watch(['vehicle', 'location']);
  const watchFieldsStep2 = watch(['time.duration', 'time.timeunit']);
  const selectedUnit = watchFieldsStep2[1];
  console.log(watch(errors))

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    trigger(fieldName);
  }


  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
    <form className="flex flex-col justify-center items-start w-fit mx-auto" onSubmit={handleSubmit(onSubmit)}>

      {step === 1 && (
        <>
          <div className="sm:col-span-3 w-full">
            <label className="text-lg font-medium leading-6 text-gray-900">
              Vehicle
            </label>
            <div className="mt-2 w-full">
              <Controller
                name="vehicle"
                control={control}
                defaultValue={vehicles[0]}
                render={({ field: { onChange, value } }) => (
                  <select
                    id="vehicle"
                    name="vehicle"
                    className="block w-[72vw] rounded-md border-0 py-3 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 text-md sm:leading-6 shadow-sm"
                  >
                    {vehicles.map((vehicle) => (
                      <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.plate} - {vehicle.dep}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </div>
          <label className="text-lg font-medium leading-6 text-gray-900 w-fit flex items-start mt-4 mb-2">
            Location
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-2 ml-[4.2rem]  top-[53%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <input
            {...register("location", { required: 'This field is required' })}
            type="number"
            name="location"
            id="location"
            className="block w-[72vw] rounded-md border-0 py-3 pl-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 shadow-sm"
            placeholder="Location number"
            />
          <p className='text-red-500'>{errors.location?.message}</p>

          <div className="mt-5">
            <ContinueButton text="Continue" handleClick={handleNext} watchFields={watchFieldsStep}/>
          </div>
        </>
      )}
      {step === 2 && (
        <div>
          <div className="flex gap-10">
            <div>
              <label className="text-md font-medium leading-6 text-gray-900 w-fit flex items-start mt-4">
                Duration
              </label>
              <input
                {...register("time.duration", 
                { max: { value: 24, message: 'Max duration is 24'}},
                )}
                name="time.duration"
                type="number"
                id="duration"
                className={stepTwoClasses}
                onChange={handleInputChange}
                />
              <p className="text-red-500  mt-2 text-medium">{errors.time?.duration?.message}</p>
            </div>
            <div>
              <label className="text-md font-medium leading-6 text-gray-900 w-fit flex items-start mt-4">
                Time unit
              </label>
              <select
                {...register("time.timeunit", { required: 'This field is required' })}
                id="timeunit"
                name="time.timeunit"
                className={stepTwoClasses}
              >
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>      
              </select>
              {errors.time?.timeunit && <span>{errors.time.timeunit.message}</span>}
            </div>
          </div>
          <div className="mt-5">
            <ContinueButton text="Continue" handleClick={handleNext} watchFields={watchFieldsStep2}/>
          </div>
        </div>
        
      )}
      {step === 3 && (
        <input type='submit' value="Submit" className='mt-5 mx-auto bg-blue-600 text-md font-medium py-2 px-[20%] rounded-xl min-w-[280px] tracking-tight text-white border' />
      )}

    </form>
    {/* {step < 3 && (
      <div className="mt-5">
        <ContinueButton text="Continue" handleClick={handleNext}  />
      </div>
    )} */}
    </>
  );
};

export default FormPark;