import { Pagination, Table } from "@mantine/core";

const elements = [
  {
    year: "1/5",
    Date: 1,
    revene: "100.000.000",
    
  },
  {
    year: "2/5",
    Date: 2,
    revene: "100.000.000",
  },
  {
    year: "3/5",
    Date: 3,
    revene: "100.000.000",
  },
  {
    year: "4/5",
    Date: 4,
    revene: "100.000.000",
  },
  
];

export const TableDemo = () => {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.year}</td>
      
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
      <h1 className="flex items-center justify-center">BÁO CÁO DOANH THU TỔNG HỢP 2023</h1>
      <Table>
        <thead>
          <tr>
            <th>Date Month</th>
           
            
            <th>Total Revenue</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <br />
      <Pagination position="right" size="sm" total={5}/>
    </div>
  );
};
