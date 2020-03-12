import React from 'react';
import SliderItems from './SliderItems';
import SliderArrows from './SliderArrows';
import SliderDots from './SliderDots';
import './slider.css';
class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    turn = (step) => {
        let index = this.state.index + step;
        if (index<0){
            this.sliderItem.style.transitionDuration = '0s';
            this.sliderItem.style.left = this.props.items.length*-520 + 'px';
            setTimeout(()=>{  
                this.sliderItem.style.transitionDuration = '0s';
                index = this.props.items.length-1;
                this.sliderItem.style.transitionDuration = this.props.speed + 's';
                this.setState({index});
            },0);
            return;
        }
        if (index > this.props.items.length) {
            this.sliderItem.style.transitionDuration = '0s';
            this.sliderItem.style.left = 0 + 'px';
            setTimeout(()=>{
                index = 1;
                this.setState({index});
                this.sliderItem.style.transitionDuration = this.props.speed + 's';
            },20);
            return;
        }
        this.setState({
            index
        });
    }

    go = () => {
        this.timer = setInterval(() => {
            this.turn(1);
        }, this.props.speed * 1000);
    }
    componentDidMount() {
        this.sliderItem = document.getElementsByClassName('sliders')[0];
        if (this.props.autoplay) {
            this.go();
        }
    }
    render() {
        return <div onMouseOver={() => { clearInterval(this.timer) }} onMouseOut={() => { this.go() }} className="slider-wrapper">
            <SliderItems
                items={this.props.items}
                speed={this.props.speed}
                index={this.state.index}
            />
            <SliderArrows turn = {this.turn}/>
            <SliderDots 
                items = {this.props.items} 
                turn = {this.turn}
                index={this.state.index}/>
        </div>
    }
}
export default Slider;