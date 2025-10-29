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
    transparent = false, // ✅ new prop
  } = props;

  const error = Boolean(
    _.get(touched, fields?.name) && _.get(errors, fields?.name)
  );

  // ✅ Determine theme
  const isDark = color === "black";

  // ✅ Adaptive glass color
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

  // ✅ Background logic
  const bgColor = transparent
    ? glassEffect
    : isDark
    ? "bg-black"
    : "bg-white";

  // ✅ Text and placeholder colors
  const textColor = isDark ? "text-white" : "text-black";
  const placeholderColor = isDark
    ? "placeholder:text-white/80"
    : "placeholder:text-[#555]";

  // ✅ Placeholder size adjustments
  const isLongPlaceholder = placeholder && placeholder.length > 25;
  const placeholderSize = isLongPlaceholder
    ? "placeholder:text-[13px] md:placeholder:text-[14px]"
    : "placeholder:text-[16px]";

  const placeholderStyle = `
    placeholder:overflow-hidden 
    placeholder:whitespace-nowrap 
    placeholder:text-ellipsis
  `;

  return (
    <div className={`${className} relative`}>
      {/* Static label */}
      {labelType === "static" && (
        <label htmlFor={`input-${fields.name}`} className={LABEL_FLOAT_CLASSES}>
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

      {/* Input */}
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
            base: "w-full h-[60px]",
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

        {/* Red star if required */}
        {required && !value && placeholder && (
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

      {/* Error message */}
      <div className="mt-1 min-h-[1.25rem]">
        <span className="block text-sm text-red-500 font-medium">
          {error ? errors[fields?.name] : "\u00A0"}
        </span>
      </div>
    </div>
  );
};

export default CustomInput;
