"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Navbar from './components/navbar'
import Outlet from './components/outlet'
import GridLayout from './components/grid-layout'

export default function Home() {
  return (
    <div>
      <Navbar />
      <GridLayout/>
      {/* <Outlet /> */}
    </div >
  )
}