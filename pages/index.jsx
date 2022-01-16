import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/Components/Header'
import About from '../src/Components/Home'

export default function Home() {
  return (
    <>
     <section className="all">
     <Header/>
     <About/>
     </section>
    </>
  )
}
