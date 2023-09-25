
function ContinueButton({ text, handleClick, watchFields }) {
  return (
    <div className="w-full flex justify-center">
      <button type='button' className='bg-blue-600 text-lg font-normal px-6 py-1 text-white text-center rounded-xl w-[72vw] disabled:bg-gray-300 disabled:cursor-not-allowed' onClick={handleClick} disabled={watchFields.some(field => !field)} >
        { text }
      </button>
    </div>
  )
}

export default ContinueButton