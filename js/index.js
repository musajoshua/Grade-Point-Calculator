angular.module("GPcal",[])
.controller("cal",function($scope){
    $scope.cal = true;
    $scope.gp = false;
    $scope.title = "GP Calculator";
    $scope.student = []
    $scope.qpoint = [];
    $scope.addInput = function (){
        if ($scope.unit >=0 && $scope.unit <=3) {
            /*if ($scope.grade == "A" || $scope.grade == "a") {
                var point = $scope.unit * 5;
            }else if ($scope.grade == "B" || $scope.grade == "b") {
                var point = $scope.unit * 4;
            }else if ($scope.grade == "C" || $scope.grade == "c") {
                var point = $scope.unit * 3;
            }else if ($scope.grade == "D" || $scope.grade == "d") {
                var point = $scope.unit * 2;
            }else if ($scope.grade == "F" || $scope.grade == "f") {
                var point = $scope.unit * 0;
            }else{
                alert("Please enter a valid grade!");
                return;
            }*/

            switch ($scope.grade) {
                case "A" :
                case "a" :
                    point = $scope.unit * 5;
                    break;
                case "B" :
                case "b" :
                    point = $scope.unit * 5;
                    break;
                case "C" :
                case "c" :
                    point = $scope.unit * 5;
                    break;
                case "D" :
                case "d" :
                    point = $scope.unit * 5;
                    break;
                case "F" :
                case "f" :
                    point = $scope.unit * 5;
                    break;
                default :
                    alert("Please enter a valid grade");
            }
            $scope.student.push(
                {
                    id : $scope.student.length +1,
                    code : $scope.code,
                    unit : $scope.unit,
                    grade : $scope.grade,
                }
            );
            $scope.qpoint.push(
                point
            );
            $scope.code = "";
            $scope.unit = "";
            $scope.grade = "";
        }else{
            alert("Grade unit is invalid");
            return;
        }
    }
    $scope.remove = (x) => {
        $scope.student.splice(x, 1);
        $scope.qpoint.splice(x, 1);
    }
    $scope.calculate = () => {
        $scope.cal = false;
        $scope.gp = true;
        totalQPoint = 0;
        totalUnit = 0;
        for (var i = 0; i < $scope.qpoint.length; i++) {
            totalQPoint = totalQPoint + $scope.qpoint[i];
        }
        for (var i = 0; i < $scope.student.length; i++) {
            totalUnit = totalUnit + $scope.student[i].unit;
        }
        $scope.GradePoint = Math.round(totalQPoint / totalUnit *100) / 100;
    }
});