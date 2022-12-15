import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import Image from 'next/image'

function Third() {
  let token = '5702266536:AAFT_kPTv4ZWIJJN1-H5sGH7UmVDLI5bwKc'
  let chatId = '-1001544371098'

  const initialValues = {
    name: '',
    email: '',
    number: '',
    comment: '',
  }

  const onSubmit = (values: any, { resetForm }: any) => {
    let fullText = `\u{2705} Full Name: ${values.name}%0A\u{2705} Email: ${values.email} %0A\u{2705} Phone Number: ${values.number} %0A\u{2705} Comments:${values.comment}`

    // --- Sent Telegram Bot
    axios.post(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`,
    )

    resetForm()
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    number: Yup.string().required('Required'),
    comment: Yup.string().required('Required'),
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
        <span className="text-white text-sm font-normal">Year</span>
        <input
          type="text"
          id="name"
          placeholder="Select a year"
          className={`h-45 mt-1 text-base rounded-md p-2 sm:p-3 outline-none border-2 mb-3 sm:mb-4 ${formik.touched.name && formik.errors.name
            ? 'border-red-error'
            : ''
            }`}
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <span className="text-red-error text-xs absolute -bottom-1 sm:bottom-0 left-1">
            {formik.errors.name}
          </span>
        ) : null}
      </label>
      <label className="relative flex flex-col">
        <span className="text-white text-sm font-normal">Make</span>
        <input
          type="email"
          id="email"
          placeholder="Select a make"
          className={`h-45 mt-1 text-base rounded-md p-2 sm:p-3 outline-none border-2 mb-3 sm:mb-4 ${formik.touched.email && formik.errors.email
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
        <span className="text-white text-sm font-normal">Model</span>
        <input
          type="number"
          id="number"
          placeholder="Select a model"
          className={`h-45 mt-1 text-base rounded-md p-2 sm:p-3 outline-none border-2 mb-3 sm:mb-4 ${formik.touched.number && formik.errors.number
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
        Send
      </button>
    </form>
  )
}

export default Third;
