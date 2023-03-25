import React from "react";
import { useMantineTheme } from "@mantine/core";

interface DenoteListInterface {
  color: string;
  note: string;
}

interface ListData {
  data: DenoteListInterface[];
}

const List = ({ data }: ListData) => {
  const theme = useMantineTheme();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      {data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3vw",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor:
                  theme.colors[item.color][
                    theme.colorScheme === "dark" ? 6 : 5
                  ],
                marginRight: "0",
                borderRadius: "50%",
              }}
            />
            <span>{item.note}</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
