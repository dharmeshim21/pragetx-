export const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://pragetx.ai/#organization",
            "name": "PragetX",
            "legalName": "PragetX",
            "title": "Fueling growth with AI-powered software development » PragetX",
            "description": "Build, automate and predict everything with PragetX. We use AI, Data science and Automation for Software Service & Product Development.",
            "employmentType": ["Full-Time", "Work From Home"],
            "image": "https://pragetx.ai/#image",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "PragetX",
                "sameAs": "https://pragetx.ai/",
                "logo": "https://pragetx.ai/images/header_logo_black.png"
            },
            // "aggregateRating": {
            //     "@type": "AggregateRating",
            //     "ratingValue": "4.8",
            //     "reviewCount": "62"
            // },
            "foundingDate": "2021",
            "address": [
                {
                    "@type": "PostalAddress",
                    "streetAddress": "D-509 & D-510, Swati Clover, Shilaj Circle, SP Ring Road, Thaltej, Ahmedabad",
                    "addressLocality": "Ahmedabad",
                    "addressRegion": "Gujarat",
                    "postalCode": "380054",
                    "addressCountry": "India"
                },
                {
                    "@type": "PostalAddress",
                    "streetAddress": "PO Box 531, Centerville, Atlanta",
                    "addressLocality": "Atlanta",
                    "addressRegion": "GA",
                    "postalCode": "31028",
                    "addressCountry": "US"
                },
                {
                    "@type": "PostalAddress",
                    "streetAddress": "379, New Chester Road, Birkenhead",
                    "addressLocality": "Birkenhead",
                    "addressRegion": "Liverpool",
                    "postalCode": "CH62 3LA",
                    "addressCountry": "UK"
                },
                {
                    "@type": "PostalAddress",
                    "streetAddress": "Rua Castelo 239 Foz do Iguaçu",
                    "addressLocality": "Foz do Iguaçu",
                    "addressRegion": "Paraná",
                    "postalCode": "85869-185",
                    "addressCountry": "Brazil"
                }
            ],
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-84878-90773",
                    "contactType": ["HR"]
                },
                {
                    "@type": "ContactPoint",
                    "email": "hello@pragetx.com",
                    "contactType": ["Sales"]
                }
            ],
            "sameAs": [
                "https://www.facebook.com/PragetX",
                "https://twitter.com/PragetX",
                "https://www.linkedin.com/company/79788955",
                "https://www.instagram.com/pragetx_softwares/",
                "https://www.youtube.com/channel/UC4ju5EX2B5ptpTSIHOZbGLw",
                "https://www.behance.net/pragetxtechnologies/",
                "https://dribbble.com/PragetX"
            ]
        },
        {
            "@type": "WebSite",
            "@id": "https://pragetx.ai/#website",
            "url": "https://pragetx.ai/",
            "name": "PragetX",
            "publisher": {
                "@id": "https://pragetx.ai/#organization"
            }
        },
        {
            "@type": "ImageObject",
            "@id": "https://pragetx.ai/#primaryimage",
            "url": "https://pragetx.ai/images/header_logo_black.png"
        },
        {
            "@type": "WebPage",
            "inLanguage": "en-US",
            "isPartOf": {
                "@id": "https://pragetx.ai/#website"
            },
            "about": {
                "@id": "https://pragetx.ai/#organization"
            },
            "datePublished": "2022-11-24T12:20:33+00:00",
            "dateModified": "2022-11-25T10:45:09+00:00",
        }
    ]
};