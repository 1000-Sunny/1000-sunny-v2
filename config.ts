const siteMetadata = {
    title: `Agenzia di Digital Marketing & Creativa`,
    company: `1000 Sunny S.r.l.`,
    siteUrl: `https://www.1000sunny.social`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo 1000 sunny.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.png`,
    ogImage: `/images/wall.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `ONLINE MARKETING | CONSULENZA`,
    description: `Un’agenzia marketing creativa e proiettata al futuro. Il tuo skipper per aiutarti nel digitale.`,
    about:
        "1000 Sunny S.r.l. è una web agency creativa che fa della trasparenza e umanità del proprio team il suo punto di forza. Crediamo nell'organizzazione, nella chiarezza comunicativa e nel rispetto dei ruoli e siamo ancora più convinti che i nostri clienti partner debbano stare al nostro fianco: non siamo semplici braccia operative, il nostro obiettivo è guidare, consigliare ma soprattutto apprendere per restituire valore. Siamo un team ricco di soft skill e con alta formazione, ci poniamo come unico interlocutore per le attività digitali di marche e aziende.",
    author: `@ianseberg`,
    blogItemsPerPage: 12,
    portfolioItemsPerPage: 10,
    teamItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "1000 Sunny",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "SERVIZI",
            url: "/portfolio/servizi",
        },
        {
            name: "IL TEAM",
            url: "/team/team-1000-sunny",
        },
        {
            name: "CONTATTACI",
            url: "/contatti",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {         
            name: "COOKIE POLICY",
            url: "/cookie-policy",
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
            name: "LinkedIn",
            icon: "/images/LinkedIn.svg",
            url: "https://www.linkedin.com/company/47592714",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/25377796-95c5-425b-9c5d-8b8a343aa144",
        description: `Compila il modulo per inviarci una mail o usa i canali social per contattarci. Siamo sempre in ascolto.`,
        mail: "sunny.trieste@gmail.com",
        phone: "+39-351-9535934",
        address: "via Sant'Anastasio 18 \nTrieste",
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
    darkmode: true,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: true
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
