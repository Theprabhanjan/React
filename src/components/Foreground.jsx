/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useRef } from "react"
import Card from "./Card"


function Foreground() {
    const data = [{
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".4MB",
        close: true,
        tag: { isOpen: true, tagtitle: "Download now", tagcolor: "blue" },


    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".4MB",
        close: true,
        tag: { isOpen: true, tagtitle: "Download now", tagcolor: "red" },


    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".4MB",
        close: true,
        tag: { isOpen: true, tagtitle: "Download now", tagcolor: "green" },


    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".4MB",
        close: true,
        tag: { isOpen: true, tagtitle: "Download now", tagcolor: "green" },


    }]
    const ref = useRef(null)
    return (
        <>
            <div ref={ref} className="fixed top-0 left-0 z-[3]  w-full h-full flex flex-wrap gap-5 p-10">
                {
                    data.map((item, index) => {
                        return (
                            <Card data={item} reference ={ref}    />
                        )
                    })
                }

            </div>
        </>
    )
}

export default Foreground