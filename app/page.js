"use client";
import { useState } from 'react';

export default function Page() {
  const questions = [
    {
      question: "1. Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it.",
      answer: (
        <>
          <p className="mt-4">I made the site using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a> and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>. Looking at this <a href="https://www.netlify.com/blog/framework-popularity-on-netlify/" target="_blank" rel="noopener noreferrer">article on Netlify</a>, I figured it would be a good time to learn more about Next.js, so I used these resources to put together this site:</p>
          <ul className="list-disc pl-5 mt-4">
            <li><a href="https://www.udemy.com/course/next-js-the-complete-developers-guide/" target="_blank" rel="noopener noreferrer">Next.js: The Complete Developer's Guide (Udemy Course)</a></li>
            <li><a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">Next.js Documentation</a></li>
            <li><a href="https://v2.tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">Tailwind CSS Documentation</a></li>
          </ul> 
          <p className="mt-4">One challenge I had was dealing with state management. I received this error: "You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with 'use client', so they're Server Components by default." After some googling, I learned that declaring "use client" in the top tells Next.js that the component relies on client-side features.</p>
        </>
      ),
    },
    { question:"2. What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.", answer: ( <> <p className="mt-4"> 
    I really enjoyed using Netlify Core(loved it actually). A couple things that really stood out was the ease of deployment, and the Continuous deplyoment features Netlify has. 
    Having just to simply push to my branch and know I don't have to make any changes on the Netlify side is really awesome. A special mention for the documentation,
     which for this sake I'll consider a feature. I'm really impressed by how well constructed the documentation is, and how easy it is to follow. (Work in Progress) </p> 
     </>
     ),
    },
    {question: <> 3. Rank your 5 favorite and 5 least favorite activities from this list: <a href="https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab"> Github Link </a></>, answer: "testttttttboi"}, 
    {question:"4. Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.", answer: "testttttttboi"}, 
    {question:"5. Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites.", answer: "testttttttboi"}, 
    {question:"6. A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.", answer: "testttttttboi"}, 
    {question:"7. How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site.", answer: "testttttttboi"}, 
    {question:"8. Please attempt to deploy a function on our service. This need not be complicated. It could be 'Hello World'. Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.", answer: "testttttttboi"}, 
    {question:"9. We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?", answer: "testttttttboi"}, 

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextQuestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const goToPreviousQuestion = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return questions.length - 1; 
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-800 to-blue-500">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-lg p-6 mx-4 h-[600px] max-w-4xl w-full flex flex-col">
        <div className="overflow-y-auto mb-4 flex-grow">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">{questions[currentIndex].question}</h1>
          <div className="text-lg text-gray-700">{questions[currentIndex].answer}</div>
        </div>
        <div className="flex justify-between"> 
        <button 
          onClick={goToPreviousQuestion} 
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-4 self-end"
        >
          Back
        </button>
        <button 
          onClick={goToNextQuestion} 
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-4 self-end"
        >
          Next
        </button>
        </div>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-4 self-end">
      Translate To French
    </button>
      </div>
      </div>
  );
}