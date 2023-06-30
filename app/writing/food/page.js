'use client'
import WritingBlock from '@/app/components/WritingBlock'
import React, { useEffect, useState } from 'react'
import data from '../../components/data'

const page = () => {
    const [writingData, setWritingData] = useState(null)
    useEffect(() => {
      fetch('http://localhost:4100/data')
      .then(res => {return res.json()})
      .then(data => {return setWritingData(data)})
    }, [])
  
    const displayCategory = data?.filter((n) => n.category === "Food")
    return (
      <div className='text-white lg:pt-10 w-5/6 mx-auto'>
        <p className='text-3xl'>Food</p>
        {displayCategory && displayCategory.map(data => {
          return <WritingBlock key={data.id} {...data}/>
        })}
      </div>
    )
}

export default page
