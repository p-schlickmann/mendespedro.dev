import Head from 'next/head'

const HtmlHead = ({pageTitle}) => {
    return (
        <Head>
            <title>Mendes Pedro{pageTitle ? ` | ${pageTitle}` : ''}</title>
            <meta name="description" content="The web developer for perfectionists with deadlines." />
            <link rel="icon" href="/favicon.png" />
        </Head>
    )
}

export default HtmlHead