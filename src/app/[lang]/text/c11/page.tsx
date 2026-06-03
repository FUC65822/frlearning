import { getDictionary, Locale } from "@/dictionaries";
import TextClient from "./TextClient";

export default async function TextC11Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <TextClient dict={dict} lang={lang} />;
}
