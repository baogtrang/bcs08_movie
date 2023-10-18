import React from 'react'
import Banner from './Banner'
import FormLogin from './Form'

export default function Login() {
  return (
    <div className='h-screen bg-orange-600 flex items-center'>
      <div className='container flex bg-white rounded-xl p-10'>
        <Banner/>
        <FormLogin/>
      </div>
    </div>
  )
}
