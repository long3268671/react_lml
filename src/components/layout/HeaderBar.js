import React from 'react';
import { Layout, Menu, Dropdown, Icon, Breadcrumb } from 'antd';
import customUrl from '../../assets/custom.jpeg';
const { Header } = Layout;

class UserInfo extends React.Component {
    state = {
        visible: false,   // 菜单是否显示
    };

    handleVisibleChange = flag => {
        this.setState({ visible: flag });
    };

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="outLogin">退出登录</Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={ menu } onVisibleChange={ this.handleVisibleChange } visible={ this.state.visible }>
                <div className="ant-dropdown-link">
                    <img className="custom-img" src={ customUrl } alt=""/>
                    {/*<Icon type="caret-down" />*/}
                </div>
            </Dropdown>
        );
    }
}

const HeaderBar = () => {
    return (
        <Header>
            <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
            </Breadcrumb>
            <UserInfo/>
        </Header>
    );
};

export default HeaderBar;
