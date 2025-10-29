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
    required = false,
    transparent = false, // ✅ New glass prop
    ...rest
  } = props;

  const error = Boolean(_.get(touched, fields?.name) && _.get(errors, fields?.name));

  // --- THEME LOGIC ---
  const isDark = color === 'black';

  // ✅ Glass effect for both themes
  const glassEffect = isDark
    ? `
        bg-black/65
        backdrop-blur-md
        shadow-[0_4px_30px_rgba(0,0,0,0.2)]
      `
    : `
        bg-white/20
        backdrop-blur-md
        border border-white/40
        shadow-[0_4px_30px_rgba(255,255,255,0.1)]
      `;

  // ✅ Final background color logic
  const bgColor = transparent
    ? glassEffect
    : isDark
    ? 'bg-black'
    : 'bg-white';

  const textColor = isDark ? 'text-white' : 'text-black';
  const placeholderColor = isDark
    ? 'placeholder:text-white/80'
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
          inputWrapper: `
            rounded-[15px] my-box min-h-[120px] px-[15px] py-[10px] 
            focus:outline-none focus:ring-0 shadow-none 
            ${bgColor} ${textColor} 
            transition-all duration-300
          `,
          input: `${textColor} text-[16px] ${placeholderColor} resize-none`,
          label: `${textColor}`,
          innerWrapper: `${textColor}`,
        }}
      />

      {/* ✅ Error message with consistent spacing */}
      <div className="mt-1 min-h-[1.25rem]">
        <span className="block text-sm text-red-500 font-medium">
          {error ? errors[fields?.name] : '\u00A0'}
        </span>
      </div>
    </div>
  );
};

export default CustomTextArea;
