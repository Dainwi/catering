import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <section
      id="menu"
      style={{ margin: "1rem", display: "flex", justifyContent: "center" }}
    >
      <div className="container">
        <Image src={"/menu.jpg"} alt="" width="1000" height="1200" />
      </div>
    </section>
  );
};

export default Menu;
