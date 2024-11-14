# Styx Govern

## About This Repo

This is a project is focused on achieving the ai compliance for the enterprise clients. This is done by creating a website and integration with StyxEval (an automated test suite for the AI testing)

## Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for managing dependencies

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Anirudh3167/styx-govern.git
```

2. Navigate to the project directory:

```bash
cd styx-govern
```

3. Install the required dependencies:

Using npm:

```bash
npm install
```

Or, using yarn:

```bash
yarn install
```

## Usage
Running the Development Server
Once you have the dependencies installed, you can start the development server. This will allow you to view and test the app locally.

Run the following command to start the Next.js development server:

```bash
npm run dev
```

Or, if you are using yarn:

```bash
yarn dev
```

By default, the app will be available at `http://localhost:3000`

Building the App for Production
To build the app for production, run the following command:

```bash
npm run build
```

This will generate an optimized build for deployment. You can then start the production server:

```bash
npm run start
```

Or using yarn:

```bash
yarn build
yarn start
```

### Environment Variables
Some functionality in the app may depend on environment variables. You can configure these in a `.env.local` file at the root of the project.

Example:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
NEXT_AUTH_URL = https://api.example.com
NEXTAUTH_SECRET = your-secret
MONGODB_URL = your-mongodb-url
```

**Note:** If you are using `Vercel` for deployment then you only need to configure `NEXTAUTH_SECRET` and `MONGODB_URL` in the production.

Make sure to replace these with actual values relevant to your environment.

### Linting and Formatting
This project uses ESLint and Prettier to ensure consistent code quality and formatting. To run the linter and fix issues, use:

```bash
npm run lint
```

Or, using yarn:

```bash
yarn lint
```

### Running Tests
If you have set up testing in your project (using tools like Jest or React Testing Library), you can run the tests using:

```bash
npm run test
```

Or, using yarn:

```bash
yarn test
```

License
This project is licensed under the GNU License v3 - see the LICENSE file for details.