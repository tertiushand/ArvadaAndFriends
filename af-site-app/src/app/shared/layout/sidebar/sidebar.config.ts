import { Nav } from './sidebar.type';

export class SidebarConfig {
    config: Array<Nav> =
    [
        {
            "label": "Shop",
            "icon": "",
            "route": "shop"
        },{
            "icon": "",
            "route": "shop"
        },{
            "label": "External Links",
            "subnav": [
                {
                    "label": "Google",
                    "icon": "",
                    "uri": "https://google.com"
                },{
                    "label": "Facebook",
                    "icon": "",
                    "uri": "https://facebook.com"
                },{
                    "label": "eBay",
                    "icon": "",
                    "uri": "https://ebay.com"
                }
            ],
            "subnavState": "inactive"
        }
    ];
}