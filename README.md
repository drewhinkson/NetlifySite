# NetlifySite Project

This project is a [Next.js](https://nextjs.org/) application, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and designed to be deployed on Netlify with functions.

## Getting Started

### Prerequisites

- Node.js (preferably the latest stable version)
- npm (for managing dependencies)
- Git (for version control)

### Local Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/drewhinkson/NetlifySite.git
   cd NetlifySite 

2. **Install Dependencies::**
   ```bash
   npm install

3. **Run the Development Server:**
   ```bash
   npm run dev

Open http://localhost:3000 in your browser to see the result.

4. **Edit and Develop:** <br>
You can start editing by modifying app/page.js. The page auto-updates as you edit the file.


### Netlify Deployment 

To test serverless functions locally, you'll need to set up the Netlify CLI and use Netlify Dev.

1. **Install Netlify CLI:**
   ```bash
   npm install netlify-cli -g

2. **Login to Netlify:**
   ```bash
   netlify login

3. **Run Netlify Dev::**
   ```bash
   netlify dev

This command will start a local dev server and expose your serverless functions.

4. **Access Local Server:** 
The local version of your site, including serverless functions, should now be accessible at a URL provided in the command line output.


## Project Structure

- `functions/`: Contains the serverless functions for Netlify, `numberFacts.js` which fetches random number facts.
- `app/`: Contains the Next.js application files.
- `public/`: Public assets for the Next.js application.
- `netlify.toml`: Configuration file for Netlify deployment and redirects.


