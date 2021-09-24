/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

// api url
const api_url = 
      "http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}
// Calling that async function
getapi(api_url);
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<thead><tr>
          <th>Date</th>
          <th>Season</th>
          <th>Season Week</th>
          <th>Celebrations</th>
          <th>Week Day</th>
         </tr></thead>`;
    
        tab += `<tbody><tr> 
    <td>${data.date} </td>
    <td>${data.season}</td>
    <td>${data.season_week}</td> 
    <td>${data.celebrations[0].title} ${data.celebrations[0].colour} ${data.celebrations[0].rank} ${data.celebrations[0].rank_num}</td>
    <td>${data.weekday}</td>          
</tr></tbody>`;
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}