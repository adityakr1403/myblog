const headerMenuConfiguration = {
    items: [
        {
            id: 'home',
            label: 'Home',
            url: '/',
        },
        {
            id: 'sports',
            label: 'Sports',
            url: '/sports',
        },
        {
            id: 'business',
            label: 'Business',
            url: '/business',
        },
        {
            id: 'technology',
            label: 'Technology',
            url: '/technology',
        },
        {
            id: 'culture',
            label: 'Culture',
            url: '/culture',
        },
        {
            id: 'travel',
            label: 'Travel',
            url: '/travel',
        },
        {
            id: 'more',
            label: 'More',
            url: '/tags',
            children: [
                {
                    id: 'category1',
                    label: 'Category 1',
                    url: '/category1',
                },
                {
                    id: 'category2',
                    label: 'Category 2',
                    url: '/category2',
                },
                {
                    id: 'category3',
                    label: 'Category 3',
                    url: '/category3',
                },
            ]
        },
    ]
};


const sidebarMenuConfiguration = {};

export {headerMenuConfiguration, sidebarMenuConfiguration};