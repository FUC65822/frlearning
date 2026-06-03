import { getDictionary, Locale } from "@/dictionaries";
import IntroClient from "./IntroClient";

export default async function IntroPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <IntroClient dict={dict} lang={lang} />;
}
