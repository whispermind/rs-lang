import { App } from './app';
// import { selfAssessmentLenaRA, selfAssessmentTAB, selfAssessmentWhispermind } from './self-assessment';
// import { Statistics } from './states/statisticsState';
// import { refreshUserToken } from './states/logInData';
import './styles/main.scss';

const app = new App();
app.run();

// refreshUserToken();

// async function setStat() {
//   const data = {
//     newWords: 2,
//     rightAnsw: 5,
//     questions: 7,
//     session: 5,
//   };
//   await Statistics.updateStat('challenge', data);
//   await Statistics.updateStat('sprint', data);
//   await Statistics.updateStat('learned', 7);
// }

// setStat();

// selfAssessmentTAB();
// selfAssessmentWhispermind();
// selfAssessmentLenaRA();
