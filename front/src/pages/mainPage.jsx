import React from 'react';
import { Center,Box,Stack,Text,VStack,StackDivider,Button,ButtonGroup,Checkbox,Wrap,WrapItem,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton  } from "@chakra-ui/react";
import App from './planet/planet';
//import { Editor } from './three.js-dev/editor/js/Editor';

import EditorPage from './editor/editor';

class MainPage extends React.Component {

    state ={
        isOpen: false, onOpen: false, onClose: false
    }

    render(){
        return (
            <div className="">
               <Button colorScheme="teal" onClick={() =>this.btnOpenDesc()}>
                    Learn More
                </Button>
                {this.renderEditor()}
            </div>
        )
    }

    btnOpenDesc = () =>{
        this.setState({isOpen: true});
    }

    btnCloseDesc = () =>{
        this.setState({isOpen: false});
    }

    renderEditor = () =>{
        const {isOpen, onOpen, onClose } = this.state;
            return <Drawer
        isOpen={isOpen}
        placement="top"
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Button onClick={()=>this.btnCloseDesc()}>Back</Button>
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <EditorPage />
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    }
}

export default MainPage;