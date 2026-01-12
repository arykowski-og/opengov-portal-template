import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";

import { OutlinedAccordion } from "./OutlinedAccordion";
import { DashboardCardWrapper } from "./DashboardCardWrapper";

const frequentlyAskedQuestions = [
  {
    question: "How do I create an account?",
    answer:
      "Click the 'Sign Up' button on the homepage and follow the registration steps. You'll need to provide your email address and create a password.",
  },
  {
    question: "How can I view my history?",
    answer:
      "Navigate to the 'History' section from the main menu to see your past activities and transactions.",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "Go to your Account settings and select 'Profile'. From there, you can update your personal information, contact details, and preferences.",
  },
  {
    question: "Who do I contact for support?",
    answer:
      "Visit our Support page for contact information, or use the Help section to find answers to common questions.",
  },
];

export function FrequentlyAskedQuestions({
  displayViewAllQuestionsButton = true,
}: {
  displayViewAllQuestionsButton?: boolean;
}) {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">Frequently Asked Questions</Typography>
        {displayViewAllQuestionsButton && (
          <Button component={Link} to={"/support"}>
            View All Questions
          </Button>
        )}
      </Box>
      <DashboardCardWrapper>
        {frequentlyAskedQuestions.map((question) => (
          <OutlinedAccordion
            key={question.question}
            title={<Typography variant="h4">{question.question}</Typography>}
            content={<Typography>{question.answer}</Typography>}
          />
        ))}
      </DashboardCardWrapper>
    </>
  );
}

