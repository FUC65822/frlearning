import { getDictionary, Locale } from "@/dictionaries";
import Lesson1Client from "./Lesson1Client";

export default async function Lesson1Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <Lesson1Client dict={dict} lang={lang} />;
}
