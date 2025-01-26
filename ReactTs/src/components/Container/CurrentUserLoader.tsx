import axios from "axios"
import React, { ReactNode, useEffect, useState } from "react"

const CurrentUserLoader = ({ children }: { children: ReactNode[] }) => {
  const [user, setUser] = useState<any>(null) // Set an initial state
  useEffect(() => {
    // Correctly invoking the async function
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/current-user")
        setUser(response.data) // Store the user data in state
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }
    console.log(user)

    fetchUser()
  }, []) // Empty dependency array to run once after component mounts

  // Assuming you want to pass `user` data to children:
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { user })
        }
        return child
      })}
    </>
  )
}

export default CurrentUserLoader
