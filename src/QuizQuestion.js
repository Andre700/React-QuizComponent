import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false,
        };
    }

    handleClick(button_text) {
        let answer = this.props.quiz_question.answer;
        if (button_text.trim() === answer) {
            this.setState({ incorrectAnswer: false });
            this.props.showNextQuestionHandler();
        } else {
            this.setState({ incorrectAnswer: true });
        }
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map(
                            (ans, index) => {
                                return (
                                    <QuizQuestionButton
                                        key={index}
                                        button_text={ans}
                                        clickHandler={this.handleClick.bind(
                                            this
                                        )}
                                    />
                                );
                            }
                        )}
                    </ul>
                </section>
                {this.state.incorrectAnswer ? (
                    <p className="error">Sorry, that's not right.</p>
                ) : null}
            </main>
        );
    }
}

export default QuizQuestion;
