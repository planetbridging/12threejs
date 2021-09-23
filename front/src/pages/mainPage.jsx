import React from 'react';

import App from './planet/planet';
//import { Editor } from './three.js-dev/editor/js/Editor';

import EditorPage from './editor/editor';

class MainPage extends React.Component {

    state = {

    }

    render(){
        return (
            <div className="">
               <EditorPage />
            </div>
        )
    }
}

export default MainPage;