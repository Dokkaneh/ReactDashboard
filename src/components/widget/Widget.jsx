import './Widget.scss'
import PercentIcon from '@mui/icons-material/Percent';
const Widget = ({ type }) => {
  let data;
  return (
      <div className='widget'>
      <div className="left">
        <span className='title'>Users</span>
        <span className='counter'>2211</span>
        <span className='link'>more info</span>

          </div>
      <div className="right">
        <div className="percentage positive">
        20 <PercentIcon/> </div>
          </div>
    </div>
  )
}

export default Widget