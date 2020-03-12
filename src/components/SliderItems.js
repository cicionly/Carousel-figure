import React from 'react';
class SliderItems extends React.Component{
    render(){
        let style = {
            left : this.props.index *-520 +'px',
            width: (this.props.items.length + 1) * 520 + 'px',
            transitionDuration: this.props.speed + 's'
        };
        return <ul className="sliders" style={style}>
        {this.props.items.map((item,index)=>{
            return <li key={index} className="slider"><img src={item.src}/>
            </li>
        })}
        <li key={this.props.items.length} className="slider">
        <img src={this.props.items[0].src}/>
        </li>
    </ul>
    }
}
export default SliderItems;