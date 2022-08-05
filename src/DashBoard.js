import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FcDataConfiguration } from "react-icons/fc";
const DashBoard = () => {
    return (
        <div class="navbar bg-base-100" >
        <div class="navbar-center mx-auto font-bold text-black text-xl lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a>
           <AiOutlineHome />
           DashBoards
                </a></li>
            <li><a>
                <IoMdCheckboxOutline />
                Supports
                </a></li>
            <li><a>
               <FaUserAlt />
               User
                </a></li>
            <li><a>
                <FcDataConfiguration />
               <Link to="/config">Configuration</Link>
                </a></li>
          </ul>
        </div>
      </div>
    );
};

export default DashBoard;