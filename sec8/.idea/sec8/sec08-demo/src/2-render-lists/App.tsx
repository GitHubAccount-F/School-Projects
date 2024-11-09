import React, {Component} from 'react';

class App extends Component<{}, {}> {

    render() {
        let arr: JSX.Element[] = [<p>Hello World!</p>,<p>Hola Mundo!</p>, <p>Bonjour Monde</p>]
        return (
            <div>
                {arr}
            </div>
        );
    }

}

export default App;
