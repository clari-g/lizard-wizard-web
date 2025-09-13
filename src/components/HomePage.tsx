import { WindowCustom } from './common/WindowCustom';

function HomePage() {

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <WindowCustom windowClass='warningWindow' title='Attention!' btns={[{name: 'close'}]}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center'}}>
          <img src='/warning.png' />
          <h4>Site under construction</h4>
          <img src='/warning.png' />
        </div>
      </WindowCustom>
    </div>
  )
}

export default HomePage
