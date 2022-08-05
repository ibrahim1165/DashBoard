import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneHome} from "react-icons/ai";
import { FiLock} from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { BsLink45Deg} from "react-icons/bs";
const Config = () => {
    return (
        <div>
          <div className="flex items-center">
          <h1 className="text-3xl px-6">Configuration</h1>
          <Link className="text-xl text-primary flex items-center" to="/">
            <AiTwotoneHome />
            DashBoards</Link>
          </div>
           <div class="navbar bg-base-100">
        <div class="navbar-center mt-4 text-black text-xl lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a>
          <AiOutlineUser />
          Categories
                </a></li>
            <li><a>
               <FiLock />
               Quicklist
                </a></li>
            <li><a>
             <BsFillBookmarkFill />
              Department
                </a></li>
            <li><a>
             <BsBellFill />
             Country
                </a></li>
            <li><a>
               <BsLink45Deg />
               Urgency
                </a></li>
          </ul>
        </div>
      </div>
        </div>
    );
};

export default Config;