'use client'
import React, { useEffect, useState } from 'react'
import WritingBlock from '@/app/components/WritingBlock'
import data from '../../components/data'

const page = () => {
  const [writingData, setWritingData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:4100/data')
    .then(res => {return res.json()})
    .then(data => {return setWritingData(data)})
  }, [])

  const displayCategory = data?.filter((n) => n.category === "Fashion")
  return (
    <div className='text-white lg:pt-10 w-5/6 mx-auto'>
      <p className='text-3xl'>Fashion</p>
      {displayCategory && displayCategory.map(data => {
        return <WritingBlock key={data.id} {...data}/>
      })}
    </div>
  )
}

export default page
