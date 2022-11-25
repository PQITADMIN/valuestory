import React from 'react'
import { AUTH_VALUESTORY } from '../config'
import { useRouter } from 'next/router'

/**@file Header.js is the header component for the application. */

function Header() {
  //* a variable to use useRouter hook
  const router = useRouter()

  const moveToContact = () => {
    router.push('/contactus')
  }
  const moveToLogin = () => {
    console.log(AUTH_VALUESTORY,'navigate to url')
    window.open(AUTH_VALUESTORY, '_self')
  }
  return (
    <div className="z-50 mx-auto flex h-20 w-full max-w-7xl items-center justify-between">
      <div className="relative my-auto ml-3 flex h-10 w-28 cursor-pointer items-center lg:h-14 lg:w-36">
        <p className="font-black text-white sm:text-4xl lg:text-6xl" data-test="logo">
          ValueStory
        </p>
      </div>
      <div className="flex items-center justify-end space-x-2 px-3 lg:space-x-5">
        <button
          data-test="contactus-button"
          className="text-md w-full cursor-pointer whitespace-nowrap text-white lg:text-xl"
          onClick={moveToContact}
        >
          Contact Us
        </button>
        <button
          data-test="signin-button"
          className="text-md w-full cursor-pointer whitespace-nowrap text-white lg:text-xl"
          onClick={moveToLogin}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Header
