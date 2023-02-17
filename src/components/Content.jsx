import {Col, message, notification, Pagination, Row} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
import {Founding} from "./Founding";
import {useLocation, useNavigate} from "react-router-dom";
import ActionBar from "./ActionBar";

const Content = () => {
    const [foundings, setFoundings] = useState({
        count: 0,
        results: []
    });
    const [error, setError] = useState(null)

    const location = useLocation()
    const navigate = useNavigate();
    const [notifyApi] = message.useMessage();

    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search')
    const page = +searchParams.get("page") || 1;
    const pageSize = +searchParams.get("size") || 10

    useEffect(() => {
        return
        axios.get(`http://188.225.31.249:8000/api/v1/finding`, {
            params: {
                search,
                page,
                page_size: pageSize
            }
        }).then(res => {
            setFoundings(res.data)
        }).catch((err) => {
            console.log(err.response)
            setError(err)
        })
    }, [page, pageSize, search])

    useEffect(() => {
        if(error) {
            alert(error)
            // notifyApi.open({
            //     type: "Error",
            //     content: error.response.data
            // })
        }
    }, [error])

    const handlePageChange = (page, pageSize) => {
        navigate({
            search: `?page=${page}&size=${pageSize}`
        })
    }

    return (
        <Row>
            <Col span={24}>
                <ActionBar search={search}/>
            </Col>
            <Col span={24}>
                <Row gutter={[12, 12]}>
                    {
                        foundings.results.map(f => <Founding key={f.id} {...f} />)
                    }
                </Row>
            </Col>
            <Col span={24}>
                <Pagination
                    onChange={handlePageChange}
                    hideOnSinglePage={true}
                    total={foundings.count}
                    pageSize={pageSize}
                    pageSizeOptions={[10, 25, 50]}
                    defaultCurrent={1}
                    current={page}
                />
            </Col>
        </Row>
    )
}

export default Content