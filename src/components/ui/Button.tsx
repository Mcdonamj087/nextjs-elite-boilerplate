/** @jsxImportSource @emotion/react */
"use client"

import { Button as AriakitButton } from "@ariakit/react"

export default function Button({
  children,
  ...rest
}: React.ComponentProps<typeof AriakitButton>) {
  return (
    <AriakitButton
      css={{
        backgroundColor: "blue",
        color: "white",
        padding: "0.5rem 1rem",
        borderRadius: "0.25rem",
        border: "none",
      }}
      {...rest}>
      {children}
    </AriakitButton>
  )
}
