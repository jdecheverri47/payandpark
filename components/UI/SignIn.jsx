'use client'
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'

export default function SignIn() {

  const history = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  });
  const onSubmit = data => {
    console.log(data)
    history.push('/location')
  }

  return (
    <form className="flex flex-col justify-center items-start w-fit mx-auto" onSubmit={handleSubmit(onSubmit)}>
    
      <label htmlFor="price" className="text-md font-medium leading-6 text-gray-900 w-fit flex items-start">
        Email
      </label>
      <input
        {...register("email", { required: 'This field is required' })}
        type="email"
        id="email"
        className="block w-[280px] rounded-md border-0 py-2 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 shadow-sm"
        placeholder="Please enter your email"
        />
      <p className='text-red-500'>{errors.email?.message}</p>
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
      <p className='flex w-full items-center justify-end mt-4 text-blue-700 font-semibold text-md'>Forgot your password?</p>
      <input type='submit' value="Sign In" className='mt-5 mx-auto bg-blue-600 text-md font-medium py-2 px-[20%] rounded-xl min-w-[280px] tracking-tight text-white border' />
    </form>
  )
}