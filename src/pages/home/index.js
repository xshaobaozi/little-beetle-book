import React, { Component } from 'react';
import './index.scss';

function ListItem({ src, name, onClick }) {
    return (
        <div className="home-app__list-item" onClick={onClick()}>
            <div className="home-app__list-item__img">
                <img
                    alt={src}
                    src={src} />
            </div>
            <p className="home-app__list-item__name">{name}</p>
        </div>
    )
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: '海贼王',
                    src: 'https://static.fzdm.com/manhua/img/6.jpg'
                },
                {
                    name: '飞轮少年',
                    src: 'https://static.fzdm.com/manhua/img/2.jpg'
                }
            ]
        }
        this.handleCheckDetail = this.handleCheckDetail.bind(this);
    }
    handleCheckDetail(item) {
        console.log(item)
    }
    render() {
        return (
            <div className="home-app">
                <p className="base-title__desc" onClick={(e) => this.handleCheckDetail(e)}>
                    浏览历史
                </p>
                <div className="home-app__list">
                    {
                        this.state.list.map(item => (
                                <ListItem 
                                    onClick={(e) => this.handleCheckDetail.bind(this, item)} 
                                    name={item.name} 
                                    src={item.src} 
                                    key={item.name}></ListItem>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;
