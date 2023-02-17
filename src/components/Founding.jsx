import {Card, Col} from "antd";

const {Meta} = Card;

export function Founding(props) {
    return <Col span={8}>
        <Card
            cover={
                <img
                    alt="example"
                    src={props.image}
                />
            }
        >
            <Meta
                title={props.title}
                description={props.description}
            />
        </Card>
    </Col>;
}