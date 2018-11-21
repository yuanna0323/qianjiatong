import React from 'react'
import MenuConfig from './../../config/menuConfig'
import { Menu, Icon } from 'antd';
import './index.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        console.log(menuTreeNode)
        this.setState({
            menuTreeNode
        })
    }
    //通过箭头函数的这种方式实现this指向当前函数
    //菜单渲染
    renderMenu = (data) => {
        console.log(data)
        return data.map((item) => {
            console.log(item)
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item >
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" />
                    <h1>Imooc MS</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}