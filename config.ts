const siteMetadata = {
    title: `Thousand Sunny`,
    siteUrl: `https://www.1000sunny.social`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.png`,
    ogImage: `/images/wall.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `DIGITAL AGENCY | CONSULENZA`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
    about:
        "Cras accumsan a lectus at tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus elementum dapibus dictum. Mauris auctor quam nec est tincidunt hendrerit. Donec pulvinar lobortis mauris. Cras vulputate ullamcorper ligula a rhoncus. Nunc venenatis elementum ligula in semper. Mauris malesuada purus nunc, et ultricies leo aliquam ac. Ut sit amet nunc id magna accumsan hendrerit in eget metus.",
    author: `@ianseberg`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "CHI SIAMO",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTATTACI",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/1000-Sunny/1000-sunny-v2",
        },
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/1000sunnysrl",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/1000sunnysrl",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://www.twitter.com/1000sunnysrl",
        },
        {
            name: "LinkedIn",
            icon: "/images/LinkedIn.svg",
            url: "https://www.linkedin.com/company/1000sunnysrl",
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "#",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/25377796-95c5-425b-9c5d-8b8a343aa144",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "info@1000sunny.social",
        phone: "+39-379-1353128",
        address: "via G. Mazzini 20 \nTrieste \n(Italia)",
    },
    disqus: "www-1000sunnysrl",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Inserisci un nome",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Inserisci un indirizzo email valido o controlla che il testo inserito sia corretto",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Scrivi un messaggio che contenga almeno 15 caratteri, grazie",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: true,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
