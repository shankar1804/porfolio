'use client'
import Profile from '@/components/profile'
import DetailsCard from '@/components/details_card';
import Topbar from '@/components/topbar/index'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [])
  return (
    <main >
      <Topbar />
      <div className="container" style={{ marginTop: '70px' }} >
        <Profile />
        <DetailsCard />
      </div>
      <div className='light-text' style={{ textAlign: 'end', marginRight: '15px' }}>
        Copyright © Uma Shankar Lakkoju
      </div>
      {loader && <div className="spinner-overlay" id="spinner">
        <div className="spinner"></div>
      </div>}
    </main>
  )
}
