import React from 'react';
class SliderDots extends React.Component{
    render(){
       return <div className="slider-dots">
           {
               this.props.items.map((item,index)=>{
                   return <span onClick={()=>{this.props.turn(index-this.props.index)}} key={index} className={"dot "+(this.props.index===index||this.props.index===this.props.items.length && index === 0 ?'active':'')}></span>
               })
           }
       </div>
    }
}
export default SliderDots;