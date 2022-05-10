import React, { Component } from "react";
import Featured from "../../components/Featured/Featured";
import BlockText  from "../../components/BlockText/BlockText";
import Box from "@mui/material/Box";
import SearchBar from "../../components/SearchBar/SearchBar";
import Divider from "@mui/material/Divider";
import "./Home.css";

const about_us_content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur, odio vel tempor condimentum, nisl ante venenatis enim, vel tempus ipsum nibh sit amet velit. In auctor mi felis, id accumsan lorem egestas nec. In hendrerit felis vel augue placerat varius. Fusce lacinia tellus arcu, in facilisis enim lobortis sed. Nam elementum ex ac quam accumsan, sed dignissim nisl fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris facilisis, est sit amet accumsan fermentum, lacus felis bibendum elit, ut tincidunt lectus turpis in velit. Ut arcu nibh, commodo id orci quis, auctor sagittis sem. Donec ac aliquet orci, sit amet consectetur quam. Integer non orci pulvinar, suscipit sapien a, pretium ipsum. Nulla ultricies nisi id dignissim vulputate. Nunc ut est ut arcu pulvinar vulputate sed at ligula.
Donec tellus dolor, venenatis vel sodales sit amet, ultricies vel arcu. Aliquam erat volutpat. Sed euismod nibh vitae condimentum dignissim. Suspendisse potenti. Maecenas sit amet fermentum dui, iaculis sagittis justo. Sed efficitur elit vel tellus sagittis sollicitudin. Maecenas id volutpat elit.
Integer eget tortor dolor. Fusce lobortis venenatis elit at sodales. Sed iaculis justo a leo sodales, eget commodo est sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nisl ullamcorper, posuere massa vitae, dictum lorem. Proin pulvinar malesuada congue. Etiam ullamcorper massa a dui aliquet imperdiet. Fusce elit enim, maximus pretium luctus a, gravida at massa. Suspendisse sed odio eleifend felis pulvinar accumsan a sit amet arcu. Ut nunc eros, molestie eget dui a, varius blandit nunc. Fusce maximus et nulla quis dapibus. Nulla nec ligula tempor, dapibus ante quis, iaculis metus. Phasellus feugiat turpis ullamcorper nibh porttitor, eu cursus dui dictum. Praesent fringilla porttitor elit vel sollicitudin. Nullam vestibulum elit erat, id consectetur justo rhoncus sed. Pellentesque sollicitudin neque in risus tristique euismod.
Aenean iaculis facilisis urna, ac vestibulum nunc tincidunt at. Suspendisse tristique blandit lorem a fringilla. Praesent fermentum porta aliquet. Cras sed ipsum at quam vulputate tincidunt. Praesent eu volutpat ex, sit amet pellentesque purus. Nunc tincidunt ante ipsum, in efficitur felis sagittis quis. Etiam risus purus, hendrerit et sem ac, congue rhoncus neque. Pellentesque et purus ac sem accumsan ornare ac accumsan leo. Nunc tincidunt tellus vitae pretium condimentum. Nunc eleifend lorem a purus viverra cursus.
Quisque pretium porttitor ex eu cursus. Mauris id ipsum sit amet arcu congue fermentum vel ac sapien. Ut suscipit lobortis posuere. In vehicula augue id tempus convallis. Suspendisse ac nibh ut enim varius pretium. Sed vitae eros leo. Morbi varius orci est, eu tincidunt risus sodales hendrerit.
`;

const MainPage = () => {
    return (
    <div className="main-page-wrapper">
        <Featured />
        <hr />
        <Box sx={{my : "5rem"}}>
            <SearchBar onAdd={onAdd}/>
        </Box>
        <Divider sx={{my : "2rem"}} />
        <BlockText text={about_us_content} headerText="About Us" />
    </div>);
}

export default MainPage;