import "@/styles/globals.css";
import localFont from "@next/font/local";
import FormProvider from "@/context";

export const GingerPro = localFont({
  src: "../fonts/GingerPro-Bold.woff2",
  variable: "--font-ginger",
});

export default function App({ Component, pageProps }) {
  return (
    <FormProvider>
      <style jsx global>
        {`
          :root {
            --font-ginger: ${GingerPro.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </FormProvider>
  );
}
