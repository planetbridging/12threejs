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
        var check1 = await lhelper.getMultiHttp("http://localhost:456/editor/editor/hello.html","");
        var check2 = await lhelper.getMultiHttp("http://pressback.space:456/editor/editor/hello.html","");
        console.log(check1);
    }

    renderRemoteEditor = () =>{
        <iframe src="http://localhost:456/editor/" />
    }
}

export default EditorPage;