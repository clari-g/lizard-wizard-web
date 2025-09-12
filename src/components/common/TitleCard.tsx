import React from 'react'
import '../../styles/TitleCard.scss';

type TitleCardProps = React.PropsWithChildren<{}>;

export const TitleCard = ({children}: TitleCardProps) => {
  return (
    <div className='titleCard'>
      {children}
    </div>
  )
}
