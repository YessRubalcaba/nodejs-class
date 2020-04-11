import React from "react";
import { MatrixItem } from "../MatrixItem/MatrixItem";
import "./Matrix.css";
import { MatrixinputData } from "../MatrixinputData/MatrixinputData";
import { MatrixDeterminantResult } from "../MatrixDeterminantResult/MatrixDeterminantResult";
import queries from "./queries";

export class Matrix extends React.Component {
  constructor() {
    super();
    this.state = {
      matrixValues: [],
      determinant: 0,
    };
  }

  buildMatrix(size) {
    const matrix = [];

    for (let i = 0; i < size; i++) {
      //Agregar fila nueva
      matrix.push([]);

      for (let j = 0; j < size; j++) {
        //Agregar la columna sobre una fila
        matrix[i].push(0);
      }
    }

    return matrix;
  }

  handleButtonClick(value) {
    console.log(value);
    this.setState({ matrixValues: this.buildMatrix(value) });
  }

  handleItemValueChange(row, column, value) {
    const matrixValues = this.state.matrixValues;
    matrixValues[row][column] = value;
  }

  handleResultButtonClick() {
    //Peticion al servidor
    queries.getDeterminant(this.state.matrixValues).then((data) => {
      this.setState({ determinant: data.result });
    });
  }
  render() {
    const { matrixValues, determinant } = this.state;

    return (
      <div className="py-5">
        <MatrixinputData
          onButtonClick={(value) => this.handleButtonClick(value)}
        />
        <div className="matrixContainer">
          {matrixValues.map((row, i) => (
            <div className="matrixRow" key={i}>
              {row.map((column, j) => (
                <MatrixItem
                  key={j}
                  onValueChanges={(value) =>
                    this.handleItemValueChange(i, j, value)
                  }
                />
              ))}
            </div>
          ))}
        </div>
        {matrixValues.length > 0 && (
          <MatrixDeterminantResult
            result={determinant.toString()}
            onButtonClick={() => this.handleResultButtonClick()}
          />
        )}
      </div>
    );
  }
}
