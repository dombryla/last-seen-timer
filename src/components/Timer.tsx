import React from "react"

export type TimerProps = {
  lastSeen: number
}
  
export const Timer: React.FC<TimerProps> = ({lastSeen}) =>{
  const [time, setTime] = React.useState<number>()
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      const now = new Date().getTime()
      setTime(Math.floor((now - lastSeen) / 1000))
    }, 1000);
  
    return () => clearInterval(interval)
  }, [lastSeen])
  
  return(
    <div>{time && parseResult(time!)}</div>
  )
}
  
const parseResult = (seconds: number):string =>{
  const minutes = Math.floor(seconds / 60)
  
  if(seconds < 0) return "The time given is from the future"
  if(seconds < 60) return `Last seen ${seconds} seconds ago`
  return `Last seen ${minutes} minutes ago`
}