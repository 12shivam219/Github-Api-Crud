import React, { Children } from 'react'
import Header from '../components/Header/Header'

export default function CommonContainer({children}) {
  return (
    <>
    <Header/>
    {children}

    </>
  )
}
