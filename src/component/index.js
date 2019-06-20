import React from "react";
import ReactDOM from "react-dom";
import api from "eodhistoricaldata-api";
import "./styles.css";

class Eodhistoricaldata extends React.Component {
  state = { data: [] };

  componentDidMount() {
    api.getFundamentals("TGT").then(data =>
      this.setState({ data }, () => {
        const quarterlyDates = this.state.data.Financials.Balance_Sheet
          .quarterly;
        const dates = [];
        const entValues = [];
        //for every key (the quarterly dates)
        for (const key in quarterlyDates) {
          dates.push(key);
          entValues.push(quarterlyDates[key].cash);
        }

        const xyz = dates.slice(0,4);

        console.log(xyz);
        console.log(entValues);
      })
    );
  }
  findDate() {}
  render() {
    if (this.state.data.length === 0) {
      return "Loading data from eodhistoricaldata.com...";
    }

    return (
      <pre>
        {JSON.stringify(
          this.state.data.Financials.Balance_Sheet.quarterly,
          null,
          1
        )}
      </pre>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Eodhistoricaldata />, rootElement);