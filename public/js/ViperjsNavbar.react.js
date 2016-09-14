'use strict';
const React = require('react');

let ViperjsNavbar = module.exports = React.createClass({
    displayName: 'ViperjsNavbar',
    render: function() {
        let commonMarginPaddingVerticalAlignBoxSizingStyle = {
            border: '0',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            verticalAlign: 'baseline',
        };
        let navbarStyle = Object.assign({}, commonMarginPaddingVerticalAlignBoxSizingStyle, {
            background: 'rgba(55,61,73,0.975)',
            color: '#fff',
            fontSize: '100%',
            height: '3.75em',
            left: '0',
            position: 'absolute',
            top: '0',
            width: '100%',
            zIndex: '9999',
        });
        let commonNavbarLeftRightStyle = Object.assign({}, commonMarginPaddingVerticalAlignBoxSizingStyle, {
            overflow: 'hidden',
            position: 'absolute',
            top: '0.5em',
            whiteSpace: 'nowrap',
        });
        let h1Style = Object.assign({}, commonMarginPaddingVerticalAlignBoxSizingStyle, {
            display: 'inline-block',
            fontFamily: '"proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif',
            fontSize: '2em',
            fontWeight: '600',
            letterSpacing: '-0.5px',
            lineHeight: '1.375em',
            margin: '0 0.5em',
        });
        let linkStyle = {
            color: '#fff',
            display: 'inline-block',
            fontFamily: '"proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif',
            fontWeight: '600',
            lineHeight: '2.75em',
            padding: '0 1.5em',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
        };
        return React.createElement(
            "header", {
                className: 'viperjs-navbar',
                style: navbarStyle
            },
            React.createElement(
                "div", {
                    className: "viperjs-navbar-left",
                    style: Object.assign({
                        left: '0.5em'
                    }, commonNavbarLeftRightStyle)
                },
                React.createElement(
                    "h1", {
                        className: 'viperjs-navbar-title',
                        style: h1Style
                    },
                    "ViperJS"
                )
            ),
            React.createElement(
                "div", {
                    className: "viperjs-navbar-right",
                    style: Object.assign({
                        right: '0.5em'
                    }, commonNavbarLeftRightStyle)
                },
                React.createElement(
                    "div", {
                        className: "viperjs-navbar-links",
                    },
                    React.createElement(
                        "a", {
                            href: "/about",
                            className: "viperjs-navbar-link",
                            style: linkStyle
                        },
                        "About"
                    )
                )
            )
        );
    }
});
