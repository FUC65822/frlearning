import { getDictionary, Locale } from "@/dictionaries";
import Civi11CoursClient from "./Civi11CoursClient";

export default async function Civi11CoursPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <Civi11CoursClient dict={dict} lang={lang} />;
}
