import React from 'react'
import {Button} from "antd";


const Left = () => {


    const sendApi = () => {

    };
    return (
        <div>
            <Button onClick={() => {
                sendApi()
            }}>
                发送API
            </Button>
        </div>
    )
};


export default Left
