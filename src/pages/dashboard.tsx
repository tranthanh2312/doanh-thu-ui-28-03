import React, { useState } from "react";

import Pie from "../components/Pie";
import { TableDemo } from "../components/table";

import useScreenSize from "../hooks/useScreenSize";

import RevenueTable from "../components/SegmentedControl";
import { itemApi } from "../api/api";
import { Sumtable } from "../components/SumTable";
import Filter from "../components/Filter";
import { Select } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";

const Dashboard = () => {
  const screenSize = useScreenSize();
  const thisMonth = (new Date().getMonth() + 1).toString();
  const [selectMonth, setSelectMonth] = useState(thisMonth);
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => {
    return { value: x.toString(), label: "Thang " + x.toString() };
  });
  const setCookie = () => {
    const name = "gledu";
    const value =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTMsIkVudGl0eUNvZGUiOjEsImV4cCI6MTY4MTI4ODE5MX0.CSUdxOA9MNEO8MnJMEhc9-h3v9sUnuLEVndBqPkY8FA";
    const days = 10;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  React.useEffect(() => {
    setCookie();
    // itemApi.login();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        flexDirection: "column",
        backgroundColor: "#D3D3D3",
        // height: "100%",
        // width: screenSize.width,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "24px",
          width: "100%",
          height: "100%",
        }}
      >
        <div class="pr-8 ">
          <h2 class="text-center normal-case">SEARCH MONTH</h2>
          <Select
          class="rounded-3xl w-48 h-8 text-center"
            value={selectMonth}
            label=""
            placeholder="Search ... "
            onChange={(e) => setSelectMonth(e ?? "")}
            data={monthList}
          />
        </div>
        <div >
          <h2 class="ml-5 text-center normal-case">SEARCH DATE</h2>
          <DateTimePicker
          class="bg-white w-48 h-8 mt- mt-0.5 ml-5 rounded-3xl"
            withSeconds
            label=""
            placeholder="Search date"
            maw={400}
            mx="auto"
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          flexDirection: screenSize.width < 992 ? "column" : "row",
          justifyContent: "space-around",
          alignItems: screenSize.width < 992 ? "center" : "start",
          width: "100%",
          marginTop: screenSize.width < 992 ? "10vh" : "5vh",
          marginBottom: screenSize.width < 992 ? "10vh" : "5vh",
          paddingLeft: screenSize.width < 992 ? "2vh" : "8vw",
          paddingRight: screenSize.width < 992 ? "2vh" : "8vw",
          gap: screenSize.width < 992 ? "10vh" : "5vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "2vh",
            height: "100%",
            width: "100%",
          }}
        >
          <Pie />
          <Sumtable />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2vh",
            height: "100%",
            width: "100%",
            // textAlign: "center",
          }}
        >
          <RevenueTable />
          <TableDemo _month={selectMonth} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
