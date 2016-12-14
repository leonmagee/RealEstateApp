import React, {Component} from 'react';
var defaultStyles = require('./DefaultStyles');

import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop,
} from 'react-native-svg';

class SvgElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            svg_data: props.svg_data,
        }
    }

    render() {
        var svg_paths = this.state.svg_data.map((item, index) => {
            return (
                <Path key={index} x="3" y="3" style={defaultStyles.svgPath} scale="0.05" height="100" width="100" d={item} />
            )
        });
        return (
            <Svg style={defaultStyles.svgWrap}
                height="32"
                width="32"
            >
                {svg_paths}
            </Svg>
        )
    }
}

module.exports = SvgElement;