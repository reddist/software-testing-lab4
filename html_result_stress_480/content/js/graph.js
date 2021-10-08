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
        data: {"result": {"minY": 112.0, "minX": 0.0, "maxY": 3011.0, "series": [{"data": [[0.0, 112.0], [0.1, 112.0], [0.2, 112.0], [0.3, 512.0], [0.4, 512.0], [0.5, 512.0], [0.6, 512.0], [0.7, 513.0], [0.8, 513.0], [0.9, 513.0], [1.0, 513.0], [1.1, 514.0], [1.2, 514.0], [1.3, 514.0], [1.4, 514.0], [1.5, 516.0], [1.6, 516.0], [1.7, 516.0], [1.8, 516.0], [1.9, 517.0], [2.0, 517.0], [2.1, 518.0], [2.2, 518.0], [2.3, 518.0], [2.4, 518.0], [2.5, 519.0], [2.6, 519.0], [2.7, 519.0], [2.8, 519.0], [2.9, 519.0], [3.0, 519.0], [3.1, 519.0], [3.2, 520.0], [3.3, 520.0], [3.4, 520.0], [3.5, 520.0], [3.6, 521.0], [3.7, 521.0], [3.8, 523.0], [3.9, 523.0], [4.0, 524.0], [4.1, 524.0], [4.2, 525.0], [4.3, 525.0], [4.4, 525.0], [4.5, 525.0], [4.6, 525.0], [4.7, 525.0], [4.8, 525.0], [4.9, 525.0], [5.0, 529.0], [5.1, 529.0], [5.2, 529.0], [5.3, 529.0], [5.4, 529.0], [5.5, 531.0], [5.6, 531.0], [5.7, 531.0], [5.8, 531.0], [5.9, 532.0], [6.0, 532.0], [6.1, 532.0], [6.2, 532.0], [6.3, 532.0], [6.4, 532.0], [6.5, 533.0], [6.6, 533.0], [6.7, 534.0], [6.8, 534.0], [6.9, 536.0], [7.0, 536.0], [7.1, 536.0], [7.2, 536.0], [7.3, 536.0], [7.4, 536.0], [7.5, 537.0], [7.6, 537.0], [7.7, 537.0], [7.8, 537.0], [7.9, 537.0], [8.0, 538.0], [8.1, 538.0], [8.2, 540.0], [8.3, 540.0], [8.4, 540.0], [8.5, 540.0], [8.6, 542.0], [8.7, 542.0], [8.8, 543.0], [8.9, 543.0], [9.0, 543.0], [9.1, 543.0], [9.2, 545.0], [9.3, 545.0], [9.4, 547.0], [9.5, 547.0], [9.6, 547.0], [9.7, 547.0], [9.8, 547.0], [9.9, 547.0], [10.0, 547.0], [10.1, 547.0], [10.2, 547.0], [10.3, 549.0], [10.4, 549.0], [10.5, 551.0], [10.6, 551.0], [10.7, 551.0], [10.8, 551.0], [10.9, 553.0], [11.0, 553.0], [11.1, 553.0], [11.2, 553.0], [11.3, 555.0], [11.4, 555.0], [11.5, 556.0], [11.6, 556.0], [11.7, 556.0], [11.8, 556.0], [11.9, 556.0], [12.0, 556.0], [12.1, 558.0], [12.2, 558.0], [12.3, 560.0], [12.4, 560.0], [12.5, 560.0], [12.6, 560.0], [12.7, 560.0], [12.8, 561.0], [12.9, 561.0], [13.0, 561.0], [13.1, 561.0], [13.2, 563.0], [13.3, 563.0], [13.4, 565.0], [13.5, 565.0], [13.6, 568.0], [13.7, 568.0], [13.8, 568.0], [13.9, 568.0], [14.0, 568.0], [14.1, 568.0], [14.2, 568.0], [14.3, 568.0], [14.4, 570.0], [14.5, 570.0], [14.6, 571.0], [14.7, 571.0], [14.8, 573.0], [14.9, 573.0], [15.0, 573.0], [15.1, 573.0], [15.2, 573.0], [15.3, 573.0], [15.4, 573.0], [15.5, 575.0], [15.6, 575.0], [15.7, 576.0], [15.8, 576.0], [15.9, 578.0], [16.0, 578.0], [16.1, 578.0], [16.2, 578.0], [16.3, 578.0], [16.4, 578.0], [16.5, 581.0], [16.6, 581.0], [16.7, 583.0], [16.8, 583.0], [16.9, 583.0], [17.0, 583.0], [17.1, 584.0], [17.2, 584.0], [17.3, 585.0], [17.4, 585.0], [17.5, 586.0], [17.6, 586.0], [17.7, 586.0], [17.8, 589.0], [17.9, 589.0], [18.0, 589.0], [18.1, 589.0], [18.2, 590.0], [18.3, 590.0], [18.4, 590.0], [18.5, 590.0], [18.6, 592.0], [18.7, 592.0], [18.8, 595.0], [18.9, 595.0], [19.0, 596.0], [19.1, 596.0], [19.2, 597.0], [19.3, 597.0], [19.4, 598.0], [19.5, 598.0], [19.6, 599.0], [19.7, 599.0], [19.8, 600.0], [19.9, 600.0], [20.0, 601.0], [20.1, 601.0], [20.2, 601.0], [20.3, 603.0], [20.4, 603.0], [20.5, 604.0], [20.6, 604.0], [20.7, 607.0], [20.8, 607.0], [20.9, 608.0], [21.0, 608.0], [21.1, 608.0], [21.2, 608.0], [21.3, 610.0], [21.4, 610.0], [21.5, 613.0], [21.6, 613.0], [21.7, 613.0], [21.8, 613.0], [21.9, 613.0], [22.0, 613.0], [22.1, 615.0], [22.2, 615.0], [22.3, 617.0], [22.4, 617.0], [22.5, 618.0], [22.6, 618.0], [22.7, 618.0], [22.8, 619.0], [22.9, 619.0], [23.0, 621.0], [23.1, 621.0], [23.2, 624.0], [23.3, 624.0], [23.4, 625.0], [23.5, 625.0], [23.6, 626.0], [23.7, 626.0], [23.8, 627.0], [23.9, 627.0], [24.0, 628.0], [24.1, 628.0], [24.2, 630.0], [24.3, 630.0], [24.4, 630.0], [24.5, 630.0], [24.6, 634.0], [24.7, 634.0], [24.8, 634.0], [24.9, 634.0], [25.0, 635.0], [25.1, 635.0], [25.2, 635.0], [25.3, 637.0], [25.4, 637.0], [25.5, 640.0], [25.6, 640.0], [25.7, 644.0], [25.8, 644.0], [25.9, 645.0], [26.0, 645.0], [26.1, 646.0], [26.2, 646.0], [26.3, 646.0], [26.4, 646.0], [26.5, 647.0], [26.6, 647.0], [26.7, 648.0], [26.8, 648.0], [26.9, 649.0], [27.0, 649.0], [27.1, 649.0], [27.2, 649.0], [27.3, 651.0], [27.4, 651.0], [27.5, 653.0], [27.6, 653.0], [27.7, 653.0], [27.8, 653.0], [27.9, 653.0], [28.0, 655.0], [28.1, 655.0], [28.2, 658.0], [28.3, 658.0], [28.4, 658.0], [28.5, 658.0], [28.6, 659.0], [28.7, 659.0], [28.8, 661.0], [28.9, 661.0], [29.0, 664.0], [29.1, 664.0], [29.2, 666.0], [29.3, 666.0], [29.4, 666.0], [29.5, 666.0], [29.6, 670.0], [29.7, 670.0], [29.8, 671.0], [29.9, 671.0], [30.0, 672.0], [30.1, 672.0], [30.2, 672.0], [30.3, 674.0], [30.4, 674.0], [30.5, 677.0], [30.6, 677.0], [30.7, 680.0], [30.8, 680.0], [30.9, 680.0], [31.0, 680.0], [31.1, 681.0], [31.2, 681.0], [31.3, 683.0], [31.4, 683.0], [31.5, 687.0], [31.6, 687.0], [31.7, 689.0], [31.8, 689.0], [31.9, 689.0], [32.0, 689.0], [32.1, 691.0], [32.2, 691.0], [32.3, 694.0], [32.4, 694.0], [32.5, 694.0], [32.6, 694.0], [32.7, 694.0], [32.8, 698.0], [32.9, 698.0], [33.0, 700.0], [33.1, 700.0], [33.2, 701.0], [33.3, 701.0], [33.4, 702.0], [33.5, 702.0], [33.6, 703.0], [33.7, 703.0], [33.8, 710.0], [33.9, 710.0], [34.0, 711.0], [34.1, 711.0], [34.2, 712.0], [34.3, 712.0], [34.4, 713.0], [34.5, 713.0], [34.6, 714.0], [34.7, 714.0], [34.8, 716.0], [34.9, 716.0], [35.0, 721.0], [35.1, 721.0], [35.2, 721.0], [35.3, 723.0], [35.4, 723.0], [35.5, 725.0], [35.6, 725.0], [35.7, 727.0], [35.8, 727.0], [35.9, 728.0], [36.0, 728.0], [36.1, 730.0], [36.2, 730.0], [36.3, 733.0], [36.4, 733.0], [36.5, 739.0], [36.6, 739.0], [36.7, 741.0], [36.8, 741.0], [36.9, 742.0], [37.0, 742.0], [37.1, 744.0], [37.2, 744.0], [37.3, 744.0], [37.4, 744.0], [37.5, 744.0], [37.6, 748.0], [37.7, 748.0], [37.8, 751.0], [37.9, 751.0], [38.0, 754.0], [38.1, 754.0], [38.2, 755.0], [38.3, 755.0], [38.4, 757.0], [38.5, 757.0], [38.6, 757.0], [38.7, 757.0], [38.8, 759.0], [38.9, 759.0], [39.0, 765.0], [39.1, 765.0], [39.2, 766.0], [39.3, 766.0], [39.4, 767.0], [39.5, 767.0], [39.6, 771.0], [39.7, 771.0], [39.8, 777.0], [39.9, 777.0], [40.0, 777.0], [40.1, 777.0], [40.2, 777.0], [40.3, 777.0], [40.4, 777.0], [40.5, 780.0], [40.6, 780.0], [40.7, 785.0], [40.8, 785.0], [40.9, 786.0], [41.0, 786.0], [41.1, 787.0], [41.2, 787.0], [41.3, 792.0], [41.4, 792.0], [41.5, 793.0], [41.6, 793.0], [41.7, 798.0], [41.8, 798.0], [41.9, 799.0], [42.0, 799.0], [42.1, 801.0], [42.2, 801.0], [42.3, 802.0], [42.4, 802.0], [42.5, 802.0], [42.6, 806.0], [42.7, 806.0], [42.8, 808.0], [42.9, 808.0], [43.0, 815.0], [43.1, 815.0], [43.2, 816.0], [43.3, 816.0], [43.4, 821.0], [43.5, 821.0], [43.6, 822.0], [43.7, 822.0], [43.8, 824.0], [43.9, 824.0], [44.0, 825.0], [44.1, 825.0], [44.2, 828.0], [44.3, 828.0], [44.4, 831.0], [44.5, 831.0], [44.6, 835.0], [44.7, 835.0], [44.8, 841.0], [44.9, 841.0], [45.0, 841.0], [45.1, 842.0], [45.2, 842.0], [45.3, 845.0], [45.4, 845.0], [45.5, 847.0], [45.6, 847.0], [45.7, 849.0], [45.8, 849.0], [45.9, 856.0], [46.0, 856.0], [46.1, 857.0], [46.2, 857.0], [46.3, 862.0], [46.4, 862.0], [46.5, 863.0], [46.6, 863.0], [46.7, 865.0], [46.8, 865.0], [46.9, 872.0], [47.0, 872.0], [47.1, 872.0], [47.2, 872.0], [47.3, 875.0], [47.4, 875.0], [47.5, 875.0], [47.6, 877.0], [47.7, 877.0], [47.8, 884.0], [47.9, 884.0], [48.0, 888.0], [48.1, 888.0], [48.2, 890.0], [48.3, 890.0], [48.4, 892.0], [48.5, 892.0], [48.6, 896.0], [48.7, 896.0], [48.8, 899.0], [48.9, 899.0], [49.0, 900.0], [49.1, 900.0], [49.2, 903.0], [49.3, 903.0], [49.4, 910.0], [49.5, 910.0], [49.6, 911.0], [49.7, 911.0], [49.8, 915.0], [49.9, 915.0], [50.0, 915.0], [50.1, 916.0], [50.2, 916.0], [50.3, 921.0], [50.4, 921.0], [50.5, 928.0], [50.6, 928.0], [50.7, 929.0], [50.8, 929.0], [50.9, 931.0], [51.0, 931.0], [51.1, 935.0], [51.2, 935.0], [51.3, 943.0], [51.4, 943.0], [51.5, 944.0], [51.6, 944.0], [51.7, 947.0], [51.8, 947.0], [51.9, 950.0], [52.0, 950.0], [52.1, 957.0], [52.2, 957.0], [52.3, 957.0], [52.4, 957.0], [52.5, 957.0], [52.6, 961.0], [52.7, 961.0], [52.8, 969.0], [52.9, 969.0], [53.0, 971.0], [53.1, 971.0], [53.2, 973.0], [53.3, 973.0], [53.4, 976.0], [53.5, 976.0], [53.6, 984.0], [53.7, 984.0], [53.8, 986.0], [53.9, 986.0], [54.0, 988.0], [54.1, 988.0], [54.2, 993.0], [54.3, 993.0], [54.4, 1001.0], [54.5, 1001.0], [54.6, 1002.0], [54.7, 1002.0], [54.8, 1006.0], [54.9, 1006.0], [55.0, 1006.0], [55.1, 1008.0], [55.2, 1008.0], [55.3, 1018.0], [55.4, 1018.0], [55.5, 1024.0], [55.6, 1024.0], [55.7, 1026.0], [55.8, 1026.0], [55.9, 1033.0], [56.0, 1033.0], [56.1, 1034.0], [56.2, 1034.0], [56.3, 1035.0], [56.4, 1035.0], [56.5, 1038.0], [56.6, 1038.0], [56.7, 1047.0], [56.8, 1047.0], [56.9, 1049.0], [57.0, 1049.0], [57.1, 1051.0], [57.2, 1051.0], [57.3, 1055.0], [57.4, 1055.0], [57.5, 1055.0], [57.6, 1063.0], [57.7, 1063.0], [57.8, 1065.0], [57.9, 1065.0], [58.0, 1067.0], [58.1, 1067.0], [58.2, 1074.0], [58.3, 1074.0], [58.4, 1081.0], [58.5, 1081.0], [58.6, 1083.0], [58.7, 1083.0], [58.8, 1086.0], [58.9, 1086.0], [59.0, 1097.0], [59.1, 1097.0], [59.2, 1100.0], [59.3, 1100.0], [59.4, 1107.0], [59.5, 1107.0], [59.6, 1110.0], [59.7, 1110.0], [59.8, 1110.0], [59.9, 1110.0], [60.0, 1110.0], [60.1, 1115.0], [60.2, 1115.0], [60.3, 1120.0], [60.4, 1120.0], [60.5, 1126.0], [60.6, 1126.0], [60.7, 1130.0], [60.8, 1130.0], [60.9, 1135.0], [61.0, 1135.0], [61.1, 1139.0], [61.2, 1139.0], [61.3, 1145.0], [61.4, 1145.0], [61.5, 1149.0], [61.6, 1149.0], [61.7, 1158.0], [61.8, 1158.0], [61.9, 1160.0], [62.0, 1160.0], [62.1, 1167.0], [62.2, 1167.0], [62.3, 1174.0], [62.4, 1174.0], [62.5, 1174.0], [62.6, 1180.0], [62.7, 1180.0], [62.8, 1181.0], [62.9, 1181.0], [63.0, 1187.0], [63.1, 1187.0], [63.2, 1191.0], [63.3, 1191.0], [63.4, 1197.0], [63.5, 1197.0], [63.6, 1202.0], [63.7, 1202.0], [63.8, 1208.0], [63.9, 1208.0], [64.0, 1218.0], [64.1, 1218.0], [64.2, 1219.0], [64.3, 1219.0], [64.4, 1227.0], [64.5, 1227.0], [64.6, 1236.0], [64.7, 1236.0], [64.8, 1236.0], [64.9, 1236.0], [65.0, 1236.0], [65.1, 1242.0], [65.2, 1242.0], [65.3, 1250.0], [65.4, 1250.0], [65.5, 1256.0], [65.6, 1256.0], [65.7, 1260.0], [65.8, 1260.0], [65.9, 1265.0], [66.0, 1265.0], [66.1, 1270.0], [66.2, 1270.0], [66.3, 1275.0], [66.4, 1275.0], [66.5, 1285.0], [66.6, 1285.0], [66.7, 1289.0], [66.8, 1289.0], [66.9, 1294.0], [67.0, 1294.0], [67.1, 1341.0], [67.2, 1341.0], [67.3, 1349.0], [67.4, 1349.0], [67.5, 1349.0], [67.6, 1351.0], [67.7, 1351.0], [67.8, 1353.0], [67.9, 1353.0], [68.0, 1354.0], [68.1, 1354.0], [68.2, 1357.0], [68.3, 1357.0], [68.4, 1360.0], [68.5, 1360.0], [68.6, 1361.0], [68.7, 1361.0], [68.8, 1363.0], [68.9, 1363.0], [69.0, 1364.0], [69.1, 1364.0], [69.2, 1368.0], [69.3, 1368.0], [69.4, 1369.0], [69.5, 1369.0], [69.6, 1380.0], [69.7, 1380.0], [69.8, 1383.0], [69.9, 1383.0], [70.0, 1383.0], [70.1, 1389.0], [70.2, 1389.0], [70.3, 1397.0], [70.4, 1397.0], [70.5, 1406.0], [70.6, 1406.0], [70.7, 1409.0], [70.8, 1409.0], [70.9, 1421.0], [71.0, 1421.0], [71.1, 1424.0], [71.2, 1424.0], [71.3, 1430.0], [71.4, 1430.0], [71.5, 1437.0], [71.6, 1437.0], [71.7, 1449.0], [71.8, 1449.0], [71.9, 1451.0], [72.0, 1451.0], [72.1, 1459.0], [72.2, 1459.0], [72.3, 1471.0], [72.4, 1471.0], [72.5, 1471.0], [72.6, 1472.0], [72.7, 1472.0], [72.8, 1484.0], [72.9, 1484.0], [73.0, 1487.0], [73.1, 1487.0], [73.2, 1495.0], [73.3, 1495.0], [73.4, 1503.0], [73.5, 1503.0], [73.6, 1514.0], [73.7, 1514.0], [73.8, 1521.0], [73.9, 1521.0], [74.0, 1525.0], [74.1, 1525.0], [74.2, 1534.0], [74.3, 1534.0], [74.4, 1545.0], [74.5, 1545.0], [74.6, 1549.0], [74.7, 1549.0], [74.8, 1555.0], [74.9, 1555.0], [75.0, 1555.0], [75.1, 1571.0], [75.2, 1571.0], [75.3, 1572.0], [75.4, 1572.0], [75.5, 1588.0], [75.6, 1588.0], [75.7, 1590.0], [75.8, 1590.0], [75.9, 1595.0], [76.0, 1595.0], [76.1, 1608.0], [76.2, 1608.0], [76.3, 1613.0], [76.4, 1613.0], [76.5, 1624.0], [76.6, 1624.0], [76.7, 1637.0], [76.8, 1637.0], [76.9, 1639.0], [77.0, 1639.0], [77.1, 1644.0], [77.2, 1644.0], [77.3, 1661.0], [77.4, 1661.0], [77.5, 1662.0], [77.6, 1662.0], [77.7, 1662.0], [77.8, 1671.0], [77.9, 1671.0], [78.0, 1687.0], [78.1, 1687.0], [78.2, 1688.0], [78.3, 1688.0], [78.4, 1699.0], [78.5, 1699.0], [78.6, 1706.0], [78.7, 1706.0], [78.8, 1719.0], [78.9, 1719.0], [79.0, 1724.0], [79.1, 1724.0], [79.2, 1733.0], [79.3, 1733.0], [79.4, 1741.0], [79.5, 1741.0], [79.6, 1753.0], [79.7, 1753.0], [79.8, 1760.0], [79.9, 1760.0], [80.0, 1773.0], [80.1, 1773.0], [80.2, 1773.0], [80.3, 1779.0], [80.4, 1779.0], [80.5, 1788.0], [80.6, 1788.0], [80.7, 1802.0], [80.8, 1802.0], [80.9, 1807.0], [81.0, 1807.0], [81.1, 1815.0], [81.2, 1815.0], [81.3, 1836.0], [81.4, 1836.0], [81.5, 1837.0], [81.6, 1837.0], [81.7, 1853.0], [81.8, 1853.0], [81.9, 1855.0], [82.0, 1855.0], [82.1, 1865.0], [82.2, 1865.0], [82.3, 1880.0], [82.4, 1880.0], [82.5, 1884.0], [82.6, 1884.0], [82.7, 1884.0], [82.8, 1903.0], [82.9, 1903.0], [83.0, 1905.0], [83.1, 1905.0], [83.2, 1920.0], [83.3, 1920.0], [83.4, 1926.0], [83.5, 1926.0], [83.6, 1941.0], [83.7, 1941.0], [83.8, 1951.0], [83.9, 1951.0], [84.0, 1958.0], [84.1, 1958.0], [84.2, 1968.0], [84.3, 1968.0], [84.4, 1977.0], [84.5, 1977.0], [84.6, 1994.0], [84.7, 1994.0], [84.8, 2006.0], [84.9, 2006.0], [85.0, 2026.0], [85.1, 2026.0], [85.2, 2026.0], [85.3, 2033.0], [85.4, 2033.0], [85.5, 2041.0], [85.6, 2041.0], [85.7, 2050.0], [85.8, 2050.0], [85.9, 2126.0], [86.0, 2126.0], [86.1, 2132.0], [86.2, 2132.0], [86.3, 2133.0], [86.4, 2133.0], [86.5, 2135.0], [86.6, 2135.0], [86.7, 2135.0], [86.8, 2135.0], [86.9, 2139.0], [87.0, 2139.0], [87.1, 2142.0], [87.2, 2142.0], [87.3, 2142.0], [87.4, 2142.0], [87.5, 2152.0], [87.6, 2152.0], [87.7, 2152.0], [87.8, 2159.0], [87.9, 2159.0], [88.0, 2175.0], [88.1, 2175.0], [88.2, 2182.0], [88.3, 2182.0], [88.4, 2200.0], [88.5, 2200.0], [88.6, 2208.0], [88.7, 2208.0], [88.8, 2221.0], [88.9, 2221.0], [89.0, 2238.0], [89.1, 2238.0], [89.2, 2245.0], [89.3, 2245.0], [89.4, 2263.0], [89.5, 2263.0], [89.6, 2271.0], [89.7, 2271.0], [89.8, 2290.0], [89.9, 2290.0], [90.0, 2297.0], [90.1, 2297.0], [90.2, 2297.0], [90.3, 2340.0], [90.4, 2340.0], [90.5, 2344.0], [90.6, 2344.0], [90.7, 2347.0], [90.8, 2347.0], [90.9, 2348.0], [91.0, 2348.0], [91.1, 2361.0], [91.2, 2361.0], [91.3, 2381.0], [91.4, 2381.0], [91.5, 2389.0], [91.6, 2389.0], [91.7, 2405.0], [91.8, 2405.0], [91.9, 2414.0], [92.0, 2414.0], [92.1, 2433.0], [92.2, 2433.0], [92.3, 2441.0], [92.4, 2441.0], [92.5, 2456.0], [92.6, 2456.0], [92.7, 2456.0], [92.8, 2469.0], [92.9, 2469.0], [93.0, 2488.0], [93.1, 2488.0], [93.2, 2502.0], [93.3, 2502.0], [93.4, 2515.0], [93.5, 2515.0], [93.6, 2535.0], [93.7, 2535.0], [93.8, 2546.0], [93.9, 2546.0], [94.0, 2556.0], [94.1, 2556.0], [94.2, 2571.0], [94.3, 2571.0], [94.4, 2590.0], [94.5, 2590.0], [94.6, 2608.0], [94.7, 2608.0], [94.8, 2616.0], [94.9, 2616.0], [95.0, 2630.0], [95.1, 2630.0], [95.2, 2630.0], [95.3, 2646.0], [95.4, 2646.0], [95.5, 2660.0], [95.6, 2660.0], [95.7, 2683.0], [95.8, 2683.0], [95.9, 2695.0], [96.0, 2695.0], [96.1, 2706.0], [96.2, 2706.0], [96.3, 2723.0], [96.4, 2723.0], [96.5, 2744.0], [96.6, 2744.0], [96.7, 2757.0], [96.8, 2757.0], [96.9, 2776.0], [97.0, 2776.0], [97.1, 2787.0], [97.2, 2787.0], [97.3, 2802.0], [97.4, 2802.0], [97.5, 2824.0], [97.6, 2824.0], [97.7, 2824.0], [97.8, 2839.0], [97.9, 2839.0], [98.0, 2859.0], [98.1, 2859.0], [98.2, 2872.0], [98.3, 2872.0], [98.4, 2885.0], [98.5, 2885.0], [98.6, 2908.0], [98.7, 2908.0], [98.8, 2919.0], [98.9, 2919.0], [99.0, 2937.0], [99.1, 2937.0], [99.2, 2959.0], [99.3, 2959.0], [99.4, 2977.0], [99.5, 2977.0], [99.6, 2991.0], [99.7, 2991.0], [99.8, 3011.0], [99.9, 3011.0]], "isOverall": false, "label": "conf #1 req", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 94.0, "series": [{"data": [[600.0, 63.0], [700.0, 44.0], [800.0, 33.0], [900.0, 26.0], [1000.0, 23.0], [1100.0, 21.0], [1200.0, 17.0], [1300.0, 16.0], [1400.0, 14.0], [1500.0, 13.0], [100.0, 1.0], [1600.0, 12.0], [1700.0, 10.0], [1800.0, 10.0], [1900.0, 10.0], [2000.0, 5.0], [2100.0, 12.0], [2200.0, 9.0], [2300.0, 7.0], [2400.0, 7.0], [2500.0, 7.0], [2600.0, 7.0], [2700.0, 6.0], [2800.0, 6.0], [2900.0, 6.0], [3000.0, 1.0], [500.0, 94.0]], "isOverall": false, "label": "conf #1 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 351.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 351.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [[2.0, 128.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 143.2354166666667, "minX": 1.63365234E12, "maxY": 143.2354166666667, "series": [{"data": [[1.63365234E12, 143.2354166666667]], "isOverall": false, "label": "conf #1 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63365234E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 112.0, "minX": 1.0, "maxY": 3011.0, "series": [{"data": [[2.0, 2991.0], [3.0, 2977.0], [4.0, 2959.0], [5.0, 2937.0], [6.0, 2919.0], [7.0, 2908.0], [8.0, 2885.0], [9.0, 2872.0], [10.0, 2859.0], [11.0, 2839.0], [12.0, 2824.0], [13.0, 2802.0], [14.0, 2787.0], [15.0, 2776.0], [16.0, 2757.0], [17.0, 2744.0], [18.0, 2723.0], [19.0, 2706.0], [20.0, 2695.0], [21.0, 2683.0], [22.0, 2660.0], [23.0, 2646.0], [24.0, 2630.0], [25.0, 2616.0], [26.0, 2608.0], [27.0, 2590.0], [28.0, 2571.0], [29.0, 2556.0], [30.0, 2546.0], [31.0, 2535.0], [33.0, 2502.0], [32.0, 2515.0], [35.0, 2469.0], [34.0, 2488.0], [37.0, 2441.0], [36.0, 2456.0], [39.0, 2414.0], [38.0, 2433.0], [41.0, 2389.0], [40.0, 2405.0], [43.0, 2361.0], [42.0, 2381.0], [44.0, 2347.0], [47.0, 2344.0], [49.0, 2290.0], [48.0, 2297.0], [51.0, 2263.0], [50.0, 2271.0], [53.0, 2238.0], [52.0, 2245.0], [55.0, 2208.0], [54.0, 2221.0], [57.0, 2182.0], [56.0, 2200.0], [59.0, 2159.0], [58.0, 2175.0], [61.0, 2135.0], [60.0, 2152.0], [66.0, 2134.8], [71.0, 2033.0], [70.0, 2041.0], [69.0, 2050.0], [68.0, 2137.5], [75.0, 1977.0], [74.0, 1994.0], [73.0, 2006.0], [72.0, 2026.0], [79.0, 1941.0], [78.0, 1951.0], [77.0, 1958.0], [76.0, 1968.0], [83.0, 1903.0], [82.0, 1905.0], [81.0, 1920.0], [80.0, 1926.0], [87.0, 1855.0], [86.0, 1865.0], [85.0, 1880.0], [84.0, 1884.0], [91.0, 1815.0], [90.0, 1836.0], [89.0, 1837.0], [88.0, 1853.0], [95.0, 1779.0], [94.0, 1788.0], [93.0, 1802.0], [92.0, 1807.0], [99.0, 1741.0], [98.0, 1753.0], [97.0, 1760.0], [96.0, 1773.0], [103.0, 1706.0], [102.0, 1719.0], [101.0, 1724.0], [100.0, 1733.0], [107.0, 1671.0], [106.0, 1687.0], [105.0, 1688.0], [104.0, 1699.0], [111.0, 1637.0], [110.0, 1644.0], [109.0, 1661.0], [108.0, 1662.0], [115.0, 1608.0], [114.0, 1613.0], [113.0, 1624.0], [112.0, 1639.0], [119.0, 1571.0], [118.0, 1590.0], [117.0, 1588.0], [116.0, 1595.0], [123.0, 1545.0], [122.0, 1549.0], [121.0, 1555.0], [120.0, 1572.0], [127.0, 1514.0], [126.0, 1521.0], [125.0, 1525.0], [124.0, 1534.0], [129.0, 653.8571428571429], [128.0, 1007.5], [130.0, 639.125], [131.0, 682.0], [132.0, 714.4], [133.0, 687.5], [134.0, 687.3333333333334], [135.0, 667.8571428571428], [136.0, 723.4], [137.0, 724.6], [138.0, 769.25], [139.0, 698.6666666666667], [140.0, 730.2], [141.0, 730.8], [142.0, 985.5], [143.0, 687.1428571428571], [144.0, 709.8333333333334], [145.0, 779.25], [146.0, 781.75], [147.0, 781.0], [148.0, 744.2], [149.0, 785.75], [150.0, 786.5], [151.0, 752.2], [152.0, 607.5], [153.0, 609.0], [154.0, 613.5], [155.0, 618.0], [156.0, 622.5], [157.0, 626.0], [158.0, 1138.1000000000001], [159.0, 854.0], [160.0, 800.25], [163.0, 737.8571428571428], [162.0, 771.6], [164.0, 857.6666666666666], [166.0, 810.0], [165.0, 858.6666666666666], [167.0, 860.6666666666666], [161.0, 1285.0], [168.0, 813.75], [170.0, 816.75], [169.0, 958.0], [171.0, 863.6666666666666], [173.0, 822.0], [172.0, 952.5], [174.0, 951.0], [175.0, 823.75], [176.0, 825.5], [178.0, 830.0], [179.0, 869.3333333333334], [180.0, 948.0], [181.0, 836.25], [182.0, 946.0], [183.0, 872.6666666666666], [177.0, 1191.0], [184.0, 945.5], [186.0, 841.75], [185.0, 946.5], [187.0, 941.5], [188.0, 878.0], [189.0, 849.0], [190.0, 941.5], [191.0, 943.0], [192.0, 851.5], [194.0, 886.0], [195.0, 884.6666666666666], [196.0, 943.5], [197.0, 863.75], [198.0, 939.0], [199.0, 938.0], [193.0, 1110.0], [200.0, 892.6666666666666], [201.0, 892.3333333333334], [202.0, 936.5], [204.0, 895.6666666666666], [205.0, 897.0], [206.0, 899.0], [207.0, 937.0], [203.0, 1065.0], [208.0, 902.0], [210.0, 904.0], [211.0, 937.0], [212.0, 939.5], [213.0, 906.6666666666666], [215.0, 910.3333333333334], [214.0, 1026.0], [209.0, 1038.0], [216.0, 911.0], [218.0, 902.75], [219.0, 938.0], [221.0, 918.0], [222.0, 938.0], [223.0, 984.0], [220.0, 112.0], [217.0, 1006.0], [224.0, 916.75], [225.0, 936.0], [226.0, 925.3333333333334], [228.0, 930.6666666666666], [229.0, 938.0], [230.0, 936.5], [231.0, 957.0], [227.0, 969.0], [232.0, 932.0], [233.0, 939.0], [234.0, 939.0], [235.0, 944.0], [1.0, 3011.0]], "isOverall": false, "label": "conf #1 req", "isController": false}, {"data": [[143.2354166666667, 1177.5875]], "isOverall": false, "label": "conf #1 req-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 235.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.63365234E12, "maxY": 2946.1, "series": [{"data": [[1.63365234E12, 2946.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63365234E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63365234E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1177.5875, "minX": 1.63365234E12, "maxY": 1177.5875, "series": [{"data": [[1.63365234E12, 1177.5875]], "isOverall": false, "label": "conf #1 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63365234E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1177.5854166666666, "minX": 1.63365234E12, "maxY": 1177.5854166666666, "series": [{"data": [[1.63365234E12, 1177.5854166666666]], "isOverall": false, "label": "conf #1 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63365234E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.63365234E12, "maxY": 4.9E-324, "series": [{"data": [[1.63365234E12, 0.0]], "isOverall": false, "label": "conf #1 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63365234E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 512.0, "minX": 1.63365234E12, "maxY": 3011.0, "series": [{"data": [[1.63365234E12, 3011.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63365234E12, 2297.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63365234E12, 2941.3999999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63365234E12, 2630.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63365234E12, 512.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63365234E12, 916.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63365234E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 112.0, "minX": 37.0, "maxY": 2706.0, "series": [{"data": [[66.0, 2037.0], [138.0, 570.5], [144.0, 824.0], [37.0, 2706.0], [95.0, 1361.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[144.0, 112.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 144.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 112.0, "minX": 37.0, "maxY": 2706.0, "series": [{"data": [[66.0, 2037.0], [138.0, 570.5], [144.0, 824.0], [37.0, 2706.0], [95.0, 1361.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[144.0, 112.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 144.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.63365234E12, "maxY": 8.0, "series": [{"data": [[1.63365234E12, 8.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63365234E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.63365234E12, "maxY": 7.983333333333333, "series": [{"data": [[1.63365234E12, 7.983333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.63365234E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63365234E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.63365234E12, "maxY": 7.983333333333333, "series": [{"data": [[1.63365234E12, 0.016666666666666666]], "isOverall": false, "label": "conf #1 req-failure", "isController": false}, {"data": [[1.63365234E12, 7.983333333333333]], "isOverall": false, "label": "conf #1 req-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63365234E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.63365234E12, "maxY": 7.983333333333333, "series": [{"data": [[1.63365234E12, 7.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.63365234E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63365234E12, "title": "Total Transactions Per Second"}},
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

