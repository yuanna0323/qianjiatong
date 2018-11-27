import React from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import './ui.css'
export default class Loadings extends React.Component {


    render() {
        const icon = <Icon type="loading" style={{ fontAize: 24 }} />
        const iconLoading = <Icon type="loading" style={{ fontAize: 24 }} />
        return (
            <div>
                <Card title="Spin的用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin size="default" style={{ margin: '0 10px' }} />
                    <Spin size="large" />
                    <Spin indicator={icon} style={{ marginLeft: 10 }} />
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    {/* info代表这是一个信息框 */}
                    <Alert
                        message="React"
                        description="欢迎来到这里!"
                        type='info'
                    />
                    {/* warning是一个警告框 */}
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到这里!"
                            type='warning'
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到这里!"
                            type='warning'
                        />
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert
                            message="React"
                            description="欢迎来到这里!"
                            type='warning'
                        />
                    </Spin>
                </Card>
            </div >
        )
    }
}
