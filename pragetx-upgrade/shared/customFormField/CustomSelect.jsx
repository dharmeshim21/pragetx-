import React from 'react';
import { Select, SelectItem } from '@heroui/react';
import _ from 'lodash';

const CustomSelect = ({ field: { ...fields }, form: { touched, errors }, ...props }) => {
  const {
    value,
    labelPlacement,
    label,
    onChange,
    startContent,
    multiple,
    options,
    className,
    color = 'black', // Default theme
    required = false,
    placeholder = '',
    transparent = false, // ✅ New glass prop
    ...rest
  } = props;

  const error = Boolean(_.get(touched, fields.name) && _.get(errors, fields.name));
  const selectId = `select-${fields.name}`;
  const isDark = color === 'black';

  // ✅ Glass effect styles for both themes
  const glassEffect = isDark
    ? `
        bg-black/65
        backdrop-blur-md
        border border-white/10
        shadow-[0_4px_30px_rgba(0,0,0,0.2)]
      `
    : `
        bg-white/20
        backdrop-blur-md
        border border-white/40
        shadow-[0_4px_30px_rgba(255,255,255,0.1)]
      `;

  // ✅ Determine base background
  const baseBg = transparent
    ? glassEffect
    : isDark
    ? 'bg-black'
    : 'bg-white';

  // ✅ Shared classNames
  const shared = {
    base: 'w-full h-[60px]',
    listbox:
      'bg-[#F2F2F2] text-black rounded-[15px] py-1 overflow-y-auto max-h-[200px] scrollbar-hide',
    popoverContent: 'bg-[#F2F2F2] rounded-[15px]',
  };

  const classNames = {
    ...shared,
    trigger: `h-[60px] my-box rounded-[15px] px-[15px] shadow-none border-none focus:outline-none focus:ring-0 ${baseBg} ${
      isDark ? 'text-white' : 'text-black'
    } transition-all duration-300`,
    value: `${isDark ? 'text-white' : 'text-black'} text-[16px]`,
    innerWrapper: `${isDark ? 'text-white' : 'text-black'}`,
    selectorIcon: `${isDark ? 'text-white' : 'text-black'} absolute right-[15px] scrollbar-hide`,
  };

  return (
    <div className={`${className} relative`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={selectId}
          className={`block mb-1 text-[16px] font-semibold ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          {label}
          {required && <span className="text-red-500 font-bold align-middle"> *</span>}
        </label>
      )}

      {/* Select */}
      <div className="relative w-full">
        <Select
          {...fields}
          {...rest}
          aria-labelledby={selectId}
          selectedKeys={value}
          labelPlacement={labelPlacement}
          placeholder={placeholder}
          selectionMode={multiple ? 'multiple' : 'single'}
          startContent={startContent}
          onChange={(e) =>
            onChange(
              multiple
                ? e.target?.value?.toString()?.split(',')
                : e.target?.value?.toString()?.split(',')
            )
          }
          classNames={classNames}
          popoverProps={{
            classNames: {
              content: 'bg-[#F2F2F2] rounded-[15px] shadow-lg overflow-hidden scrollbar-hide',
            },
          }}
        >
          {options?.map((option) => (
            <SelectItem
              key={option?.value}
              value={option?.value}
              textValue={option?.title}
              className="text-black focus:bg-[#E6E6E6]  data-[selected=true]:!bg-[#F2F2F2] data-[selected=true]:!text-black"
            >
              {option?.title}
            </SelectItem>
          ))}
        </Select>

        {/* ✅ Red * after placeholder for required dark fields */}
        {isDark && required && !value && placeholder && (
          <span
            className="absolute top-1/2 -translate-y-1/2 text-red-500 pointer-events-none transition-all duration-300"
            style={{
              left: `calc(15px + ${placeholder.length * 0.66}ch)`,
            }}
          >
            *
          </span>
        )}
      </div>

      {/* Error message — stable layout */}
      <div className="mt-1 min-h-[1.25rem]">
        <span className="block text-sm text-red-500 font-medium">
          {error ? errors[fields?.name] : '\u00A0'}
        </span>
      </div>
    </div>
  );
};

export default CustomSelect;
