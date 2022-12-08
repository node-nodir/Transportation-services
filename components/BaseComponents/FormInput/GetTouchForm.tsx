import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios';


interface Props {}

function GetTouchForm(props: Props) {
  const {} = props

  const initialValues = {
    name: '',
    email: '',
    number: '',
    comment: ''
  }

  let token = '5702266536:AAFT_kPTv4ZWIJJN1-H5sGH7UmVDLI5bwKc'
  let chatId = '-1001544371098'

  const onSubmit = (values: any, {resetForm}: any ) => {

    let fullText = `\u{2705} Full Name: ${values.name}%0A\u{2705} Email: ${values.email} %0A\u{2705} Phone Number: ${values.number} %0A\u{2705} Comments:${values.comment}`;

    // --- Sent Telegram Bot
    axios.post(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`
    );

    resetForm();
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
    <div className="max-w-[500px] mt-[50px] tablet:mt-0 tablet:max-w-[543px] w-full bg-[#1F1F1F] 500:bg-blurForm 500:backdrop-blur-lg 500:rounded-10 px-[30px] py-6">
      <h1 className="font-bold  text-3xl leading-9 text-white">Contact us</h1>
      <hr className="mt-5 mb-6 text-gray-line" />
      <form
        onSubmit={(e) => {
          formik.handleSubmit(e)
          formik.values = initialValues
        }}
        className=" flex flex-col "
        autoComplete="off"
      >
        <label className=" mt-2  relative flex flex-col">
          <span className="text-white text-sm font-normal">Full name</span>
          <input
            type="text"
            id="name"
            placeholder="Write your full name"
            className={
              formik.touched.name && formik.errors.name
                ? '  h-[45px] mt-2 text-base rounded-[3px] p-2 sm:p-3 outline-none border-2 border-red-700 mb-3 sm:mb-6 '
                : '  h-[45px] mt-2 text-base rounded-[3px] p-2 sm:p-3 outline-none  mb-3 sm:mb-6 '
            }
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 ">
              {formik.errors.name}
            </span>
          ) : null}
        </label>

        <div className="flex flex-col tablet:flex-row justify-between ">
          <label className=" relative flex flex-col tablet:max-w-[236px]">
            <span className="text-white text-sm font-normal">
              Email address
            </span>
            <input
              type="email"
              id="email"
              placeholder="Write your email address"
              className={
                formik.touched.email && formik.errors.email
                  ? '  h-[45px] mt-2 text-base rounded-[3px] p-2 sm:p-3 outline-none border-2 border-red-700 mb-3 sm:mb-6 '
                  : '  h-[45px] mt-2 text-base rounded-[3px] p-2 sm:p-3 outline-none  mb-3 sm:mb-6 '
              }
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 ">
                {formik.errors.email}
              </span>
            ) : null}
          </label>
          <label className="relative flex flex-col tablet:max-w-[236px]">
            <span className="text-white text-sm font-normal">Phone number</span>
            <input
              type="number"
              id="number"
              placeholder="Your phone number"
              className={
                formik.touched.number && formik.errors.number
                  ? '  h-[45px] mt-2 text-base rounded-[3px] p-2 sm:p-3 outline-none border-2 border-red-700 mb-3 sm:mb-6 '
                  : '  h-[45px] mt-2 text-base rounded-[3px] p-2 sm:p-3 outline-none  mb-3 sm:mb-6 '
              }
              {...formik.getFieldProps('number')}
            />
            {formik.touched.number && formik.errors.number ? (
              <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 ">
                {formik.errors.number}
              </span>
            ) : null}
          </label>
        </div>

        <label className=" relative flex flex-col">
          <span className="text-white text-sm font-normal">
            Brief information
          </span>
          <textarea
            id="comment"
            placeholder="Comment"
            className={
              formik.touched.comment && formik.errors.comment
                ? '  h-[100px] mt-2 text-base rounded-[3px] p-2 sm:p-3 outline-none border-2 border-red-700 mb-3 sm:mb-6 '
                : '  h-[100px] mt-2 text-base rounded-[3px] p-2 sm:p-3 outline-none  mb-3 sm:mb-6 '
            }
            {...formik.getFieldProps('comment')}
          />
          {formik.touched.comment && formik.errors.comment ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 ">
              {formik.errors.comment}
            </span>
          ) : null}
        </label>
        <hr className="w-full text-[#989898] mb-5" />
        <button
          className="bg-orange-main h-[56px] hover:bg-orange-500 transition-all ease-in-out rounded-lg text-base text-white "
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default GetTouchForm
