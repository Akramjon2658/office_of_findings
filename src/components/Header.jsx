import {Button, Col, Row} from "antd";
import {Link} from "react-router-dom";
import {userActions} from "../store/user.slice";
import {useDispatch, useSelector} from "react-redux";

const Header = (props) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        const userData = {
            name: 'Ibrohim',
            whatIsHeDoing: "Playing a game"
        }

        dispatch(userActions.setUser(userData))
    }

    const user = useSelector(state => state.user);

    console.log(user)
    return (
        <Row justify={'space-between'}>
            <Col>
                TI
                <Button onClick={handleClick}>setUser</Button>
            </Col>
            <Col>
                <Row gutter={12}>
                    <Col>
                        <Link to={'/i-found'}>Topib oldim</Link>
                    </Col>
                    <Col>
                        <Link to={'/i-found'}>Yo'qotdim</Link>
                    </Col>
                    <Col>
                        <Link to={'/login'}>Kirish</Link>
                    </Col>
                    <Col>
                        <Link to={'/i-found'}>Ro'yxatdan o'tish</Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Header