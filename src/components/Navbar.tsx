import { TitleCard } from './common/TitleCard';
import { MenuItem } from './common/MenuItem';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
      <TitleCard>
        <Link to={'/'}>Lizard Webzard <span className='wave-text'>3.0</span></Link>
      </TitleCard>
    </div>
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      <MenuItem title='Pixelart' />
      <MenuItem title='Title Extra' />
      <MenuItem title='Title Extra' />
      <MenuItem title='About' />
    </div> 
    </>
  )
}

export default Navbar
