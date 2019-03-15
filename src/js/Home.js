import React from "react";
import anime from "animejs";



class Home extends React.Component {

    rock = React.createRef()
    paper = React.createRef()
    scissors = React.createRef()

    expand = (event, type) => {
        let target; 
        if(type === "rock") target = this.rock.current
        else if (type === "paper") target = this.paper.current
        else if (type === "scissors") target = this.scissors.current;

        anime({
              targets: target,
              scale: "1.5",
        })
      }
  
      contract = (event, type) => {
        let target; 
        if(type === "rock") target = this.rock.current
        else if (type === "paper") target = this.paper.current
        else if (type === "scissors") target = this.scissors.current;

        anime({
              targets: target,
              scale: "1",
        })
      }

      handleClick = (pick) => {

      }

    render() {
        return (
            <div className="container">
                <h2>Welcome To Rock Paper Scissors</h2>
                <p>Select Your Object</p>

                <img
                    className="rock"
                    src={require("../img/rock.svg")}
                    alt="rock selection icon"
                    ref={this.rock}
                    onClick={(event) => handleClick("rock") }
                    onMouseEnter={(event) => this.expand(event, "rock")}
                    onMouseLeave={(event) => this.contract(event, "rock")}
                    style={{transform: "translate(-50%, -50%)"}}
                ></img>
                <img
                    className="paper"
                    src={require("../img/paper.svg")}
                    alt="rock selection icon"
                    ref={this.paper}
                    onClick={(event) => handleClick("paper") }
                    onMouseEnter={(event) => this.expand(event, "paper")}
                    onMouseLeave={(event) => this.contract(event, "paper")}
                    style={{transform: "translate(-50%, -50%)"}}
                ></img>
                <img
                    className="scissors"
                    src={require("../img/scissors.svg")}
                    alt="rock selection icon"
                    ref={this.scissors}
                    onClick={(event) => handleClick("scissors") }
                    onMouseEnter={(event) => this.expand(event, "scissors")}
                    onMouseLeave={(event) => this.contract(event, "scissors")}
                    style={{transform: "translate(-50%, -50%)"}}
                ></img>
            </div>
        )
    }
}



export { Home };