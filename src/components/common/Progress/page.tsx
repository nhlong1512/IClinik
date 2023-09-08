import React from 'react'

interface IProps {
    title: string;
    color: string;
    percent: number;
    className?: string;
}

const Progress = ({percent, title, color, className}:IProps) => {
  return (
    <div className={`flex w-[100%] justify-between h-full items-center ${className ? className : ''}`}>
        <div className={`flex justify-between items-center px-[30px] py-[8px] h-full`} style={{ background: color, width: `${percent}%`, overflow: 'hidden' }}>
            <p className=''>
                {title}
            </p>
            <p className=''>
                {`${percent} %`}
            </p>
        </div>
        <div className={`bg-white_cloud h-full py-[8px] w-[${100-percent}%]`} style={{ width: `${100 - percent}%` }}>
            {`.`}
        </div>
    </div>
  )
}

export default Progress