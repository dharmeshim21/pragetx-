import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Input, Tooltip } from '@nextui-org/react';
import _ from 'lodash';

const CustomFileInput = ({
  field: { ...fields },
  form: { touched, errors },
  ...props
}) => {
  const {
    name,
    startContent,
    multiple,
    onChange,
    placeholder,
    className,
    formReset,
    setFormReset,
    color = "black", // new prop with default
  } = props;

  const error = Boolean(_.get(touched, fields?.name) && _.get(errors, fields?.name));
  const [files, setFiles] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      onChange(multiple ? acceptedFiles : acceptedFiles[0]);
      setFiles(acceptedFiles);
    },
    [multiple, onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: multiple ?? false,
  });

  useEffect(() => {
    if (formReset) {
      setFiles(null);
      onChange([]);
      setFormReset(!formReset);
    }
  }, [formReset]);

  const fileNames = files?.map((file) => file?.name).join(', ');

  // Determine color theme based on prop
  const isDark = color === "black";
  const bgColor = isDark ? "bg-black" : "bg-white";
  const textColor = isDark ? "text-white" : "text-black";
  const hoverBg = isDark ? "" : "";
  const placeholderColor = isDark ? "placeholder:text-[#A1A1A1]" : "placeholder:text-[#666]";

  return (
    <div className={`${className} relative`}>
      <div {...getRootProps()} className="cursor-pointer w-full">
        {/* Hidden File Input */}
        <input {...getInputProps()} name={name} className="hidden" />

        {/* Visible Readonly Display Input */}
        <Input
          readOnly
          placeholder={files ? `${files?.length} file${files?.length > 1 ? 's' : ''}` : placeholder}
          startContent={startContent}
          name={name}
          classNames={{
            base: "sm:w-[492px] w-[300px] lg:w-[600px] 2xl:w-[480px] h-[60px]",
            inputWrapper: `
              h-[60px] rounded-[15px] px-[15px] shadow-none border-none cursor-pointer 
              focus:outline-none focus:ring-0 ${bgColor} ${textColor} ${hoverBg}
            `,
            input: `${textColor} text-[16px] ${placeholderColor} cursor-pointer`,
            label: `${textColor}`,
            innerWrapper: `${textColor}`,
          }}
        />
      </div>

      {/* Error message (responsive, below border) */}
      {error && (
        <div className="mt-1">
          <span className="block text-sm text-red-500 font-medium">
            {errors[fields?.name]}
          </span>
        </div>
      )}


      {/* Tooltip showing file names */}
      {files && (
        <Tooltip content={fileNames} placement="bottom-start">
          <div
            className={`text-sm mt-1 block whitespace-nowrap overflow-hidden text-ellipsis ${textColor
              } ${error ? "file-input-text" : ""}`}
          >
            {fileNames}
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default CustomFileInput;
