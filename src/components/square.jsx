import React, { Component } from 'react';
import '../index.css';

class Square extends Component{
    constructor(props){
        super(props);
    }
    //helps us be more efficient! we only rerender when stuff actually changes now! :)
    /*shouldComponentUpdate(nextProps, nextState){
        if(nextProps.active === this.props.active && !nextProps.active && this.props.row !== 10){
            return false;
        }else{
            return true;
        }
    }*/
    render(){
        //var width = this.props.row+1;
        var opacity = this.props.row*20 + 10;/*
        var size = 'calc(45px + '+width*1.5+'px + ' +width/2.75+ 'vw)';
        var size_color= 'calc(25px + '+width*1+'px + ' +width/6.5+ 'vw - 5px)';
        var size_sm = 'calc(25px + '+width*1+'px + ' +width/6.5+ 'vw)';
        var size_xsm = 'calc(10px + '+width/2+'px + ' +width/10+ 'vw)';*/
        var size = this.props.row*2.5*4 + 35 + 'px';
        var size_color= this.props.row*1.5*4 + 10 + 'px';
        var size_sm = this.props.row*1.5*4 +15+ 'px';
        var size_xsm = this.props.row*0.75*4+ 7.5+ 'px';
        if(window.matchMedia('(max-width: 1200px)').matches){
            //console.log("HELLO??");
            size = this.props.row*3.5*2/15 + 5 + 'vw';
            size_color= this.props.row*2*2/15+ 2 + 'vw';
            size_sm = this.props.row*2*2/15+ 2.5 +'vw';
            size_xsm = this.props.row*1.125*2/15 + 1 + 'vw';
        
        }
        
        if(this.props.color ==="green" && this.props.active === true){
            return(
                <div className="square square-outer"style={{opacity: opacity+'%', width: size, height: size_sm}}>
                <div className="square-green mx-auto" style={{marginLeft:'0', width: size, height: size_color}}>
                <div className="square-white mx-auto" style={{marginLeft:'0', width: size_sm, height: size_xsm}}/>
                </div>
                </div>);
        } else if(this.props.color ==="red" && this.props.active === true){
            return(
                <div className="square square-outer"style={{opacity: opacity+'%', width: size, height: size_sm}}>
                <div className="square-red mx-auto" style={{ width: size, height: size_color}}>
                <div className="square-white mx-auto" style={{ width: size_sm, height: size_xsm}}/>
                </div>
                </div>);
        } else if(this.props.color ==="yellow" && this.props.active === true){
            return(
                <div className="square square-outer"style={{opacity: opacity+'%',width: size, height: size_sm}}>
                <div className="square-yellow mx-auto" style={{ width: size, height: size_color}}>
                <div className="square-white mx-auto" style={{ width: size_sm, height: size_xsm}}/>
                </div>
                </div>);
        } else if(this.props.color ==="blue" && this.props.active === true){
            return(
                <div className="square square-outer"style={{opacity: opacity+'%',width: size, height: size_sm}}>
                <div className="square-blue mx-auto" style={{ width: size, height: size_color}}>
                <div className="square-white mx-auto" style={{ width: size_sm, height: size_xsm}}/>
                </div>
                </div>);
        } else if(this.props.color ==="orange" && this.props.active === true){
            return(
                <div className="square square-outer"style={{opacity: opacity+'%',width: size, height: size_sm}}>
                <div className="square-orange mx-auto" style={{ width: size, height: size_color}}>
                <div className="mx-auto square-white" style={{ width: size_sm, height: size_xsm}}/>
                </div>
                </div>);
        } else{
            if(this.props.color ==="orange" && this.props.active === false && this.props.row === 10){
                if(this.props.isPressed){
                    return  (
                        <div className="square square-border border-orange bg-white" style={{opacity:30+'%', width: size, height: size_color}}>
                        </div>);

                }
                return (
                <div className="square square-border border-orange" style={{opacity:30+'%', width: size, height: size_color}}>
                </div>);
            } else if(this.props.color ==="red" && this.props.active === false && this.props.row === 10){
                if(this.props.isPressed){
                    return  (
                        <div className="square square-border border-red bg-white" style={{opacity:30+'%', width: size, height: size_color}}>
                        </div>);

                }
                return (
                <div className="square square-border border-red " style={{opacity:30+'%', width: size, height: size_color}}>
                </div>);

            } else if(this.props.color ==="blue" && this.props.active === false && this.props.row === 10){
                if(this.props.isPressed){
                    return  (
                        <div className="square square-border border-blue bg-white" style={{opacity:30+'%', width: size, height: size_color}}>
                        </div>);

                }
                return (
                <div className="square square-border border-blue " style={{opacity:30+'%', width: size, height: size_color}}>
                </div>);

            } else if(this.props.color ==="yellow" && this.props.active === false && this.props.row === 10){
                if(this.props.isPressed){
                    return  (
                        <div className="square square-border border-yellow bg-white" style={{opacity:30+'%', width: size, height: size_color}}>
                        </div>);

                }
                return (
                <div className="square square-border border-yellow " style={{opacity:30+'%', width: size, height: size_color}}>
                </div>);


            } else if(this.props.color ==="green" && this.props.active === false && this.props.row === 10){
                if(this.props.isPressed){
                    return  (
                        <div className="square square-border border-green  bg-white" style={{opacity:50+'%', width: size, height: size_color}}>
                        </div>);

                }
                return (
                <div className="square square-border border-green" style={{opacity:30+'%', width: size, height: size_color}}>
                </div>);

            }
            return <div className = "square" style={{opacity: opacity, width: size, height: size_sm}}></div>
        }
    };

}

export default Square;