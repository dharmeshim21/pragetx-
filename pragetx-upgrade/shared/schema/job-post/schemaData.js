export const schemaData = {
    "@context": "http://schema.org/",
    "@type": "JobPosting",
    "datePosted": new Date().toISOString().split('T')[0], // Current date
    "validThrough": new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0], // One month from now
    "directApply": true,
    "hiringOrganization": {
        "@type": "Organization",
        "name": "PragetX",
        "url": 'https://pragetx.ai/',
        "logo": "https://pragetx.ai/images/pragetx_name_logo.png"
    },
    "jobLocation": {
        "@type": "Place",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 23.05139,
            "longitude": 72.4798372,
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "D-509 & D-510, Swati Clover, Shilaj Circle, Sardar Patel Ring Road, Thaltej",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "postalCode": "380054",
            "addressCountry": "India"
        }
    },
    "industry": "Information Technology",
    "applicantLocationRequirements": {
        "@type": "Country",
        "name": "India"
    }
};