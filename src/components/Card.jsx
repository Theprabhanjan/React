/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data,reference }) {





    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=" relative w-60 h-72 rounded-[45px] bg-zinc-900/90 py-10 px-8 text-white overflow-hidden ">
                <FaRegFileLines />
                <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
                <div className="footer absolute bottom-0   w-full  left-0 ">
                    <div className="flex gap-2 items-center justify-between mb-5 px-6 py-3">
                        <h5>{data.filesize}</h5>
                        <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
                            {data.close ? <IoMdCloseCircleOutline /> : <LuDownload size=".8em" color="#fff" />}

                        </span>
                    </div>
                    {data.tag.isOpen && (
                        <div className={`tag w-full ${data.tag.tagcolor==="blue" ? "bg-blue-700": "bg-green-700"} py-4 px-8 flex items-center justify-center`}>
                            <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>

                        </div>
                    )}

                </div>

            </motion.div>
        </>
    )
}

export default Card