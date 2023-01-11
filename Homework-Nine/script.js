let tbody = $('tbody');
for (let i = 1; i <= 60; i++) {
    $.ajax({
        url: `https://swapi.dev/api/planets/${i}`,
        success: function (data) {

            tbody.append(`
                <tr>
                    <td>${data.name}</td>
                    <td>${data.population}</td>
                    <td>${data.climate}</td>
                    <td>${data.gravity}</td>
                </tr>
            `);


        }
    });
}
