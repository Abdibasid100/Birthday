import React from 'react'

const List = ({people}) => {
  return (
    <div>
      {people.map((person)=>{
        const {id, image, name, age} = person;
        return <div key={id} className='my-2'>
            <div className='flex items-center justify-start'>
                <img className='rounded-full w-20 h-20' src={image} />
                <div className='ml-4 flex flex-col items-start'>
                    <h1 className='text-xl'>{name}</h1>
                    <span>{age} Years</span>
                </div>
            </div>
        </div>
      })}
    </div>
  )
}

export default List
