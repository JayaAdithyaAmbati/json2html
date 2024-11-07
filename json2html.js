// json2html.js

export default function json2html(data) {
    // Start the table and add the custom attribute data-user
    let html = `<table data-user="a.jayaadithya13@gmail.com">
                  <thead>
                    <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                  </thead>
                  <tbody>`;
  
    // Loop through the array of objects and create table rows
    data.forEach(item => {
      html += `<tr>`;
      html += `<td>${item.Name}</td><td>${item.Age}</td>`;
      
      // Add Gender if available
      if (item.Gender) {
        html += `<td>${item.Gender}</td>`;
      }
      
      html += `</tr>`;
    });
  
    // Close the table
    html += `</tbody></table>`;
    
    return html;
  }
  
  