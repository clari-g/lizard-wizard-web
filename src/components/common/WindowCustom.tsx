import React from 'react'
import '../../styles/TitleCard.scss';

type WindowButton = {
  name: 'close' | 'help' | 'minimize' | 'restore' | 'maximize',
  disabled?: boolean
}

type WindowProps = React.PropsWithChildren<{
  windowClass?: String,
  titleBarClass?: String,
  title: String,
  btns?: WindowButton[]
}>;

export const WindowCustom = ({windowClass, titleBarClass, title, btns, children}: WindowProps) => {
  return (
    <div className={`window ${windowClass}`}>
      <div className={`title-bar ${titleBarClass}`}>
        <div className="title-bar-text">{title}</div>

        <div className="title-bar-controls">
          { btns?.map((btn)=>(
              <button aria-label={btn.name} className={btn.name} disabled={btn.disabled}></button>
          ))}
        </div>
      </div>
    
      <div className="window-body">
        {children}
      </div>
    </div>
  )
}
