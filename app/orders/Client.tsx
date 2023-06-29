"use client";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  TableColumn,
  Link,
} from "@nextui-org/react";
import { Key } from "react";
import NextLink from "next/link";
import { Collections, OrdersResponse, ProductsRecord, ProductsResponse } from "../pocketbase-types"
type Texpand = {
  product: ProductsRecord
}

export default function Client({ orders }:{orders: OrdersResponse<Texpand>[]}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return (
    <Table
      aria-label="Example table with static content"
      className="h-auto min-w-full my-4 p-2"
    >
      <TableHeader>
        <TableColumn>Title</TableColumn>
        <TableColumn>Quantity</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Order ID</TableColumn>
      </TableHeader>
      <TableBody className="">
        {orders.map(
          (order) => (
            
              <TableRow key={order.id}>
                <TableCell><Link as={NextLink} href={`/orders/${order.id}`}>{order.expand?.product?.name} </Link></TableCell>
                <TableCell>{1}</TableCell>
                <TableCell>
                  {formatter.format(order.expand?.product?.price as number)}
                </TableCell>
                <TableCell><Link as={NextLink} href={`/orders/${order.id}`}>{order.id} </Link></TableCell>
              </TableRow>
           
          )
        )}
      </TableBody>
    </Table>
  );
}
