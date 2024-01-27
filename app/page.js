'use client'
import { useState } from 'react'
import axios from 'axios';

export default function Page () {
  const [questions] = useState([
    {
      question: '1. Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it.',
      answer: (
        <div>
          <p className="mt-4">I made the site using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a> and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Tailwind CSS</a>. Looking at this <a href="https://www.netlify.com/blog/framework-popularity-on-netlify/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">article on Netlify</a>, I figured it would be a good time to learn more about Next.js, so I used these resources to put together this site:</p>
          <ul className="list-disc pl-5 mt-4">
            <li><a href="https://www.udemy.com/course/next-js-the-complete-developers-guide/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Next.js: The Complete Developer's Guide (Udemy Course)</a></li>
            <li><a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Next.js Documentation</a></li>
            <li><a href="https://v2.tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Tailwind CSS Documentation</a></li>
            <li><strong>A lot of Google</strong></li>
          </ul>
          <p className="mt-4">One challenge I had was my deploy failed. Looking at the deploy logs, it gave the error `Build failed due to a user error: Build script returned non-zero exit code: 2` and further explained the issue was due to eslint, and no-unscaped entities(essentially not properly escaping my quotations).  The logs gave a really detailed run down of what the issue, and pointed me to documentation to either change, or disable the ESLint rules in place. After resolving the unscaped quotes, the deploy was successful. </p>
        </div>
      )
    },
    {
      question: '2. What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.',
      answer: (<div> <p className="mt-16">
    I really enjoy using Netlify(loved it actually). A couple things that really stood out was the ease of deployment, and the Continuous deplyoment features Netlify has,
    having just to simply push to my branch and know I don't have to make any changes on the Netlify side is really awesome. Another thing I really enjoyed was was the deploy logs. It gave a lot of instructions, and was easily readable. A special mention for the documentation,
     which for this sake I'll consider a feature. I'm really impressed by how well constructed the documentation is, and how easy it is to follow. </p>
     </div>
      )
    },
    { question: <div> 3. Rank your 5 favorite and 5 least favorite activities from this list: <a href="https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab" className="text-blue-600 hover:text-blue-800"> Github Link </a></div>, answer:( <div className="flex justify-around">
    <div className="w-1/2 mr-2">
      <h3 className="text-lg font-semibold mt-14">5 Most Favorite Activities</h3>
      <ul className="list-disc pl-5">
        <li>Dig through server logs to troubleshoot a customer's website behavior</li>
        <li>Write and maintain Support Guides for our product</li>
        <li>Set up your own copy of several site frameworks for debugging</li>
        <li>Help train and onboard new support teammates</li>
        <li>Suggest and champion improvements to the Support team's workflow</li>
      </ul>
    </div>
    <div className="w-1/2 ml-2">
      <h3 className="text-lg font-semibold mt-14" >5 Least Favorite Activities</h3>
      <ul className="list-disc pl-5">
        <li>Engage multiple users at once via chat to answer their questions and troubleshoot problems</li>
        <li>Manage a Support team</li>
        <li>Work with prospective customers to explain our service and the pricing model</li>
        <li>Respond to Netlify customers on Twitter</li>
        <li>Work with a customer to figure out if Netlify's service can solve a particular workflow or integration challenge they have</li>
      </ul>
    </div>
  </div>) },
    { question: '4. Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.', answer: (
      <div>
        <p className="mt-4">
        Assuming I can't pick Netlify's documentation, one example that really stands out to me is the 
          <a href="https://stripe.com/docs/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"> Stripe API Documentation</a>. 
          What makes Stripe's documentation stand out to me includes:
        </p>
        <ul className="list-disc pl-5 mt-4">
          <li className="mt-2"> <strong>Organization and Categorization: </strong>The organization with the Stripe documentation is really well thought out, and easy to follow. The categorization makes a lot of sense, and it's easy to find what you're looking for, whether that be information about the SDK or API development tools.</li>
          <li className="mt-2"><strong>Embedded Video Resources: </strong>The stripe documentation contains embedded videos going over the basics of using the Stripe API, how to use the terminal, and information about Stripe apps.</li>
          <li className="mt-2"><strong>Sample Projects: </strong>The sample project is really interesting and cool. It has prebuilt UI layouts for iOS, and android apps, as well as GitHub samples on using the Stripe API, and SDK.</li>
          <li className="mt-2"><strong>Visual Appeal: </strong>Stripe's documentation is visually appealing. The presentation including a clear and modern interface, enhances the overall user experience</li>
          <li className="mt-2"><strong>Comprehensive and User-Friendly: </strong>The documentation has managed to strike a balance between depth of content and accessibility. Their documentation covers a wide range of topics in detail while remaining approachable for both novice and experienced developers.</li>
        </ul>
        <p className="mt-4">
         These things make me excited to work on a Stripe integration, because I'm confident if I run into any issues I can find the answer in the documentation.
        </p>
      </div>
    )
  },
    { question: '5. Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites.', answer:(
      <div>
        <li> <strong> Recognizing Different DNS Record Types: </strong>placeholderboi</li>
          <li><strong>Understanding the Propagation Process: </strong>placeholderboi</li>
      </div>
    ) },
    { question: '6. A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.', answer: 'testttttttboi' },
    { question: '7. How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site.', answer:(
      <div>
      <p>For a 301 redirect from /netlify/anything to https://www.google.com/search?q=anything, you would use the following syntax (assuming you're using a netlify.toml file):</p>
      <br />
          <code>
              # HTTP 301 Redirect<br />
              [[redirects]]<br />
              from = "/netlify/anything/:searchterm"<br />
              to = "https://www.google.com/search?q=:searchterm"<br />
              status = 301<br />
              force = true
          </code>
    <p className = "mt-5"> Here's a link to the <a href = "https://github.com/drewhinkson/NetlifySite/blob/master/netlify.toml" className="text-blue-600 hover:text-blue-800"> netlify.toml</a> for the proxy redirect </p>
  </div>
  

    ) },
    { question: "8. Please attempt to deploy a function on our service. This need not be complicated. It could be 'Hello World'. Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.", answer: 'testttttttboi' },
    { question: "9. We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?", answer: 'testttttttboi' }
    
  ])


  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNextQuestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length)
    setNumberFact("")
  }

  const goToPreviousQuestion = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return questions.length - 1
      } else {
        return prevIndex - 1
      }
    })
    setNumberFact("")
  }

  const [numberFact, setNumberFact] = useState('');

  const fetchNumberFact = async () => {
    try {
      const response = await axios.get('/.netlify/functions/numberFacts');
      setNumberFact(response.data.numberFact);
    } catch (error) {
      console.error('Error fetching numberFact:', error);
      setNumberFact('Failed to load numberFact.');
    }
  };
  
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-800 to-blue-500">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-lg p-6 mx-4 h-[600px] max-w-4xl w-full flex flex-col">
        <div className="overflow-y-auto mb-4 flex-grow">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">{questions[currentIndex].question}</h1>
          <div className="text-lg text-gray-700">{questions[currentIndex].answer}</div>
          <div className=" mt-16 text-2xl font-bold text-center mb-4 text-gray-800"> {numberFact}</div>
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
        <button onClick={fetchNumberFact} className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-4 self-end">
      NumberFact
    </button>
      </div>
      </div>
  )
}
