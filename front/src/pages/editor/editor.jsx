import React from 'react';

import * as lhelper from '../../linkHelper';

class EditorPage extends React.Component {

    state = {
        loaded: false,
        found: ""
    }

    componentDidMount(){
        this.load();
    }

    render(){
        return (
            <div className="">
               wefew
            </div>
        )
    }



    load = async () =>{
        var check1 = await lhelper.getMultiHttp("http://ping.localhost:456/","",true);
        var check2 = await lhelper.getMultiHttp("http://ping.pressback.space:456","",true);
        console.log(check2);
    }

    renderRemoteEditor = () =>{
        <iframe src="http://localhost:456/editor/" />
    }
}

export default EditorPage;