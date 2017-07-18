import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe ('<GuessCount />',()=>{

     it('Renders without crashing', () => {
      shallow(<GuessCount />);
  });

  it('It Renders the count property correctly', () => {
        //users enter number from input (uncontrolled so it doesnt get saved on the state)
        const numberGuessed = 5;
        // using ref the number gets rendered into propert
        const wrapper = shallow(<GuessCount count={numberGuessed} />);
        expect(wrapper.text()).toEqual(`Guess #${numberGuessed}!`);
    });


})
