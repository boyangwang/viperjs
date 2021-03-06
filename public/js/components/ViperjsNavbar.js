import React from 'react';

class ViperjsNavbar extends React.Component {
    render() {
        const commonMarginPaddingVerticalAlignBoxSizingStyle = {
            border: '0',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            verticalAlign: 'baseline',
        };
        const navbarStyle = Object.assign({}, commonMarginPaddingVerticalAlignBoxSizingStyle, {
            background: 'rgb(47, 49, 41)',
            color: '#fff',
            fontSize: '100%',
            height: '3.75em',
            left: '0',
            position: 'absolute',
            top: '0',
            width: '100%',
            zIndex: '9999',
        });
        const commonNavbarLeftRightStyle = Object.assign({}, commonMarginPaddingVerticalAlignBoxSizingStyle, {
            overflow: 'hidden',
            position: 'absolute',
            top: '0.5em',
            whiteSpace: 'nowrap',
        });
        const h1Style = Object.assign({}, commonMarginPaddingVerticalAlignBoxSizingStyle, {
            display: 'inline-block',
            fontFamily: '"proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif',
            fontSize: '2em',
            fontWeight: '600',
            letterSpacing: '-0.5px',
            lineHeight: '1.375em',
            margin: '0 0.5em 0 0.2em',
        });
        const linkStyle = {
            color: '#fff',
            display: 'inline-block',
            fontFamily: '"proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif',
            fontWeight: '600',
            lineHeight: '2.75em',
            padding: '0 1.5em',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
        };
        const logoStyle = {
            height: '2em',
            width: '2em',
            verticalAlign: 'text-bottom',
        };
        return React.createElement(
            'header', {
                className: 'viperjs-navbar',
                style: navbarStyle,
            },
            React.createElement(
                'div', {
                    className: 'viperjs-navbar-left',
                    style: Object.assign({
                        left: '0.5em',
                    }, commonNavbarLeftRightStyle),
                },
                React.createElement(
                    'img', {
                        className: 'viperjs-navbar-logo',
                        style: logoStyle,
                        src: 'img/logo.png',
                        alt: 'ViperJS logo',
                    }
                ),
                React.createElement(
                    'h1', {
                        className: 'viperjs-navbar-title',
                        style: h1Style,
                    },
                    'ViperJS'
                )
            ),
            React.createElement(
                'div', {
                    className: 'viperjs-navbar-right',
                    style: Object.assign({
                        right: '0.5em',
                    }, commonNavbarLeftRightStyle),
                },
                React.createElement(
                    'div', {
                        className: 'viperjs-navbar-links',
                    },
                    React.createElement(
                        'a', {
                            href: '/about',
                            className: 'viperjs-navbar-link',
                            style: linkStyle,
                        },
                        'About'
                    )
                )
            )
        );
    }
}

export default ViperjsNavbar;
