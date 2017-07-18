import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm />',()=>{

     it('Renders without crashing', () => {
       shallow(<GuessForm />);
   });

   it('Should fire callback when the form is submitted', () => {
       //Spy function that keep a record of each time they have been called
       const callback = jest.fn();
       //mount method to renders the component
       const wrapper = mount(<GuessForm onGuess={callback} />);
       //captured value
       const value = 0;
       wrapper.find('input[type="text"]').node.value = value;
       wrapper.simulate('submit');
       expect(callback).toHaveBeenCalledWith(value.toString());
   });

})
