import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState } from 'react'

function HeroForm() {
  const [date, setDate] = useState("")

  const initialValues = {
    from: '',
    to: '',
    time: '',
  }

  const onSubmit = (values: any) => {
    console.log(values)
  }

  const validationSchema = Yup.object({
    from: Yup.string().required('Required'),
    to: Yup.string().required('Required'),
    time: Yup.string().required('Required'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })


  console.log(date);

  return (
    <form
      onSubmit={(e) => {
        formik.handleSubmit(e)
        formik.values = initialValues
      }}
      className="flex flex-col"
      autoComplete="off"
    >
      <label className="text-15 relative flex flex-col text-white">
        From
        <input
          type="text"
          id="from"
          placeholder="Select ZIP code or location"
          className={
            `h-45 w-full text-black-inputPlaceholderColor text-15 rounded-lg px-4 mt-1 outline-none border-2 border-white mb-4 ${formik.touched.from && formik.errors.from ? "border-red-error" : "border-white"}`
          }
          {...formik.getFieldProps('from')}
        />
        {formik.touched.from && formik.errors.from ? (
          <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-0 left-1">
            {formik.errors.from}
          </span>
        ) : null}
      </label>
      <label className="text-15 relative flex flex-col text-white">
        To
        <input
          type="text"
          id="name"
          placeholder="Select ZIP code or location"
          className={
            `h-45 w-full text-black-inputPlaceholderColor text-15 rounded-lg px-4 mt-1 outline-none border-2 mb-4 ${formik.touched.to && formik.errors.to ? "border-red-error" : "border-white"}`
          }
          {...formik.getFieldProps('to')}
        />
        {formik.touched.to && formik.errors.to ? (
          <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-0 left-1">
            {formik.errors.to}
          </span>
        ) : null}
      </label>
      <label className="text-15 relative flex flex-col text-white">
        Estimate time
        <input
          type="date"
          id="name"
          min={"2022-12-08"}
          placeholder="Select estimate time"
          className={
            `h-45 w-full text-black-inputPlaceholderColor text-15 rounded-lg px-4 mt-1 outline-none border-2 border-white mb-4 ${formik.touched.time && formik.errors.time ? "border-red-error" : "border-white"}`
          }
          {...formik.getFieldProps('time')}
        />

        {formik.touched.time && formik.errors.time ? (
          <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-0 left-1">
            {formik.errors.time}
          </span>
        ) : null}
      </label>
      <span className="w-full h-[1px] inline-block bg-black-line_bg mt-4"></span>
      <button
        className="h-45 w-full rounded-lg bg-bg_color mt-5 text-white text-base"
        type="submit"
      >
        Get Shipment estimate
      </button>
    </form>
  )
}

export default HeroForm;
