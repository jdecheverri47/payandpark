import SignIn from '@/components/UI/SignIn'
import Image from 'next/image'

function page() {
  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-hidden'>
      <div className='mt-12'>
        <Image src="/assets/img/loginImage.png" alt="logo" width={300} height={300} />
      </div>

      <div className='flex flex-col justify-center items-start ml-[6.5rem] mb-5 w-full'>
        <div>
          <h1 className='font-bold text-blue-900 text-4xl'>Sign In</h1>
        </div>
      </div>

      <SignIn />

      <p className='mt-auto mb-5 text-gray-500'>Don&apos;t have an account? <a href="/parkflow" className=' leading-3 text-blue-700 font-semibold'>Sign up</a></p>
    </div>
  )
}

export default page