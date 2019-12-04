import React, {useState} from 'react';

import {Button} from 'antd';


const App: React.FC = () => {

    const [count, setCount] = useState<number>(0);
    const fet = (): number => {
        return 3
    };


    return (
        <div className="App">
            <Button
                onClick={() => {
                    setCount(count + 1)
                    fet()
                }}
                type="primary"
            >
                Button
            </Button>
            {
                count
            }
        </div>
    );
};

export default App;
