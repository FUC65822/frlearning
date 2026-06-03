import { getDictionary, Locale } from "@/dictionaries";
import AboutClient from "./AboutClient";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <AboutClient dict={dict} lang={lang} />;
}
