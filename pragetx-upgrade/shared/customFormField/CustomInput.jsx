import { Input } from "@nextui-org/react";
import _ from "lodash";
import React from "react";

const LABEL_FLOAT_CLASSES =
  "absolute -top-2 left-4 bg-white px-1 text-[16px] font-semibold text-black z-5";

const CustomInput = ({
  field: { ...fields },
  form: { touched, errors },
  ...props
}) => {
  const {
    type,
    label,
    labelType = "normal", // "normal" | "static"
    disabled,
    startContent,
    endContent,
    variant,
    value,
    onChange,
    placeholder,
    labelPlacement,
    className,
    min,
    max,
    color = "black",
    required = false,
  } = props;

  const error = Boolean(
    _.get(touched, fields?.name) && _.get(errors, fields?.name)
  );

  // Theme colors
  const isDark = color === "black";
  const bgColor = isDark ? "bg-black" : "bg-white";
  const textColor = isDark ? "text-white" : "text-black";
  const placeholderColor = isDark
    ? "placeholder:text-white"
    : "placeholder:text-[#666]";

  // ✅ Adjust placeholder font size if it's long
  const isLongPlaceholder = placeholder && placeholder.length > 25;
  const placeholderSize = isLongPlaceholder
    ? "placeholder:text-[13px] md:placeholder:text-[14px]"
    : "placeholder:text-[16px]";

  // ✅ Truncate placeholder text visually (avoid overflow)
  const placeholderStyle = `
    placeholder:overflow-hidden 
    placeholder:whitespace-nowrap 
    placeholder:text-ellipsis
  `;

  return (
    <div className={`${className} relative `}>
      {/* Static label */}
      {labelType === "static" && (
        <label htmlFor={`input-${fields.name} `} className={LABEL_FLOAT_CLASSES}>
          {label}
          {required && (
            <span className="text-red-500 font-bold align-middle"> *</span>
          )}
        </label>
      )}

      {/* Left icon */}
      {startContent && (
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 ${textColor} pointer-events-none`}
        >
          {startContent}
        </div>
      )}

      {/* Right icon */}
      {endContent && (
        <div
          className={`absolute right-4 top-1/2 -translate-y-1/2 ${textColor} pointer-events-none`}
        >
          {endContent}
        </div>
      )}

      {/* Input with better placeholder control */}
      <div className="relative w-full">
        <Input
          {...fields}
          id={`input-${fields.name}`}
          type={type}
          label={labelType === "static" ? undefined : label}
          value={value}
          placeholder={placeholder}
          variant={variant}
          disabled={disabled}
          min={min}
          max={max}
          labelPlacement={labelPlacement}
          autoComplete="off"
          isInvalid={error}
          classNames={{
            base: "w-full h-[60px] ",
            inputWrapper: `
              h-[60px] rounded-[15px] my-box px-[15px] shadow-none border-none focus:outline-none focus:ring-0 
              ${bgColor} ${textColor}
              ${startContent ? "pl-12" : ""} 
              ${endContent ? "pr-12" : ""}
            `,
            input: `${textColor} ${placeholderColor} ${placeholderSize} ${placeholderStyle}`,
            label: `${textColor}`,
            innerWrapper: `${textColor}`,
          }}
        />

        {/* Red star placed right after placeholder visually */}
        {isDark && required && !value && placeholder && (
          <span
            className="absolute top-1/2 -translate-y-1/2 text-red-500 pointer-events-none transition-all duration-300"
            style={{
              left: `calc(15px + ${placeholder.length * 0.76}ch)`,
            }}
          >
            *
          </span>
        )}

      </div>

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

export default CustomInput;
