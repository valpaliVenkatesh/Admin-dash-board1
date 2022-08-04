import React, { useState } from "react";
import "antd/dist/antd.css";
import { BsArrowBarLeft } from "react-icons/bs";
import "./index.css";
import {
  MailOutlined,
  LoginOutlined,
  WifiOutlined,
  ShoppingCartOutlined,
  CodeTwoTone,
  LockFilled,
  BookFilled,
  PictureFilled,
} from "@ant-design/icons";
import { Menu } from "antd";
import { IoLogoDropbox } from "react-icons/io";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("DashBoard", "sub1", <MailOutlined />, [
    getItem("Chat Box", "7"),
    getItem("File Manager", "8"),
    getItem("Chat Box", "9"),
  ]),
  getItem("Widgets", "sub3", <WifiOutlined />, [
    getItem("Option 9", "10"),
    getItem("Option 10", "11"),
    getItem("Option 11", "12"),
    getItem("Option 12", "13"),
  ]),
  getItem("eCommerse", "sub5", <ShoppingCartOutlined />, [
    getItem("Option 13", "14"),
    getItem("Option 14", "15"),
    getItem("Option 15", "16"),
    getItem("Option 16", "17"),
  ]),
  getItem("Components", "sub6", <LoginOutlined />, [
    getItem("Option 17", "18"),
    getItem("Option 18", "19"),
    getItem("Option 19", "20"),
    getItem("Option 20", "21"),
  ]),
  getItem("Content", "sub7", <CodeTwoTone />, [
    getItem("Option 22", "22"),
    getItem("Option 23", "23"),
    getItem("Option 24", "24"),
    getItem("Option 25", "25"),
  ]),
  getItem("Forms", "sub8", <BookFilled />, [
    getItem("Option 9", "26"),
    getItem("Option 10ProfileOutlined", "29"),
  ]),
  getItem("icons", "Authentacation", <LockFilled />, [
    getItem("Option 9", "26"),
    getItem("Option 10", "27"),
    getItem("Option 11", "28"),
    getItem("Option 12", "29"),
  ]),
  getItem("User Profile", "User Profile", <PictureFilled />, [
    getItem("Option 9", "26"),
    getItem("Option 10", "27"),
    getItem("Option 11", "28"),
    getItem("Option 12", "29"),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const SideBar = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className="sideBar-container">
      <div className="logo-container">
        <div className="website-name-logo-container">
          <IoLogoDropbox className="website-logo" />
          <h4 className="website-name">Rukada</h4>
        </div>
        <BsArrowBarLeft className="arrow-button" />
      </div>
      <div>
        <Menu
          id="side-menu"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 200,
          }}
          className="menu-container"
          items={items}
        />
      </div>
    </div>
  );
};

export default SideBar;

// import React from "react";
// import "./index.css";
// import { BsArrowBarLeft } from "react-icons/bs";

// const SideBar = () => {
//   return (
//     <div className="side-bar-container">
//       <div>
//         <div className="logo-container">
//           <img
//             src="https://i.ytimg.com/vi/pob3VK1xHcc/maxresdefault.jpg"
//             className="website-logo"
//             alt="website-logo"
//           />
//           <h1 className="website-name">VOLTUSWAVE</h1>
//           <BsArrowBarLeft color="red" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
