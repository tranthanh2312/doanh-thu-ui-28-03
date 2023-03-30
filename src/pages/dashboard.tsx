import React from "react";
import NavBar from "../components/NavBar";
import Pie from "../components/Pie";
import { TableDemo } from "../components/table";
import ChartExample from "../components/ChartExample";
import useScreenSize from "../hooks/useScreenSize";

import RevenueTable from "../components/SegmentedControl";
import { itemApi } from "../api/api";
import {Sumtable} from "../components/Sumtable";
import Filter from "../components/Filter";

const Dashboard = () => {
  const screenSize = useScreenSize();

  const setCookie = () => {
    const name = "gledu";
    const value =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MiwiRW50aXR5Q29kZSI6MSwiZXhwIjoxNjgwNjcwNjQ3fQ.YYJytBwhoYw8pPcAR2qLH-RCNgYgjBbFywhx5F-0J94";
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
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#D3D3D3",
        // height: "100%",
        // width: screenSize.width,
        width: "100%",
      }}
    >
      <NavBar />

      <div
        style={{
          display: "flex",
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
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2vh",

            // height: "80vh",
          }}
        >
          
          {/* <ChartExample /> */}
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
          <Filter/>
          <RevenueTable />
          {/* <RevenueTable /> */}
          <TableDemo/>
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "2vh", 
            height: "100%",
            width: "100%",
          }}>
          <Pie />
          <Sumtable/>
          </div>
          

          {/* {JSON.stringify(screenSize)} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
