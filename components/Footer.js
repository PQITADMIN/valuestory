import React from 'react'
/**@file Header.js is the footer component for the application. */
function Footer() {
  return (
    <div className="flex w-full items-center justify-between px-8 py-2">
      <div className="flex w-full items-center justify-start space-x-5">
        <p className="text-sm font-semibold">PRIVACY & POLICY</p>
        <p className="text-sm font-semibold">LEGAL</p>
        <p className="text-sm font-semibold">COOKIES</p>
      </div>
      <div>
        <p className="whitespace-nowrap text-sm font-semibold">
          © 2019-2022 PharmaQuant Insights Pvt. Ltd. All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
