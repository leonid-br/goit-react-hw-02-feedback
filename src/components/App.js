import { Component } from 'react';

import Section from './Section';
import BtnList from './BtnList';
import StatisticsList from './StatisticsList';
import Notification from './Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    //============ метод подсчета отзывов
    clickOnBtn = evt => {
        const btnName = evt.target.innerText;
        this.setState({ [btnName]: this.state[btnName] + 1 });
    };

    //============ метод подсчета суммы отзывов
    countTotalFeedback = () => {
        const totatlCount = Object.values(this.state);
        return totatlCount.reduce((acc, val) => acc + val, 0);
    };

    //============ метод подсчета положительных отзывов
    countPositiveFeedbackPercentage = () => {
        return Math.round(
            (this.state.good * 100) / this.countTotalFeedback(),
        );
    };

    render() {
        const keysArr = Object.keys(this.state);

        return (
            <div>
                <Section title="Please leave feedback">
                    {/* Рендер кнопок */}
                    <BtnList
                        keysArr={keysArr}
                        clickOnBtn={this.clickOnBtn}
                    />
                </Section>

                {/* Рендер списка */}
                <Section title={'Statistics'}>
                    {this.countTotalFeedback() > 0 ? (
                        <StatisticsList
                            keysArr={keysArr}
                            statTarget={this.state}
                            totalReviews={this.countTotalFeedback()}
                            positive={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification
                            message={'No feedback given'}
                        />
                    )}
                </Section>
            </div>
        );
    }
}
export default App;
