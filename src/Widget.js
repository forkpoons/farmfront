import {Card, Typography, Badge} from 'antd';
import './App.css';
import "antd/dist/antd.css";
import axios from 'axios'
import React, {useState, useEffect} from 'react';

const {Title} = Typography;





function Widget() {
    const [qwe, setVar] = React.useState(null);
    React.useEffect(() => {
        axios.get("http://farmpl.aidew.online/api/temp").then((response) => {
            setVar(response.data);
        });
    }, []);
    return (
        <div className="Widget">
            <Card bordered={true} style={{maxWidth: 1024, margin: 10, borderRadius: 10, borderWidth: 2, fontsize: 40}}>

                {/*<Badge count={<WifiOutlined style={{color: '#f5222d'}}/>} offset={[5, 10]}>*/}
                <Title> Теплица</Title>
                {/*</Badge>*/}

                <Title level={4}>
                    <span>Температура:</span><span> {qwe}°C</span>
                </Title>
            </Card>
        </div>
    );
}

export default Widget;
