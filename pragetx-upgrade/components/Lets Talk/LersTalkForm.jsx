'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Formik, Form, Field } from 'formik';
import { LetsTalkFormValidation } from '@/shared/validation/LetsTalkFormValidation';

import * as Yup from 'yup';
import { Button, Input, Textarea } from '@heroui/react';
import CustomSelect from '@/shared/customFormField/CustomSelect';
import { CustomInput, CustomPhoneNumberInput, CustomTextArea } from '@/shared/customFormField';

const FORM_BG_COLOR = 'bg-white';
const FORM_CONTAINER_CLASSES = 'p-8 rounded-[20px] shadow-2xl container';

const INPUT_BASE_CLASSES = {
    base: "w-full bg-white text-black rounded-[15px] relative",
    inputWrapper:
        "bg-white my-box h-[60px] rounded-[15px] !p-0 " +
        "group-data-[focus-visible=true]:z-0 group-data-[focus-visible=true]:ring-1 group-data-[focus-visible=true]:ring-offset-0 group-data-[focus-visible=true]:ring-purple-500 " +
        "data-[hover=true]:bg-white data-[focus=true]:bg-white",
    input:
        "placeholder:text-gray-400 text-[16px] h-full rounded-[15px] px-[15px] py-0 focus-visible:outline-none",
    selectorIcon: "text-gray-700",
};

const LABEL_FLOAT_CLASSES =
    "absolute -top-2 left-4 bg-white px-1 text-[16px] font-semibold text-black z-3";

const CUSTOM_SELECT_CLASSNAMES = {
    base: "h-[60px]",
    trigger:
        "h-[60px] rounded-[15px] bg-[white]  my-box text-white px-[15px] shadow-none border-none focus:outline-none focus:ring-0 ",
    value: "text-black text-[16px]",
    label: "text-black",
    innerWrapper: "text-black h-[500px] ",
    selectorIcon: "text-black absolute right-[15px] scrollbar-hide",
    listbox:
        "bg-[#F2F2F2] text-black rounded-[15px] py-1 overflow-y-auto max-h-[200px] scrollbar-hide",
    popoverContent: "bg-[#F2F2F2] rounded-[15px]",
};

const PHONE_INPUT_CLASSES = {
    inputWrapper: "!bg-transparent h-full ",
    input: "placeholder:text-gray-400 text-black h-full px-2 outline-none",
};

const ValidationSchema = Yup.object().shape({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Enter a valid email').required('Work Email is required'),
    contactNumber: Yup.string().required('Phone number is required'),
    service: Yup.string().required('Service is required'),
    projectRequirement: Yup.string(),
});

const Services = [
    { name: 'UI/UX Designing', value: 'ui/ux designing' },
    { name: 'Digital Marketing', value: 'digital marketing' },
    { name: 'Branding', value: 'branding' },
    { name: 'QA & Testing', value: 'qa & testing' },
    { name: 'Cloud Services', value: 'cloud services' },
    { name: 'Devops Solutions', value: 'devops solutions' },
    { name: 'Enterprise IT Solutions', value: 'enterprise it solutions' },
    { name: 'Salesforce', value: 'salesforce' },
    { name: 'Custom Software Development', value: 'custom software development' },
    { name: 'Web App Development', value: 'web app development' },
    { name: 'Mobile App Development', value: 'mobile app development' },
    { name: 'AI & ML', value: 'ai & ml' },
    { name: 'IoT Development', value: 'iot development' },
    { name: 'Data Analytics & BI', value: 'data analytics & bi' },
];

const initialValues = {
    name: '',
    email: '',
    contactNumber: '',
    service: 'ui/ux designing',
    projectRequirement: '',
    files: [],
};

