import React from "react"

const Regular = ({
  items,
  sourceName,
  ItemComponent,
}: {
  items: any
  sourceName: any
  ItemComponent: React.ElementType
}) => {
  return (
    <>
      {items.map((item: any, i: number) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  )
}

export default Regular
