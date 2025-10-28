import React from 'react';

const SchemaScript = ({ schema }) => (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    </>
);

export default SchemaScript;