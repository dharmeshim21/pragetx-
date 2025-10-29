import React, { useEffect, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import _ from 'lodash';
import 'react-phone-input-2/lib/style.css';

const CustomPhoneNumberInput = ({
  field: { name, value: fieldValue, onChange: fieldOnChange, onBlur: fieldOnBlur, ...restField },
  form: { touched, errors, setFieldValue, setFieldTouched },
  ...props
}) => {
  const {
    label,
    value: propValue,
    placeholder,
    country,
    regions,
    onlyCountries,
    disableDropdown,
    className = '',
    color = 'black',
    transparent = false,
    ...rest
  } = props;

  // Use Formik's value first, fallback to propValue, else empty string
  // IMPORTANT: default to '' (not '+91') to avoid "invalid country code" errors
  // Always keep at least "+91" (or your default country dial code) visible
  const defaultDialCode = '91';
  const value =
    typeof fieldValue !== 'undefined' && fieldValue !== null && fieldValue !== ''
      ? fieldValue
      : defaultDialCode;

  const error = Boolean(_.get(touched, name) && _.get(errors, name));

  useEffect(() => {
    // make selected flag focusable for accessibility
    const selectedFlagDiv = document.getElementsByClassName('selected-flag');
    if (selectedFlagDiv[0]) selectedFlagDiv[0].setAttribute('tabIndex', '1');
  }, []);

  const isDark = color === 'black';

  const glassEffect = isDark
    ? `
        bg-black/65
        backdrop-blur-md
        
        shadow-[0_4px_30px_rgba(0,0,0,0.2)]
      `
    : `
        bg-white/60
        backdrop-blur-md
        border border-black/20
        shadow-[0_4px_30px_rgba(0,0,0,0.05)]
      `;

  const bgColor = transparent
    ? glassEffect
    : isDark
      ? 'bg-black border border-white/20'
      : 'bg-white border border-black/10 shadow-sm';

  const textColor = isDark ? 'text-white' : 'text-black';
  const placeholderColor = isDark ? 'placeholder:text-[#A1A1A1]' : 'placeholder:text-[#777]';

  // onChange from the phone input: (phone, data, event, formattedValue)
  const handleChange = useCallback(
    (phone, countryData, e, formattedValue) => {
      // set the Formik field value; store the raw string returned by the lib
      // (you can also store formattedValue if you prefer)
      if (setFieldValue) setFieldValue(name, phone);
      // If the user provided an onChange prop, call it too
      if (typeof props.onChange === 'function') props.onChange(phone, countryData, e, formattedValue);
    },
    [name, setFieldValue, props]
  );

  const handleBlur = useCallback(
    (e) => {
      if (setFieldTouched) setFieldTouched(name, true, true);
      // call original formik onBlur if exists
      if (typeof fieldOnBlur === 'function') fieldOnBlur(e);
      if (typeof props.onBlur === 'function') props.onBlur(e);
    },
    [name, setFieldTouched, fieldOnBlur, props]
  );

  return (
    <div className={`${className} w-full relative overflow-visible z-[50]`}>
      <div
        className={`flex items-center h-[60px] rounded-[15px] px-[15px] ${bgColor} ${textColor} transition-all duration-300`}
      >
        <PhoneInput
          // don't spread fields directly to avoid overriding our handlers
          country={country || 'in'}
          regions={regions}
          onlyCountries={onlyCountries}
          disableDropdown={disableDropdown || false}
          enableSearch={true}
          countryCodeEditable={false}
          value={value} // use Formik value (may be empty string)
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder || ''}
          inputClass={`!bg-transparent !border-none !shadow-none !outline-none !w-full !text-[16px] ${textColor} ${placeholderColor}`}
          buttonClass={`!bg-transparent !border-none !outline-none ${textColor}`}
          dropdownClass="!bg-[#F2F2F2] !text-black rounded-[10px] !max-h-[200px] overflow-auto scrollbar-hide !z-[80]"
          containerClass="!w-full !relative"
          {...rest}
        />
      </div>

      {/* Error message — keep consistent height to avoid layout jump */}
      <div className="mt-1 min-h-[1.25rem]">
        <span className="block text-sm text-red-500 font-medium">
          {error ? _.get(errors, name) : '\u00A0'}
        </span>
      </div>
    </div>
  );
};

export default CustomPhoneNumberInput;
