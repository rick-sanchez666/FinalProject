import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SuccessBanner = props => {
    return (
        <Result
        status="success"
        title="Successfully added record"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
         <Link to="/home">
             <Button type="primary" key="console">
           Go Back
          </Button>
         </Link>,
        ]}
      />
    )
}


export default SuccessBanner