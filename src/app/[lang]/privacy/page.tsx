import { getDictionary, Locale } from "@/dictionaries";
import PrivacyClient from "./PrivacyClient";

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <PrivacyClient dict={dict} lang={lang} />;
}
