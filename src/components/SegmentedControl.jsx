import { Tabs } from "@mantine/core";

import { Pagination, Table } from "@mantine/core";

const elements = [
  {
    name: "Toán",
    Date: "31/4-31/5",
    symbol: "100.000.000",
    atomicMass: 100,
  },
  {
    name: "Lý",
    Date: "31/4-31/5",
    symbol: "100.000.000",
    atomicMass: 100,
  },
  {
    name: "Hóa",
    Date: "31/4-31/5",
    symbol: "100.000.000",
    atomicMass: 100,
  },
  {
    name: "Tiếng Anh",
    Date: "31/4-31/5",
    symbol: "100.000.000",
    atomicMass: 100,
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
      <td>{element.Date}</td>
      <td>{element.symbol}</td>
      <td>{element.atomicMass}</td>
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
                <div className="flex pt-10  font-mono　text-gray-300 fo text-3xl items-center justify-center">
                  Sumtotal Revenue
                </div>
                
                <div className="flex justify-center items-center italic text-4xl text-violet-900 pt-24 mb-12 font-semibold">
                  600.000.000
                </div>
                <div className="bg-green-400 text-xl flex justify-end ml-32 mt-16 w-16"> <i trending-up="circle">+3.2%</i></div>
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
                  <th>Class</th>
                  <th>Date(from-to)</th>
                  <th>Total</th>
                  <th>quantify student</th>
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
