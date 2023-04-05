import React, { useEffect, useState } from "react";
import { ScrollArea, Tabs } from "@mantine/core";
import { Pagination, Table } from "@mantine/core";
import { itemApi } from "../api/api";
import { Class, Item } from "../model/model";
import { useGetItem } from "../api/useApi";
import Filter from "./Filter";
import { data } from "autoprefixer";
import { list } from "postcss";

const demo = [
  {
    basePrice: -60000,
    dateAssignedToUser: 0,
    dateCreated: 1661549435,
    dateUpdated: 1665054876,
    description: "",
    discountAmount: 0,
    discountPercentage: 0,
    isInWaitingRoom: false,
    itemId: "0b89bb97-ad14-4cde-a790-1245a784905c",
    itemName: "Streamline",
    itemType: { itemTypeId: "2", itemTypeName: "Books", description: "" },
    personIdAssigningDiscount: 0,
    quantity: 0,
    recurringDay: 0,
  },
];

const RevenueTable = () => {
  // const [_class, _setClass] = React.useState([] as Item[]);

  // 4. Import UseQuery để lưu vào 1 biến data (_item)
  const { data: _item } = useGetItem();
  const [currentPage, setCurrentPage] = React.useState(1);

  const [ageFilter, setAgeFilter] = useState("");
  const [filteredData, setFilteredData] = useState<any>(null);

  useEffect(() => {
    setFilteredData(_item);
  }, [_item]);

  const handleAgeFilterChange = (e) => {
    const value = e.target.value;
    if (value.length < ageFilter.length) {
      setFilteredData(_item);
    } else {
      if (value === "") {
        setFilteredData(_item);
      } else {
        const filtered = filteredData?.filter((item) => {
          if (item.itemName.toLowerCase().includes(value.toLowerCase())) {
            return item;
          }
        });
        setFilteredData(filtered);
      }
    }
    setAgeFilter(value);
  };

  console.log("diff: ", filteredData, _item);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        border: "1px #000",
        borderRadius: "15px",
        padding: "1vh 1vw 2vh 1vw",
      }}
    >
      <Filter data={_item} />

      <input
        className="p-2 m-4  border-4 rounded-lg  bg-slate-200"
        type="text"
        value={ageFilter}
        onChange={(e) => handleAgeFilterChange(e)}
        placeholder="Search ..."
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "auto",
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
            {filteredData
              ?.sort((a: Item, b: Item) =>
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
        </Table>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Pagination
          size="sm"
          total={Math.round((_item?.length ?? 0) / 50)}
          value={currentPage}
          onChange={(e) => {
            setCurrentPage(e);
          }}
        />
      </div>
    </div>
  );
};

export default RevenueTable;
