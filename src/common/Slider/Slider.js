import React from 'react'
import ReactSwipe from 'react-swipe'
export default class Slider extends React.Component{
    render(){
        return(
            <>
                <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 2000,}}>
                        {this.props.imgs.map((item,index)=>{
                            return <div key={index}><img src={item} alt=""/></div>
                        })}
                </ReactSwipe>
            </>
        )
    }
}