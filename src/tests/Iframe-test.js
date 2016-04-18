//
// @TODO
// This test needs a rewrite to works with mocha!
//
jest.dontMock('./../components/Iframe.jsx');
jest.dontMock('react-classset');
jest.dontMock('d3/d3');

var React, TestUtils, Iframe, iframe;

describe('Time — Iframe', function () {

    beforeEach(function () {
        React     = require('react/addons');
        TestUtils = React.addons.TestUtils;
        Iframe     = require('./../components/Iframe.jsx');
    });


    it('should not display info when none given', function () {
        iframe = TestUtils.renderIntoDocument(<Iframe />);
        var info = TestUtils.findRenderedDOMComponentWithClass(iframe, 'time__iframe__info');
        expect(info.getDOMNode().textContent).toEqual('');
    });


    it('should display given info text when provided', function () {
        iframe = TestUtils.renderIntoDocument(<Iframe info="mozaïk" />);
        var info = TestUtils.findRenderedDOMComponentWithClass(iframe, 'time__iframe__info');
        expect(info.getDOMNode().textContent).toEqual('mozaïk');
    });


    it('should display timezone when info set to `timezone`', function () {
        iframe = TestUtils.renderIntoDocument(<Iframe info="timezone" timezone="America/Los_Angeles" />);
        var info = TestUtils.findRenderedDOMComponentWithClass(iframe, 'time__iframe__info');
        expect(info.getDOMNode().textContent).toEqual('Los Angeles');
    });


    it('should display time when info set to `time`', function () {
        iframe = TestUtils.renderIntoDocument(<Iframe info="time" />);
        var info = TestUtils.findRenderedDOMComponentWithClass(iframe, 'time__iframe__info');
        expect(info.getDOMNode().textContent).toMatch(/^([01]?[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/);
    });
});