import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import Theme from "../sections/Theme/Theme.tsx";
import { Context } from "@deco/deco";
export default defineApp(async (_req, ctx) => {
    const revision = await Context.active().release?.revision();
    return (<>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any"/>

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin"/>

        {/* Tailwind v3 CSS file */}
        <link href={asset(`/styles.css?revision=${revision}`)} rel="stylesheet"/>

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")}/>

        <style dangerouslySetInnerHTML={{
            __html: `
            .text-ibm {
                font-family: "IBM Plex Mono", monospace;
            }

            @font-face {
                font-family: 'aqui';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(${asset("/crystal-medium-webfont.woff")}) format('woff');
            }
            .crystal {
                font-family: "aqui", sans-serif;
            }
            :root {
                --font-family: "aqui", sans-serif !important;
            }`
        }}/>
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>);
});
