// components/LenisScroll.tsx
'use client'

import { useEffect } from 'react'
import { initLenis } from '@/lib/lenis'

export default function LenisScroll() {
  useEffect(() => {
    const lenis = initLenis()

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
