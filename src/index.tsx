import React from "react";
import ReactDOM from "react-dom/client";
import fa_IR from "antd/lib/locale/fa_IR";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import "./styles/tailwind.css";

import Router from "./router";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { JalaliLocaleListener } from "antd-jalali";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<ConfigProvider locale={fa_IR} direction="rtl" theme={{
        components: {
            Layout: {
                triggerColor:'rgb(14 165 233)',
                bodyBg:'#daeaf7',
                headerBg:'#4fa5d8',
                siderBg:'#00022b',
                footerBg:'#4fa5d8',
            },
            Divider: {
                colorSplit: '#69b1ff'
            },Menu: {
                colorBgContainer: '#69b1ff',
                darkItemBg: '#00022b',
                darkItemColor: '#69b1ff',
                subMenuItemBg:'#69b1ff',
                iconSize:20,
                itemMarginBlock:8,
                darkItemSelectedBg: '#0855b1',
                darkSubMenuItemBg: '#010e54',
                darkItemHoverBg	: '#daeaf7',
                darkItemHoverColor	: '#00022b',
            }
        }
    }}>
        <JalaliLocaleListener/>
        <HashRouter>
                <Router/>
        </HashRouter>
    </ConfigProvider>,
);
