import { TitleCard } from './components/common/TitleCard';
import { MenuItem } from './components/common/MenuItem';
import { WindowCustom } from './components/common/WindowCustom';
import './App.scss'
import '98.css';

function App() {

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
      <TitleCard>
        Lizard Webzard <span className='wave-text'>3.0</span>
      </TitleCard>
    </div>
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      <MenuItem title='Pixelart' />
      <MenuItem title='Title Extra' />
      <MenuItem title='Title Extra' />
      <MenuItem title='About' />
    </div>

    <div style={{display: 'flex', justifyContent: 'center'}}>
      <WindowCustom windowClass='warningWindow' title='Attention!' btns={[{name: 'close'}]}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center'}}>
          <img src='/warning.png' />
          <h4>Site under construction</h4>
          <img src='/warning.png' />
        </div>
      </WindowCustom>
    </div>    
    </>
  )
}

export default App
