import React from 'react'
import * as Icon from '@ant-design/icons';
const pageRouter = () => {
    return [
        {
            id: 1,
            link: "/",
            icon: <Icon.AppstoreTwoTone />,
            name: "Dashboard"
        },
        {
            id: 2,
            link: "/master",
            icon: <Icon.ShopTwoTone />,
            name: "Master"
        },
        {
            id: 3,
            link: "/usb",
            icon: <Icon.UsbTwoTone />,
            name: "Usb"
        },
        {
            id: 4,
            link: "/warning",
            icon: <Icon.AlertTwoTone />,
            name: "Warning"
        }
    ]
}


export default pageRouter();