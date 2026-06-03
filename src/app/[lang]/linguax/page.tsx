import { getDictionary, Locale } from "@/dictionaries";
import LinguaxClient from "./LinguaxClient";

export default async function LinguaxPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <LinguaxClient dict={dict} lang={lang} />;
}
