import Image from 'next/image'
import React from 'react'
import GetTouchForm from '../BaseComponents/FormInput/GetTouchForm'

interface Props {}

function GetTouch(props: Props) {
  const {} = props

  

  return (
    <div className="w-full h-screen bg-getTouch_bg bg-cover bg-no-repeat  750:py-20 ">
      <div className="max-w-[1200px] mx-auto 500:px-5 flex flex-col 750:flex-row 750:justify-between  ">
        <div className="px-5 500:px-0 mt-7 tablet:mt-24">
          <h1 className=" text-[28px] sm:text-[30px] tablet:text-[38px] text-white leading-10 font-bold">
            Get in Touch
          </h1>
          <p className=" text-15 tablet:text-base text-white leading-6 mr-2  font-normal mt-4">
            Our professional agents will get in touch with quickly.
          </p>
          <div className="mt-[40px] tablet:mt-9 flex">
            <Image
              src={'/Images/getTouch/call.svg'}
              width={38}
              height={38}
              alt="call"
              priority={true}
            />
            <a href="/" className="ml-5">
              <p className="text-15 leading-5 text-gray-text">Phone Number</p>
              <span className="text-white text-lg  font-semibold">
                +1 (513) 264-2969
              </span>
            </a>
          </div>
          <hr className="w-64 text-[#989898] my-5" />
          <div className="mt-9 flex">
            <Image
              src={'/Images/getTouch/mail.svg'}
              width={38}
              height={38}
              alt="call"
              priority={true}
            />
            <a href="/" className="ml-5">
              <p className="text-sm leading-5 text-gray-text">Email address</p>
              <span className="text-white text-base tablet:text-lg  font-semibold">
                +1 (513) 264-2969
              </span>
            </a>
          </div>
        </div>

        <GetTouchForm />
      </div>
    </div>
  )
}

export default GetTouch
