import FormPark from "@/components/UI/FormPark"

function page() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        progress bar
      </div>
      {/* <div className="bg-blue-800 w-full py-4 shadow-md">
        <h1 className="text-3xl text-white font-normal text-center">Park</h1>
      </div> */}
      <div className="mt-10">
        <h1 className="text-3xl text-blue-900 font-bold text-center">Where are you parking?</h1>
      </div>
      <div className="flex flex-col grow justify-center mb-[7rem]">
        <FormPark />
      </div>
    </div>
  )
}

export default page