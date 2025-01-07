const routes = [
    {
        name: "Book now",
        link: "./book.html",
    },

    {
        name: "Menus",
        link: "./menu.html",
    },
    {
        name: "@Bar & Grill - Mayfair",
        link: "/at-bar-and-grill-mayfair",
        children: [
            {
                name: "Restaurant",
                link: "/restaurant",
            },

            {
                name: "Butcher's Block",
                link: "/butches-block-experience",
            },
            {
                name: "Gallery",
                link: "/galery",
            },
            {
                name: "Take A Tour",
                link: "/take-a-tour",
            },
        ],
    },
    {
        name: "Groups & Events",
        link: "/private-dining-and-events",
        children: [
            {
                name: "Group Dining",
                link: "/group-dining",
            },
            {
                name: "Private Dining",
                link: "/private-dining",
            },
            {
                name: "Exclusive Hiring",
                link: "/exclusive-hire",
            },
        ],
    },
    {
        name: "What's on",
        link: "/what-is-on",
    },
    {
        name: "Gifting",
        link: "/gifting",
    },
]

export { routes }
