import { Pagination, Table } from "@mantine/core";
import {useState, useEffect} from "react";
const elements = [
  {
    Date: 1,
    revene: "100.000.000",
  },
  {
    Date: 2,
    revene: "100.000.000",
  },
  {
    Date: 3,
    revene: "100.000.000",
  },
  {
    Date: 4,
    revene: "100.000.000",
  },
  {
    Date: 5,
    revene: "100.000.000",
  },
  {
    Date: 6,
    revene: "100.000.000",
  },
  {
    Date: 7,
    revene: "100.000.000",
  },
  {
    Date: 8,
    revene: "100.000.000",
  },
  {
    Date: 9,
    revene: "100.000.000",
  },
  {
    Date: 10,
    revene: "100.000.000",
  },
  {
    Date: 11,
    revene: "100.000.000",
  },
  {
    Date: 12,
    revene: "100.000.000",
  },
  {
    Date: 13,
    revene: "100.000.000",
  },
  {
    Date: 14,
    revene: "100.000.000",
  },
  {
    Date: 15,
    revene: "100.000.000",
  },
  {
    Date: 16,
    revene: "100.000.000",
  },
];

export const TableDemo = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() =>{
    // fetch data from API 
    fetch ("http://example.com/data")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
    
  }, []);

  const rows = data.map((element) => (
    <tr key={element.name}>
      <td>{element.Date}</td>

      <td>{element.revene}</td>
    </tr>
  ));



  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        border: "1px #000",
        borderRadius: "15px",
        padding: "2vh",
      }}
    >
      <h1 className="flex items-center justify-center">
        BÁO CÁO DOANH THU TỔNG HỢP THÁNG 4
      </h1>
      <Table>
        <thead>
          <tr>
            <th>Date</th>

            <th>Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {rows
            ?.sort((a, b) =>
              a.itemType.itemTypeName.localeCompare(b.itemType.itemTypeName)
            )
            .map((x, index) => {
              return (
                index >= (currentPage - 1) * 5 &&
                index < currentPage * 5 && (
                  <tr key={index}>
                    <td>
                      {index + 1}. {x.itemName}
                    </td>
                    <td>{x.itemType.itemTypeName}</td>
                    <td>{(x.basePrice * -1).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                    </td>
                    <td>20</td>
                  </tr>
                )
              );
            })}
        </tbody>
        <br />
        <Pagination  size="sm"  
        total={Math.round((rows ?.lenght ?? 0) / 5 )} 
        value={currentPage}
        onChange={(e) => {
          setCurrentPage(e);
        }}
        />
      </Table>
    </div>
  );
};
