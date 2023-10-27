import React from "react";
import "./App.css";
import Table from "./components/table";
import Pagination from "./components/table/pagination";
import Header from "./components/header";

function App() {
  return (
    <section className="section">
      <Header />
      <Table />
      <Pagination />
    </section>
  );
}

export default App;
