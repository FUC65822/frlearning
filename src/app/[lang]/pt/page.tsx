import { getDictionary, Locale } from "@/dictionaries";
import PtClient from "./PtClient";

export default async function PtPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <PtClient dict={dict} lang={lang} />;
}
