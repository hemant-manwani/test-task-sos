import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NextButton from './NextButton';

describe('<NextButton/>', function () {
	let nextButtonProps = {};
	let wrapper;

	beforeEach(function() {
		nextButtonProps = {
			title: 'Next',
      disabled: false,
		}

    wrapper = shallow(<NextButton {...nextButtonProps} />);
	})

  it('should have props for title and disabled', function () {
    expect(wrapper.props().title).to.be.defined;
    expect(wrapper.props().disabled).to.be.defined;
  });

});
