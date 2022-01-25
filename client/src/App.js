import './App.css';
import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    gql
} from '@apollo/client';
import _get from 'lodash.get';
import _set from 'lodash.set';

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

const getQueriesQuery = gql`query {
    __schema {
        queryType {
            fields {
                name
            }
        }
    }
}`;

const getTypeFields = gql`query ($name: String!) {
    __type(name: $name) {
      name
      fields {
        name
        type {
            ofType {
                name
                kind
            }
        }
      }
    }
}`;

class App extends React.Component {
    state = {
        graphql_url: 'http://localhost:4010/graphql',
        client: undefined,
        queries: [],
        selectedQueryIndex: 0
    }

    fetchTypeFields = async (name) => {
        const { data } = await this.state.client.query({
            query: getTypeFields,
            variables: { name }
        });

        return Promise.all(data.__type.fields.map(async (field) => {
            let fields = [];
            if (field.type.ofType.kind === 'OBJECT') {
                fields = await this.fetchTypeFields(field.type.ofType.name);
            }

            return {
                name: field.name,
                type: field.type.ofType.name,
                status: true,
                fields
            };
        }));
    }

    fetchQueries = async () => {
        const { data } = await this.state.client.query({
            query: getQueriesQuery
        });
        const queries = await Promise.all(data.__schema.queryType.fields.map(async ({ name }, index) => {
            const fields = await this.fetchTypeFields(name);
            return {
                name,
                fields
            }
        }));

        this.setState({ queries });
    }

    connect = () => {
        this.setState({
            client: new ApolloClient({
                uri: this.state.graphql_url,
                cache: new InMemoryCache()
            })
        }, () => {
            this.fetchQueries()
        });
    }

    changeQuery = (event) => {
        this.setState({
            selectedQuery: event.target.value
        });
    }

    changeUrl = (event) => {
        this.setState({
            graphql_url: event.target.value
        });
    }

    generate = () => {

    }

    componentDidMount() {
        this.connect();
    }

    toggleFieldSelection(path) {
        const queries = this.state.queries;
        const { status } = _get(queries, path)
        _set(queries, `${path}.status`, !status);

        this.setState({ queries });
    }

    renderField = (parent, field, index) => {
        const path = `${parent}.fields[${index}]`;
        return (
            <li key={path}>
                <input checked={field.status} type="checkbox" onChange={() => this.toggleFieldSelection(path)} />
                <span className="field">{field.name}:</span> <span className="type">{field.type}</span>
                {field.fields?.length > 0 && (
                    <ul>
                        {field.fields.map((subField, subIndex) => (
                            this.renderField(path, subField, subIndex)
                        ))}
                    </ul>
                )}
            </li>
        )
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
                                <input type="text" value={this.state.graphql_url} onChange={this.changeUrl} />
                                <button onClick={this.connect}>Connect</button>
                            </div>

                            <div className="App-container-item-border-box">
                                <select
                                    value={this.state.queries[this.state.selectedQueryIndex] || ''}
                                    onChange={this.changeQuery}
                                >
                                    {
                                        this.state.queries.map((query, index) => (
                                            <option key={index} value={index}>{query.name}</option>
                                        ))
                                    }
                                </select>
                                <ul className="App-container-item-border-box-fields">
                                    {this.state.queries[this.state.selectedQueryIndex]?.fields.map((field, index) =>
                                        this.renderField(`[${this.state.selectedQueryIndex}]`, field, index)
                                    )}
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
