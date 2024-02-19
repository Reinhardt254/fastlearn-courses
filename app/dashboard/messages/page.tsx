import React from 'react'
import TableMessages from '../(admin-components)/message-table'
import prismadb from '@/lib/prismadb'

const Messages = async () => {

  const data = await prismadb.message.findMany()

  return (
    <div className='min-h-screen w-full flex justify-center'>
      <div className='w-2/3'>
        <div>
        <div className="mt-5">
            <p className='text-5xl font-extralight text-black'>Messages</p>
         </div>
         <div className='mt-5'>
          <TableMessages data={data}/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
