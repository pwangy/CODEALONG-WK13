import React, { useState} from 'react'
import styled from 'styled-components/native'


`

const App = () => {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
          // something is wrong
          throw `Got error: ${response.status}`
      }
      return response.json()
    })
    .then((json) => {
      // do something interesting with data
    })
    .catch((error) => {
      console.log(error)
    })

    const [count, setCount] = useState(0)
    const onIncrement = () => {
      setCount(count + 1)
      console.log('I has incremented!')
    }

  return (
    <Container>
      <TopContainer>
        <TopHeader>imma counter!</TopHeader>
      </TopContainer>

      <BottomContainer>
        <BottomText>{count}</BottomText>
        <TouchableOpacity onPress={onIncrement}>
          <Text>Add +1</Text>
        </TouchableOpacity>
      </BottomContainer>
    </Container>
  )
}

export default App