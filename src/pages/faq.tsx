import * as React from 'react';
import './faq.scss';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Dropdown from '../components/dropdown';
import { themeObj } from '../utils/customTheme';

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: 'What is a hackathon?',
    answer: `A hackathon is a competitive educational event in which students come together to develop an idea for a project
      into a real product. MVHacks will provide hackers with educational resources,
      including seminars and mentors, and an environment that will enable their success.`
  },
  {
    question: 'How much does it cost?',
    answer: 'It is completely free! All food, swag, and prizes are provided at no charge.'
  },
  {
    question: 'Do I need programming experience?',
    answer: `No - this is a fantastic learning opportunity! Hackers can expect to be able to attend
      educational workshops run by industry professionals in addition to experienced adult mentors
      to help them learn and succeed.`
  },
  {
    question: 'Who can attend?',
    answer: `All high school students are eligible to attend MVHacks as hackers.
      Interested in attending but not a high school student? Consider signing up to be a mentor.`
  },
  {
    question: 'What do I need?',
    answer: `For the event, all you need is your school ID, laptop, charger, and a desire to hack!`
  },
  {
    question: 'Do I need a team?',
    answer: `Teams of up to 4 are allowed. You may work as an individual, but we recommend collaborating. There will be a team mixer at
       start of the hackathon.`
  },
  {
    question: 'What are the rules?',
    answer: `Be nice, respectful, and have fun! Hackers are expected to behave appropriately and safely at all times, and abide by the MLH Code of Conduct.`
  },
  { question: 'I have other questions!', answer: `Contact us by email at contact@mv-hacks.com.` }
];

const Faq = () => (
  <Layout>
    <h1
      className="titleStyle"
      style={{ color: themeObj.dark.palette.secondary.main }}
    >
      FAQ
    </h1>
    <section className="faq">
      {questions.map((question: Question) => (
        <article>
          <Dropdown
            title={question.question}
            content={<span>{question.answer}</span>}
          />
        </article>
      ))}
    </section>

    {/* <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link> */}
  </Layout>
);

export const Head = () => (
  <Seo
    title="FAQ"
    children={undefined}
  />
);

export default Faq;
