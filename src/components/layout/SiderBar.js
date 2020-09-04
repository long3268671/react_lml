import React from 'react';
import { NavLink } from 'react-router-dom'
import { Menu , Layout } from 'antd';
import menuConfig from '../../config/menuConfig';
import logoURL from '../../assets/logo.jpeg';
const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderBar extends React.Component {
    state = {
        collapsed: false,
        menuList: [],
        defaultOpenKeys: [],       // 默认展开
        defaultSelectedKeys: ['/'],   // 默认选中
    };

    componentWillMount() {
        const menuList = this.setMenu(menuConfig);
        this.setState({
            menuList
        });
    }

    // 处理菜单列表
    setMenu = (menu, pItem) => {
        return menu.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={ item.key }
                             title={ <span>
                                 <span>{ item.title }</span></span> }>
                        { this.setMenu(item.children, item) }
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={ item.title } key={ item.key } pitem={ pItem }>
                    <NavLink to={ item.key } >
                        {
                            item.icon
                        }
                        <span>{ item.title }</span>
                    </NavLink>
                </Menu.Item>
            )
        });
    };

    // 收缩侧边栏
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        let name;
        if (!this.state.collapsed) {
            name = <span className="name">React管理后台</span>;
        }
        return (
            <Sider collapsible collapsed={ this.state.collapsed } onCollapse={ this.onCollapse }>
                <div className="logo">
                    <img className="logo-img" src={ logoURL } alt=""/>
                    { name }
                </div>
                <Menu theme="dark"
                      defaultOpenKeys={ this.state.defaultOpenKeys }
                      defaultSelectedKeys={ this.state.defaultSelectedKeys }
                      mode="inline">
                    { this.state.menuList }
                </Menu>
            </Sider>
        );
    }
}

export default SiderBar;
