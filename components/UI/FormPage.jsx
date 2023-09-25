'use client'
import { useForm, FormProvider } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import inputs from "../utils/inputs"
import InputBox from "./InputBox";


export default function FormPage() {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
    methods.reset();
  };

  const searchParams = useSearchParams();
  // const search = searchParams.get('user');
  // console.log(search);
  
  return (
    <section className="h-screen w-screen">
      <div className="px-10 pb-5 pt-10 bg-yellow-300">
        <h1 className="font-bold text-3xl">
          Contact info
        </h1>
        <p className="text-gray-500 text-sm">
          Please fill in the form so we can get in contact.
        </p>
      </div>
     <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col items-center pt-5 pb-10 bg-white">
          {inputs.map((input, index) => (
            <InputBox key={index} htmlFor={input.field} label={input.label} type={input.type} indicator={input.indicator} field={input.field} />
          ))}

          <div className="mx-10 mt-3">
            <p className="text-justify">
              By clicking the button, you agree to our <a href="#" className="text-yellow-300">Terms & Conditions</a>, and <a href="#" className="text-yellow-300">Privacy Policy</a>.
            </p>
          </div>
          <button className="bg-yellow-300 text-black font-bold py-2 px-[24vw] my-5 rounded-lg" >
            Send & Continue
          </button>
        </form>
      </FormProvider>
    </section>
  )
}

//cloudflared tunnel --url http://localhost:3000