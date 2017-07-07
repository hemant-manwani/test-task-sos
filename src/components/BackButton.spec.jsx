import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import BackButton from './BackButton';

describe('<BackButton/>', function () {
	let backButtonProps = {};
	let wrapper, spy;
	let testCallback = sinon.spy()

	beforeEach(function() {
		backButtonProps = {
			title: 'back',
			onClick: testCallback,
		}

    wrapper = shallow(<BackButton {...backButtonProps} />);
	})

  it('should have props for title and onClick', function () {
    expect(wrapper.props().title).to.be.defined;
    expect(wrapper.props().onClick).to.be.defined;
  });

	it('should trigger callback function onClick', function() {
		wrapper.find('button').simulate('click')

		expect(testCallback.calledOnce).to.be.true;
	});

});
