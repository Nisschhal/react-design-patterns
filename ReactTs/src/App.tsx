import SplitScreen from "./components/layouts/SplitScreen/SplitScreen"
import Left from "./components/layouts/SplitScreen/Left"
import Right from "./components/layouts/SplitScreen/Right"
import styled from "styled-components"
import Regular from "./components/layouts/List/lists/Regular"
import { authors } from "./data/authors"
import SmallAuthorItems from "./components/layouts/List/authors/SmallItems"
import LargeAuthorItems from "./components/layouts/List/authors/LargeItems"
import Modal from "./components/layouts/Modal/Modal"
import CurrentUserLoader from "./components/Container/CurrentUserLoader"
import UserInfo from "./components/Container/UserInfo"

const Heading = styled.h1`
  text-align: center;
`

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
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
      </CurrentUserLoader>
    </>
  )
}

export default App
