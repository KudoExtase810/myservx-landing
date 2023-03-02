import AnimatedCursor from "react-animated-cursor";
function CustomCursor() {
    return (
        <AnimatedCursor
            innerSize={10}
            outerSize={8}
            color="193, 11, 111"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
        />
    );
}

export default CustomCursor;
