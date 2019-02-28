// $(document).ready(function () {
//     $('#data-table').DataTable({
//         "ajax": "employee_data.json",
//         "columns": [{
//                 "data": "name"
//             },
//             {
//                 "data": "gender"
//             },
//             {
//                 "data": "designation"
//             }
//         ]
//     });
// });

// $.getJSON('data.json', function (data) {

//     let menu = data.menu;
//     console.log(menu);

//     $.each(menu, function (i, data) {
//         $('#data-table').append('')

//     });


// });

$(document).ready(function () {
    $('#data-table').DataTable({
        "ajax": "data.json",
        "columns": [{
                "data": "name"
            },
            {
                "data": "rotation_period"
            },
            {
                "data": "orbital_period"
            },
            {
                "data": "diameter"
            },
            {
                "data": "climate"
            },
            {
                "data": "gravity"
            },
            {
                "data": "terrain"
            },
            {
                "data": "surface_water"
            },
            {
                "data": "population"
            },
            {
                "data": "residents"
            },
            {
                "data": "films"
            },
            {
                "data": "created"
            },
            {
                "data": "edited"
            },
            {
                "data": "url"
            }
        ]
    });
});


// $(document).ready(function () {
//     $('#data-table').DataTable({
//         "ajax": "data.json",
//         "columns": [{
//                 "data": "name"
//             },
//             {
//                 "data": "gender"
//             },
//             {
//                 "data": "designation"
//             }
//         ]
//     });
// });