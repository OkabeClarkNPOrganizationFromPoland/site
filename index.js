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
var app = {
    // Application Constructor
    initialize: function()
    {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
//        document.addEventListener("deviceready", onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function()
    { 
        console.log(device.cordova);
        this.checkConnection();
        this.receivedEvent('deviceready');
    },
    checkConnection:function()
    {
        var networkState=navigator.connection.type;
        var states={};
        states[Connection.UNKNOWN]
        states[Connection.ETHERNET]
        states[Connection.WIFI]
        states[Connection.CELL_2G]
        states[Connection.CELL_3G]
        states[Connection.CELL_4G]
        states[Connection.CELL]
        states[Connection.NONE]
        alert("Connection type: "+states[networkState]);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id)
    {
     /*   var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    */
        console.log('Received Event: ' + id);
        var button=$("input");
        console.log(button);
        $( document ).on( "vclick", function()
        {
            var jqxhr=$.ajax("example.php")
            .done(function()
            {
                alert("success");
            })
            .fail(function()
            {
                alert("error");
            })
            .always(function()
            {
                alert("complete");
            })
            jqxhr.always(function()
            {
                alert("second complete");
            })
        });
    }
};

app.initialize();