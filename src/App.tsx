import React, {useState} from 'react';
import axios from 'axios';
import Qs from 'qs'

import {Button, Descriptions} from 'antd';


const App: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const fetch = () => {
        // axios({
        //     url: '/api/system/login',
        //     method: 'POST',
        //     headers:{
        //         'client-type':'web'
        //     },
        //     data: {
        //         department_uuid: 'depy-yyd',
        //         device_uuid: '4c7aa7eb-84c2-4918-83dc-efe2999a2e9b',
        //         password: '1',
        //         type: 'account',
        //         username: '1'
        //     }
        // }).then((res) => {
        //     console.log('res', (res.data))
        // }).catch(err => {
        //     console.log('err', err)
        // })

        axios({
            url: '/person/query/part',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'ZeahoRelease': 'face'
            },
            data: Qs.stringify({
                index: 0,
                count: 10
            })
        })
    };
    return (
        <div className="App">
            <Button
                onClick={() => {
                    setCount(count + 1);
                    fetch()
                }}
                type="primary"
            >
                Button
            </Button>

            {
                count
            }

            <Descriptions title="User Info" bordered column={2}>
                <Descriptions.Item label="Product Mode" className={'desc'}>Cloud Database </Descriptions.Item>
                <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
            </Descriptions>


        </div>
    );
};

export default App;
