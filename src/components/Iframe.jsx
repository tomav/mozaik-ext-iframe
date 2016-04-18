import React, { Component } from 'react';
import classSet             from 'react-classset';
import d3                   from 'd3/d3';

var Iframe = React.createClass({
    render() {
        var cs = classSet;

        const { title, url } = this.props;
        const bodyClasses = title ? 'widget__body widget__iframe' : 'full_height';
        const body = (
            <div className={bodyClasses}>
                <iframe src={url} width="100%" height="100%" scrolling="0"></iframe>
            </div>
        );

        if (title) {
            return (
                <div className="full_height">
                    <div className="widget__header">
                        {title}
                        <i className="fa fa-external-link-square" />
                    </div>
                    {body}
                </div>
            );
        } else {
            return body;
        }
    }
});

export default Iframe;
