import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.css'
export default class Buttons extends React.Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    handleOpten = (type) => {
        // 在这里如果用if判断比较笨，直接用中括号把type包起来，就将其视作变量了
        this.setState({
            [type]: true
        })
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    {/* 传参必须通过箭头函数进行实现 */}
                    <Button type="primary" onClick={() => this.handleOpten('showModal1')}>Opten</Button>
                    <Button type="primary" onClick={() => this.handleOpten('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpten('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpten('showModal4')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        })
                    }}
                >

                </Modal>
            </div>
        )
    }
}
