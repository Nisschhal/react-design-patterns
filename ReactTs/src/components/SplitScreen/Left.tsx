import { ReactNode } from "react"

const Left = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}

export default Left
