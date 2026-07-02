import { redirect } from "next/navigation";
import { simple } from "@/app/actions/simple";

export default async function Home({ searchParams }: PageProps<"/">) {
  const query = await searchParams;
  const q = query.q;

  async function formAction(formData: FormData) {
    "use server";
    const q = formData.get("q");
    redirect(`/?q=${q}`);
  }

  return (
    <main>
      hi query {q}
      <br />
      <button>button</button>
      <form action={formAction}>
        <input type="text" name="q" />
        <button type="submit">inline form action</button>
      </form>
      <form action={simple}>
        <input type="text" name="q" />
        <button type="submit">server action</button>
      </form>
    </main>
  );
}
