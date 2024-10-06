# Ultimatum 369 Full Exoplanet Exploration Webapp 



## High level summary  

Given the opportunity to demonstrate our proficiency on the NASA SPACE APPS CHALLENGE for the second time, we return with even more sophisticated missions to complete. In order to present the wonders of exoplanets in a fun and informed way, we are eager to delve into the specifics of NASA's API collection. We made an effort to collect a wide range of third-party apps, extensions, API calls, and apparent SDKs for the purpose of its interactivity 
 
The web application includes a strong authentication system, a visually appealing landing page with charming illustrations, Internationalization features, exoplanet visualization in the night sky and in-kind, fun quizzes, space games designed specifically for exoplanet facts, daily images with corresponding scientific explanations, chatbots that can answer questions about each exoplanet that is retrieved from NASA's API, community forums for users who are interested in space, and an open access game directory for developers. 
 
We fervently hope that this effort will ignite a fervent interest in exoplanet space exploration and familiarize ise individuals under-represented in these fields with this issue. As a result, we thought that this project offered the greatest opportunity to experiment with NASA's extensive space exploration directory, which is enhanced by a variety of data that is bravely employed in our project. 
 
Let's now examine the operation and use of our web application. Please accept our warm invitation to review the references we will be mentioning in the section on opportunities and references.


## Demo

1. **Quick Overview: [Overview Video](https://youtu.be/4cWEyxc7iu0?si=SScXseQHAa0LA9L2)**

2. **Landing Page: [Landing Page Demo](https://youtu.be/IiR2tbuQjvk)**
3. **Personalized Exoplanet Chatbot: [GenAI Exoplanets](https://youtu.be/4O7d7HT55kI)**
4. **View Exoplanet: [AladinAPI for NightSky](https://youtu.be/7roVWvb6RMA)**
5. **Interactive Quiz with Flashcard Study and Leaderboard: [Interactive Quiz](https://youtu.be04II5YHZw5A)**
6. **Community Forum: [Discussion, Event, and Connect](https://youtu.be/99BMhRrWVtQ)**
7. **Opportunities: [NASA and Space Partner Space Programs and Citizen Projects](https://youtu.be/IiR2tbuQjvk)**
8. **NASA APOD: [Daily Email on Astronomy Pictures of Day](https://youtu.be/IiR2tbuQjvk)**
9. **NASA APOD Email: [Daily Email on Astronomy Pictures of Day](https://drive.google.com/file/d/12lQ1ttIQ9P9mASrvIZrUI_XVDQgWaYXG/view?usp=sharing)**


### Features

Let’s indulge into the fine-details of the projects’ features: 
1. **Authentication**: We have implemented a robust authentication system that allows users to sign up and login with clerk

2. **Resourceful Landing-page**: we have prepared an eye-catching and realistic landing page which introduces the aim and accessibility of the web applications by utilizing descriptive videos, illustrations, resource links and CTAs redirecting to the main features. 

3. **Language internationalization**:- we provided 5 languages (Eng, Ru, Es, Fr, Sw) to interact with the entire web pages offering worldwide exposures and interoperability. 

4. **Night-Sky visualization**: the embedded 3D visualization of the night sky highlighting exoplanets is handy for oneself to save a photographic memory of celestial body arrangements. 
Entertaining quizzes: we prepared a time-dependent quiz challenge that will broaden the insights of users setting the challenge to answer the general knowledge questions about exoplanets on them. This is very handy for those who love to challenge their mind with general cognitive questions. 

5. Space Games: we developed an interesting game equipped with checkpoints and scores highlighting random facts about exoplanets every-time the player claims a coin.  

6. Community forum: we developed multi-featured forum which insists event creation, Issue raising, and expert consulting accessibilities for space enthusiasts to share and discuss different perspectives on a unified forum. 

3. Information cards: we prepared a grid of cards where the exoplanets and their respective properties fetched from NASA’s API distributed and served for multi-parameter filtering and searching process. Additionally, each card contain a link redirecting to personal AI bots which are tailored to discuss topics with in the scope of exoplanets and other related astronomical stuffs. We have trained the personal AI bot for almost an hour based on pdf files rendered from official directory of NASA. 

4. Astronomy Picture Of Day(APOD) : we utilized a network of operations to fetch daily astronomical pictures with respective descriptions from the NASA APOD API and send for the users each day. The operations are bounded by the effective interaction of Google workspace components such as Google sheets, Gmail and also other third party applications like formspree and tallyform.

### Requirements

- Node.js 20+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/alazaradane/NASA_SpaceAPP24.git NASA_SpaceAPP2024
cd NASA_SpaceAPP2024
npm install
```

For your information, all dependencies are updated every month.

Then, you can run the project locally in development mode with live reload by executing:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Set up authentication

To get started, you will need to create a Clerk account at [Clerk.com](https://clerk.com) and create a new application in the Clerk Dashboard. Once you have done that, copy the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` values and add them to the `.env.local` file (not tracked by Git):

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Now you have a fully functional authentication system with Next.js, including features such as sign up, sign in, sign out, forgot password, reset password, update profile, update password, update email, delete account, and more.

### Set up remote database

Using Ngrok we add email and fullname of user to mongoDB which allow aus to track all activities regarding to authentication and authorization.

### Translation (i18n) setup

For translation, the project uses `next-intl` combined with [Crowdin](https://l.crowdin.com/next-js). As a developer, you only need to take care of the English (or another default language) version. Translations for other languages are automatically generated and handled by Crowdin. You can use Crowdin to collaborate with your translation team or translate the messages yourself with the help of machine translation.

To set up translation (i18n), create an account at [Crowdin.com](https://l.crowdin.com/next-js) and create a new project. In the newly created project, you will be able to find the project ID. You will also need to create a new Personal Access Token by going to Account Settings > API. Then, in your GitHub Actions, you need to define the following environment variables: `CROWDIN_PROJECT_ID` and `CROWDIN_PERSONAL_TOKEN`.




### Commit Message Format

The project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification, meaning all commit messages must be formatted accordingly. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is the ability to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Testing

All unit tests are located alongside the source code in the same directory, making them easier to find. The project uses Vitest and React Testing Library for unit testing. You can run the tests with the following command:

```shell
npm run test
```

### Integration & E2E Testing

The project uses Playwright for integration and end-to-end (E2E) testing. You can run the tests with the following commands:

```shell
npx playwright install # Only for the first time in a new environment
npm run test:e2e
```


### Checkly monitoring

The project uses [Checkly](https://www.checklyhq.com) to ensure that your production environment is always up and running. At regular intervals, Checkly runs the tests ending with `*.check.e2e.ts` extension and notifies you if any of the tests fail. Additionally, you have the flexibility to execute tests from multiple locations to ensure that your application is available worldwide.

To use Checkly, you must first create an account on [their website](https://www.checklyhq.com). After creating an account, generate a new API key in the Checkly Dashboard and set the `CHECKLY_API_KEY` environment variable in GitHub Actions. Additionally, you will need to define the `CHECKLY_ACCOUNT_ID`, which can also be found in your Checkly Dashboard under User Settings > General.

To complete the setup, update the `checkly.config.ts` file with your own email address and production URL.


### Starter Template
In order to facilate all intgration of thre-party tools, packages and API, we used [Starter Template made with creativedesignsguru](https://creativedesignsguru.com)


### License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.




