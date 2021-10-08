/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 78.0, "minX": 0.0, "maxY": 3012.0, "series": [{"data": [[0.0, 78.0], [0.1, 78.0], [0.2, 79.0], [0.3, 79.0], [0.4, 83.0], [0.5, 83.0], [0.6, 83.0], [0.7, 85.0], [0.8, 85.0], [0.9, 85.0], [1.0, 89.0], [1.1, 89.0], [1.2, 93.0], [1.3, 93.0], [1.4, 96.0], [1.5, 96.0], [1.6, 99.0], [1.7, 99.0], [1.8, 103.0], [1.9, 103.0], [2.0, 107.0], [2.1, 107.0], [2.2, 109.0], [2.3, 109.0], [2.4, 109.0], [2.5, 109.0], [2.6, 111.0], [2.7, 111.0], [2.8, 112.0], [2.9, 112.0], [3.0, 112.0], [3.1, 112.0], [3.2, 113.0], [3.3, 113.0], [3.4, 114.0], [3.5, 114.0], [3.6, 116.0], [3.7, 116.0], [3.8, 116.0], [3.9, 116.0], [4.0, 117.0], [4.1, 117.0], [4.2, 534.0], [4.3, 534.0], [4.4, 537.0], [4.5, 537.0], [4.6, 537.0], [4.7, 538.0], [4.8, 538.0], [4.9, 539.0], [5.0, 539.0], [5.1, 539.0], [5.2, 539.0], [5.3, 540.0], [5.4, 540.0], [5.5, 541.0], [5.6, 541.0], [5.7, 542.0], [5.8, 542.0], [5.9, 543.0], [6.0, 543.0], [6.1, 543.0], [6.2, 543.0], [6.3, 543.0], [6.4, 543.0], [6.5, 543.0], [6.6, 543.0], [6.7, 544.0], [6.8, 544.0], [6.9, 544.0], [7.0, 544.0], [7.1, 544.0], [7.2, 544.0], [7.3, 545.0], [7.4, 545.0], [7.5, 546.0], [7.6, 546.0], [7.7, 548.0], [7.8, 548.0], [7.9, 548.0], [8.0, 548.0], [8.1, 549.0], [8.2, 549.0], [8.3, 549.0], [8.4, 549.0], [8.5, 550.0], [8.6, 550.0], [8.7, 550.0], [8.8, 550.0], [8.9, 552.0], [9.0, 552.0], [9.1, 553.0], [9.2, 553.0], [9.3, 553.0], [9.4, 553.0], [9.5, 553.0], [9.6, 553.0], [9.7, 554.0], [9.8, 554.0], [9.9, 554.0], [10.0, 554.0], [10.1, 556.0], [10.2, 556.0], [10.3, 556.0], [10.4, 556.0], [10.5, 557.0], [10.6, 557.0], [10.7, 558.0], [10.8, 558.0], [10.9, 558.0], [11.0, 558.0], [11.1, 559.0], [11.2, 559.0], [11.3, 560.0], [11.4, 562.0], [11.5, 562.0], [11.6, 566.0], [11.7, 566.0], [11.8, 568.0], [11.9, 568.0], [12.0, 568.0], [12.1, 568.0], [12.2, 568.0], [12.3, 568.0], [12.4, 569.0], [12.5, 569.0], [12.6, 572.0], [12.7, 572.0], [12.8, 572.0], [12.9, 572.0], [13.0, 574.0], [13.1, 574.0], [13.2, 574.0], [13.3, 574.0], [13.4, 575.0], [13.5, 575.0], [13.6, 577.0], [13.7, 577.0], [13.8, 577.0], [13.9, 577.0], [14.0, 580.0], [14.1, 580.0], [14.2, 580.0], [14.3, 580.0], [14.4, 582.0], [14.5, 582.0], [14.6, 586.0], [14.7, 586.0], [14.8, 586.0], [14.9, 586.0], [15.0, 586.0], [15.1, 586.0], [15.2, 587.0], [15.3, 587.0], [15.4, 588.0], [15.5, 588.0], [15.6, 588.0], [15.7, 588.0], [15.8, 589.0], [15.9, 589.0], [16.0, 590.0], [16.1, 590.0], [16.2, 590.0], [16.3, 590.0], [16.4, 590.0], [16.5, 590.0], [16.6, 592.0], [16.7, 592.0], [16.8, 593.0], [16.9, 593.0], [17.0, 594.0], [17.1, 594.0], [17.2, 594.0], [17.3, 594.0], [17.4, 595.0], [17.5, 595.0], [17.6, 596.0], [17.7, 596.0], [17.8, 597.0], [17.9, 597.0], [18.0, 597.0], [18.1, 597.0], [18.2, 598.0], [18.3, 598.0], [18.4, 598.0], [18.5, 598.0], [18.6, 598.0], [18.7, 598.0], [18.8, 598.0], [18.9, 598.0], [19.0, 598.0], [19.1, 598.0], [19.2, 599.0], [19.3, 599.0], [19.4, 599.0], [19.5, 599.0], [19.6, 599.0], [19.7, 599.0], [19.8, 601.0], [19.9, 601.0], [20.0, 602.0], [20.1, 602.0], [20.2, 604.0], [20.3, 604.0], [20.4, 604.0], [20.5, 604.0], [20.6, 606.0], [20.7, 606.0], [20.8, 608.0], [20.9, 608.0], [21.0, 611.0], [21.1, 611.0], [21.2, 613.0], [21.3, 613.0], [21.4, 613.0], [21.5, 613.0], [21.6, 613.0], [21.7, 613.0], [21.8, 615.0], [21.9, 615.0], [22.0, 615.0], [22.1, 615.0], [22.2, 615.0], [22.3, 615.0], [22.4, 616.0], [22.5, 616.0], [22.6, 616.0], [22.7, 616.0], [22.8, 617.0], [22.9, 617.0], [23.0, 617.0], [23.1, 617.0], [23.2, 620.0], [23.3, 620.0], [23.4, 621.0], [23.5, 621.0], [23.6, 622.0], [23.7, 622.0], [23.8, 623.0], [23.9, 623.0], [24.0, 624.0], [24.1, 624.0], [24.2, 625.0], [24.3, 625.0], [24.4, 625.0], [24.5, 625.0], [24.6, 625.0], [24.7, 625.0], [24.8, 627.0], [24.9, 627.0], [25.0, 628.0], [25.1, 628.0], [25.2, 629.0], [25.3, 629.0], [25.4, 629.0], [25.5, 629.0], [25.6, 629.0], [25.7, 629.0], [25.8, 631.0], [25.9, 631.0], [26.0, 632.0], [26.1, 632.0], [26.2, 633.0], [26.3, 633.0], [26.4, 633.0], [26.5, 633.0], [26.6, 637.0], [26.7, 637.0], [26.8, 639.0], [26.9, 639.0], [27.0, 643.0], [27.1, 643.0], [27.2, 647.0], [27.3, 647.0], [27.4, 650.0], [27.5, 650.0], [27.6, 651.0], [27.7, 651.0], [27.8, 656.0], [27.9, 656.0], [28.0, 679.0], [28.1, 679.0], [28.2, 689.0], [28.3, 689.0], [28.4, 712.0], [28.5, 712.0], [28.6, 714.0], [28.7, 714.0], [28.8, 722.0], [28.9, 722.0], [29.0, 722.0], [29.1, 722.0], [29.2, 730.0], [29.3, 730.0], [29.4, 731.0], [29.5, 731.0], [29.6, 732.0], [29.7, 732.0], [29.8, 732.0], [29.9, 732.0], [30.0, 734.0], [30.1, 734.0], [30.2, 737.0], [30.3, 737.0], [30.4, 740.0], [30.5, 740.0], [30.6, 741.0], [30.7, 741.0], [30.8, 748.0], [30.9, 748.0], [31.0, 750.0], [31.1, 750.0], [31.2, 755.0], [31.3, 755.0], [31.4, 757.0], [31.5, 757.0], [31.6, 757.0], [31.7, 757.0], [31.8, 759.0], [31.9, 759.0], [32.0, 759.0], [32.1, 759.0], [32.2, 759.0], [32.3, 759.0], [32.4, 760.0], [32.5, 760.0], [32.6, 760.0], [32.7, 760.0], [32.8, 760.0], [32.9, 760.0], [33.0, 761.0], [33.1, 761.0], [33.2, 761.0], [33.3, 761.0], [33.4, 762.0], [33.5, 762.0], [33.6, 762.0], [33.7, 762.0], [33.8, 762.0], [33.9, 762.0], [34.0, 762.0], [34.1, 762.0], [34.2, 764.0], [34.3, 764.0], [34.4, 764.0], [34.5, 764.0], [34.6, 764.0], [34.7, 764.0], [34.8, 764.0], [34.9, 764.0], [35.0, 764.0], [35.1, 764.0], [35.2, 765.0], [35.3, 765.0], [35.4, 765.0], [35.5, 765.0], [35.6, 766.0], [35.7, 766.0], [35.8, 767.0], [35.9, 767.0], [36.0, 769.0], [36.1, 769.0], [36.2, 770.0], [36.3, 770.0], [36.4, 770.0], [36.5, 770.0], [36.6, 770.0], [36.7, 770.0], [36.8, 771.0], [36.9, 771.0], [37.0, 773.0], [37.1, 773.0], [37.2, 775.0], [37.3, 775.0], [37.4, 776.0], [37.5, 776.0], [37.6, 777.0], [37.7, 777.0], [37.8, 779.0], [37.9, 779.0], [38.0, 780.0], [38.1, 780.0], [38.2, 785.0], [38.3, 785.0], [38.4, 787.0], [38.5, 787.0], [38.6, 787.0], [38.7, 787.0], [38.8, 787.0], [38.9, 787.0], [39.0, 789.0], [39.1, 789.0], [39.2, 790.0], [39.3, 790.0], [39.4, 792.0], [39.5, 792.0], [39.6, 793.0], [39.7, 793.0], [39.8, 793.0], [39.9, 796.0], [40.0, 796.0], [40.1, 797.0], [40.2, 797.0], [40.3, 800.0], [40.4, 800.0], [40.5, 801.0], [40.6, 801.0], [40.7, 803.0], [40.8, 803.0], [40.9, 805.0], [41.0, 805.0], [41.1, 806.0], [41.2, 806.0], [41.3, 879.0], [41.4, 879.0], [41.5, 883.0], [41.6, 883.0], [41.7, 889.0], [41.8, 889.0], [41.9, 890.0], [42.0, 890.0], [42.1, 893.0], [42.2, 893.0], [42.3, 894.0], [42.4, 894.0], [42.5, 897.0], [42.6, 897.0], [42.7, 897.0], [42.8, 897.0], [42.9, 898.0], [43.0, 898.0], [43.1, 901.0], [43.2, 901.0], [43.3, 902.0], [43.4, 902.0], [43.5, 903.0], [43.6, 903.0], [43.7, 903.0], [43.8, 903.0], [43.9, 905.0], [44.0, 905.0], [44.1, 905.0], [44.2, 905.0], [44.3, 905.0], [44.4, 905.0], [44.5, 906.0], [44.6, 906.0], [44.7, 909.0], [44.8, 909.0], [44.9, 909.0], [45.0, 909.0], [45.1, 909.0], [45.2, 909.0], [45.3, 910.0], [45.4, 910.0], [45.5, 912.0], [45.6, 912.0], [45.7, 914.0], [45.8, 914.0], [45.9, 914.0], [46.0, 914.0], [46.1, 918.0], [46.2, 918.0], [46.3, 918.0], [46.4, 918.0], [46.5, 918.0], [46.6, 918.0], [46.7, 919.0], [46.8, 919.0], [46.9, 921.0], [47.0, 921.0], [47.1, 921.0], [47.2, 921.0], [47.3, 922.0], [47.4, 922.0], [47.5, 922.0], [47.6, 922.0], [47.7, 925.0], [47.8, 925.0], [47.9, 926.0], [48.0, 926.0], [48.1, 927.0], [48.2, 927.0], [48.3, 930.0], [48.4, 930.0], [48.5, 930.0], [48.6, 930.0], [48.7, 930.0], [48.8, 930.0], [48.9, 933.0], [49.0, 933.0], [49.1, 934.0], [49.2, 934.0], [49.3, 937.0], [49.4, 937.0], [49.5, 942.0], [49.6, 942.0], [49.7, 942.0], [49.8, 942.0], [49.9, 945.0], [50.0, 945.0], [50.1, 947.0], [50.2, 947.0], [50.3, 948.0], [50.4, 948.0], [50.5, 948.0], [50.6, 948.0], [50.7, 949.0], [50.8, 949.0], [50.9, 951.0], [51.0, 951.0], [51.1, 951.0], [51.2, 951.0], [51.3, 953.0], [51.4, 953.0], [51.5, 956.0], [51.6, 956.0], [51.7, 960.0], [51.8, 960.0], [51.9, 963.0], [52.0, 963.0], [52.1, 964.0], [52.2, 964.0], [52.3, 968.0], [52.4, 968.0], [52.5, 971.0], [52.6, 971.0], [52.7, 975.0], [52.8, 975.0], [52.9, 976.0], [53.0, 976.0], [53.1, 978.0], [53.2, 978.0], [53.3, 982.0], [53.4, 982.0], [53.5, 982.0], [53.6, 982.0], [53.7, 983.0], [53.8, 983.0], [53.9, 984.0], [54.0, 984.0], [54.1, 985.0], [54.2, 985.0], [54.3, 986.0], [54.4, 986.0], [54.5, 988.0], [54.6, 988.0], [54.7, 989.0], [54.8, 989.0], [54.9, 990.0], [55.0, 990.0], [55.1, 991.0], [55.2, 991.0], [55.3, 995.0], [55.4, 995.0], [55.5, 999.0], [55.6, 999.0], [55.7, 1002.0], [55.8, 1002.0], [55.9, 1003.0], [56.0, 1003.0], [56.1, 1005.0], [56.2, 1005.0], [56.3, 1008.0], [56.4, 1008.0], [56.5, 1013.0], [56.6, 1013.0], [56.7, 1013.0], [56.8, 1013.0], [56.9, 1020.0], [57.0, 1020.0], [57.1, 1020.0], [57.2, 1020.0], [57.3, 1022.0], [57.4, 1022.0], [57.5, 1025.0], [57.6, 1025.0], [57.7, 1031.0], [57.8, 1031.0], [57.9, 1031.0], [58.0, 1031.0], [58.1, 1036.0], [58.2, 1036.0], [58.3, 1039.0], [58.4, 1039.0], [58.5, 1046.0], [58.6, 1046.0], [58.7, 1049.0], [58.8, 1049.0], [58.9, 1050.0], [59.0, 1050.0], [59.1, 1057.0], [59.2, 1057.0], [59.3, 1059.0], [59.4, 1059.0], [59.5, 1066.0], [59.6, 1066.0], [59.7, 1075.0], [59.8, 1075.0], [59.9, 1078.0], [60.0, 1078.0], [60.1, 1082.0], [60.2, 1082.0], [60.3, 1088.0], [60.4, 1088.0], [60.5, 1092.0], [60.6, 1092.0], [60.7, 1097.0], [60.8, 1097.0], [60.9, 1102.0], [61.0, 1102.0], [61.1, 1106.0], [61.2, 1106.0], [61.3, 1110.0], [61.4, 1110.0], [61.5, 1115.0], [61.6, 1115.0], [61.7, 1120.0], [61.8, 1120.0], [61.9, 1126.0], [62.0, 1126.0], [62.1, 1131.0], [62.2, 1131.0], [62.3, 1135.0], [62.4, 1135.0], [62.5, 1140.0], [62.6, 1140.0], [62.7, 1144.0], [62.8, 1144.0], [62.9, 1150.0], [63.0, 1150.0], [63.1, 1154.0], [63.2, 1154.0], [63.3, 1160.0], [63.4, 1160.0], [63.5, 1166.0], [63.6, 1166.0], [63.7, 1171.0], [63.8, 1171.0], [63.9, 1176.0], [64.0, 1176.0], [64.1, 1181.0], [64.2, 1181.0], [64.3, 1188.0], [64.4, 1188.0], [64.5, 1192.0], [64.6, 1192.0], [64.7, 1197.0], [64.8, 1197.0], [64.9, 1202.0], [65.0, 1202.0], [65.1, 1208.0], [65.2, 1208.0], [65.3, 1213.0], [65.4, 1213.0], [65.5, 1220.0], [65.6, 1220.0], [65.7, 1223.0], [65.8, 1223.0], [65.9, 1228.0], [66.0, 1228.0], [66.1, 1234.0], [66.2, 1234.0], [66.3, 1240.0], [66.4, 1240.0], [66.5, 1247.0], [66.6, 1247.0], [66.7, 1252.0], [66.8, 1252.0], [66.9, 1258.0], [67.0, 1258.0], [67.1, 1263.0], [67.2, 1263.0], [67.3, 1269.0], [67.4, 1269.0], [67.5, 1275.0], [67.6, 1275.0], [67.7, 1281.0], [67.8, 1281.0], [67.9, 1287.0], [68.0, 1287.0], [68.1, 1287.0], [68.2, 1287.0], [68.3, 1297.0], [68.4, 1297.0], [68.5, 1299.0], [68.6, 1299.0], [68.7, 1306.0], [68.8, 1306.0], [68.9, 1312.0], [69.0, 1312.0], [69.1, 1318.0], [69.2, 1318.0], [69.3, 1325.0], [69.4, 1325.0], [69.5, 1330.0], [69.6, 1330.0], [69.7, 1339.0], [69.8, 1339.0], [69.9, 1345.0], [70.0, 1345.0], [70.1, 1349.0], [70.2, 1349.0], [70.3, 1358.0], [70.4, 1358.0], [70.5, 1363.0], [70.6, 1363.0], [70.7, 1370.0], [70.8, 1370.0], [70.9, 1377.0], [71.0, 1377.0], [71.1, 1382.0], [71.2, 1382.0], [71.3, 1389.0], [71.4, 1389.0], [71.5, 1395.0], [71.6, 1395.0], [71.7, 1402.0], [71.8, 1402.0], [71.9, 1409.0], [72.0, 1409.0], [72.1, 1416.0], [72.2, 1416.0], [72.3, 1422.0], [72.4, 1422.0], [72.5, 1431.0], [72.6, 1431.0], [72.7, 1437.0], [72.8, 1437.0], [72.9, 1445.0], [73.0, 1445.0], [73.1, 1452.0], [73.2, 1452.0], [73.3, 1459.0], [73.4, 1459.0], [73.5, 1466.0], [73.6, 1466.0], [73.7, 1472.0], [73.8, 1472.0], [73.9, 1480.0], [74.0, 1480.0], [74.1, 1487.0], [74.2, 1487.0], [74.3, 1494.0], [74.4, 1494.0], [74.5, 1503.0], [74.6, 1503.0], [74.7, 1510.0], [74.8, 1510.0], [74.9, 1518.0], [75.0, 1518.0], [75.1, 1524.0], [75.2, 1524.0], [75.3, 1532.0], [75.4, 1532.0], [75.5, 1540.0], [75.6, 1540.0], [75.7, 1548.0], [75.8, 1548.0], [75.9, 1556.0], [76.0, 1556.0], [76.1, 1564.0], [76.2, 1564.0], [76.3, 1571.0], [76.4, 1571.0], [76.5, 1580.0], [76.6, 1580.0], [76.7, 1588.0], [76.8, 1588.0], [76.9, 1599.0], [77.0, 1599.0], [77.1, 1605.0], [77.2, 1605.0], [77.3, 1615.0], [77.4, 1615.0], [77.5, 1621.0], [77.6, 1621.0], [77.7, 1640.0], [77.8, 1640.0], [77.9, 1643.0], [78.0, 1643.0], [78.1, 1647.0], [78.2, 1647.0], [78.3, 1656.0], [78.4, 1656.0], [78.5, 1683.0], [78.6, 1683.0], [78.7, 1686.0], [78.8, 1686.0], [78.9, 1689.0], [79.0, 1689.0], [79.1, 1697.0], [79.2, 1697.0], [79.3, 1707.0], [79.4, 1707.0], [79.5, 1934.0], [79.6, 1934.0], [79.7, 1973.0], [79.8, 1973.0], [79.9, 1975.0], [80.0, 1975.0], [80.1, 1981.0], [80.2, 1981.0], [80.3, 1993.0], [80.4, 1993.0], [80.5, 2001.0], [80.6, 2001.0], [80.7, 2006.0], [80.8, 2006.0], [80.9, 2009.0], [81.0, 2009.0], [81.1, 2012.0], [81.2, 2012.0], [81.3, 2017.0], [81.4, 2017.0], [81.5, 2021.0], [81.6, 2021.0], [81.7, 2028.0], [81.8, 2028.0], [81.9, 2032.0], [82.0, 2032.0], [82.1, 2036.0], [82.2, 2036.0], [82.3, 2039.0], [82.4, 2039.0], [82.5, 2048.0], [82.6, 2048.0], [82.7, 2049.0], [82.8, 2049.0], [82.9, 2055.0], [83.0, 2055.0], [83.1, 2065.0], [83.2, 2065.0], [83.3, 2069.0], [83.4, 2069.0], [83.5, 2075.0], [83.6, 2075.0], [83.7, 2080.0], [83.8, 2080.0], [83.9, 2089.0], [84.0, 2089.0], [84.1, 2092.0], [84.2, 2092.0], [84.3, 2099.0], [84.4, 2099.0], [84.5, 2100.0], [84.6, 2100.0], [84.7, 2126.0], [84.8, 2126.0], [84.9, 2136.0], [85.0, 2136.0], [85.1, 2138.0], [85.2, 2138.0], [85.3, 2141.0], [85.4, 2141.0], [85.5, 2147.0], [85.6, 2147.0], [85.7, 2151.0], [85.8, 2151.0], [85.9, 2164.0], [86.0, 2164.0], [86.1, 2178.0], [86.2, 2178.0], [86.3, 2180.0], [86.4, 2180.0], [86.5, 2185.0], [86.6, 2185.0], [86.7, 2195.0], [86.8, 2195.0], [86.9, 2219.0], [87.0, 2219.0], [87.1, 2219.0], [87.2, 2219.0], [87.3, 2228.0], [87.4, 2228.0], [87.5, 2231.0], [87.6, 2231.0], [87.7, 2239.0], [87.8, 2239.0], [87.9, 2250.0], [88.0, 2250.0], [88.1, 2250.0], [88.2, 2250.0], [88.3, 2254.0], [88.4, 2254.0], [88.5, 2265.0], [88.6, 2265.0], [88.7, 2265.0], [88.8, 2265.0], [88.9, 2283.0], [89.0, 2283.0], [89.1, 2284.0], [89.2, 2284.0], [89.3, 2300.0], [89.4, 2300.0], [89.5, 2303.0], [89.6, 2303.0], [89.7, 2310.0], [89.8, 2310.0], [89.9, 2312.0], [90.0, 2312.0], [90.1, 2314.0], [90.2, 2314.0], [90.3, 2321.0], [90.4, 2321.0], [90.5, 2323.0], [90.6, 2323.0], [90.7, 2331.0], [90.8, 2331.0], [90.9, 2348.0], [91.0, 2348.0], [91.1, 2359.0], [91.2, 2359.0], [91.3, 2364.0], [91.4, 2364.0], [91.5, 2366.0], [91.6, 2366.0], [91.7, 2394.0], [91.8, 2394.0], [91.9, 2397.0], [92.0, 2397.0], [92.1, 2401.0], [92.2, 2401.0], [92.3, 2415.0], [92.4, 2415.0], [92.5, 2477.0], [92.6, 2477.0], [92.7, 2485.0], [92.8, 2485.0], [92.9, 2496.0], [93.0, 2496.0], [93.1, 2511.0], [93.2, 2511.0], [93.3, 2513.0], [93.4, 2513.0], [93.5, 2519.0], [93.6, 2519.0], [93.7, 2528.0], [93.8, 2528.0], [93.9, 2542.0], [94.0, 2542.0], [94.1, 2544.0], [94.2, 2544.0], [94.3, 2556.0], [94.4, 2556.0], [94.5, 2572.0], [94.6, 2572.0], [94.7, 2587.0], [94.8, 2587.0], [94.9, 2600.0], [95.0, 2600.0], [95.1, 2615.0], [95.2, 2615.0], [95.3, 2685.0], [95.4, 2685.0], [95.5, 2690.0], [95.6, 2690.0], [95.7, 2692.0], [95.8, 2692.0], [95.9, 2693.0], [96.0, 2693.0], [96.1, 2697.0], [96.2, 2697.0], [96.3, 2707.0], [96.4, 2707.0], [96.5, 2722.0], [96.6, 2722.0], [96.7, 2740.0], [96.8, 2740.0], [96.9, 2760.0], [97.0, 2760.0], [97.1, 2776.0], [97.2, 2776.0], [97.3, 2786.0], [97.4, 2786.0], [97.5, 2807.0], [97.6, 2807.0], [97.7, 2820.0], [97.8, 2820.0], [97.9, 2841.0], [98.0, 2841.0], [98.1, 2857.0], [98.2, 2857.0], [98.3, 2873.0], [98.4, 2873.0], [98.5, 2884.0], [98.6, 2884.0], [98.7, 2907.0], [98.8, 2907.0], [98.9, 2924.0], [99.0, 2924.0], [99.1, 2937.0], [99.2, 2937.0], [99.3, 2959.0], [99.4, 2959.0], [99.5, 2973.0], [99.6, 2973.0], [99.7, 2990.0], [99.8, 2990.0], [99.9, 3012.0], [100.0, 3012.0]], "isOverall": false, "label": "conf #1 req", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 78.0, "series": [{"data": [[0.0, 9.0], [600.0, 43.0], [700.0, 59.0], [800.0, 14.0], [900.0, 63.0], [1000.0, 26.0], [1100.0, 20.0], [1200.0, 19.0], [1300.0, 15.0], [1400.0, 14.0], [1500.0, 13.0], [100.0, 12.0], [1600.0, 11.0], [1700.0, 1.0], [1900.0, 5.0], [2000.0, 20.0], [2100.0, 12.0], [2200.0, 12.0], [2300.0, 14.0], [2400.0, 5.0], [2500.0, 9.0], [2600.0, 7.0], [2700.0, 6.0], [2800.0, 6.0], [2900.0, 6.0], [3000.0, 1.0], [500.0, 78.0]], "isOverall": false, "label": "conf #1 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 21.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 351.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 351.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [[2.0, 128.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [[3.0, 21.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 153.18, "minX": 1.6336539E12, "maxY": 153.18, "series": [{"data": [[1.6336539E12, 153.18]], "isOverall": false, "label": "conf #1 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6336539E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 101.0, "minX": 1.0, "maxY": 3012.0, "series": [{"data": [[2.0, 2990.0], [3.0, 2973.0], [4.0, 2959.0], [5.0, 2937.0], [6.0, 2924.0], [7.0, 2907.0], [8.0, 2884.0], [9.0, 2873.0], [10.0, 2857.0], [11.0, 2841.0], [12.0, 2820.0], [13.0, 2807.0], [14.0, 2786.0], [15.0, 2776.0], [16.0, 2760.0], [17.0, 2740.0], [18.0, 2722.0], [19.0, 2707.0], [20.0, 2692.0], [23.0, 2689.3333333333335], [24.0, 2697.0], [25.0, 2615.0], [26.0, 2600.0], [27.0, 2587.0], [28.0, 2572.0], [29.0, 2556.0], [30.0, 2542.0], [31.0, 2528.0], [33.0, 2544.0], [32.0, 2513.0], [35.0, 2519.0], [34.0, 2485.0], [37.0, 2477.0], [36.0, 2496.0], [39.0, 2415.0], [38.0, 2511.0], [41.0, 2394.0], [40.0, 2401.0], [43.0, 2364.0], [42.0, 2397.0], [45.0, 2348.0], [44.0, 2366.0], [47.0, 2314.0], [46.0, 2331.0], [49.0, 2300.0], [48.0, 2323.0], [51.0, 2265.0], [50.0, 2283.0], [53.0, 2310.0], [52.0, 2265.0], [55.0, 2321.0], [54.0, 2359.0], [57.0, 2284.0], [56.0, 2312.0], [59.0, 2303.0], [58.0, 2250.0], [61.0, 2219.0], [60.0, 2239.0], [63.0, 2250.0], [62.0, 2231.0], [67.0, 2151.0], [66.0, 2178.0], [65.0, 2219.0], [64.0, 2195.0], [71.0, 2136.0], [70.0, 2185.0], [69.0, 2164.0], [68.0, 2180.0], [75.0, 2141.0], [74.0, 2147.0], [73.0, 2228.0], [72.0, 2254.0], [79.0, 2075.0], [78.0, 2099.0], [77.0, 1975.0], [76.0, 2138.0], [83.0, 2100.0], [82.0, 2048.0], [81.0, 1934.0], [80.0, 2089.0], [87.0, 2039.0], [86.0, 2065.0], [85.0, 2055.0], [84.0, 2126.0], [91.0, 2009.0], [90.0, 2080.0], [89.0, 2006.0], [88.0, 2092.0], [97.0, 1992.5], [103.0, 2029.125], [101.0, 1993.0], [100.0, 2001.0], [107.0, 1689.0], [106.0, 1683.0], [105.0, 1707.0], [104.0, 1697.0], [111.0, 1640.0], [110.0, 1647.0], [109.0, 1656.0], [108.0, 1686.0], [115.0, 1605.0], [114.0, 1615.0], [113.0, 1621.0], [112.0, 1643.0], [119.0, 1571.0], [118.0, 1580.0], [117.0, 1588.0], [116.0, 1599.0], [123.0, 1540.0], [122.0, 1548.0], [121.0, 1556.0], [120.0, 1564.0], [127.0, 1510.0], [126.0, 1518.0], [125.0, 1524.0], [124.0, 1532.0], [135.0, 842.6666666666667], [134.0, 1459.0], [133.0, 1466.0], [132.0, 1472.0], [131.0, 1480.0], [130.0, 1487.0], [129.0, 1494.0], [128.0, 1503.0], [142.0, 837.6666666666667], [137.0, 633.1], [136.0, 722.8], [138.0, 770.0], [139.0, 697.8333333333334], [140.0, 729.0], [141.0, 843.3333333333333], [143.0, 845.0], [147.0, 737.5], [145.0, 862.3333333333333], [144.0, 735.6], [146.0, 846.3333333333333], [148.0, 743.4], [150.0, 650.5], [149.0, 848.0], [151.0, 850.3333333333334], [158.0, 695.125], [157.0, 726.0], [153.0, 653.090909090909], [156.0, 765.8], [155.0, 687.6999999999999], [152.0, 971.5], [154.0, 732.3333333333333], [159.0, 796.0], [164.0, 710.2], [163.0, 920.5], [161.0, 928.0], [160.0, 962.0], [167.0, 1252.0], [166.0, 1258.0], [165.0, 1263.0], [162.0, 1281.0], [175.0, 1208.0], [174.0, 1213.0], [173.0, 1220.0], [172.0, 1223.0], [171.0, 1228.0], [170.0, 1234.0], [169.0, 1240.0], [168.0, 1247.0], [183.0, 839.75], [182.0, 1171.0], [181.0, 1176.0], [180.0, 1181.0], [179.0, 1188.0], [178.0, 1192.0], [177.0, 1197.0], [176.0, 1202.0], [191.0, 819.0], [190.0, 856.5], [189.0, 835.25], [188.0, 807.2857142857143], [187.0, 805.875], [186.0, 824.8], [185.0, 801.1666666666667], [184.0, 825.5], [199.0, 867.25], [198.0, 889.6666666666666], [197.0, 830.5], [196.0, 892.0], [195.0, 943.0], [194.0, 888.6666666666666], [193.0, 841.6], [192.0, 839.2], [202.0, 872.25], [201.0, 939.5], [200.0, 893.0], [207.0, 1049.0], [206.0, 1050.0], [205.0, 1057.0], [204.0, 1059.0], [203.0, 1066.0], [215.0, 698.25], [214.0, 101.0], [212.0, 1031.0], [211.0, 107.0], [210.0, 1036.0], [209.0, 1039.0], [208.0, 1046.0], [223.0, 105.0], [222.0, 505.0], [221.0, 800.3333333333334], [220.0, 634.1666666666666], [217.0, 636.6666666666667], [216.0, 949.3333333333334], [218.0, 512.5], [219.0, 1020.0], [231.0, 937.75], [229.0, 696.5714285714287], [224.0, 921.6], [230.0, 937.6666666666667], [227.0, 448.4], [225.0, 757.4], [226.0, 530.5], [228.0, 986.5], [237.0, 929.3333333333334], [238.0, 930.0], [233.0, 978.3333333333334], [236.0, 982.75], [235.0, 989.0], [234.0, 985.0], [232.0, 1008.0], [247.0, 978.0], [246.0, 975.0], [242.0, 968.0], [241.0, 960.0], [240.0, 960.0], [251.0, 984.75], [1.0, 3012.0]], "isOverall": false, "label": "conf #1 req", "isController": false}, {"data": [[153.18, 1177.1359999999995]], "isOverall": false, "label": "conf #1 req-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 251.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.6336539E12, "maxY": 3718.6, "series": [{"data": [[1.6336539E12, 3718.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6336539E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6336539E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1177.1359999999995, "minX": 1.6336539E12, "maxY": 1177.1359999999995, "series": [{"data": [[1.6336539E12, 1177.1359999999995]], "isOverall": false, "label": "conf #1 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6336539E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1175.3539999999994, "minX": 1.6336539E12, "maxY": 1175.3539999999994, "series": [{"data": [[1.6336539E12, 1175.3539999999994]], "isOverall": false, "label": "conf #1 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6336539E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.6336539E12, "maxY": 4.9E-324, "series": [{"data": [[1.6336539E12, 0.0]], "isOverall": false, "label": "conf #1 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6336539E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 534.0, "minX": 1.6336539E12, "maxY": 3012.0, "series": [{"data": [[1.6336539E12, 3012.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6336539E12, 2323.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6336539E12, 2941.3999999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6336539E12, 2685.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6336539E12, 534.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6336539E12, 964.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6336539E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 107.0, "minX": 39.0, "maxY": 2697.0, "series": [{"data": [[64.0, 2157.5], [39.0, 2697.0], [185.0, 905.0], [94.0, 1347.0], [118.0, 589.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[185.0, 107.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 185.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 107.0, "minX": 39.0, "maxY": 2697.0, "series": [{"data": [[64.0, 2157.5], [39.0, 2697.0], [185.0, 905.0], [94.0, 1347.0], [118.0, 589.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[185.0, 107.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 185.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6336539E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6336539E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6336539E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.6336539E12, "maxY": 7.983333333333333, "series": [{"data": [[1.6336539E12, 7.983333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6336539E12, 0.18333333333333332]], "isOverall": false, "label": "503", "isController": false}, {"data": [[1.6336539E12, 0.16666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6336539E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.35, "minX": 1.6336539E12, "maxY": 7.983333333333333, "series": [{"data": [[1.6336539E12, 0.35]], "isOverall": false, "label": "conf #1 req-failure", "isController": false}, {"data": [[1.6336539E12, 7.983333333333333]], "isOverall": false, "label": "conf #1 req-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6336539E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.35, "minX": 1.6336539E12, "maxY": 7.983333333333333, "series": [{"data": [[1.6336539E12, 7.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6336539E12, 0.35]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6336539E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

