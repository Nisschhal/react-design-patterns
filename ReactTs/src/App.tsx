import SplitScreen from "./components/SplitScreen/SplitScreen"
import Left from "./components/SplitScreen/Left"
import Right from "./components/SplitScreen/Right"
import styled from "styled-components"
import Regular from "./components/List/lists/Regular"
import { authors } from "./data/authors"
import SmallAuthorItems from "./components/List/authors/SmallItems"
import LargeAuthorItems from "./components/List/authors/LargeItems"
import Modal from "./components/Modal/Modal"

const Heading = styled.h1`
  text-align: center;
`

function App() {
  return (
    <>
      <Modal>
        <LargeAuthorItems author={authors[0]} />
      </Modal>
      <Heading>Split Screen</Heading>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <Left title="Small List">
          <Regular
            items={authors}
            sourceName={"author"}
            ItemComponent={SmallAuthorItems}
          />
        </Left>
        <Right title="Large List">
          <Regular
            items={authors}
            sourceName={"author"}
            ItemComponent={LargeAuthorItems}
          />
        </Right>
      </SplitScreen>
    </>
  )
}

export default App
