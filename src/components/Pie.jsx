import React from "react";
import { RingProgress, Text } from "@mantine/core";
import List from "./list";

const Pie = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        border: "4px #000",
        borderRadius: "25px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <h2>DOANH THU TỪNG MÔN 1</h2>

      <div>
        <RingProgress
          label={
            <Text size={"xl"} align={"center"}>
              90%
            </Text>
          }
          size={250}
          thickness={20}
          roundCaps
          sections={[
            { value: 60, color: "cyan", tooltip: "Anh Văn" },
            { value: 15, color: "orange", tooltip: "Toán" },
            { value: 10, color: "grape", tooltip: "Hóa" },
            { value: 5, color: "blue", tooltip: "Lý " },
          ]}
        />
      </div>

      <List
        data={[
          { note: "Anh Văn", color: "cyan" },
          { note: "Toán", color: "orange" },
          { note: "Lý ", color: "grape" },
          { note: "Hóa", color: "blue" },
        ]}
      />
    </div>
  );
};

export default Pie;
