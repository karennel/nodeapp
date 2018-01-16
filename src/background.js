import React, { Component } from 'react';
import $ from 'jquery';
import getStarted from './get-started.jpg';

class Background extends Component {
    constructor() {
        super();

        this.handleLoad = this.handleLoad.bind(this);

        this.state = {
            img: {
                width: 0
            }
        };
    }

    handleLoad() {
        var background = document.getElementById('background');
        console.log('background', background); 
        background.innerHTML = `<img src=${getStarted} alt="background"/>`;

        // console.log('image width', background.Image.width);
        // console.log('image height', background.Image.height);
       
        let img = new Image();
        let scope = this;

        img.onload = function () {
            scope.state.img.width = this.width;
            console.log('this.width',this.width);
            scope.resize();
        };

        img.src = getStarted;

        // $('img').width(200);
        // console.log('in handle load', app_background); 
        //  $('.app-bg').hide;

    }

    resize(){
        console.log(document.getElementsByTagName('body')[0].clientWidth);
        console.log(document.getElementsByTagName('body')[0].clientHeight);
    }

    componentDidMount() {
        console.log('component mounted');
        this.handleLoad();

        let scope = this;

        window.onresize = function(event) {
            scope.resize();
        };
    }

    render() {
        return (
            <div id ='background' ></div>
        );
    }
}

export default Background; 