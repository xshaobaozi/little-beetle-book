import React, { Component } from 'react';
import './index.scss';
import { Input } from 'antd';
import {
    Link
} from 'react-router-dom';
import { withRouter } from "react-router-dom";
const { Search } = Input;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleSearch(val) {
        // this.props.history.push('/detail')
        this.props.history.push({
            pathname: '/detail', 
            query: {
                q: 21312
            }
        })

    }
    render() {
        return (
            <div className="head-app">
                <Link className="head-title" to="/home">小甲虫</Link><br />
                <div className="head-search">
                    <Search placeholder="请输入名称或链接" onSearch={this.handleSearch.bind(this)} style={{ width: 300 }} />
                </div>
            </div>
        );
    }
}

export default withRouter(App);
