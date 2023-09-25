'use client'

import FormPark from "@/components/UI/FormPark"
import Questions from "@/components/UI/Questions"
import { StepProvider } from "@/context/StepContext";

function page() {
  return (
    <StepProvider>
      <div className="h-screen flex flex-col justify-start items-center">
        <div className="bg-sky-500 w-screen px-3 py-2">
        
        </div>
        {/* <div className="bg-blue-800 w-full py-4 shadow-md">
          <h1 className="text-3xl text-white font-normal text-center">Park</h1>
        </div> */}
        <div className="mt-[14rem] w-[80vw]">
          <Questions />
        </div>

        <div className="flex flex-col justify-center w-full mt-[2.2rem]">
          <FormPark />
        </div>
      </div>
    </StepProvider>

  )
}

export default page