import React, { useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import _ from 'lodash';
import 'react-phone-input-2/lib/style.css';

const CustomPhoneNumberInput = ({
  field: { ...fields },
  form: { touched, errors },
  ...props
}) => {
  const {
    label,
    value,
    placeholder,
    country,
    regions,
    onlyCountries,
    countryCode,
    disableDropdown,
    onChange,
    className,
    color = 'black',
    ...rest
  } = props;

  const error = Boolean(_.get(touched, fields?.name) && _.get(errors, fields?.name));

  useEffect(() => {
    const selectedFlagDiv = document.getElementsByClassName('selected-flag');
    if (selectedFlagDiv[0]) selectedFlagDiv[0].setAttribute('tabIndex', '1');
  }, []);

  const isDark = color === 'black';
  const bgColor = isDark ? 'bg-black' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-black';
  const placeholderColor = isDark ? 'placeholder:text-[#A1A1A1]' : 'placeholder:text-[#666]';

  return (
    <div className={`${className} w-full relative overflow-visible z-[50]`}>
      <div
        className={`flex items-center h-[60px] rounded-[15px] px-[15px] ${bgColor} ${textColor} transition-colors duration-200`}
      >
        <PhoneInput
          {...fields}
          {...rest}
          country={country || 'in'}
          regions={regions}
          onlyCountries={onlyCountries}
          disableDropdown={disableDropdown || false}
          enableSearch={true}
          countryCodeEditable={false}
          value={value || countryCode || '+91'}
          onChange={onChange}
          placeholder={placeholder || ''}
          inputClass={`!bg-transparent !border-none !shadow-none !outline-none !w-full !text-[16px] ${textColor} ${placeholderColor}`}
          buttonClass={`!bg-transparent !border-none !outline-none ${textColor}`}
          dropdownClass="!bg-[#F2F2F2] !text-black rounded-[10px] !max-h-[200px] overflow-auto scrollbar-hide !z-50"
          containerClass="!w-full"
        />
      </div>

      {/* ✅ Fixed error text — no layout shift */}
      {error && (
        <span className="absolute text-sm text-red-500 font-medium left-0 -bottom-5">
          {errors[fields?.name]}
        </span>
      )}
    </div>
  );
};

export default CustomPhoneNumberInput;
