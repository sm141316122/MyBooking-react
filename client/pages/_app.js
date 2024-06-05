import "../styles/global.css";
import { Noto_Sans_TC } from "@next/font/google";

const traditionalChinese = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={traditionalChinese.className}>
      <Component onClick={() => flase} {...pageProps} />
    </main>
  );
}
