import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Content from '@/components/content'

export default function Index() {
  return (
    <>
      <Head>
        <title>蝙蝠移動前端第五題</title>
      </Head>
      <Navbar />
      <Content />
    </>
  )
}
