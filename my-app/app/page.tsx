import Accordion from "@/components/custom/Accordion";
import PageLink from "@/components/custom/PageLink";

export default async function Home() {
  const items = [
    {
      title: "What is Supabase?",
      text: (
        <p>
          Supabase is an <strong>open-source backend-as-a-service</strong>{" "}
          platform that helps developers set up Postgres databases,
          authentication, APIs, and more.
        </p>
      ),
    },
    {
      title: "Can I use it with Next.js?",
      text: (
        <p>
          Yes, Supabase integrates seamlessly with Next.js, offering{" "}
          <a href="#">authentication</a>, real-time data sync, and more.
        </p>
      ),
    },
  ];

  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        Welcome Home
        <div>
          <Accordion headline="Frequently Asked Questions" items={items} />
        </div>
        <div>
          <PageLink href="/" text="See our mission to create code" />
        </div>
        <div>
          <PageLink href="/" text="Hello" />
        </div>
        <div>
          <PageLink href="/" text="How about this" />
        </div>
      </main>
    </>
  );
}
