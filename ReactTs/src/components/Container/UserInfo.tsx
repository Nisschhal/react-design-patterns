const UserInfo = ({ user }: { user?: any }) => {
  const { name, age, country } = user || {}

  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </>
  ) : (
    <h1>Loading...</h1>
  )
}

export default UserInfo
