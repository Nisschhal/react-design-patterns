const SmallAuthorItems = ({ author }: { author: any }) => {
  const { name, age } = author
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  )
}

export default SmallAuthorItems
