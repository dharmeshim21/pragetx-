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
    color = 'black', // Default to dark mode
    required = false, // ✅ Added
    placeholder = '', // ✅ Added placeholder support
    ...rest
  } = props;

  const error = Boolean(_.get(touched, fields.name) && _.get(errors, fields.name));
  const selectId = `select-${fields.name}`;
  const isDark = color === 'black';

  // --- THEMES ---
  const BLACK_CLASSNAMES = {
    base: "w-full h-[60px]",
    trigger: "h-[60px] rounded-[15px] bg-black text-white px-[15px] shadow-none border-none focus:outline-none focus:ring-0",
    value: "text-white text-[16px]",
    innerWrapper: "text-white",
    selectorIcon: "text-white absolute right-[15px] scrollbar-hide",
    listbox: "bg-[#F2F2F2] text-black rounded-[15px] py-1 overflow-y-auto max-h-[200px] scrollbar-hide",
    popoverContent: "bg-[#F2F2F2] rounded-[15px]",
  };

  const WHITE_CLASSNAMES = {
    base: "w-full h-[60px]",
    trigger: "h-[60px] rounded-[15px] bg-white text-black px-[15px] my-box focus:outline-none focus:ring-0",
    value: "text-black text-[16px]",
    innerWrapper: "text-black",
    selectorIcon: "text-black absolute right-[15px] scrollbar-hide",
    listbox: "bg-[#F2F2F2] text-black rounded-[15px] py-1 overflow-y-auto max-h-[200px] scrollbar-hide",
    popoverContent: "bg-[#F2F2F2] rounded-[15px]",
  };

  const selectedClassNames = color === 'white' ? WHITE_CLASSNAMES : BLACK_CLASSNAMES;

  // ✅ Dynamic * position based on placeholder length
  const dynamicStarLeft = `calc(15px + ${placeholder.length * 0.55}ch)`;

  return (
    <div className={`${className} relative`}>
      {/* Label (if any) */}
      {label && (
        <label htmlFor={selectId} className={`block mb-1 text-[16px] font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
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
          classNames={selectedClassNames}
          popoverProps={{
            classNames: {
              content: "bg-[#F2F2F2] rounded-[15px] shadow-lg overflow-hidden scrollbar-hide",
            },
          }}
        >
          {options?.map((option) => (
            <SelectItem
              key={option?.value}
              value={option?.value}
              textValue={option?.title}
              className="text-black focus:bg-[#E6E6E6] data-[selected=true]:!bg-[#F2F2F2] data-[selected=true]:!text-black"
            >
              {option?.title}
            </SelectItem>
          ))}
        </Select>

        {/* ✅ Red * appears after placeholder when required and no value */}
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

      {/* Error message */}
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

export default CustomSelect;



// import { Select, SelectItem } from "@nextui-org/react";
// import _ from "lodash";

// const CustomSelect = ({ field: { ...fields }, form: { touched, errors }, ...props }) => {
//   const {
//     value,
//     labelPlacement,
//     label,
//     onChange,
//     startContent,
//     multiple,
//     options,
//     className,
//     // New prop to accept the classNames object
//     selectClassNames,
//     ...rest
//   } = props;

//   const error = Boolean(_.get(touched, fields.name) && _.get(errors, fields.name));
//   const selectId = `select-${fields.name}`;

//   return (
//     <div className={`${className} relative`}>
//       <Select
//         {...fields}
//         {...rest}
//         aria-labelledby={selectId}
//         selectedKeys={value}
//         label={label}
//         labelPlacement={labelPlacement}
//         selectionMode={multiple ? "multiple" : "single"}
//         startContent={startContent}
//         onChange={(e) =>
//           onChange(
//             multiple
//               ? e.target?.value?.toString()?.split(",")
//               : e.target?.value?.toString()?.split(",")
//           )
//         }
//         // Use the new prop here
//         classNames={selectClassNames}
//         popoverProps={{
//           classNames: {
//             // Keep popover content styles here as they are tightly coupled to the dropdown appearance
//             content: "bg-[#F2F2F2] rounded-[15px] shadow-lg overflow-hidden scrollbar-hide",
//           },
//         }}
//       >
//         {options?.map((option) => (
//           <SelectItem
//             key={option?.value}
//             value={option?.value}
//             textValue={option?.title}
//             className="
//               text-black
//               hover:bg-[#E6E6E6]
//               focus:bg-[#E6E6E6]
//               data-[selected=true]:!bg-[#F2F2F2]
//               data-[selected=true]:!text-black
//             "
//           >
//             {option?.title}
//           </SelectItem>
//         ))}
//       </Select>

//       {error && (
//         <span className="text-sm text-danger font-medium ms-2 absolute bottom-[-10px] left-0 form-error">
//           {errors[fields?.name]}
//         </span>
//       )}
//     </div>
//   );
// };

// export default CustomSelect;