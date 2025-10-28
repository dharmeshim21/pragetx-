import { Textarea } from '@nextui-org/react';
import _ from 'lodash';
import React from 'react';

const CustomTextArea = ({
  field: { ...fields },
  form: { touched, errors },
  ...props
}) => {
  const {
    label,
    value,
    placeholder,
    onChange,
    labelPlacement,
    className,
    maxRows,
    minRows,
    color = 'black',
    startContent,
    required = false, // Optional if you plan to use required
    ...rest
  } = props;

  const error = Boolean(_.get(touched, fields?.name) && _.get(errors, fields?.name));

  // --- THEME LOGIC ---
  const isDark = color === 'black';
  const bgColor = isDark ? 'bg-black' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-black';
  const placeholderColor = isDark
    ? 'placeholder:text-white' // ✅ Changed to white
    : 'placeholder:text-[#666]';

  return (
    <div className={`${className} w-full relative`}>
      <Textarea
        {...fields}
        {...rest}
        label={label}
        value={value}
        onValueChange={onChange}
        placeholder={placeholder}
        labelPlacement={labelPlacement}
        minRows={minRows || 3}
        maxRows={maxRows || 6}
        startContent={startContent}
        isInvalid={error}
        classNames={{
          base: 'w-auto',
          inputWrapper: `my-box
            rounded-[15px] min-h-[120px] px-[15px] py-[10px] 
            focus:outline-none focus:ring-0 ${bgColor} ${textColor}
          `,
          input: `${textColor} text-[16px] ${placeholderColor} resize-none`,
          label: `${textColor}`,
          innerWrapper: `${textColor}`,
        }}
      />

      {/* Error message (responsive, below border) */}
      {error && (
        <div className="mt-1">
          <span className="block text-sm text-red-500 font-medium">
            {errors[fields?.name]}
          </span>
        </div>
      )}

    </div>
  );
};

export default CustomTextArea;
