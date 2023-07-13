function SignUpButton({ text, route }) {
  return (
    <div className='flex w-full justify-center items-center'>
      <button type='button' className='bg-blue-800 text-md py-3 px-[20%] rounded-full min-w-[280px] tracking-tight text-white border border-sky-700' ><a href={ route }>{ text }</a></button>
    </div>
  )
}

export default SignUpButton