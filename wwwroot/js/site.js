// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// creaye DataTables
$(document).ready(function () {
    $('#userTabel').DataTable({
        lengthMenu: [5, 10, 20, 50, { label: '全て', value: -1 }],
        pageLength: 20,
        language: {
            url: dataTablesLanguageUrl
        }
    });
});