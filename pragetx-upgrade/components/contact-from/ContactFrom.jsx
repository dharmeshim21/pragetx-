'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Input, Textarea } from '@heroui/react';
import CustomSelect from '@/shared/customFormField/CustomSelect';
import { CustomInput, CustomPhoneNumberInput, CustomTextArea } from '@/shared/customFormField';

// --- STYLING CONSTANTS ---
const FORM_BG_COLOR = 'bg-[#191919]';

const INPUT_BASE_CLASSES = {
  base: "sm:w-[492px] w-[300px] lg:w-[600px] 2xl:w-[480px] h-[60px] bg-black text-white rounded-[15px] p-0",
  inputWrapper:
    "bg-black shadow-none border-none h-[60px] rounded-[15px] !p-0 " +
    "group-data-[focus-visible=true]:z-0 group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0 " +
    "data-[hover=true]:bg-black data-[focus=true]:bg-black",
  input: "placeholder:text-[16px] h-full rounded-[15px] px-[15px] py-0 focus-visible:outline-none ",
  selectorIcon: "text-white",
};

// --- Validation Schema ---
const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  contactNumber: Yup.string().required('Phone number is required'),
});

// --- Services ---
const Services = [
  { name: 'Digital Marketing', value: 'digital marketing' },
  { name: 'Branding', value: 'branding' },
  { name: 'QA & Testing', value: 'qa & testing' },
  { name: 'UI/UX Designing', value: 'ui/ux designing' },
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

const CUSTOM_SELECT_CLASSNAMES = {
  base: "sm:w-[492px] w-[300px] lg:w-[600px] 2xl:w-[480px] h-[60px]", // ✅ added same widths
  trigger:
    "h-[60px] w-full rounded-[15px] bg-black text-white px-[15px] shadow-none border-none focus:outline-none focus:ring-0",
  value: "text-white text-[16px]",
  label: "text-white",
  innerWrapper: "text-white",
  selectorIcon: "text-white absolute right-[15px]",
  listbox:
    "bg-[#F2F2F2] text-black rounded-[15px] py-1 overflow-y-auto max-h-[200px] scrollbar-hide w-full", // ✅ full width dropdown
  popoverContent: "bg-[#F2F2F2] rounded-[15px] w-full", // ✅ full width dropdown
};


// --- Initial Values ---
const initialValues = {
  name: '',
  email: '',
  contactNumber: '',
  service: '',
  projectRequirement: '',
};

export default function ContactForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form Submitted:', values);
    resetForm();
  };

  return (
    <div
      className={`py-[32px] px-[10px] md:px-[25px] 2xl:w-[100%]   ${FORM_BG_COLOR} mx-auto rounded-[20px] mt-[20px]`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className="flex flex-col gap-6 ">


            <Field
              name="name"
              placeholder="Full Name"
              color='black'
              required={true}
              component={CustomInput}
            />


            <Field
              name="contactNumber"
              placeholder="Enter your phone number"
              component={CustomPhoneNumberInput}
              specialLabel=""

              color='black'
            />


            <Field
              name="email"
              placeholder="Email Address"
              type="email"
              variant="flat"
              value={values?.email}
              onChange={(value) => setFieldValue('email', value)}
              component={CustomInput}
              color='black'
              required={true}

            />

            {/* 4. Service Dropdown */}
            <Field
              name="service"
              placeholder="Select Service"
              value={values.service}
              color='black'
              required={true}
              options={Services.map((service) => ({
                title: service.name,
                value: service.value,
              }))}
              onChange={(value) => setFieldValue('service', value)}
              component={CustomSelect}
            />


            <Field
              name="projectRequirement"
              placeholder="Tell Us About Your Project"
              variant="flat"
              component={CustomTextArea}
            />

            {/* 6. Submit Button */}
            <div className="flex items-center justify-end pt-4">
              <Button
                variant="flat"
                radius="none"
                color="default"
                type="submit"
                className="bg-transparent text-[22px] h-auto justify-center font-semibold p-0 flex items-center"
              >
                <span className="bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] bg-clip-text text-transparent">
                  Book a FREE trial
                </span>
                <span>
                  <Image src="/homescreen/IconArrowUp.svg" alt="->" height={30} width={30} />
                </span>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
