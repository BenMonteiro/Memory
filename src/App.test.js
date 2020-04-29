import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import GuessCount from './GuessCount'
import App from './App'
import Card from './Card'

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />)
    })
    it('contains a zero-guess counter', () => {
        const wrapper = shallow(<App />)

        expect(wrapper).to.contain(<GuessCount guesses={0} />)
    })
})

