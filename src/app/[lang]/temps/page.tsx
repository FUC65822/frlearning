import { getDictionary, Locale } from "@/dictionaries";
import TempsClient from "./TempsClient";

export default async function TempsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <TempsClient dict={dict} lang={lang} />;
}
