import { useSelector } from 'react-redux'

import type { StoreState } from '../store'
import { BsCheck2Circle } from 'react-icons/bs'

const Notification = () => {

  const notification = useSelector(({ notification }: StoreState) => notification)
  // const style: CSS.Properties = {
  //   border: 'solid',
  //   padding: '10',
  //   borderWidth: '1',
  //   backgroundColor: notification && notification.type === 'error'
  //     ? 'red'
  //     : 'blue' 
  // }

  if (notification.message){
    return (
      <div className={`fixed flex items-center right-0 w-full max-w-sm p-4 ${notification.type === 'error' ? 'bg-red-900' : 'bg-blue-900'} text-white rounded-full shadow-xs border border-default`}>
        <BsCheck2Circle />
        <div className="ms-2.5 text-sm border-s border-default ps-3.5">{notification.message}</div>
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Notification