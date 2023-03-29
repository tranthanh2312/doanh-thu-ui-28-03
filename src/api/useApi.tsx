import React from "react";
import { Item } from "../model/model";
import { itemApi } from "./api";
import { useMutation, useQuery } from "react-query";

// 3. Tạo UseQuery
export const useGetItem = () => {
  const getItem = () => {
    return itemApi.GetAllItem();
  };

  return useQuery(["getQuota"], getItem);
};
