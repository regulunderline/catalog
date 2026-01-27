import type { ReactElement } from "react"

const Badge = ({ icon, text } : { icon: ReactElement, text: string }) => {
  return (
    <div className="relative inline-block">
      <span>{icon}</span>
        <span className="absolute top-7 -right-2
          inline-flex items-center justify-center
          w-5 h-5
          text-xs font-bold leading-none text-white 
          transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full"
        >{text}</span>
    </div>
  )
}

export default Badge