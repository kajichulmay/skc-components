import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";

function CardDetail(props) {
  const { data, colorCard = "#FFFFFF" } = props;

  let nf = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  let nn = new Intl.NumberFormat("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <Card
      style={{
        background: colorCard,
        borderRadius: "8px",
        fontFamily: "Kanit",
      }}
    >
      <CardBody>
        <p style={{ color: "#898989", fontSize: "14px", fontWeight: 400 }}>{data?.title ?? "-"}</p>
        <div>
          <span
            style={{
              marginRight: "8px",
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            {data?.title == "จำนวนเที่ยวบินทั้งหมด" ? nn.format(data?.total) : nf.format(data?.total)}
          </span>
          <span style={{ color: "#898989" }}>{data?.unit ?? "-"}</span>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardDetail;
