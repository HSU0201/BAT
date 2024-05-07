import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Content from '@/components/content'

export default function Index() {
  return (
    <>
      <Head>
        <title>台北市腳踏車</title>
      </Head>
      <Navbar />
      <Content />
    </>
  )
}
