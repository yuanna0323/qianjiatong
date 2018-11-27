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
    handleConfirm = (type) => {
        // 在这里Modal.confirm和Modal['confirm']是一样的
        Modal[type]({
            title: '确认？',
            content: '你确定你学会了React了吗？',
            // 确认事件
            onOk() {
                //在这里调用接口
                console.log('Ok')
            },
            // 取消事件
            onCancel() {
                console.log('Cancel')
            }
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
                <Card title="信息确认框" className="card-wrap">
                    {/* 传参必须通过箭头函数进行实现 */}
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Wraning</Button>
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
                    <p>欢迎你!</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>欢迎你!</p>
                </Modal>
                <Modal
                    title="React"
                    style={{ top: 20 }}
                    visible={this.state.showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>欢迎你!</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>欢迎你!</p>
                </Modal>
            </div >
        )
    }
}
