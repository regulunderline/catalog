import { useSelector } from 'react-redux'

import type * as CSS from 'csstype'
import type { StoreState } from '../store'

const Notification = () => {

  const notification = useSelector(({ notification }: StoreState) => notification)
  const style: CSS.Properties = {
    border: 'solid',
    padding: '10',
    borderWidth: '1',
    backgroundColor: notification && notification.type === 'error'
      ? 'red'
      : 'blue' 
  }

  if (notification.message){
    return (
      <div style={style}>
        {notification.message}
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Notification