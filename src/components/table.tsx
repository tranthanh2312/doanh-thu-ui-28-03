import { Pagination, Table } from "@mantine/core";
import { useState, useEffect } from "react";
import React from "react";

interface SampleElement {
  date: string;
  revenue: number;
}

const elements: SampleElement[] = [
  {
    date: "01-04-2023",
    revenue: 100000000,
  },
  {
    date: "02-04-2023",
    revenue: 100000000,
  },
  {
    date: "03-04-2023",
    revenue: 100000000,
  },
  {
    date: "04-04-2023",
    revenue: 100000000,
  },
  {
    date: "05-04-2023",
    revenue: 100000000,
  },
  {
    date: "06-04-2023",
    revenue: 100000000,
  },
  {
    date: "07-04-2023",
    revenue: 100000000,
  },
  {
    date: "08-04-2023",
    revenue: 100000000,
  },
  {
    date: "09-03-2023",
    revenue: 100000000,
  },
  {
    date: "10-03-2023",
    revenue: 100000000,
  },
];

export const TableDemo = ({ _month = "4" }) => {
  // const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<SampleElement[]>(elements);

  useEffect(() => {}, []);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        border: "1px #000",
        borderRadius: "15px",
        padding: "2vh",
        height: "auto",
      }}
    >
      <h1 className="flex items-center justify-center">
        BÁO CÁO DOANH THU TỔNG HỢP THÁNG {_month}
      </h1>

      <Table>
        <thead>
          <tr>
            <th>Date</th>

            <th>Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, index) => {
            return (
              index >= (currentPage - 1) * 10 &&
              index < currentPage * 10 && (
                <tr key={index}>
                  <td>{x.date}</td>
                  <td>
                    {x.revenue.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
        <br />
      </Table>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Pagination
          size="sm"
          total={data && data.length > 0 ? Math.ceil(data.length / 10) : 0}
          value={currentPage}
          onChange={(e) => {
            setCurrentPage(e);
          }}
        />
      </div>
    </div>
  );
};
