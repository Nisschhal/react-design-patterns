import { ReactNode, useState } from "react"
import styled from "styled-components"

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000070; /* Corrected background-color */
  width: 100%;
  height: 100%;
`

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
  position: relative;
`

const Button = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`

const Modal = ({ children, user }: { user?: any; children: ReactNode }) => {
  const [show, setShow] = useState(false)
  console.log({ user })
  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Button onClick={() => setShow(false)}>X</Button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  )
}

export default Modal
