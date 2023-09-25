'use client'
import Input from '@mui/joy/Input';
import { useFormContext, Controller } from 'react-hook-form';

function InputBox({ label, type, indicator, htmlFor  }) {
  const { control } = useFormContext();
  return (
    <div className='flex flex-col my-2'>
      <label
        htmlFor={htmlFor}
        className='text-gray-500 text-sm'
        >
          {label}
      </label>

      <Controller
        name={indicator}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            className='w-[80vw]'
            />
        )}
      />
    </div>
  )
}

export default InputBox