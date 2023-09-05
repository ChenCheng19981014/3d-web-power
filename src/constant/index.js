export const menus = [
    {
        component: "page1",
        name: "方案清单",
        cid:"page1",
        children: [
            {
                name: "报价单",
                cid:"page1",
            },
            {
                name: "场景展示",
            },
        ],
    },
    {
        component: "page2",
        name: "设备参数",
        children: [
            {
                name: "逆变器",
            },
            {
                name: "电池系统",
            },
            // {
            //     name: "EMS",
            //     disabled: true,
            // },
            // {
            //     name: "隔离变压器",
            // },
        ],
    },
    {

        component: "page3",
        name: "设备安装",
        children: [
            {
                name: "电池模组组装",
            },
            {
                name: "逆变器接线",
            },
            {
                name: "EMS安装",
                disabled: true
            },
            {
                name: "隔离变压器接线",
                disabled: true

            },
        ],
    },
    {
        component: "page4",
        name: "包装运输",
        children: [
            {
                name: "包装说明",
            },
            {
                name: "国内/国外运输",
            },
            // {
            //     name: "国外运输",
            // },
        ],
    },
    {
        component: "page5",
        name: "注意事项",
        children: [
            {
                name: "使用与维护",
            },
            {
                name: "安装调试",
            },
            {
                name: "运输贮存",
            },
        ],
    },
].map((menu, index) => {
    index += 1;
    menu.id = index;
    menu.children.map((item, i) => {
        i += 1;
        item.component = "page" + i
        item.id = index + "-" + i;
    });
    return menu;
})


export const NEED_LOGIN_ROUTER_NAMES = [
    "project", "setting",'collection','recovery'
]