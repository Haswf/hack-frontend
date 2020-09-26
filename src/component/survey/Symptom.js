import React from "react";
import * as Survey from "survey-react";
import "./surveyStyle.css";






import { json } from "./survey_json.js";




export default function SurveyPage() {
    var model = new Survey.Model(json);
    return (
        <div className="container">
            <Survey.Survey
                model={model}
            />
        </div>
    );
}
  