const FileUploadSection = ({ onFilesSelected }) => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);


    const handleFileSelect = (event) => {
        const selectedFiles = Array.from(event.target.files || []);
        setFiles(selectedFiles);
        if (onFilesSelected) onFilesSelected(selectedFiles);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(event.dataTransfer.files || []);
        setFiles(droppedFiles);
        if (onFilesSelected) onFilesSelected(droppedFiles);
    };

    const handleBrowseClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div
            className={`my-box rounded-lg p-8 text-center mt-6 transition-colors duration-200 ${isDragging ? "border-purple-500 bg-purple-50" : "border-gray-300"
                }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input
                type="file"
                multiple
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileSelect}
            />

            <div className="flex flex-col items-center justify-center">
                <div className="text-4xl text-gray-500 mb-2">
                    <svg
                        className="w-8 h-8 mx-auto text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                    </svg>
                </div>

                <p className="text-lg font-medium text-gray-700">
                    Drag and Drop to Upload File
                </p>
                <p className="text-sm text-gray-500 my-2">OR</p>

                <button
                    type="button"
                    className="text-purple-600 hover:text-purple-800 px-[10px] font-semibold text-sm  bg-transparent"
                    onClick={handleBrowseClick}
                >
                    <div
                        className="aboutLinem bg-gradient-to-r from-[#A856F7]/11 via-[#6A5ACD]/11 to-[#00A1E0]/11 flex gap-2 mx-auto w-fit px-[10px] py-[5px] rounded-lg items-center"
                        style={{ fontSize: '14px', }}
                    >

                        <span
                            className="bg-gradient-to-r from-[#B183F9] via-[#7C6DD6] to-[#33C0F0] bg-clip-text text-transparent"
                            style={{
                                fontSize: '15px',
                                fontWeight: 300
                            }}
                        >
                            Browse File
                        </span>
                    </div>
                </button>

                {files.length > 0 && (
                    <ul className="mt-4 text-sm text-gray-700 text-left max-w-sm mx-auto">
                        {files.map((file, index) => (
                            <li key={index} className="truncate">
                                📄 {file.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const LetsTalkForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('Form Submitted:', values);
        resetForm();
    };

    return (
        <div
            className={`container w-full ${FORM_BG_COLOR} ${FORM_CONTAINER_CLASSES}`}
            style={{ marginTop: '70px' }}
        >
            <Formik
                initialValues={initialValues}
                validationSchema={LetsTalkFormValidation}
                onSubmit={handleSubmit}
            >
                {({ touched, values, setFieldValue }) => (
                    <Form className="flex flex-col gap-6">

                        {/* Two-Column Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Full Name */}
                            <div className="relative">
                                <label htmlFor="name" className={LABEL_FLOAT_CLASSES}>
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <div className={``}>
                                    <Field
                                        name="name"
                                        component={CustomInput}
                                        placeholder="Enter your full name"
                                        color='white'
                                        specialLabel=""
                                    />
                                </div>
                            </div>
                            {/* Phone Number */}
                            <div className="relative">
                                <label htmlFor="contactNumber" className={LABEL_FLOAT_CLASSES} style={{ zIndex: 60 }}>
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className={`flex items-center ${INPUT_BASE_CLASSES.inputWrapper} p-0 rounded-[15px]`}>

                                    <Field
                                        name="contactNumber"
                                        placeholder="Enter your phone number"
                                        component={CustomPhoneNumberInput}
                                        specialLabel=""
                                        color='white'
                                    />
                                </div>

                            </div>

                            {/* Work Email */}
                            <div className="relative">
                                <label htmlFor="email" className={LABEL_FLOAT_CLASSES}>
                                    Work Email <span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="email"
                                    placeholder="Email Address"
                                    type="email"
                                    variant="flat"
                                    value={values?.email}
                                    onChange={(value) => setFieldValue('email', value)}
                                    component={CustomInput}
                                    color='white'
                                    specialLabel=""

                                    required={true}

                                />

                            </div>

                            {/* Service Dropdown */}
                            <div className="relative">
                                <label htmlFor="service" className={LABEL_FLOAT_CLASSES}>
                                    Service Required <span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="service"
                                    placeholder="Select Service"
                                    value={values.service}
                                    color='white'
                                    options={Services.map((service) => ({
                                        title: service.name,
                                        value: service.value,
                                    }))}
                                    onChange={(value) => setFieldValue('service', value)}
                                    component={CustomSelect}
                                    selectClassNames={CUSTOM_SELECT_CLASSNAMES}
                                />

                            </div>
                        </div>

                        {/* Project Requirement */}
                        <div className="relative">
                            <label htmlFor="projectRequirement" className={LABEL_FLOAT_CLASSES}>
                                Tell Us About Your Project
                            </label>
                             <Field
                                    name="projectRequirement"
                                    placeholder="Briefly describe your project requirements..."
                                    color='white'
                                    component={CustomTextArea}
                                />

                            
                        </div>

                        {/* File Upload Section */}
                        <FileUploadSection />

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full h-[50px] text-white text-lg font-bold rounded-[10px] mt-4 bg-gradient-to-r from-[#3730A3] to-[#38BDF8]"
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LetsTalkForm;
