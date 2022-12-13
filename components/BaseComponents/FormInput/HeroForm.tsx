import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import axios from 'axios'

const env = process.env.NEXT_PUBLIC_TOKEN

function HeroForm() {
  const [open, setOpen] = useState("")
  const [close, setClose] = useState("")

  const initialValues = {
    from: '',
    to: '',
    date: '',
  }

  const onSubmit = (values: any) => {
    console.log(values, open, close)
  }

  const validationSchema = Yup.object({
    from: Yup.string().required('Required'),
    to: Yup.string().required('Required'),
    date: Yup.string().required('Required'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  // -----> Get Zip Codes
  // useEffect(() => {
  //   axios.get(`${env}zip-codes120zip=10`).then(res => console.log(res))
  // }, [])

  function dayBefore() {
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getUTCMonth() + 1;
    let year = date.getUTCFullYear();
    return year + '-' + month + '-' + day
  }

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
            `input_bg h-45 w-full text-black-inputPlaceholderColor text-15 rounded-md pl-9 mt-1 outline-none border-2 mb-4 ${formik.touched.from && formik.errors.from ? "border-red-error" : "border-white"}`
          }
          {...formik.getFieldProps('from')}
        />
        {formik.touched.from && formik.errors.from ? (
          <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-0 left-1">
            {formik.errors.from}
          </span>
        ) : null}
        <div>

        </div>
      </label>
      <label className="text-15 relative flex flex-col text-white">
        To
        <input
          type="text"
          id="name"
          placeholder="Select ZIP code or location"
          className={
            `input_bg h-45 w-full text-black-inputPlaceholderColor text-15 rounded-md pl-9 mt-1 outline-none border-2 mb-4 ${formik.touched.to && formik.errors.to ? "border-red-error" : "border-white"}`
          }
          {...formik.getFieldProps('to')}
        />
        {formik.touched.to && formik.errors.to ? (
          <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-0 left-1">
            {formik.errors.to}
          </span>
        ) : null}
      </label>
      <label className="text-15 relative flex flex-col text-white" htmlFor="date">
        Estimate time
        <input
          type="date"
          id="date"
          min={dayBefore()}
          placeholder="Select estimate time"
          className={
            `date_bg date h-45 w-full text-black-inputPlaceholderColor text-15 rounded-md pl-10 pr-3 mt-1 outline-none border-2 mb-4 ${formik.touched.date && formik.errors.date ? "border-red-error" : "border-white"}`
          }
          {...formik.getFieldProps('date')}
        />

        {formik.touched.date && formik.errors.date ? (
          <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-0 left-1">
            {formik.errors.date}
          </span>
        ) : null}
      </label>
      <div className=''>
        <h3 className='text-15 text-white'>Vehicle</h3>
        <div className='grid grid-cols-2 gap-4 mt-1'>
          <div className="flex items-center pl-4 rounded-xl border-2 h-45 border-white bg-white cursor-pointer">
            <input onChange={(e) => setOpen(e.target.value + " " + "open")} id="bordered-radio-1" type="radio" name="bordered-radio" className="w-7 h-7 border border-[#D3D3D3] accent-amber-600 cursor-pointer" />
            <label htmlFor="bordered-radio-1" className="py-4 ml-2 w-full text-base font-medium text-gray-900 cursor-pointer">Open</label>
          </div>
          <div className="flex items-center pl-4 rounded-xl border-2 h-45 border-white bg-white cursor-pointer">
            <input onChange={(e) => setClose(e.target.value + " " + "close")} checked id="bordered-radio-2" type="radio" name="bordered-radio" className="w-7 h-7 border border-[#D3D3D3] accent-amber-600 cursor-pointer" />
            <label htmlFor="bordered-radio-2" className="py-4 ml-2 w-full text-base font-medium text-gray-900 cursor-pointer">Enclosed</label>
          </div>
        </div>
      </div>
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
