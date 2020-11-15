import React from 'react'
import LottieView from 'lottie-react-native'

import { Container } from './Container'

export const Lottie = ({ route }) => {
    return (
      <Container>
          <LottieView source={require('../assets/animation.json')} autoPlay />
      </Container>
    )
}