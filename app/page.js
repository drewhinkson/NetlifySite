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
      answer: (<div> 
        <p className="mt-4"> I really enjoy using Netlify(loved it actually). A couple things that really stood out was the ease of deployment, and the Continuous deplyoment features Netlify has,
    having just to simply push to my branch and know I don't have to make any changes on the Netlify side is really awesome. Another thing I really enjoyed was was the deploy logs. It gave a lot of instructions, and was easily readable. </p> 
    
    <p className="mt-5">Some constructive criticism would be the function logs. Looking at them, it seems to only give the duration, and memory usage for example: <pre>`6fc54b17 Duration: 50.33 ms	Memory Usage: 78 MB`.</pre>I would like to see some more details in there, maybe even the request body if possible? I realize it also outputs any console.logs as well per the <a href= "https://docs.netlify.com/functions/logs/#log-contents" className="text-blue-600 hover:text-blue-800">documentation</a> however. <br />A special mention for the documentation,
     which for this sake I'll consider a feature. I'm really impressed by how well constructed the documentation is, and how easy it is to follow. </p>
     </div>
      )
    },
    { question: <div> 3. Rank your 5 favorite and 5 least favorite activities from this list: <a href="https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab" className="text-blue-600 hover:text-blue-800"> Github Link </a></div>, answer:( <div className="flex justify-around">
    <div className="w-1/2 mr-2">
      <h3 className="text-lg font-semibold mt-4">5 Most Favorite Activities</h3>
      <ul className="list-disc pl-5">
        <li>Dig through server logs to troubleshoot a customer's website behavior</li>
        <li>Write and maintain Support Guides for our product</li>
        <li>Set up your own copy of several site frameworks for debugging</li>
        <li>Help train and onboard new support teammates</li>
        <li>Suggest and champion improvements to the Support team's workflow</li>
      </ul>
    </div>
    <div className="w-1/2 ml-2">
      <h3 className="text-lg font-semibold mt-4" >5 Least Favorite Activities</h3>
      <ul className="list-disc pl-5">
        <li>Engage multiple users at once via chat to answer their questions and troubleshoot problems</li>
        <li>Manage a Support team</li>
        <li>Work with prospective customers to explain our service and the pricing model</li>
        <li>Respond to Netlify customers on Twitter</li>
        <li>Create video tutorials to help teach users a specific feature or use case</li>
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
        <ul>
        <li> <strong> Recognizing Different DNS Record Types: </strong>DNS consists of various record types like A, AAAA, CNAME, etc. Each serves a different <a href= "https://ns1.com/resources/dns-records-explained" className="text-blue-600 hover:text-blue-800">purpose</a>, and understanding what each one does, and how to use it can be pretty confusing. A poor understanding can cause some pretty big issues like website downtime or other service disruptions, and often times the error isn't clear, so people may think something is wrong with the service when in reality it's just a bad config.</li>
        <li className='mt-4'><strong>Understanding the Propagation Process: </strong>DNS changes do not take effect immediately, they typically go through a propagation process that can take up to 48 hours. The delay is often confusing for beginners who expect immediate results. They might think something went wrong and make additional changes, which only compounds the confusion. This is pretty evident by going to the Netlify Support forums, where we can pretty commonly see a thread about an issue with DNS, when in reality it's just that the DNS change hasn't fully propagated</li>
          </ul>
      </div>
    ) },
    { question: '6. A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.', answer:(
      <div>
        <h3 className="font-bold text-center mb-4 text-gray-800">Customer Response:</h3>
        <p>Hey Super Dev, <br className="mt-6" />Thank you for reaching out! I understand you’re experiencing issues with your site build, looking at the logs it seems you're encountering the error: "Build failed due to a user error: Build script returned non-zero exit code: 2." Typically with that error message some commong issues are the following: </p>
        <ul className = "list-disc pl-5 mt-4">
        <li> <strong>File Paths and Case Sensitivity: </strong>Netlify's build process is case-sensitive, which can sometimes lead to issues not seen in local environments. Please make sure all your file paths match exactly with your file names</li>
        <li><strong>Build Commands and Dependencies: </strong>Double-check your package.json file to ensure your build commands are correct and all dependencies are properly installed.</li>
        <li><strong>React Projects: </strong>keep in mind that Netlify treats warnings as errors. Using CI= in your build command can ignore these warnings.</li>
        <li> <strong>Netlify Configuration: </strong>Verify your netlify.toml file for correct configuration settings.</li>
        </ul>
        <p className = "mt-4"> Also Here's a really useful support guide of <a href="https://answers.netlify.com/t/support-guide-frequently-encountered-problems-during-builds/213"className="text-blue-600 hover:text-blue-800" >frequently encountered problems during builds.</a> If the site is still not deploying and you checked these out and everything seems good, could you provide the site ID? Additionally, sharing the deploy logs would be extremely helpful in diagnosing the issue further, or better yet if possible can you make your repo public so we can attempt to reproduce? Let me know if you have any questions, and I hope this helps out! </p>
        <p className = "mt-8">Regards, <br/> Andrew Support Engineer, Netlify</p>
        <h3 className="font-bold text-center mb-4 text-gray-800">Steps to Troubleshoot:</h3>
        <p>From some references, and personal experience the "Build failed due to a user error: Build script returned non-zero exit code: 2." is typically due to discrepancies from the users dependency versions and netlifys, missing dependencies, incorrect file paths or case sensitive files. In order to help the user, while also educating them I would start by:  </p>
        <ul className = "mt-4">
        <li><strong>Explaining the error to the user:</strong>  I try to clearly state the error they are encountering and its possible implications, this typically leads to the user having confidence they've reached out and we can assist them.</li>
        <li><strong>Provide issues that cause the error, fixes and resources:</strong> Offering reasons why this issue can occur, some fixes and resources to help guide the user</li>
        <li><strong>Requesting additional information(if needed):</strong> If the issue is still happening, asking for additional information in the first reply can lead to less overall replies, and a better customer experience. I would ask for relevant information, in this case I believe it's the site ID, a copy of the deploy logs, and asking if they could make the repo public so we can repo it.</li>
       </ul>
      </div>
    ) },
    { question: '7. How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site.', answer:(
      <div>
      <p>For a 301 redirect from /netlify/anything to https://www.google.com/search?q=anything, you would use the following syntax (assuming you're using a netlify.toml file):</p>
      <br />
          <code>
              # HTTP 301 Redirect<br />
              [[redirects]]<br />
              from = "/netlify/:searchterm"<br />
              to = "https://www.google.com/search?q=:searchterm"<br />
              status = 301<br />
          </code>
    <p className = "mt-5"> Here's a link to the <a href = "https://github.com/drewhinkson/NetlifySite/blob/master/netlify.toml" className="text-blue-600 hover:text-blue-800"> netlify.toml</a> for the proxy redirect </p>
  </div>
  

    ) },
    { question: "8. Please attempt to deploy a function on our service. This need not be complicated. It could be 'Hello World'. Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.", answer:(
      <div>
        <p> I opted to make a simple API call to a free API called <a href="http://numbersapi.com/#42" className="text-blue-600 hover:text-blue-800">Numbers API.</a> After reading the documentation on functions, I created a functions folder to house my API call. I started to receive <code>404 bad request function not found</code> error in the console. I confirmed this behaviour by going to http://localhost:8888/.netlify/functions/numberFacts. </p>
        
        <p className = "mt-5">To troubleshoot, I first revisited the documentation to ensure that my setup followed the guidelines. Despite this everything being correct the issue persisted. My next step was to integrate the functions folder into the netlify.toml file, thinking that this might resolve any path or recognition issues. However, this did not resolve the problem. I realized that the issue might not be with the configuration or code, but rather with the environment itself. I decided to restart the development build. This approach often helps in resetting any cached processes or configurations that might be causing issues. To my relief, this resolved the problem, and the function worked perfectly post-restart. </p>

      </div>
    ) },
    { question: "9. We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?", answer:(
      <div>
        <ul>
          <li className= "mt-4" ><strong>Responding to the original reporter: </strong>The first step I would take is to respond to the original reporter by thanking him for bringing to our attention, while also offering ressurance that we take security very seriously and will be investigating this throughly. An example response would be something like this: 
          <p className= "mt-4"> "Hey Developer, <br className = "mt-4"/> Thank you for reporting this potential security issue! <br className = "mt-4" />We take security <strong>extremely</strong> seriously, and we're really grateful for you reaching out. We are starting an investigation into this immediately. While due to the nature of the report I may not be able to answer all your questions, however if you have any questions just let me know!" </p> </li> 
          <li className= "mt-4"><strong>Initial Assessment: </strong> Per the question, I think it's pretty plausible, but I would look for any other tickets in the queue, and quickly search Slack for any mention of this security issue.</li>
          <li className= "mt-4"><strong>Internal communication: </strong> Assuming I don't find anything being discussed in the initial assessment I would immediately escalate this to #escal-security, most likely with a blue/purple priority(please respond right away, but not <i> quite </i> incident worthy yet)</li>
          <li className= "mt-4"><strong>Investigation/Escalation Procedures: </strong>After a specialist has confirmed the issue, and is unable to find the root cause immediately. I would opt to create an incident. This will allow proper communication between any parties that need to be involved in a single channel vs having information fragmented. If we need to update the site status, inform enterprise customers, contact other teams, this would be the channel to be in.</li>
          <li className= "mt-4"><strong>Keep the responder informed: </strong></li> Wide spread issues, specifically security are always really tricky to communicate publically, however I do believe the original responder should be informed, simply letting them know that this been escalated and being looked into. This would ensure the customer feels their report is being taken seriously, and handled properly.  
        </ul>
      </div>
    ) }
    
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
