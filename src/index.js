import React from 'react';
import ReactDom from 'react-dom';

const App = () =>{
    return(
        <div>
            <h1>Hello mehdi 200</h1> 
            {/* من مصطفی رو تغییر دادم */}

            <h1>Hello mostafa 200</h1> 
            {/* من مصطفی رو تغییر دادم */}

        </div>
    )
}

ReactDom.render(<App/>,document.getElementById('root'))