import React from "react";
import { Moveable } from "./Moveable";

class Sandbox extends React.Component {
    state = {
        xPos: 50,
        yPos: 50,
        compX: null,
        compY: null,

    }

    moveUp = () => {
        this.setState({ yPos: this.state.yPos > 10? this.state.yPos - 3 : 5 });
    }
    moveDown = () => {
        this.setState({ yPos: this.state.yPos < 90? this.state.yPos + 3 : 95 });
    }
    moveLeft = () => {
        this.setState({ xPos: this.state.xPos > 10? this.state.xPos - 3 : 5 });
    }
    moveRight = () => {
        this.setState({ xPos: this.state.xPos < 90? this.state.xPos + 3 : 95 });
    }

    borderValidation = (xPos, yPos) => {
        switch(true) {
            // border-one
            case (xPos >= 10 && xPos <= 90 && yPos >= 85 && yPos <= 90):
                return false;

            // border-two
            case (xPos >= 10 && xPos <= 90 && yPos >= 10 && yPos <= 15):
                return false;

            // border-three
            case (xPos >= 40 && xPos <= 45 && yPos >= 25 && yPos <= 75):
                return false;

            // border-four
            case (xPos >= 55 && xPos <= 60 && yPos >= 25 && yPos <= 75):
                return false;

            // border-five
            case (xPos >= 55 && xPos <= 90 && yPos >= 25 && yPos <= 30):
                return false;

            // border-six
            case (xPos >= 10 && xPos <= 45 && yPos >= 70 && yPos <= 75):
                return false;

            // border-seven
            case (xPos >= 20 && xPos <= 25 && yPos >= 10 && yPos <= 60):
                return false;

            // border-eight
            case (xPos >= 75 && xPos <= 80 && yPos >= 40 && yPos <= 90):
                return false;

            default:
            console.log("no border hit") 
            return true;  
        }
    }


    render() {
        return (
            <div className="container">
                <Moveable 
                    xPos={this.state.xPos}
                    yPos={this.state.yPos}
                    moveUp={this.moveUp} 
                    moveDown={this.moveDown} 
                    moveLeft={this.moveLeft} 
                    moveRight={this.moveRight} 
                    borderValidation={this.borderValidation}
                />
                <div 
                    className="border-one"
                    style={{
                        position: "absolute",
                        width: "80%",
                        height: "5%",
                        top: "85%",
                        left: "10%",
                        backgroundColor: "#424242",
                        borderRadius: "3px",
                    }}
                ></div>
                <div 
                    className="border-two"
                    style={{
                        position: "absolute",
                        width: "80%",
                        height: "5%",
                        top: "10%",
                        left: "10%",
                        backgroundColor: "#424242",
                        borderRadius: "3px",
                    }}
                ></div>
                <div 
                    className="border-three"
                    style={{
                        position: "absolute",
                        width: "5%",
                        height: "50%",
                        top: "25%",
                        left: "40%",
                        backgroundColor: "#424242",
                        borderRadius: "3px",
                    }}
                ></div>
                <div 
                    className="border-four"
                    style={{
                        position: "absolute",
                        width: "5%",
                        height: "50%",
                        top: "25%",
                        left: "55%",
                        backgroundColor: "#424242",
                        borderRadius: "3px",
                    }}
                ></div>
                <div 
                    className="border-five"
                    style={{
                        position: "absolute",
                        width: "35%",
                        height: "5%",
                        top: "25%",
                        left: "55%",
                        backgroundColor: "#424242",
                        borderRadius: "3px",
                    }}
                ></div>
                <div 
                    className="border-six"
                    style={{
                        position: "absolute",
                        width: "35%",
                        height: "5%",
                        top: "70%",
                        left: "10%",
                        backgroundColor: "#424242",
                        borderRadius: "3px",
                    }}
                ></div>
                <div 
                    className="border-seven"
                    style={{
                        position: "absolute",
                        width: "5%",
                        height: "50%",
                        top: "10%",
                        left: "20%",
                        backgroundColor: "#424242",
                        borderRadius: "3px",
                    }}
                ></div>
                <div 
                    className="border-eight"
                    style={{
                        position: "absolute",
                        width: "5%",
                        height: "50%",
                        top: "40%",
                        left: "75%",
                        backgroundColor: "#424242",
                        borderRadius: "3px",
                    }}
                ></div>
            </div>
        )
    }
}


export { Sandbox };