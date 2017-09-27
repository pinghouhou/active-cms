/**
 * @file Floor.jsx
 * @author denglingbo
 *
 * Des
 */
/// <reference path="./floor.d.ts" />
import * as React from 'react';
import './floor.scss';

class Floor extends React.PureComponent<AppProps, any> {
    render() {
        const { attrs = {} } = this.props;
        const { style = {} } = attrs;

        return (
            <div
                onClick={() => {
                    console.log(123333333333333333333333)
                }}
                className="as-floor"
                style={{
                    ...(style && {...style.layout})
                }}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Floor;
