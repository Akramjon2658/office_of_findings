import HeaderComponent from "../components/Header";
import {Layout} from "antd";
import ContentComponent from "../components/Content";
import {memo} from "react";

const {Header, Sider, Content} = Layout;

const MainPage = () => {
    return (
        <Layout className={'main-layout'}>
            <Header className={'header'}>
                <HeaderComponent/>
            </Header>
            <Layout>
                <Sider className={'sider'}>
                    Sider
                </Sider>
                <Content className={'content'}>
                    <ContentComponent/>
                </Content>
            </Layout>
        </Layout>
    )
}

export default memo(MainPage)