import '../../styles/MenuItem.scss';

type MenuItemProps = {
    title: String
}

export const MenuItem = ({title}: MenuItemProps) => {
  return (
    <div className='menuItem'>
        {title}
    </div>
  )
}
