import React from "react";
import { Bargraph } from "./Bargraph";
import Container from "./Container";

const Default = () => {
  return (
    <div>
      <h2 className="font-bold mb-4">eCommerce</h2>
      <div class="grid grid-cols-4 gap-4">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <Container className="col-span-1 flex flex-col gap-2 font-bold p-7 bg-blue-100 dark:text-background">
            <h3 className="text-base">Customers</h3>
            <div className="text-xl">3,452</div>
          </Container>
          <Container className="col-span-1 flex flex-col gap-2 font-bold p-7">
            <h3 className="text-base">Orders</h3>
            <div className="text-xl">3,452</div>
          </Container>
          <Container className="col-span-1 flex flex-col gap-2 font-bold p-7 ">
            <h3 className="text-base">Revenue</h3>
            <div className="text-xl">$752</div>
          </Container>
          <Container className="col-span-1 flex flex-col gap-2 font-bold p-7 bg-indigo-100 dark:text-background">
            <h3 className="text-base">Growth</h3>
            <div className="text-xl">32.1%</div>
          </Container>
        </div>
        <Container className="col-span-2">
          <h3 className="text-base font-bold mb-4">Projections vs Actuals</h3>
          <Bargraph />
        </Container>
        <Container className="col-span-3">06</Container>
        <Container className="col-span-1">07</Container>
        <Container className="col-span-3">08</Container>
        <Container className="col-span-1">09</Container>
      </div>
    </div>
  );
};

export default Default;
