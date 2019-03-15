import React from "react";
import anime from "animejs";


class Button extends React.Component {

    state = {
        circle: false,
    }
    
    button = React.createRef();

    componentDidMount() {
        anime({
            targets: this.button.current,
            opacity: 0,
            translateX: "-50%",
            direction: "reverse",
            easing: "linear",
            duration: 500,

        })
    }

    expand = (event) => {
      anime({
            targets: this.button.current,
            scale: "1.5",
      })
    }

    contract = (event) => {
      anime({
            targets: this.button.current,
            scale: "1",
      })
    }

    jiggle = () => {
        anime
            .timeline({
                targets: this.button.current,
                easing: "linear",
                duration: 100,
            })
            .add({
                translateX: "-20%",
            })
            .add({
                translateX: "20%",
            })
            .add({
                translateX: "0",
            })
    }

    toggleCircle = (event) => {
        if(this.state.circle) {
            anime({
                targets: this.button.current,
                rotate: "0",
                width: "15rem",
                height: "5rem",
                padding: "1rem 3rem",
                borderRadius: "3px",
                easing: "linear",
                duration: 300,
            })
        } else {
            anime({
                targets: this.button.current,
                rotate: "1turn",
                width: "30rem",
                height: "30rem",
                padding: "0",
                borderRadius: "100rem",
                easing: "linear",
                duration: 300,
            });
        }
        this.setState({ circle: !this.state.circle});
    }

    render() {
        return (
            <button 
                ref={this.button}
                style={{transform: "translate(-50%, -50%)"}}
                onMouseEnter={this.expand}
                onMouseLeave={this.contract}
                onClick={this.jiggle}
            >Example
            </button>
        )
    }
};


export { Button };