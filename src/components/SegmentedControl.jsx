import { Tabs } from "@mantine/core";

import { Pagination, Table } from "@mantine/core";

const elements = [
  {
    name: "Toán",
    symbol: "C",
    atomicMass: 12.011,
  },
  {
    name: "Lý",
    symbol: "N",
    atomicMass: 14.007,
  },
  {
    name: "Hóa",
    symbol: "Y",
    atomicMass: 88.906,
  },
  {
    name: "Tiếng Anh",
    symbol: "Ba",
    atomicMass: 137.33,
  },
  
];

const element = [
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
const SegmentedControl = () => {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      {/* <td>{element.position}</td> */}
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  const row = element.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  return (
    <div className="bg-slate-50 w-96 h-96 rounded-3xl">
      <div>
        <Tabs defaultValue="chat">
          <Tabs.List>
            <Tabs.Tab value="chat">SumTotal</Tabs.Tab>
            <Tabs.Tab value="gallery">Revenue</Tabs.Tab>
            <Tabs.Tab value="settings">Transform</Tabs.Tab>
            <Tabs.Tab value="account" ml="auto">
              Account
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="chat" pb="xs">
            <Table>
              <div className=" w-80 h-96">
                <div className="flex pt-6 font-serif　text-gray-300 fo text-2xl items-center justify-center">
                  subtotal
                </div>
                <div className="flex justify-center text-4xl text-lime-500 pt-3 border-lime-200 ">
                  600.000.000
                </div>
              </div>
            </Table>
          </Tabs.Panel>
          <Tabs.Panel
            value="gallery"
            pb="xs"
//             className="w-80 h-80 items-center pl-10 grid  "
          >
            <Table>
              <thead>
                <tr>
                  <th>Element position</th>
                  <th>Element name</th>
                  <th>Symbol</th>
                  <th>Atomic mass</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Tabs.Panel>
          <Tabs.Panel
            value="settings"
            pb="xs"
          >
            <div
              style={{
                backgroundColor: "#fff",
                border: "1px #000",
                borderRadius: "15px",
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
                <tbody>{row}</tbody>
              </Table>

              <br />
              <Pagination position="right" size="sm" total={5} />
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
      <div></div>
    </div>
  );
};

export default SegmentedControl;
