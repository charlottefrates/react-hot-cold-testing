import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';


describe ('<Game>', ()=>{

     it('Renders without crashing', () => {
        shallow(<Game />);
    });


    it('Has the following state',()=>{
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [0, 1, 2, 3],
            feedback: 'Yay you are right',
            correctAnswer: 3 // Negative so different to new game
        });

    })

    it('Can guess a number',()=>{
        const wrapper = shallow(<Game />);
        // Set the correctAnswer so we know what we're aiming for
        wrapper.setState({
            correctAnswer: 100
        });

        wrapper.instance().guess(25);
        expect(wrapper.state('guesses')).toEqual([25]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

        wrapper.instance().guess(60);
        expect(wrapper.state('guesses')).toEqual([25, 60]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

        wrapper.instance().guess(80);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm');

        wrapper.instance().guess(95);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().guess(100);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');

    })

    it('Can make a new game',()=>{
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [],
            feedback: '',
            correctAnswer: 0
        });
        wrapper.instance().newGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);

    })

})
