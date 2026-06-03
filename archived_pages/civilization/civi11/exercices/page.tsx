import { getDictionary, Locale } from "@/dictionaries";
import Civi11ExercicesClient from "./Civi11ExercicesClient";

export default async function Civi11ExercicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <Civi11ExercicesClient dict={dict} lang={lang} />;
}
