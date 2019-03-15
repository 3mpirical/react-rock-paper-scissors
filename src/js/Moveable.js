import React from "react";
// import anime from "animejs";

class Moveable extends React.Component {

    moveable = React.createRef();

    handleKeyDown = (event) => {
        const { xPos,
                yPos, 
                borderValidation, 
                moveUp, 
                moveDown, 
                moveLeft, 
                moveRight,
            } = this.props;

        switch(event.keyCode) {
            case(38): 
                if(borderValidation(xPos, yPos - 3)) moveUp();
            break;
            case(40): 
                if(borderValidation(xPos, yPos + 3)) moveDown();
            break;
            case(37):
                if(borderValidation(xPos - 3, yPos)) moveLeft();
            break;
            case(39):
                if(borderValidation(xPos + 3, yPos)) moveRight();
            break;
            default: 
                console.log("no arrow key pressed")
        }
        console.log(`xPos: ${this.props.xPos}, yPos${this.props.yPos}`)
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    // shouldComponentUpdate() {
    //     return false
    // }

    render() {
        const { xPos, yPos } = this.props;
        return(
            <div 
                className="moveable"
                ref={this.moveable}
                style={{ 
                    position: "absolute", 
                    transform: "translate(-50%, -50%)",
                    top: `${yPos}%`, 
                    left: `${xPos}%`,
                }}
            ></div> 
        )
    }
}



export { Moveable };