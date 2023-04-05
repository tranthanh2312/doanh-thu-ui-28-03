import React from "react";
import { Class, Item } from "../model/model";

const apiUrl = "http://localhost:8080/api";

// Bước 1: Tạo ra các hàm để gọi API
export const itemApi = {
  // Bước 1: Tạo ra các hàm để gọi API
  GetAllItem: async () => {
    const response = await fetch(`${apiUrl}/v1/item/all`, {
      // 1. HTTP Methods: GET, POST, PUT, DELETE
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok at FindTask");
      })
      .then((data) => {
        //  2. Interface of Typescript
        let items: Item[] = data.data;
        return items;
      });

    return response;
  },

  GetAllClass: async () => {
    const response = await fetch(`${apiUrl}/v1/class/all`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok at FindTask");
      })
      .then((data) => {
        let x: Class[] = data.data;
        return x;
      });

    return response;
  },

  login: async () => {
    const response = await fetch(`${apiUrl}/setLogin`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok at FindTask");
      })
      .then((data) => {
        const x = data.data;

        return x;
      });

    return response;
  },

  invoiceHistory: async () => {
    const response = await fetch(`${apiUrl}/tuition/invoiceHistory`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok at FindTask");
      })
      .then((data) => {
        const x = data.data;

        return x;
      });

    return response;
  },
};
