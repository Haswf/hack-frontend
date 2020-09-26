export var json = {

    "pages": [
          {
            "name": "page3",
            "navigationTitle": "Symptoms",
            "navigationDescription": "Patient symptoms",
            "elements": [
                {
                    "marginLeft": 300,
                    "type": "panel",
                    "name": "patient_symptoms_from_disease_onset",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "sore_throat",
                            "title": "Sore throat",
                            "titleLocation": "left",
                            "choices": [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }, {
                                    "value": "item2",
                                    "text": "No"
                                }, {
                                    "value": "item3",
                                    "text": "Unknown"
                                }
                            ],
                            "colCount": 3
                        }, {
                            "type": "radiogroup",
                            "name": "runny_nose",
                            "title": "Runny nose",
                            "titleLocation": "left",
                            "choices": [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }, {
                                    "value": "item2",
                                    "text": "No"
                                }, {
                                    "value": "item3",
                                    "text": "Unknown"
                                }
                            ],
                            "colCount": 3
                        }, {
                            "type": "radiogroup",
                            "name": "cough",
                            "title": "Cough",
                            "titleLocation": "left",
                            "choices": [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }, {
                                    "value": "item2",
                                    "text": "No"
                                }, {
                                    "value": "item3",
                                    "text": "Unknown"
                                }
                            ],
                            "colCount": 3
                        }, {
                            "type": "radiogroup",
                            "name": "shortness_of_Breath",
                            "title": "Shortness of Breath",
                            "titleLocation": "left",
                            "choices": [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }, {
                                    "value": "item2",
                                    "text": "No"
                                }, {
                                    "value": "item3",
                                    "text": "Unknown"
                                }
                            ],
                            "colCount": 3
                        }, {
                            "type": "radiogroup",
                            "name": "vomiting",
                            "title": "Vomiting",
                            "titleLocation": "left",
                            "choices": [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }, {
                                    "value": "item2",
                                    "text": "No"
                                }, {
                                    "value": "item3",
                                    "text": "Unknown"
                                }
                            ],
                            "colCount": 3
                        }, {
                            "type": "radiogroup",
                            "name": "nausea",
                            "title": "Nausea",
                            "titleLocation": "left",
                            "choices": [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }, {
                                    "value": "item2",
                                    "text": "No"
                                }, {
                                    "value": "item3",
                                    "text": "Unknown"
                                }
                            ],
                            "colCount": 3
                        }, {
                            "type": "radiogroup",
                            "name": "diarrhea",
                            "title": "Diarrhea",
                            "titleLocation": "left",
                            "choices": [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }, {
                                    "value": "item2",
                                    "text": "No"
                                }, {
                                    "value": "item3",
                                    "text": "Unknown"
                                }
                            ],
                            "colCount": 3
                        }
                    ],
                    "title": "Patient symptoms (from disease onset)",


                }
            ]
        }

    ]
};


var sore_thort = document.getElementsByName("sore_thort");
console.log(sore_thort);

