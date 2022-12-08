import * as Yup from 'yup'
import { useFormik } from 'formik'

function HeroForm() {
  const initialValues = {
    name: '',
  }

  const onSubmit = (values: any) => {
    console.log(values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
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
      className=" flex flex-col"
      autoComplete="off"
    >
      <label className="text-base relative flex flex-col">
        name
        <input
          type="text"
          id="name"
          placeholder="name"
          className={
            formik.touched.name && formik.errors.name
              ? '  h-[45px] w-[399px]  text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600 mb-3 sm:mb-6'
              : '  h-[45px] w-[399px]  text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-3 sm:mb-6'
          }
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
            {formik.errors.name}
          </span>
        ) : null}
      </label>
      <button
        className="h-[45px] w-[399px] border border-gray-400 rounded-xl  text-black-dark  "
        type="submit"
      >
        submit
      </button>
    </form>
  )
}

export default HeroForm;
