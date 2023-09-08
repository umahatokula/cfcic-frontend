import { useRouter } from "next/navigation";
import React from "react";
import { BsFillEvStationFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useClickOutside } from "@mantine/hooks";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useAppStore } from "@/lib/store";
import { logOut } from "@/app/utils/auth";

interface MenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const styles = {
  li: `border-b-2 border-[#77858C] py-5`,
};

function Menu({ open, setOpen }: MenuProps) {
  const router = useRouter();

  const {
    clearAlert,
    resetBiodata,
    resetCenterDetails,
    resetEvent,
    resetRegistration,
    resetFinancialCommitments,
    resetKidsDetails,
    resetUser,
  } = useAppStore();

  const ref = useClickOutside(() => {
    console.log("close mobile menu");
  });

  function changeRoute(path: string) {
    setOpen(false);
    router.push(path);
  }

  return (
    <div className="">
      {open && (
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{
            type: "slide",
            ease: "linear",
            duration: 0.3,
          }}
          className="absolute top-0 left-0 w-full z-50"
          ref={ref}
        >
          <div className="bg-[#FBFDFF] text-[#01080D] p-10">
            <ul>
              <li
                onClick={() => changeRoute("/dashboard")}
                className={styles.li}
              >
                <div className="flex items-center cursor-pointer">
                  <span>
                    <BsFillEvStationFill className="text-[#01080D] mr-3 w-5 h-5" />
                  </span>
                  <span className="text-base text-[#01080D]">Dashboard</span>
                </div>
              </li>
              <li onClick={() => changeRoute("/events")} className={styles.li}>
                <div className="flex items-center cursor-pointer">
                  <span>
                    <BsFillEvStationFill className="text-[#01080D] mr-3 w-5 h-5" />
                  </span>
                  <span className="text-base text-[#01080D]">Events</span>
                </div>
              </li>
              <li className={styles.li}>
                <a
                  href="https://wordshop.christfamilyministries.org/"
                  target="_blank"
                >
                  <div className="flex items-center cursor-pointer">
                    <span>
                      <BsFillEvStationFill className="text-[#01080D] mr-3 w-5 h-5" />
                    </span>
                    <span className="text-base text-[#01080D]">Wordshop</span>
                  </div>
                </a>
              </li>
              <li className={styles.li}>
                <a
                  href="https://growth.christfamilyministries.org/"
                  target="_blank"
                >
                  <div className="flex items-center cursor-pointer">
                    <span>
                      <BsFillEvStationFill className="text-[#01080D] mr-3 w-5 h-5" />
                    </span>
                    <span className="text-base text-[#01080D]">
                      Growth Track
                    </span>
                  </div>
                </a>
              </li>
              <li
                onClick={() => changeRoute("/profile/biodata")}
                className={styles.li}
              >
                <div className="flex items-center cursor-pointer">
                  <span>
                    <BsFillEvStationFill className="text-[#01080D] mr-3 w-5 h-5" />
                  </span>
                  <span className="text-base text-[#01080D]">My Profile</span>
                </div>
              </li>
              <li className="mt-5 py-3">
                <button
                  onClick={() => {
                    logOut();

                    clearAlert();
                    resetBiodata();
                    resetCenterDetails();
                    resetEvent();
                    resetRegistration();
                    resetFinancialCommitments();
                    resetKidsDetails();
                    resetUser();
                    
                    router.push('/login')
                  }}
                  className="w-full bg-accent text-white py-2 rounded-2xl"
                >
                  Logout
                </button>
              </li>
              {/* <li className="mt-0 py-1 text-center text-accent">
                <Link href={'/register'}>Register</Link>
              </li> */}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );

  //   return (
  //     <div className="">
  //       {open && (
  //         <motion.div
  //           initial={{ x: -100 }}
  //           animate={{ x: 0 }}
  //           transition={{
  //             type: "slide",
  //             ease: "linear",
  //             duration: 0.3,
  //           }}
  //           className="z-50 absolute top-0 left-0 w-full"
  //           ref={ref}
  //         >
  //           <div className="bg-[#FBFDFF] text-[#01080D] p-10">
  //             <ul>
  //               {menu.map((item) => (
  //                 <li className="my-8 border-b-2 border-[#77858C] pb-5">
  //                   <div className="flex items-center cursor-pointer">
  //                     <span className="text-[#01080D] mr-0">{getMenuIcon(item)}</span>
  //                     <span className="text-base text-[#01080D]">
  //                       {item.title}
  //                     </span>
  //                   </div>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
  //         </motion.div>
  //       )}
  //     </div>
  //   );
}

export default Menu;
