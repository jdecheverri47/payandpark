import SignInbutton from "@/components/UI/SignInButton";
import SignUpbutton from "@/components/UI/SignUpButton";
import Image from "next/image";

function page() {
  return (
    <div className="p-5 flex flex-col justify-center items-center h-screen">
      <div className="w-full flex justify-center items-center my-5 mt-auto">
        <Image src="/assets/img/lettersLogo.png" alt="logo" width={100} height={100} />
      </div>
      <div className="flex flex-col gap-3">
        <SignUpbutton text="Sign In" route="/signin"/>
        <SignInbutton text="Create account" route="/signup"/>
      </div>
      <div className="flex mt-auto">
        <p className="text-sm text-gray-500">By signing up, you agree to our Terms, Data Policy and Cookies Policy .</p>
      </div>
    </div>
  )
}

export default page