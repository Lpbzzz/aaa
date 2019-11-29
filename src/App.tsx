import React, {useState} from 'react';

import {Button} from 'antd';


const App: React.FC = () => {


    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <Button type="primary" onClick={() => {
                setCount(count + 1)
            }}>
                Button
            </Button>
            {
                count
            }
        </div>
    );
}

export default App;
