import React from 'react';
import {shallow} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('Renders an array of guessed numbers', () => {
        const gueses = [0, 1, 2,3];

        const wrapper = shallow(<GuessList guesses={gueses} />);

        const elements = wrapper.find('li');

        expect(elements.length).toEqual(gueses.length);
        gueses.forEach((value, index) => {
            expect(elements.at(index).text()).toEqual(value.toString());
        });
    });
});
