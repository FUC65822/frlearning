import { getDictionary, Locale } from "@/dictionaries";
import NumberClient from "./NumberClient";

export default async function NumberPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <NumberClient dict={dict} lang={lang} />;
}
