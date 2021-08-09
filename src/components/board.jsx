import React, { Component } from 'react';
import Square from "./square.jsx";
import disableButton from './jqueryFunctions.js';
import enableButton from './removeClass.js';
import mp3_file from './sound.mp3';
import rotateRock from './rotateRock.js';
import changeRockColor from './changeRockColor.js';
import 'bootstrap/dist/css/bootstrap.min.css';


var rotated = 0;
var play_sound;
var notes = ['', '', '', '', '', '','', '',  
'', '', '', '', '', '','', '', '','',
'', '', '', '', '', '','', '', '','',
'', '', '', '', '', '','', '', '','',
'', '', '', '', '', '','', '', '','',
'', '', '', '', '', '','', '', '','',
'', '', '', '', '', '','', '', '','',
'', '', '', '', '', '','', '', '','',
'', '', '', '', '', '','', '',  '',
'gy', '', 'gy',
'', '', '', '', '',
'gy', '', 'gy',
'', '','r', '', '',
'rb', '' ,'rb', 
'', '', '', '', '', 
'yo', '', 'yo', 
'', '', 'r', '', '',  
'gy', '', 'gy', 
'', '', '', '', '', 
'gy', '', 'gy', 
'', '', 'r', '', '', 
'rb', '', 'rb', '', 
'','','','',
'oy','','r','', 'gy', '', 'gy', 
'','','','','','','','','','','','','',
'gy','', 'gy', 
'', '', '', '', '', 
'o', 'b', 'y', '', 'r', 'g', '',
'','', 'gy', '', 'gy',
'', '','','','', '', '','','','', '','','',
'gy', '', 'gy',
'', '', '', '', '', 
'o', 'b', 'y', '', 'r', 'g', 
'','','','gy','', 'gy', '',
'', '','','','', '', '','','','', '','',
'oy', '', 'oy',
'', '', '', '', '',
'o', 'b', 'y', '', 'r', 'g', 
'','','','rb', '', 'rb', 
'', '','','','',
'oy', '', 'oy',
'', '','','','',
'gy','', 'gy', 
'', '','','','',
'rb',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','','', '', '',
'oy', '', 'oy', '', 'oy', '', 'oy', '', 'oy', '', 'oy', '', 'oy', '', 'oy', '', '', 
'gy', '', 'gy',
'', '', '', '', '', '',
'gy', '', 'gy',
'', '','r', '', '',
'rb', '' ,'rb', 
'', '', '', '', '', 
'yo', '', 'yo', 
'', '', '', '', '',  
'gy', '', 'gy', 
'', '', '', '', '', 
'gy', '', 'gy', 
'', '', 'r', '', '', 
'rb', '', 'rb', '', 
'','','','',
'oy','','r','', 'gy', '', 'gy', 
'', '','','','', '', '','','','', '','','', '',
'gy', '', 'gy',
'', '', '', '', '',
'o', 'b', 'y', '', 'r', 'g', '', '',
'', 'gy', '', 'gy', 
'', '','','','', '', '','','','', '','','', 
'gy', '', 'gy',
'', '', '', '', '',
'o', 'b', 'y', '', 'r', 'g', '', '',
'',
'gy', '', 'gy', 
'', '', '', '', '', '', '', '', '', '', '', '', '', '',
'oy', '', 'oy',
'', '', '', '', '',
'o', 'b', 'y', '', 'r', 'g', 
'','','','rb', '', 'rb', 
'', '','','','',
'oy', '', 'oy',
'', '','','','',
'gy','', 'gy', 
'', '','','','',
'rb',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','','', '', '', 
'oy', '', 'oy', '', 'oy', '', 'oy', '', 'oy', '', 'oy', '', 'oy', '', 'oy', '', '',
'gy', '', 'gy', 
'', '', '', '', '', 
'gy', '', 'gy',
'', '','r', '', '',
'rb', '' ,'rb', 
'', '', '', '', '', 
'yo', '', 'yo', 
'', '', '', '', '',  
'gy', '', 'gy', 
'', '', '', '', '', 
'gy', '', 'gy', 
'', '', 'r', '', '', 
'rb', '', 'rb', '', 
'', '', '', '', '', 
'oy','','r','', 'gy', '', 'gy', 
'', '','','','', '', '','','','', '','','', '', 
'gy', '', 'gy',
'', '', '', '', '',
'o', 'b', 'y', '', 'r', 'g', '', '', '',
'g', '', '', '', '','g', 'g', '', 'y', '', 'y', 'r', 'g', '','','' ,
'by', '','', 'ry', 'by', '', '','', '','','',
'g', '' , 'r', '', 'y','', 'b', '','','', 'o','', 'b', '', '', 'o',
'b','y','r','g', 'r','y', '', '','', '','g','g','g','r','y', '','o', '', 'b','b','b', 'y', 'y', 'y', 'y', 'r', 'r', 'r', 'r', 'g', 'g', 'g', 'g', 'o', 'o', 'o' , 'o', 'b', 'b', 'b', 'b', 'y', 'r', 'g', 'r', 
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','',
'', '','','','', '', '','','','', '','','','', 

'', '','','','','','','','','','','','']; 
var notes_hit = 0;
class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            gactive: [false, false,false, false,false, false,false, false,false, false,false, false],
            ractive: [false, false,false, false,false, false,false, false,false, false,false, false],
            yactive: [false, false,false, false,false, false,false, false,false, false,false, false],
            bactive: [false, false,false, false,false, false,false, false,false, false,false, false],
            oactive: [false, false,false, false,false, false,false, false,false, false,false, false],
             's': false, 'd': false, 'f': false, 'g': false, 'Space': false, start:false, delay:141, gameState: 'home', 
            listening: false,
            listeningFor: '',
            green: 'a', 
            greenPressed: false,
            
            red: 's', 
            redPressed: false,
            
            yellow: 'd', 
            yellowPressed: false,
            
            blue: 'f', 
            bluePressed: false,
            
            orange: 'g', 
            orangePressed: false,
            
            multiplier: 1,
            streak: 0, 
            score: 0, 
            resize: window.innerWidth


        };
        
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyRelease = this.handleKeyRelease.bind(this);
        this.gameWon = this.gameWon.bind(this);
        this.myResize = this.myResize.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
        document.addEventListener('keyup', this.handleKeyRelease);
        window.addEventListener('resize', this.myResize);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
        document.removeEventListener('keyup', this.handleKeyRelease);
        
        window.removeEventListener('resize', this.myResize);
    }
    myResize(){
        console.log(this.state.resize);
        this.setState({resize: window.innerWidth});
    }

    handleKeyPress(event){
        //lets users change buttons (other than strum)
        if(this.state.listening){
            if(this.state.listeningFor === 'Green'){
                this.setState({green: event.key});
            } else if(this.state.listeningFor === 'Red'){
                this.setState({red: event.key});
            } else if(this.state.listeningFor === 'Yellow'){
                this.setState({yellow: event.key});
            } else if(this.state.listeningFor === 'Blue'){
                this.setState({blue: event.key});
            } else if(this.state.listeningFor === 'Orange'){
                this.setState({orange: event.key});
            }
            this.setState({listening:false, listeningFor:''});
            return;
        }
        //If we aren't changing key binds, we set the isPressed for each to true upon being pressed.
        if(event.key === this.state.green){
            this.setState({greenPressed: true});
        } else if(event.key === this.state.red){
            this.setState({redPressed: true});
        } else if(event.key === this.state.yellow){
            this.setState({yellowPressed: true});
        } else if(event.key === this.state.blue){
            this.setState({bluePressed: true});
        } else if(event.key === this.state.orange){
            this.setState({orangePressed: true});
        } else if(event.code==="Space"){
            //Setting the others to true upon being pressed allows us to use the space bar being clicked to determine whether the user hit a note or not.
            //If the last row of the board matches the buttons the user has pressed down when they hit space, then a note is hit. If not, a note is missed.
            if(this.state.gactive[10] === this.state.greenPressed && this.state.ractive[10] === this.state.redPressed && this.state.yactive[10] === this.state.yellowPressed && this.state.bactive[10] === this.state.bluePressed && this.state.oactive[10] === this.state.orangePressed &&(this.state.greenPressed||this.state.redPressed||this.state.yellowPressed||this.state.bluePressed||this.state.orangePressed)){
                //changing rotation of the rock meter's indicator
                if(rotated < 40){
                rotated += 1;
                rotateRock(rotated);
                if(rotated <= -18){
                    changeRockColor('red');
                } else if(rotated <=18){
                    changeRockColor('yellow');
                } else if(rotated > 18){
                    changeRockColor('green');
                }
                }
                //double notes like gy are worth double points, and so on for triples, etc. Therefore, when scoring we need to check how many notes were there
                let numNotes = 0;
                if(this.state.gactive[10]){
                    numNotes++;
                }if(this.state.ractive[10]){
                    numNotes++;
                }if(this.state.yactive[10]){
                    numNotes++;
                }if(this.state.bactive[10]){
                    numNotes++;
                }if(this.state.oactive[10]){
                    numNotes++;
                } 
                //console.log("NOTES: "+numNotes);
                let newStreak = this.state.streak;
                newStreak++;
                let newScore = this.state.score + (this.state.multiplier*50*numNotes);
                let newMultiplier = this.state.multiplier;
                if(newStreak === 10){
                    newMultiplier = 2;
                } else if(newStreak === 20){
                    newMultiplier = 3;
                } else if(newStreak === 30){
                    newMultiplier = 4;
                }
                //console.log("HIT");
                notes_hit++;
                //All notes that were just hit are set to false so that when they move forward past the last row the game does not count it as a missed note
                let temp = this.state.gactive;
                temp[10] = false;
                let temp1 = this.state.ractive;
                temp1[10] = false;
                let temp2 = this.state.yactive;
                temp2[10] = false;
                let temp3 = this.state.bactive;
                temp3[10] = false;
                let temp4 = this.state.oactive;
                temp4[10] = false;
                this.setState({multiplier: newMultiplier, score: newScore, streak: newStreak, gactive: temp, ractive: temp1, yactive: temp2, bactive: temp3, oactive: temp4});
            } else{
                //console.log("MISS");
                //console.log("SHOULD BE:"+this.state.gactive[10] + this.state.ractive[10] + this.state.yactive[10] + this.state.bactive[10] + this.state.oactive[10]);
                //console.log("IT WAS:"+ this.state.greenPressed + this.state.redPressed + this.state.yellowPressed + this.state.bluePressed + this.state.orangePressed);
                
                
                //if not equal, move rock meter down. if doing so pushes it below -40, then the game is over.
                // finally, set the streak back to 0 and the mutiplier back to 1
                if(rotated > -40){
                rotated -= 2;
                rotateRock(rotated);
                if(rotated <= -18){
                    changeRockColor('red');
                } else if(rotated <=18){
                    changeRockColor('yellow');
                } else if(rotated > 18){
                    changeRockColor('green');
                }
                }else{
                    this.setState({gameState:'over'});
                }
                this.setState({streak:0, multiplier:1});
            }

        } else{
            console.log("Pressed: " + event.key + " Green: "+this.state.green);
        }

    }

    handleKeyRelease(event){
        if(event.key === this.state.green){
            this.setState({greenPressed: false});
        } else if(event.key === this.state.red){
            this.setState({redPressed: false});
        } else if(event.key === this.state.yellow){
            this.setState({yellowPressed: false});
        } else if(event.key === this.state.blue){
            this.setState({bluePressed: false});
        } else if(event.key === this.state.orange){
            this.setState({orangePressed: false});
        } else if(event.code==="Space"){
            this.setState({'Space': false});
        }
        //console.log("released");
    }
    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    async startGame(){
        if(!this.state.start){
            console.log(this.state.green);
            let cookies = decodeURIComponent(document.cookie);
        let cookie_split = cookies.split(';');
        for(let i = 0; i < cookie_split.length;i++){
            if(cookie_split[i].substring(0, 6) === 'delay='){
                console.log(parseFloat(cookie_split[i].substring(6, 11)).toFixed(2));
                let temp = parseFloat(parseFloat(cookie_split[i].substring(6, 11)).toFixed(2));
                console.log(temp);
                this.setState({delay: temp});
                console.log(this.state.delay);
            }
        }
       /* var play_sound = document.getElementById("sound");
        play_sound.load();
        play_sound.play();
        await this.sleep(this.state.delay*3);
        play_sound.pause();
        play_sound.load();*/
        play_sound.play();
        disableButton();
        this.setState({start:true});
        for(let i=0; i < notes.length; i++){
                this.moveDown();
                await this.sleep(this.state.delay);
                //console.log("calling");
                this.readNote(i);
        } 
        play_sound.pause();
        this.setState({start:false});
        enableButton();
        this.gameWon();
        }

    }

    moveDown(){
        if(this.state.gactive[10] || this.state.ractive[10] || this.state.yactive[10] ||  this.state.bactive[10] || this.state.oactive[10]){
            console.log("MISS");
            if(rotated > -40){
                rotated -= 2;
                rotateRock(rotated);
                if(rotated <= -18){
                    changeRockColor('red');
                } else if(rotated <=18){
                    changeRockColor('yellow');
                } else if(rotated > 18){
                    changeRockColor('green');
                } 
            
                this.setState({streak:0, multiplier:1});
            }else{
                this.setState({gameState:'over'});
            }

        }
        var gact = [false, false, false, false, false, false, false, false, false, false, false, false]; 
        var ract = [false, false, false, false, false, false, false, false, false, false, false, false]; 
        var yact = [false, false, false, false, false, false, false, false, false, false, false, false]; 
        var bact = [false, false, false, false, false, false, false, false, false, false, false, false]; 
        var oact = [false, false, false, false, false, false, false, false, false, false, false, false]; 
        for(let i =1; i < 11; i++){
            gact[i] = this.state.gactive[i-1];
            ract[i] = this.state.ractive[i-1];
            yact[i] = this.state.yactive[i-1];
            bact[i] = this.state.bactive[i-1];
            oact[i] = this.state.oactive[i-1];
        }
        this.setState({ gactive:gact,ractive:ract, yactive:yact, bactive:bact, oactive:oact });
    }

    readNote(i){
        if(notes[i].includes('g')){
            let active;
            active = this.state.gactive;
            active[0] = true;
            this.setState({gactive: active});
        } 
        if(notes[i].includes('r')){
            let active;
            active = this.state.ractive;
            active[0] = true;
            this.setState({ractive: active});
        } 
        if(notes[i].includes('y')){
            let active;
            active = this.state.yactive;
            active[0] = true;
            this.setState({yactive: active});
        } 
        if(notes[i].includes('b')){
            let active;
            active = this.state.bactive;
            active[0] = true;
            this.setState({bactive: active});
        } 
        if(notes[i].includes('o')){
            let active;
            //console.log("hi");
            active = this.state.oactive;
            active[0] = true;
            this.setState({oactive: active});
        } 
    }
    increaseDelay(){
        let delay = this.state.delay;
        delay += 0.1;
        delay = parseFloat(delay.toFixed(2));
        console.log('DELAY:'+delay);
        document.cookie = "delay="+delay+";"
        this.setState({delay: delay});
    }
    decreaseDelay(){
        let delay = this.state.delay;
        delay -= 0.1;
        delay = parseFloat(delay.toFixed(2));
        document.cookie = "delay="+delay+";"
        this.setState({delay: delay});
    }
    restartGame(){
        notes_hit = 0;
        rotated = 0;
        play_sound.load();
        this.setState({gameState:'start'});
    }
    async changeStart(){
            play_sound = new Audio();
            play_sound.src = mp3_file;
            play_sound.preload = 'auto';
            play_sound.volume=0;
            play_sound.play();
            await this.sleep(this.state.delay*3);
            play_sound.pause();
            play_sound.load();
            play_sound.volume = 1;
        this.setState({gameState: 'start'});
    }
    controls(){
        this.setState({gameState: 'controls'});
    }
    goHome(){
        this.setState({gameState: 'home'});
    }
    gameWon(){
        this.setState({gameState:'won'});
    }
    callibrate(){
        
        //document.cookie = "delay="+141+";"
        let cookies = decodeURIComponent(document.cookie);
        console.log(cookies);
            let cookie_split = cookies.split(';');
            for(let i = 0; i < cookie_split.length;i++){
                if(cookie_split[i].substring(0, 6) === 'delay='){
                    console.log(parseFloat(cookie_split[i].substring(6, 11)).toFixed(2));
                    let temp = parseFloat(parseFloat(cookie_split[i].substring(6, 11)).toFixed(2));
                    console.log(temp);
                    this.setState({delay: temp});
                    console.log(this.state.delay);
                }
            }
        this.setState({gameState: 'callibrate'});
    }
    
    changeControlG(){
        this.setState({listening:true, listeningFor: 'Green'});
    }
    changeControlR(){
        this.setState({listening:true, listeningFor: 'Red'});
    }
    changeControlY(){
        this.setState({listening:true, listeningFor: 'Yellow'});
    }
    changeControlB(){
        this.setState({listening:true, listeningFor: 'Blue'});
    }
    changeControlO(){
        this.setState({listening:true, listeningFor: 'Orange'});
    }

    
    
    render(){
        /*
        var width1 = 'calc(50vw)'
        var width2 = 'calc(50vw + 10px)';
        var width2 = 'calc(50vw + 10px)';
        var width3 = 'calc(50vw + 10px)';
        var margin = 'calc(50vw + 10px)';
        var myMargin = 'calc(20vh + 15vw)';
        var myMargin2 = 'calc(23vh + 18vw)';
        var myMargin3 = 'calc(26vh + 21vw)';
        */
        var sizeSm = this.props.row*2*2/15+ 2.5 +'vw';
        if(this.state.gameState==='controls'){
            return(
            <div id="background" style={{width:100+'%', height:100+'%', overflow:'auto'}}>
                <div className="container" style={{marginTop: 10+'vh', textAlign:'center'}}>
                    <div className="row">
                        <div className="col-12" style={{textAlign:'center'}}>
                            <h1 style={{fontSize: '2em'}}>Controls:</h1> 
                            
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-6">
                            <h2>Green</h2>
                        </div>
                        <div className="col-6">
                            <button  onClick={this.changeControlG.bind(this)}>{this.state.green}</button>
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-6">
                            <h2>Red</h2>
                        </div>
                        <div className="col-6">
                            <button onClick={this.changeControlR.bind(this)}>{this.state.red}</button>
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-6">
                            <h2>Yellow</h2>
                        </div>
                        <div className="col-6">
                            <button onClick={this.changeControlY.bind(this)}>{this.state.yellow}</button>
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-6">
                            <h2>Blue</h2>
                        </div>
                        <div className="col-6">
                            <button onClick={this.changeControlB.bind(this)}>{this.state.blue}</button>
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-6">
                            <h2>Orange</h2>
                        </div>
                        <div className="col-6">
                            <button onClick={this.changeControlO.bind(this)}>{this.state.orange}</button>
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-6">
                            <h2>Strum</h2>
                        </div>
                        <div className="col-6">
                            <button >Space</button>
                        </div>
                    </div>
                    <div className="row m-4">
                            <div className = "col-12">    
                                <button onClick={this.goHome.bind(this)} style={{marginTop: 5+'vh', width:10+'vw'}}>Go Back</button>  
                            </div>
                    </div>  
                </div>
            </div>
            );
              {/*  All notes must be strummed (on top of hitting the correct key) in order to hit them. Since strumming triggers hit detection, i reccommend pressing the keys first before strumming on a note. A note must be on the row where your keys are in order to be hit!
                <br/>
                <br/>
                The timing will probably be off at least a little bit :(
                    However, if it is badly off at the beginning, try reloading your browser and starting again!

                */}
            

        }




        if(this.state.gameState==='callibrate'){
            return(
                <div id="background" style={{width: 100+'vw', height: 100+'vh'}}>
                <div className="container-fluid">
                    <div className="row" style={{marginTop: 10+'vh'}}>
                        <div className="col-4" style={{textAlign:'center'}}>
                            <button style={{fontSize: 1.5+'vw'}} onClick={this.increaseDelay.bind(this)}>Increase Delay</button>
                        </div>
                        <div className="col-4" style={{textAlign:'center'}}>
                            <h2>Delay: {this.state.delay}</h2>
                        </div>
                        <div className="col-4" style={{textAlign:'center'}}>
                            <button style={{fontSize: 1.5+'vw'}}onClick = {this.decreaseDelay.bind(this)}>Decrease Delay</button>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12" style={{textAlign:'center'}}>
                            <button onClick={this.goHome.bind(this)}style={{marginTop: 5+'vh', padding: '0.5em 1em' }}>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
            );

        }   





        if(this.state.gameState === 'home'){
            
            return(
                <div style={{marginTop: '100px',textAlign: 'center'}}>
                    <h1>REACT HERO</h1>
                    <button onClick={this.changeStart.bind(this)} style={{ marginTop: '4vw'}}>Start Game</button>
                    <button onClick={this.controls.bind(this)} style={{ marginTop: 2+'vw'}}>View Controls</button>
                    <button onClick={this.callibrate.bind(this)}style={{ marginTop: 2+'vw'}}>Callibrate</button>
                </div>

            );
        }

        if(this.state.gameState === 'over'){
            return(<div id="background" style={{textAlign: 'center', width: 100+'vw', height: 100+'vh'}}>
                <h1 style={{marginTop: '100px'}}>GAME OVER</h1>
                <br></br>
                <h3>YOU HIT {(notes_hit/201.0*100).toFixed(2)}%</h3>
                <h3>YOU SCORED {this.state.score} POINTS</h3>
                <p>Submit your score to leaderboard!</p>
                <form>
                    <label for="fname">Name: </label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <button>Submit</button>   
                </form>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12" style={{textAlign:'center'}}>
                            <button style={{width: 15+'vw', marginTop: 10 +'vh'}}onClick = {this.restartGame.bind(this)} >Play Again?</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{textAlign:'center'}}>
                            <button style={{width: 15+'vw', marginTop: 2 +'vh'}} onClick = {this.goHome.bind(this)} >Main Menu</button>
                        </div>
                    </div>
                </div>
            </div>);

        }
        if(this.state.gameState === 'won'){
            return(<div id="background" style={{textAlign: 'center', width: 100+'vw', height: 100+'vh'}}>
                <h1 style={{marginTop: '100px'}}>CONGRATULATIONS!</h1>
                <br></br>
                <h3>You're a REACT HERO!</h3>
                <br></br>
                <h3>YOU HIT {(notes_hit/201.0*100).toFixed(2)}%</h3>
                <h3>YOU SCORED {this.state.score} POINTS</h3>
                <p>Submit your score to leaderboard!</p>
                <form>
                    <label for="fname">Name: </label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <button >Submit</button>   
                </form>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12" style={{textAlign:'center'}}>
                            <button style={{width: 15+'vw', marginTop: 10 +'vh'}}onClick = {this.restartGame.bind(this)} >Play Again?</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{textAlign:'center'}}>
                            <button style={{width: 15+'vw', marginTop: 2 +'vh'}} onClick = {this.goHome.bind(this)} >Main Menu</button>
                        </div>
                    </div>
                </div>
            </div>);

        }

        if(this.state.gameState === 'start' && this.state.resize > 0){
        
        return(
            <div style={{textAlign:'center'}}>
                <h1>REACT HERO</h1>
              <div className= "board" style={{marginTop:-30+'px', marginBottom:10+'vh'}}>
                  
                <div className = "mrow mx-auto" style={{display: "block",height:0*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>      
                <Square color="green"  row = {0} active = {this.state.gactive[0]}/>
                <Square color="red" row = {0} active = {this.state.ractive[0]}/>
                <Square color="yellow" row = {0} active = {this.state.yactive[0]}/>
                <Square color="blue"  row = {0} active = {this.state.bactive[0]}/>
                <Square color="orange" row = {0} active = {this.state.oactive[0]}/>
                </div>
                
                <div className = "mrow mx-auto" style={{display: "block", height:1*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>     
                <Square color="green" row = {1} active = {this.state.gactive[1]}/>
                <Square color="red" row = {1} active = {this.state.ractive[1]}/>
                <Square color="yellow" row = {1} active = {this.state.yactive[1]}/>
                <Square color="blue" row = {1} active = {this.state.bactive[1]}/>
                <Square color="orange" row = {1} active = {this.state.oactive[1]}/>
                </div>
                
                <div className = "mrow mx-auto" style={{display: "block", height:2*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>     
                <Square color="green" row = {2} active = {this.state.gactive[2]}/>
                <Square color="red" row = {2} active = {this.state.ractive[2]}/>
                <Square color="yellow" row = {2} active = {this.state.yactive[2]}/>
                <Square color="blue"  row = {2} active = {this.state.bactive[2]}/>
                <Square color="orange" row = {2} active = {this.state.oactive[2]}/>
                </div>
                
                <div className = "mrow mx-auto" style={{display: "block",height:3*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>     
                <Square color="green" row = {3} active = {this.state.gactive[3]}/>
                <Square color="red" row = {3} active = {this.state.ractive[3]}/>
                <Square color="yellow" row = {3} active = {this.state.yactive[3]}/>
                <Square color="blue" row = {3} active = {this.state.bactive[3]}/>
                <Square color="orange" row = {3} active = {this.state.oactive[3]}/>
                </div>
                
                <div className = "mrow mx-auto" style={{display: "block", height:4*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>    
                <Square color="green" row = {4}  active = {this.state.gactive[4]}/>
                <Square color="red" row = {4}  active = {this.state.ractive[4]}/>
                <Square color="yellow" row = {4} active = {this.state.yactive[4]}/>
                <Square color="blue" row = {4} active = {this.state.bactive[4]}/>
                <Square color="orange" row = {4} active = {this.state.oactive[4]}/>
                </div>
                
                <div className = "mrow mx-auto" style={{display: "block", height:5*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>      
                <Square color="green" row = {5}active = {this.state.gactive[5]}/>
                <Square color="red" row = {5}active = {this.state.ractive[5]}/>
                <Square color="yellow" row = {5}active = {this.state.yactive[5]}/>
                <Square color="blue" row = {5}active = {this.state.bactive[5]}/>
                <Square color="orange" row = {5}active = {this.state.oactive[5]}/>
                </div>
                
                <div className = "mrow mx-auto" style={{display: "block", height:6*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>      
                <Square color="green" row = {6}active = {this.state.gactive[6]}/>
                <Square color="red" row = {6}active = {this.state.ractive[6]}/>
                <Square color="yellow" row = {6}active = {this.state.yactive[6]}/>
                <Square color="blue" row = {6}active = {this.state.bactive[6]}/>
                <Square color="orange" row = {6}active = {this.state.oactive[6]}/>
                </div>
                
                <div className = "mrow mx-auto" style={{display: "block", height:7*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>       
                <Square color="green" row = {7}active = {this.state.gactive[7]}/>
                <Square color="red" row = {7}active = {this.state.ractive[7]}/>
                <Square color="yellow" row = {7}active = {this.state.yactive[7]}/>
                <Square color="blue" row = {7}active = {this.state.bactive[7]}/>
                <Square color="orange" row = {7}active = {this.state.oactive[7]}/>
                </div>
                
                <div className = "mrow mx-auto" style={{display: "block", height:8*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>      
                <Square color="green"row = {8} active = {this.state.gactive[8]}/>
                <Square color="red" row = {8}active = {this.state.ractive[8]}/>
                <Square color="yellow"row = {8} active = {this.state.yactive[8]}/>
                <Square color="blue" row = {8}active = {this.state.bactive[8]}/>
                <Square color="orange" row = {8}active = {this.state.oactive[8]}/>
                </div>
                
                <div className = "mrow mx-auto" style={{display: "block", height:9*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>      
                <Square color="green" row = {9}active = {this.state.gactive[9]}/>
                <Square color="red" row = {9}active = {this.state.ractive[9]}/>
                <Square color="yellow" row = {9}active = {this.state.yactive[9]}/>
                <Square color="blue" row = {9}active = {this.state.bactive[9]}/>
                <Square color="orange" row = {9}active = {this.state.oactive[9]}/>
                </div>
                <div className = "mrow mx-auto" style={{display: "block", height:10*2*2/15+ 2.5 +'vw',width: "fit-content", justifyContent: "center", alignItems: "center"}}>    
                <Square color="green" row = {10}active = {this.state.gactive[10]} isPressed={this.state.greenPressed}/>
                <Square color="red" row = {10}active = {this.state.ractive[10]} isPressed={this.state.redPressed}/>
                <Square color="yellow" row = {10}active = {this.state.yactive[10]} isPressed={this.state.yellowPressed}/>
                <Square color="blue" row = {10}active = {this.state.bactive[10]} isPressed={this.state.bluePressed}/>
                <Square color="orange" row = {10}active = {this.state.oactive[10]} isPressed={this.state.orangePressed}/>
                </div>
                </div>

                <span className="path"></span>
                <div className="container-fluid" style={{position:'absolute', top:'calc(90vh)',marginBottom:0,}}>
                    <div className="row">
                        <div className="col-12" style={{alignItems:'center',marginBottom:0}}>
                            <button className="mx-auto" onClick={this.startGame.bind(this)} style={{marginBottom:0, fontSize: 2+'vw', padding: '0.25em 0.5em',display:'block'}}>Start Game</button>
                        </div>
                    </div>
                </div>
                <div className="rock-meter-outer">
                            <div className="rock-meter-square rock-meter-green"></div>
                            <div className="rock-meter-square rock-meter-green rock-meter-square-shadow"></div>
                            <div className="rock-meter-square rock-meter-green rock-meter-square-shadow-bottom"></div>
                            <div className="rock-meter-square rock-meter-yellow"></div>
                            <div className="rock-meter-square rock-meter-yellow rock-meter-square-shadow"></div>
                            
                            <div className="rock-meter-square rock-meter-yellow rock-meter-square-shadow-bottom"></div>
                            <div className="rock-meter-square rock-meter-red"></div>
                            <div className="rock-meter-square rock-meter-red rock-meter-square-shadow"></div>
                            
                            <div className="rock-meter-square rock-meter-red rock-meter-square-shadow-bottom"></div>
                            <div className="rock-meter-circle"></div>
                            <div className="rock-meter-circle-outer"></div>
                            <div className="rock-meter-stick"></div>
                            <div id = "rock-image" className="rock-img yellow-rock">CROWD</div>
                </div>
                <div className="rock-meter-shadow"></div>
                <audio id="sound" src={mp3_file} />
                <div className = "score-counter">
                    <div style={{position:'relative', zIndex:3}}>
                    <p style={{marginTop: 1+'vw'}}>Score</p>
                    <div className="score" >
                        <div className="score-box">{((this.state.score% 1000000) - (this.state.score %100000))/100000}</div>
                        <div className="score-box">{((this.state.score% 100000) - (this.state.score %10000))/10000}</div>
                        <div className="score-box">{((this.state.score% 10000) - (this.state.score %1000))/1000}</div>
                        <div className="score-box">{((this.state.score% 1000) - (this.state.score %100))/100}</div>
                        <div className="score-box">{((this.state.score% 100) - (this.state.score %10))/10}</div>
                        <div className="score-box">{this.state.score%10}</div>
                    </div>
                    <p>Multiplier</p>
                    <div className="multiplier">
                        <div className="multiplier-box">&times;</div>
                        <div className="multiplier-box">{this.state.multiplier}</div>
                    </div>
                    <p>Streak:</p>
                    <div className="score">
                        <div className="score-box">{((this.state.streak% 1000000) - (this.state.streak %100000))/100000}</div>
                        <div className="score-box">{((this.state.streak% 100000) - (this.state.streak %10000))/10000}</div>
                        <div className="score-box">{((this.state.streak% 10000) - (this.state.streak %1000))/1000}</div>
                        <div className="score-box">{((this.state.streak% 1000) - (this.state.streak %100))/100}</div>
                        <div className="score-box">{((this.state.streak% 100) - (this.state.streak %10))/10}</div>
                        <div className="score-box">{this.state.streak%10}</div>
                    </div>
                    </div>
                    <div className = "score-counter-shadow score-counter-shadow-1"></div>
                    
                    <div className = "score-counter-shadow score-counter-shadow-3"></div>
                    <div className = "score-counter-shadow score-counter-shadow-2"></div>
                </div>
                <div className="score-counter-shadow-outer"></div>
                

            </div>
                            
        );
        }


    }

}






export default Board;