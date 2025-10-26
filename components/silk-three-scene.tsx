"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Silk = dynamic(() => import("./silk-background").then((mod) => mod.default), { 
  ssr: false,
  loading: () => null
})

export function SilkThreeScene() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="w-full h-full bg-transparent" />
  }

  return (
    <Silk 
      speed={8.1} 
      scale={1.1} 
      noiseIntensity={7.3} 
      rotation={2.64} 
      color="#4169E1" 
    />
  )
}




