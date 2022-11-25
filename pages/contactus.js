import Image from 'next/image'
import React, { useState } from 'react'
import contact from '../assets/contact.svg'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import axios from 'axios'
import localAxios from '../components/axios'
import 'react-phone-input-2/lib/style.css'
import { LOCATION_API } from '../config'
import Header from '../components/Header'
import Footer from '../components/Footer'

/**@file contactus.js contains the form for contacting us*/

function contactus({ country }) {
  //* this is used for form validation using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: { name: '', email: '', phone: '', message: '' },
  })

  //* since phone input is not a normal input tag. we have used a third party library for it. so we have used a separate variable for it.
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState(false)
  const onSubmit = handleSubmit(async (formData) => {
    //* if phone number is not there
    if (!phoneNumber) {
      setPhoneNumberError(true)
      return
    } else {
      //* if everything is there make the api call
      let temp = { ...formData, contact: phoneNumber }
      await localAxios.post('/contact_us', temp)
    }
  })

  return (
    <div className="h-screen bg-white pt-20">
      <div
        className="fixed top-0 z-50 w-full bg-[#3a3a3a50]"
        data-test="header"
      >
        <Header />
      </div>
      <div className="relative mx-auto mt-5 rounded-xl bg-primary-500 shadow-2xl sm:max-h-[600px] sm:max-w-[1080px]">
        <div className="invisible absolute bottom-0 h-96 w-80 rounded-tr-full bg-white pr-16 pt-16 lg:visible">
          <div className="relative h-72 w-72">
            <Image src={contact} layout="fill" objectFit="contain" />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center pb-9 lg:ml-96"
          data-test="contactus-form"
        >
          <h1 className="py-6 text-right text-4xl font-semibold text-white">
            Get in Touch
          </h1>
          <form
            className="flex max-w-md flex-col rounded-lg bg-white p-8 shadow-xl"
            type="submit"
            onSubmit={onSubmit}
          >
            <label className="mb-3 flex flex-col items-start justify-start sm:flex-row sm:items-center">
              <p className="text-md w-16 flex-shrink-0 whitespace-nowrap text-black lg:w-24 lg:text-xl">
                Name
              </p>
              <input
                {...register('name', {
                  required: 'Name is required',
                })}
                className="input mt-2 sm:my-0 sm:ml-5"
                type="text"
                placeholder="Your full name"
                autoComplete="off"
                data-test="name-input"
              />
            </label>
            <p
              className="mb-3 text-xs text-red-500 md:text-sm"
              data-test="name-error"
            >
              {errors?.name?.message}
            </p>
            <label className="mb-3 flex flex-col items-start justify-start sm:flex-row sm:items-center">
              <p className="text-md w-16 flex-shrink-0 whitespace-nowrap  text-black lg:w-24 lg:text-xl">
                Email
              </p>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Invalid email',
                  },
                })}
                className="input mt-2 sm:my-0 sm:ml-5"
                type="email"
                placeholder="Ex. james@bond.com"
                autoComplete="off"
                data-test="email-input"
              />
            </label>
            <p
              className="mb-3 text-xs text-red-500 md:text-sm"
              data-test="email-error"
            >
              {errors?.email?.message}
            </p>
            <label className="mb-3 flex flex-col items-start justify-start sm:flex-row sm:items-center">
              <p className="text-md w-16 flex-shrink-0 whitespace-nowrap  text-black lg:w-24 lg:text-xl">
                Contact
              </p>
              <div data-test="phone-input">
                <PhoneInput
                  className="mt-2 sm:my-0 sm:ml-5"
                  country={country}
                  value={phoneNumber}
                  onChange={(phone) => {
                    if (!phone || phone.length < 4) {
                      setPhoneNumberError(true)
                    } else {
                      setPhoneNumberError(false)
                    }
                    setPhoneNumber(phone)
                  }}
                  inputProps={{
                    className: 'input sm:my-0 pl-12',
                  }}
                  buttonStyle={{ borderWidth: '1px', borderColor: '#4f46e5' }}
                />
              </div>
            </label>
            {phoneNumberError && (
              <p
                className="mb-3 text-xs text-red-500 md:text-sm"
                data-test="phone-error"
              >
                Invalid Contact
              </p>
            )}
            <label className="mb-3 flex flex-col items-start justify-start sm:flex-row sm:items-center">
              <p className="text-md w-16 flex-shrink-0 whitespace-nowrap text-black lg:w-24 lg:text-xl">
                Message
              </p>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows="3"
                cols="24"
                className="input mt-2 sm:my-0 sm:ml-5"
                placeholder="Type your message here"
                autoComplete="off"
                data-test="message-input"
              ></textarea>
            </label>
            <p
              className="mb-3 text-xs text-red-500 md:text-sm"
              data-test="message-error"
            >
              {errors?.message?.message}
            </p>

            <button
              className={`button`}
              onClick={onSubmit}
              data-test="submit-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <div className="fixed bottom-0 z-50 w-full bg-white">
        <Footer />
      </div> */}
    </div>
  )
}

export default contactus

// this is a server-side function to get the ip address of the user
export async function getServerSideProps(context) {
  let country = await axios.get(LOCATION_API)

  return {
    props: {
      country: country.data.countrycode.toLowerCase(),
    },
  }
}
