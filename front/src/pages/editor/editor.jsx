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
               {this.renderRemoteEditor()}
            </div>
        )
    }



    load = async () =>{
        const {loaded,found} = this.state;
        try{
            var check = await lhelper.getMultiHttp("http://ping.pressback.space:456/ping","",true);
            if(check["d"]["ping"] == "ping"){
                //loaded = true;
                //found = "http://editor.pressback.space:456/editor/editor/";
                this.setState({loaded: true,found: "http://editor.pressback.space:456/editor/editor/"});
            }
            console.log("loaded");
        }catch(e){
            console.log("broke");
            console.log(e);
        }
        console.log("done");
        
    }

    renderRemoteEditor = () =>{
        const {loaded,found} = this.state;
        if(found){
            return <iframe src={found} />;
        }else{
            return <p>loading</p>
        }
        
    }
}

export default EditorPage;