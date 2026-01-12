import { Header } from "~/lib/components/Header";
import { PageContentWrapper } from "~/lib/components/PageContentWrapper";
import { FrequentlyAskedQuestions } from "~/lib/components/FrequentlyAskedQuestions";
import { SupportQuickActions } from "~/lib/components/SupportQuickActions";
import { SupportContactInfo } from "~/lib/components/SupportContactInfo";
import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Support - OpenGov Portal" }];
}

export default function Support() {
  return (
    <>
      <Header
        title="Help & Support"
        subtitle="Find answers to common questions and explore our knowledge base."
      />
      <PageContentWrapper>
        <SupportQuickActions />
        <SupportContactInfo
          phoneNumber="(555) 123-4567"
          emailAddress="support@example.gov"
        />
        <FrequentlyAskedQuestions displayViewAllQuestionsButton={false} />
      </PageContentWrapper>
    </>
  );
}
