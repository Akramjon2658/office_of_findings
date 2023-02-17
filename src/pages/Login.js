import {Button, Form, Input, notification} from "antd";
import axios from "axios";
import {setAccessTokenToLocalStorage, setRefreshTokenToLocalStorage} from "../utils/storage";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [api, contextHolder] = notification.useNotification();

    const navigate = useNavigate();

    const onFinish = (values) => {
        axios.post('http://188.225.31.249:8000/api/v1/login/', {
            username: values.phone,
            password: values.password
        }).then(res => {
            setAccessTokenToLocalStorage(res.data.access);
            setRefreshTokenToLocalStorage(res.data.refresh);
            navigate('/');
        }).catch((err) => {
            console.log('error')
            api.info({
                message: "Login failed",
                description: err.response.data,
                placement: "topRight"
            })
        })
    }
    return (
        <div className={'login'}>
            <Form onFinish={onFinish}>
                <Form.Item name={"phone"} label={"Phone"}>
                    <Input/>
                </Form.Item>
                <Form.Item name={"password"} label={"Password"}>
                    <Input type={"password"}/>
                </Form.Item>

                <Button htmlType={"submit"} type={'primary'}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login