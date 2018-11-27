import React from 'react'
import { Card, Button, message } from 'antd'
import './ui.css'
export default class Message extends React.Component {
    showMessage = (type) => {
        message[type]('恭喜你，进入本环节！');
    }
    render() {
        return (
            <div>
                <Card title="Spin的用法" className="card-wrap">
                    <Button type="primary" onClick={() => this.showMessage('success')}>Success</Button>
                    <Button onClick={() => this.showMessage('info')}>Info</Button>
                    <Button onClick={() => this.showMessage('warning')}>Warning</Button>
                    <Button onClick={() => this.showMessage('error')}>Error</Button>
                    <Button onClick={() => this.showMessage('loading')}>Loading</Button>
                </Card>
            </div >
        )
    }
}
