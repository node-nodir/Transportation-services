import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import Image from 'next/image'

function Third() {
  let token = '5702266536:AAFT_kPTv4ZWIJJN1-H5sGH7UmVDLI5bwKc'
  let chatId = '-1001544371098'

  const initialValues = {
    fullName: '',
    email: '',
    number: '',
  }

  const onSubmit = (values: any, { resetForm }: any) => {
    console.log(values)
    resetForm()
  }

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    number: Yup.string().required('Required'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <form
      onSubmit={(e) => {
        formik.handleSubmit(e)
        formik.values = initialValues
      }}
      className="flex flex-col"
      autoComplete="off"
    >
      <label className="mt-1 relative flex flex-col">
        <span className="text-white text-sm font-normal">Full name</span>
        <input
          type="text"
          id="fullName"
          placeholder="Write your  full name"
          className={`h-45 mt-1 text-base rounded-md p-2 sm:p-3 outline-none border-2 mb-3 sm:mb-4 ${
            formik.touched.fullName && formik.errors.fullName
              ? 'border-red-error'
              : ''
          }`}
          {...formik.getFieldProps('fullName')}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <span className="text-red-error text-xs absolute -bottom-1 sm:bottom-0 left-1">
            {formik.errors.fullName}
          </span>
        ) : null}
      </label>
      <label className="relative flex flex-col">
        <span className="text-white text-sm font-normal">Email address</span>
        <input
          type="email"
          id="email"
          placeholder="Write your email address"
          className={`h-45 mt-1 text-base rounded-md p-2 sm:p-3 outline-none border-2 mb-3 sm:mb-4 ${
            formik.touched.email && formik.errors.email
              ? 'border-red-error'
              : ''
          }`}
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="text-red-error text-xs absolute -bottom-1 sm:bottom-0 left-1">
            {formik.errors.email}
          </span>
        ) : null}
      </label>
      <label className="relative flex flex-col">
        <span className="text-white text-sm font-normal">Phone number</span>
        <input
          type="number"
          id="number"
          placeholder="Your phone number"
          className={`h-45 mt-1 text-base rounded-md p-2 sm:p-3 outline-none border-2 mb-3 sm:mb-4 ${
            formik.touched.number && formik.errors.number
              ? 'border-red-error'
              : ''
          }`}
          {...formik.getFieldProps('number')}
        />
        {formik.touched.number && formik.errors.number ? (
          <span className="text-red-error text-xs absolute -bottom-1 sm:bottom-0 left-1">
            {formik.errors.number}
          </span>
        ) : null}
      </label>
      <span className="w-full h-[1px] inline-block bg-black-line_bg mt-6 mb-5"></span>
      <button
        className="bg-orange-main h-56 hover:bg-orange-500 transition-all ease-in-out rounded-lg text-base text-white "
        type="submit"
      >
        Send me the Free Quote Now
      </button>
    </form>
  )
}

export default Third
