'use client'
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form'
import InputBox from './InputBox';
import inputs from '../utils/loginInputs';

export default function SignIn() {

  const history = useRouter();

  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
    methods.reset();
  };

  return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col items-center pt-5 pb-10 bg-white">
          {inputs.map((input, index) => (
            <InputBox key={index} htmlFor={input.field} label={input.label} type={input.type} indicator={input.indicator} field={input.field} />
          ))}
          <p className='flex w-full items-center justify-end mt-4 text-blue-700 font-semibold text-md'>Forgot your password?</p>
          <button className="mt-5 mx-auto bg-blue-600 text-md font-medium py-2 px-[20%] rounded-xl min-w-[280px] tracking-tight text-white border" type='submit' >
            Sign In
          </button>
        </form>

        
      </FormProvider>
  )
}