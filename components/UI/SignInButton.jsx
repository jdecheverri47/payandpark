function SignInbutton({ text, route }) {
  return (
    <div className='flex w-full justify-center items-center'>
      <button type='button' className='bg-neutral-100 text-md py-3 px-[20%] rounded-full min-w-[280px] tracking-tight text-blue-800 border ' ><a href={ route }>{ text }</a></button>
    </div>
  )
}

export default SignInbutton