
var label_dic = {
        "topic": ['society', 'science', 'health', 'education', 'computers', "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        "emotion": ['sadness', 'joy', 'anger', 'fear', 'surprise', "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        "situation": ['search', 'evacuation', 'utilities', 'water', 'shelter', "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        "covid-19": ['medical', 'policy', 'travelban', 'health', 'virus', "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    };
var text_dic = {
        "When is Thanksgiving celebrated in Canada?": "Syrian refugees at Jordan border are undergoing hardships due to lack of water. Massive bushfires are heard at North Alberta in Canada. About 88,000 people had to be evacuated from that area.",
        "The Christian Music field.": "The gono kalayan trust, which works to improve the incomes of poor farmers and is supported by christian aid, is helping to evacuate people stranded by the rising waters even though its own offices have been flooded.",
        "In the US , the threshold for gold is half a million.": "In the us, a texas nurse infected with ebola after caring for a liberian man who died from the disease no longer has the virus, her family said.",
        "Sometimes I can't even believe my life.": "Perhat Tursun Perhat Tursun Yarghol I am nonproductive but I am not a dishonored person. I am gonna say that I am not gonna praise you, Perhat Tursun. I would rather curse your weightless verses cold like Germans and like the castle Kafka was not able to get in than praise you, oh Perhat Tursun. I laugh at the smiley poor guys and stop suddenly after that... you made me look bad to the world. You poured the condom in the Tarim river into my brain. Why did you change the pattern of Uyghur poetry that always praises others? Who wants to sit next to you if you do that? You make me turn into a pious man and I am afraid of thinking about you as if I fear water. I am in the hospital because of this serious paradox. Of Perhat Tursun , you created my heart condition. I would understand a little bit if it is a gloomy poem but this looks like a foggy poem. He lived as who he was, didn't he? I liked it. Anybody want to play paradox? Let's play paradox, come on, if you are not concerned about being mentally ill. Let me keep doing. How to call this? Is that a poem? muhlis0998 23:21 5-1-2016 posted time Anybody want to play paradox? Being a mental patient ... You begin first and let's work together if it is ok Of Perhat Tursun , you created my heart condition. The last part is greatly composed. I wish more success for Yarghol's writing. For the readers: Yarghol, look at the parts of the works that you felt unnecessary and what is there is the absolute world you will definitely go to very soon. Learn the difference between word and talk. Just stick with the word and undress limitlessly in the desert of the meaning. Trust the poet who does not stay in the destination. He more and constantly talk about sex, darkness, and death Writer, it might be you that he was cursing. Keep away for what you got used to and who you love. Turn your eyeballs into poisonous arrows and your aim to shameless praises. You should understand that you can learn nothing from us. Dive into our colors and blossom up in our voices and white bushes but forget us for the significance of us. Something like that, Yarghol , I am afraid of something and anxious about something. I feel myself lonely like the moon and powerless like the widowed aunty in the village. Although I know poets die without seeing morning light, I still seek comfort from the verses about lights. I am satisfied with lying and betrayals. Please come, sell me slowly and sneakily. Block the sun that is not straight ever and take my bulky ethereality. Flame my last myths. If my inner organs did not resist the nights and my anxiousness did not warm up January, my stone like hard debts, an unknown someone did not step down on my shoulder, how my life would become miserable. I also feel myself extra like an abandoned gland and feel myself passionate like winter birds. I love the world with some kind of poor emotion... and I believe that is a betrayal for the soul writing poems in this time. I wait for something and seek comfort from something. Maybe I expected a death or a life after the death.."
    };
var empty_list = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];


$("#btn1").click(function () {
    predict();
});

$("#btn2").click(function () {
   $("#text").html(
       ""
);

    $("#center").html(
        // $.map(empty_list, function(item) {
        //     return '<input id="" placeholder="" type="text" value="' + item + '" >';
        // }).join('')
        LoopLabels(empty_list, 'Label')
    );
        $("#right").html(
        // $.map(empty_list, function(item) {
        //     return '<input id="" placeholder="" type="text" value="' + item + '" >';
        // }).join('')
            LoopLabels(empty_list, 'label description (optional)')
    )
});

$("#buttonRandomButton").click(function () {
    var pool_list = ['search', 'evacuation', 'utilities', 'water', 'shelter', 'medical', 'food', 'crimeviolence', 'terrorism',
        'regimechange', 'society', 'culture', 'science', 'mathematics', 'health', 'education', 'reference', 'computers', 'Internet',
        'sports', 'business', 'finance', 'entertainment', 'music', ' family', 'relationships', 'politics', 'government', 'sadness', 'joy',
        'anger', 'disgust', 'fear', 'surprise', 'shame', 'guilt', 'love'];

    var sample_list = getRandomSubarray(pool_list, 5);
    var full_list = sample_list.concat(["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);

    $("#center").html(
        // $.map(full_list, function(item) {
        //     return '<input id="" placeholder="" type="text" value="' + item + '" >';
        // }).join('')
        LoopLabels(full_list, 'Label')
    );

    $("#right").html(
        //
        // $.map(empty_list, function(item) {
        //     return '<input id="" placeholder="" type="text" value="' + item + '" >';
        // }).join('')
         LoopLabels(empty_list, 'label description (optional)')
    )
});

function LoopLabels(arr, placeholderText) {

    var HtmlString = '', i = 0;
    while (i < 5 && arr[i] != '') {
        temp = '<input id="'+ i +'" placeholder="" type="text" value="' + arr[i] + '" >';
        HtmlString += temp;
        i ++;
    } ;
    while (i < arr.length) {
        temp = '<input id="'+ i +'" placeholder="'+ placeholderText+' '+ (i+1) +' " type="text" value="" >';
        HtmlString += temp;
        i ++;
    } ;
    return HtmlString


}

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

$("#buttonLabel").on('click', 'a', function (event) {
    var key = this.textContent.toLowerCase();

    var sample_list = label_dic[key];
    var full_list = sample_list.concat(["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);

    $("#center").html(
        // $.map(list, function(item) {
        //     return '<input type="text" id="" placeholder="" value="' + item + '" >';
        // }).join('')
        LoopLabels(full_list, 'Label')
    );
        $("#right").html(
        // $.map(empty_list, function(item) {
        //     return '<input id="" placeholder="" type="text" value="' + item + '" >';
        // }).join('')
            LoopLabels(empty_list, 'label description (optional)')
    )
});

$("#buttonText").on('click', 'a', function (event) {
    var key = this.textContent;

    var text = text_dic[key];

    $("#text").html(
       text
);
    $("#right").html(
    LoopLabels(empty_list, 'label description (optional)')
    )

});


function predict(){

            // let result = document.querySelector('.result');
            // let text = document.querySelector('#text');
            // let labels = document.querySelector('#labels');
            // let models = document.querySelector('#models');

            let text = $("#text").val();
            //let labels = ["Society", "Health", "Sports"];
            //let models = ["MNLI","FEVER"];

            let labels = [];
            let models = [];
            let descriptions =[];
            if (text.length == 0) {
                alert('Please enter text!');
                history.back();
                return

            };



            $('#center input').each(function(i){
                if(this.value !== null && this.value !== "" && this.value !== undefined) {
                    // labels.push(this.value);
                    labels[this.id] = this.value
                }
            });
                        if (labels.length == 0) {
                alert('Please enter at least one label!');
                history.back();
                return

            }
            $("input[name^='models']").each(function(i){
                if(this.checked == true){
                     models.push(this.value);
                }

            });

            // let description = Array(maxArrayLength?: models.length);

            $('#right input').each(function(i){
                if(this.value !== null && this.value !== "" && this.value !== undefined) {
                    // descriptions.push(this.value);
                    descriptions[this.id] = this.value;
                }
            });

            // var dimensions = (["label", "Average"]).concat(models);
            //
            // var series = Array(models.length + 1).fill({type: 'bar'});

            var data =  {
 	// "text":"The fox jumped over the fence, and the fence fell down.","models":["MNLI","FEVER"],"labels":["Society", "Health", "Sports"]};
            "text": text,
            "labels": labels,
            "models": models,
                "descriptions": descriptions
            };


            var reuslut_chart = [
            {label: 'sadness', 'MNLI': 31, 'FEVER': 85.8, 'RTE': 93.7},
            {label: 'happy', 'MNLI': 83.1, 'FEVER': 73.4, 'RTE': 55.1},
            {label: 'sports', 'MNLI': 86.4, 'FEVER': 65.2, 'RTE': 82.5},
            {label: 'health', 'MNLI': 72.4, 'FEVER': 53.9, 'RTE': 39.1},
            {label: '123', 'MNLI': 43.3, 'FEVER': 85.8, 'RTE': 93.7},
            {label: '4', 'MNLI': 83.1, 'FEVER': 73.4, 'RTE': 55.1},
            {label: 's', 'MNLI': 86.4, 'FEVER': 65.2, 'RTE': 82.5},
            {label: 'heh', 'MNLI': 72.4, 'FEVER': 53.9, 'RTE': 39.1}
        ]
            var myChart = echarts.init(document.getElementById('result-chart'));
            // Creating a XHR object
            // let xhr = new XMLHttpRequest();
    console.log('this code is run');
            var url = "./predict";
            myChart.showLoading();
            fetch(url,
                {
                    method: 'POST',
                    body : JSON.stringify(data),
                   headers: {"Content-Type" : "application/json"}
                    // //after succuss
                    // success : function(result) {
                    //     console.log(result);
                    //     $("#result").html(result);
                    // },
                    // error: function (error) {
                    //     console.log("error");
                    // }
                }
            ).then(resp => resp.json())
                .then(json => {
                    console.log(json);
                    // json_result = json["json_result"]
                    // $("#result").html(JSON.stringify(json))
                    dimensions = (["label"]).concat(json["labels"]);
                    series = Array(models.length + 1).fill({type: 'bar'});
                    console.dir(json);
                    console.log("start charting");
                    console.log(dimensions);
                    myChart.hideLoading();
                     $("#result-header").html(

                         '<div style="display: flex"><div><button id="btn3" style="border-radius: 2px; width: 100px; float: left; background-color: white;color: black; border: solid 1px black;padding: 6px; border-radius: 4px;">Sort by Sum</button></div>' +
                         '<div><button id="btn4" style="border-radius: 2px; width: 100px; float: left; background-color: white;color: black; border: solid 1px black;padding: 6px; border-radius: 4px;  margin-left: 10px;">Unsorted</button></div></div>' +
                         '<div><h3>Notes:</h3></div>'
                         +'<div><p>1. The scores (0~100%) show coherency between the labels and text, the four models pretrained on different dataset, so they may predict different scores regarding the same label. </p></div>'
                         +'<div><p>2. The dash means did not select that model, please scroll top to select and classify again if needed. </p></div>'
                         +'<div><p>3. Please click the squares in the top of chart to display specific model output.  </p></div>'
                         +'<div><p>4. Please click Sort button above to sort labels by their sum of all models score if needed.  </p></div>')
                         // +'<div><p>4. This demo is running on CPU server, it may take a few seconds to get results.  </p></div>');
                    myChart.setOption({
                        title: {
                            text: 'Coherency \%',
                            subtext: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {

                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        dataset: {
                            dimensions: ["label", "MNLI", "FEVER", "RTE", "ESA", 'Bart-MNLI'],
                            // dimensions: (["label", "Average"]).concat(json["models"]),

                            // source: [
                            //     {"label": "sadness", "Average": 22.886, "MNLI": 4.373, "FEVER": 62.951, "RTE": 1.335},
                            //     {"label": "happy", "Average": 22.958, "MNLI": 2.265, "FEVER": 65.422, "RTE": 1.186},
                            //     {"label": "health", "Average": 40.464, "MNLI": 9.415, "FEVER": 81.701, "RTE": 30.275},
                            //     {"label": "sports", "Average": 48.192, "MNLI": 50.021, "FEVER": 84.583, "RTE": 9.971}
                            //     ]
                            source: json["sorted_output"],


                        },
                        xAxis: {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        },
                        yAxis: {
                            type: 'category',
                        },
                        series: [{type: 'bar'},
                            {type: 'bar'},
                            {type: 'bar'},
                            {type: 'bar'},
                            {type: 'bar'},
                          ]
                    });

                    $("#btn3").click(function () {
    update_chart(json['sorted_output']);
});
                    $("#btn4").click(function () {
    update_chart(json['unsorted_output']);
});

                    })
                // .then(json =>console.log(json))
                .catch(e => console.log(e));

        };



function update_chart(sorted_output) {
    var myChart = echarts.init(document.getElementById('result-chart'));
    console.log('sort function start');
    console.log(sorted_output);
    myChart.setOption({
                        title: {
                            text: 'Confidence \%',
                            subtext: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {

                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        dataset: {
                            dimensions: ["label",  "MNLI", "FEVER", "RTE", "ESA", 'Bart-MNLI' ],
                            // dimensions: (["label", "Average"]).concat(json["models"]),

                            // source: [
                            //     {"label": "sadness", "Average": 22.886, "MNLI": 4.373, "FEVER": 62.951, "RTE": 1.335},
                            //     {"label": "happy", "Average": 22.958, "MNLI": 2.265, "FEVER": 65.422, "RTE": 1.186},
                            //     {"label": "health", "Average": 40.464, "MNLI": 9.415, "FEVER": 81.701, "RTE": 30.275},
                            //     {"label": "sports", "Average": 48.192, "MNLI": 50.021, "FEVER": 84.583, "RTE": 9.971}
                            //     ]
                            source: sorted_output,


                        },
                        xAxis: {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        },
                        yAxis: {
                            type: 'category',
                        },
                        series: [{type: 'bar'},
                            {type: 'bar'},
                            {type: 'bar'},
                            {type: 'bar'},
                        {type: 'bar'}]
                    });

};

function unsort_chart(sorted_output) {
    var myChart = echarts.init(document.getElementById('result-chart'));
    console.log('sort function start');
    console.log(sorted_output);
    myChart.setOption({
                        title: {
                            text: 'Coherency \%',
                            subtext: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {

                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        dataset: {
                            dimensions: ["label",  "MNLI", "FEVER", "RTE", "ESA" , 'Bart-MNLI'],
                            // dimensions: (["label", "Average"]).concat(json["models"]),

                            // source: [
                            //     {"label": "sadness", "Average": 22.886, "MNLI": 4.373, "FEVER": 62.951, "RTE": 1.335},
                            //     {"label": "happy", "Average": 22.958, "MNLI": 2.265, "FEVER": 65.422, "RTE": 1.186},
                            //     {"label": "health", "Average": 40.464, "MNLI": 9.415, "FEVER": 81.701, "RTE": 30.275},
                            //     {"label": "sports", "Average": 48.192, "MNLI": 50.021, "FEVER": 84.583, "RTE": 9.971}
                            //     ]
                            source: sorted_output,


                        },
                        xAxis: {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        },
                        yAxis: {
                            type: 'category',
                        },
                        series: [{type: 'bar'},
                            {type: 'bar'},
                            {type: 'bar'},
                            {type: 'bar'},
                            {type: 'bar'}]
                    });

}