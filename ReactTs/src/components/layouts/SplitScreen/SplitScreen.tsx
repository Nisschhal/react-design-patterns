import { ReactNode } from "react"
import { styled } from "styled-components"

const Container = styled.div`
  display: flex; /* Flex container */
`

const Panel = styled.div<{ flex: number }>`
  border: 1px solid black; /* Visual borders */
  flex: ${(p) => p.flex}; /* Get the flex props*/
`

const SplitScreen = ({
  leftWidth,
  rightWidth,
  children,
}: {
  leftWidth: number
  rightWidth: number
  children: ReactNode[]
}) => {
  const [left, right] = children
  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  )
}

export default SplitScreen
