import { getDictionary, Locale } from "@/dictionaries";
import TermsClient from "./TermsClient";

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <TermsClient dict={dict} lang={lang} />;
}
