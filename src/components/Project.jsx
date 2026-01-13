import React from 'react'

const Project = ({headline='',title='',description=''}) => {
  return (
    <div className='project w-full min-h-[200px]'>
        <div className="mobile w-full  flex gap-6 flex-col justify-center items-start">
            <div className="headline">
                <p className='text-xs uppercase sectra-light tracking-[.16rem] text-amber-500'>{headline}</p>
            </div>
            <div className="heading">
                <h1 className='sectra-light text-4xl'>{title}</h1>
            </div>
            <div className="description w-full h-40">
                <p className='text-xl whitespace-normal w-full h-full heebo-light'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus repellat neque iusto placeat quos necessitatibus corrupti molestias impedit sapiente laboriosam
                </p>
            </div>
        </div>
    </div>
  )
}

export default Project