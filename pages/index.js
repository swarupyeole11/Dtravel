import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"

const style ={
  wrapper: `h-screen w-screen flex flex-col`
}

export default function Home() {
  return (
      <>

          <div className={style.wrapper}>
               <Navbar/>
              <div className={style.main}>
                {/* map */}
              </div>

              <div className={style.rideRequestContainer}>
                   <div className={style.rideRequest}>
                      {/* location selector */}
                      {/* confirm ride  */}
                   </div>
              </div>

            </div>           
           
      </>
  )
}
