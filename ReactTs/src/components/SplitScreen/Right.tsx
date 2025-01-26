import { ReactNode } from "react"

const Right = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}

export default Right
