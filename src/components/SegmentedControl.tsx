import React from "react";
import { Tabs } from "@mantine/core";
import { Pagination, Table } from "@mantine/core";
import { itemApi } from "../api/api";
import { Class, Item } from "../model/model";
import { useGetItem } from "../api/useApi";




const RevenueTable = () => {
  // const [_class, _setClass] = React.useState([] as Item[]);

  // 4. Import UseQuery để lưu vào 1 biến data (_item)
  const { data: _item } = useGetItem();
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        border: "1px #000",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          // textAlign: "center",
        }}
      >
        <Table align="center">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Loại</th>
              <th>Giá Tiền</th>
              <th>Students</th>
            </tr>
          </thead>
          <tbody>
            {/* 
            5. Funtion map để lặp qua từng phần tử trong mảng _item
            6. Sử dụng sort để sắp xếp theo tên
          */}
            {/* {_item?.sort((a, b) => a.itemType.itemTypeName.localeCompare(b.itemType.itemTypeName)).map((x, index) => {
               return (
                <tr key={index}>
                  <td>{x.itemName}</td>
                  <td>{x.itemType.itemTypeName}</td>
                  <td>{(x.basePrice * (-1)).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}</td>
                  <td>20</td>
                </tr>
              );
            })} */}
            {_item
              ?.sort((a, b) =>
                a.itemType.itemTypeName.localeCompare(b.itemType.itemTypeName)
              )
              .map((x, index) => {
                return (
                  index >= (currentPage - 1) * 50 &&
                  index < currentPage * 50 && (
                    <tr key={index}>
                      <td>
                        {index + 1}. {x.itemName}
                      </td>
                      <td>{x.itemType.itemTypeName}</td>
                      <td>
                        {(x.basePrice * -1).toLocaleString("vi-VN", {
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
          <Pagination
            size="sm"
            total={Math.round((_item?.length ?? 0) / 50)}
            value={currentPage}
            onChange={(e) => {
              setCurrentPage(e);
            }}
          />
        </Table>
      </div>
    </div>
  );
};

export default RevenueTable;
