import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <section
      id="menu"
      style={{ margin: "1rem", display: "flex", justifyContent: "center" }}
    >
      <div
        className="container"
        style={{
          overflow: "hidden",
          backgroundImage: 'url("/menu.jpg")',
          height: "100vh",
        }}
      >
        {/* <Image
          src={"/menu.jpg"}
          alt=""
          width="1000"
          height="1200"
          style={{ overflow: "hidden" }}
        /> */}
      </div>
    </section>
  );
};

export default Menu;
