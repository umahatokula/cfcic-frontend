import React from "react";
import Image from "next/image";
import { AiOutlineBell } from "react-icons/ai";
import { useAppStore } from "@/lib/store";
import Devotional from "./Devotional";
import DashboardProfile from "./DashboardProfile";
import { getTodaysDevotional } from "@/app/utils/devotionals";
//import Card from "./Card";

const DashboardHeader = async () => {
  const devotional: Devotional = await getTodaysDevotional();
  return (
    <>
      <div className="w-full">
        <DashboardProfile />
        <Devotional devotional={devotional}  />
      </div>
    </>
  );
};

export default DashboardHeader;
