"use client"

/**
 * Emotion with `css` prop isn't fully supported by Next SWC compiler.
 * https://github.com/emotion-js/emotion/issues/2928#issuecomment-1293012737
 */
import { useRef, useState } from "react"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { useServerInsertedHTML } from "next/navigation"

export default function EmotionStyleRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "mm" })
    cache.compat = true
    return cache
  })

  const isServerInserted = useRef(false)

  useServerInsertedHTML(() => {
    if (!isServerInserted.current) {
      isServerInserted.current = true
      return (
        <style
          data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
          dangerouslySetInnerHTML={{
            __html: Object.values(cache.inserted).join(" "),
          }}
        />
      )
    }
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
