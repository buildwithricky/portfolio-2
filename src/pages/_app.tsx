import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Sora} from "next/font/google"

const sora = Sora({
  subsets:['latin'],
  variable:"--sora"
})
export default function App({ Component, pageProps }: AppProps) {
  return(
  <main className={`${sora.variable} font-sans` }>
    <Component  {...pageProps} />;
  </main>
  )
}
