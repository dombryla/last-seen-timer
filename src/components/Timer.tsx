import React from "react"

export type TimerProps = {
  lastSeen: number
}
  
export const Timer: React.FC<TimerProps> = React.memo(({lastSeen}) =>{
  const [message, setMessage] = React.useState("")

  React.useEffect(()=>{
    const interval = setInterval(()=>{
      const now = new Date().getTime()
      const lastSeenInSeconds = Math.floor((now - lastSeen) / 1000)
      setMessage(convertSecondsToMessage(lastSeenInSeconds))
    }, 1000);
  
    return () => clearInterval(interval)
  }, [lastSeen])

  return <View message={message}></View>
})

type ViewProps = {
  message: string
}

const View: React.FC<ViewProps> = React.memo(({message}) =>{
  return <div>{message}</div>
})

const convertSecondsToMessage = (seconds: number):string =>{
  const minutes = Math.floor(seconds / 60)
  
  if(seconds < 0) return "The time given is from the future"
  if(seconds < 60) return `Last seen ${seconds} seconds ago`
  return `Last seen ${minutes} minutes ago`
}