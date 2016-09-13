'use strict';
const React = require('react');

let ViperjsNavbar = module.exports = React.createClass({
    displayName: 'ViperjsNavbar',
    render: () => {
        let navbarStyle = {
            background: 'rgba(55,61,73,0.975)',
            color: '#fff',
            boxShadow: 'none',
            position: 'fixed',
            left: '0',
            top: '0',
            width: '100%',
            height: '3.75em',
            zIndex: '10000',
            transition: 'top 0.25s ease-in-out',
            fontSize: '0.9em',
            display: 'block',
            margin: '0',
            padding: '0',
            border: '0',
            verticalAlign: 'baseline',
            boxSizing: 'border-box',
            fontSize: '100%'
        };
        let navbarLeftRightCommonStyle = {
            margin: '0',
            padding: '0',
            border: '0',
            verticalAlign: 'baseline',
            boxSizing: 'border-box',
            position: 'absolute',
            top: '0.5em',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        };
        let h1Style = {
            fontSize: '2em',
            letterSpacing: '-0.5px',
            fontWeight: '600',
            float: 'left',
            lineHeight: '1.375em',
            margin: '0 1.25em 0 0.5em',
            display: 'inline-block',
            padding: '0',
            border: '0',
            verticalAlign: 'baseline',
            boxSizing: 'border-box',
            fontFamily: '"proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif'
        };
        let linksStyle = {
            float: 'left',
            marginLeft: '0.5em'
        };
        let linkStyle = {
            outline: '0',
            transition: 'color 0.2s ease-in-out,border-color 0.2s ease-in-out,background-color 0.2s ease-in-out',
            display: 'inline-block',
            height: '2.75em',
            lineHeight: '2.75em',
            padding: '0 1.5em 0 1.5em',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            fontFamily: '"proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif',
            color: '#fff',
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
                    }, navbarLeftRightCommonStyle)
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
                    }, navbarLeftRightCommonStyle)
                },
                React.createElement(
                    "div", {
                        className: "viperjs-navbar-links",
                        style: linksStyle
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
