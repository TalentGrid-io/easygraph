import './App.css';
import React from 'react';
import {
    ApolloClient,
    InMemoryCache
} from '@apollo/client';

const query = `query Match {
    match {
        user {
            fullname,
            email
        },
        position {
            name,
            status
        },
        score
    }
}`;

class App extends React.Component {
    state = {
        graphql_url: 'http://localhost:4010/graphql',
        client: undefined
    }

    connect = () => {
        this.setState({
            client: new ApolloClient({
                uri: this.state.graphql_url,
                cache: new InMemoryCache()
            })
        });
    }

    generate = () => {}

    componentDidMount() {
        this.connect();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>EasyGraph</h1>
                    <h2>Generate easy graphql queries</h2>
                </header>
                <section>
                    <div className="App-container">
                        <div className="App-container-item">
                            <div className="App-container-connection">
                                <input type="text" value={this.state.graphql_url} />
                                <button onClick={this.connect}>Connect</button>
                            </div>

                            <div className="App-container-item-border-box">
                                <h1>Match Type</h1>
                                <ul className="App-container-item-border-box-fields">
                                    <li>
                                        <input type="checkbox" />
                                        <span className="field">id:</span> <span className="type">ID</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <span className="field">user:</span> <span className="type">User</span>
                                        <ul>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="field">fullname:</span> <span className="type">String</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="field">email:</span> <span className="type">String</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <span className="field">position:</span> <span className="type">Position</span>
                                        <ul>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="field">name:</span> <span className="type">String</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <span className="field">status:</span> <span className="type">Boolean</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <span className="field">score:</span> <span className="type">Int</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="App-container-item">
                            <button className="App-container-item-generate" onClick={this.generate}>Generate</button>
                        </div>
                        <div className="App-container-item">
                            <div className="App-container-item-border-box">
                                <pre className="App-container-item-query">
                                    {query}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
