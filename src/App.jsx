import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/Section/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Section/Statistics/Statistics';
import { Notification } from 'components/Section/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
   const resultOnLeaveFeedback = (option) => {

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.log(`No option called ${option}`);
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage = good;
    
    total
    ? Math.round((positivePercentage / total) * 100)
    : 0; 
    };

  
    return (
    <div> 
     <Section title="Please leave feedback">
      <FeedbackOptions
                  options={['good', 'neutral', 'bad']} 
                  onLeaveFeedback={resultOnLeaveFeedback}
      />
     </Section>

     <Section title="Statistics">
      {countTotalFeedback() ? 
      <Statistics good={ good }
                  neutral={ neutral }
                  bad={ bad }
                  total={ countTotalFeedback() }
                  positiveFeedback={ countPositiveFeedbackPercentage() }
      />:
      <Notification  message='There is no feedback'/>}
     </Section>
    </div>
    );
  }


