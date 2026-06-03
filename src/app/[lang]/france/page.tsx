import { getDictionary, Locale } from "@/dictionaries";
import FranceClient from "./FranceClient";

export default async function FrancePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <FranceClient dict={dict} lang={lang} />;
}
