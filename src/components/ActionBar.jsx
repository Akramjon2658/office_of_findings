import {Col, Input, Radio, Row} from "antd";
import * as PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

function ActionBar(props) {
    const navigate = useNavigate()

    const handleSearch = (e) => {
        navigate({
            search: `?search=${e.target.value}`
        })
    }

    return <Row justify={"space-between"} gutter={6} style={{marginBottom: 20}}>
        <Col flex={"auto"}>
            <Input onPressEnter={handleSearch} defaultValue={props.search}/>
        </Col>
        <Col>
            <Radio.Group defaultValue="found" buttonStyle="solid">
                <Radio.Button value="found">Topilmalar</Radio.Button>
                <Radio.Button value="lost">Yo'qotilmalar</Radio.Button>
            </Radio.Group>
        </Col>
    </Row>;
}

ActionBar.propTypes = {
    onPressEnter: PropTypes.func,
    defaultValue: PropTypes.string
};

export default ActionBar