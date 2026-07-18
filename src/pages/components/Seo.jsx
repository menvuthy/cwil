import { Head } from "vike-react/Head";

const SITE_URL = "https://cwil.vercel.app";

export default function Seo({
  title,
  description,
  image = `${SITE_URL}/og-image.png`,
  path = "/",
}) {
  const pageTitle = `${title} | CWIL`;
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
