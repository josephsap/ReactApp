//react library
import React, { Fragment } from "react";

//styles
import "./Trivia.css";

class Trivia extends React.Component {
  state = {
    items: [],
    optionsList: []
};

  componentDidMount() {
    this.getTriviaQuestions();
  }

  getTriviaQuestions = async () => {
    let apiItemReturn = [];
    await fetch("https://opentdb.com/api.php?amount=10")
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data.results
        });
      });

    return apiItemReturn;
  };



  render() {
    console.log("test", this.state.items);
    return (
      <div>
        <div>Welcome to Trivia Game</div>
        {this.state.items &&
          this.state.items.map(item => (
            <div>
              Category: {item.category} <br /> diffculty: {item.difficulty}
              <div className="question">
                Question: {item.question}
                {item &&
                  item.incorrect_answers.map(newItem => (
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      {item.incorrect_answers}
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    );
  }
}
export default Trivia;
