import React, {useState, useMemo } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export  function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = {
    good,
    neutral,
    bad,
  };

  const countFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const total = useMemo(() => {
    return good + neutral + bad;
  }, [bad, good, neutral]);

  const positivePercentage = useMemo(() => {
    return Math.round((good * 100) / total);
  }, [good, total]);
  //Без використання useMemo
  // const totalFeedback = Object.values(feedbacks).reduce((acc, el) => acc + el, 0);
  // const positive = Math.round((good * 100) / totalFeedback);
  // console.log("🚀 ~ App ~ positive:", positive)
  // console.log('🚀 ~ App ~ totall:', totalFeedback);

  return (
    <div>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={countFeedback}
        />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </SectionTitle>
    </div>
  );
}
// export class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countFeedback = feedback => {
//     this.setState(prevState => {
//       return { [feedback]: prevState[`${feedback}`] + 1 };
//     });
//   };

//   countTotalFeedback() {
//     const total = Object.values(this.state).reduce((el, acc) => (acc += el), 0);
//     return total;
//   }

//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     const positivePercentage = (this.state.good * 100) / total;
//     return Math.round(positivePercentage);
//   }

//   render() {
//     return (
//       <div>
//         <SectionTitle title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.countFeedback}
//           />
//         </SectionTitle>
//         <SectionTitle title="Statistics">
//           {Object.values(this.state).every(el => el === 0) ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </SectionTitle>
//       </div>
//     );
//   }
// }
