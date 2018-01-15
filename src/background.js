import React, {Component} from 'react'; 

class Background extends Component {
    constructor() {
        super(); 

        this.handleLoad = this.handleLoad.bind(this); 

    }

    handleLoad() {
        console.log('in handle load'); 
    }

    componentWillMount ()  {
        console.log('component mounted');
        this.handleLoad()
    }

    render() {

        return (
            <div>
                This is the content
            </div>
        ); 
    }
}

export default Background; 