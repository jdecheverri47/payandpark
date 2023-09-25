import { useContext } from 'react'
import { StepContext } from '../../context/StepContext'

function Questions() {
  const { step } = useContext(StepContext)
  return (
    <>
      {step === 1 && (
        <>
          <h1 className="text-4xl text-blue-900 font-bold text-center">
            Where are you parking?
          </h1>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="text-4xl text-blue-900 font-bold text-center">
            Select a parking duration
          </h1>
        </>
      )}
    </>
  )
}

export default Questions