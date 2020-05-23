var db = firebase.firestore();
var employeesRef = db.collection("employees");



$(document).ready(function() {

            $('#onlyMalesFilter').click(function(){
                // display on console that onlymalesfilter was applied
                console.log('onlyMalesFilter Filter executed');

                //apply filter to data query
                employeesRef.where("gender", "==", "Male").onSnapShot(function(querySnapShot){
                    LoadTableData(querySnapShot);
                });
            });

            $('#fullTimeFilter').click(function(){
                // display on console that fulltimefilter was selected
                console.log('fullTimeFilter Filter executed');
                employeesRef.where("isFullTime", "==", true).onSnapShot(function(querySnapShot){
                    LoadTableData(querySnapShot);
                });
            });

            $('#olderThenFilter').click(function(){
                //display on console that olderthenfilter was selected
                console.log('olderThenFilter Filter executed');
                //olderthan query
                employeesRef.where("age", ">=", 30).onSnapShot(function(querySnapShot){
                    LoadDataTable(querySnapShot);
                });
            });

            $('#ageBetweenFilter').click(function(){
                //display that agebetweenfilter was applied
                console.log('ageBetweenFilter Filter executed');
                //agebetween filter query
                employeesRef.where("age", ">=", 35).where("age","<=",50)
                    .onSnapShot(function(querySnapShot){
                        LoadTableData(querySnapShot);
                    });
            });

            $('#yearsOfExperienceFilter').click(function(){
                // display on console that yearsofexperience filter was selected
                console.log('yearsOfExperienceFilter Filter executed');
                // yearsofexperience query
                employeesRef.where("gender", "==", "Female")
                employeesRef.where("yearsOfExperience", "<=", 5).where("yearsOfExperience","<=",10)
                    .onSnapShot(function(querySnapShot){
                        LoadTableData(querySnapShot);
                    });

            });

            $('#clearFilter').click(function(){
                //display on console that clearfilter was used
                console.log('clearFilter Filter executed');
                //clear filter query
                employeesRef.get().then(function (querySnapShot) {
                    LoadDataTable(querySnapShot);

                });
            });


            function LoadDataTable(querySnapShot){
                var tableRow = '';
                querySnapShot.forEach(function (doc) {
                    var document = doc.data();
                    tableRow += '<tr>';
                    tableRow =+ '<td class="fname">' + document.fName + '</td>';
                    tableRow =+ '<td class="lname">' + document.lName + '</td>';
                    tableRow =+ '<td class="email">' + document.email + '</td>';
                    tableRow =+ '<td class="age">' + document.age + '</td>';
                    tableRow =+ '<td class="gender">' + document.gender + '</td>';
                    tableRow =+ '<td class="yeardofexperience">' + document.yearsOfExperience + '</td>';
                    tableRow =+ '<td class="isfulltime">' + document.isFullTime + '</td>';
                    tableRow =+ '<td class="editEmployee"><i class="fa fa-pencil" aria-hidden="true" style="color:green"></i></td>'
                    tableRow =+ '<td class="deleteEmployee"><i class="fa fa-trash" aria-hidden="true" style="color:red"></i></td>'
                    tableRow += '</tr>';

                });

                $('tbody.tbodyData').html(tableRow);
            }
});