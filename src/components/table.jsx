import { Pagination, Table } from "@mantine/core";

const elements = [
  {
    position: 1,
    name: "Toán",
    symbol: "4",
    mass: 1.0079,
  },
  {
    position: 2,
    name: "Lý",
    symbol: "4",
    mass: 4.0026,
  },
  {
    position: 3,
    name: "Hóa",
    symbol: "4",
    mass: 6.941,
  },
  {
    position: 4,
    name: "Tiếng Anh",
    symbol: "4",
    mass: 9.0122,
  },
  
];

export const TableDemo = () => {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
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
      <Table>
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Môn học</th>
            <th>số tháng</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <br />
      <Pagination position="right" size="sm" total={5}/>
    </div>
  );
};
