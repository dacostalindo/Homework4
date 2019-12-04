$(document).ready(function() {
    var apiKey = "33d715e9ccbb6dcfbce3bac994644d28" // Enter your API Key here
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    Object.keys(state_info).forEach(function(key){
      var state_obj = state_info['CO']
      var url =`https://api.darksky.net/forecast/${apiKey}/${state_obj['lat']},${state_obj['lng']}`;

      $.ajax({url:url, state:key, dataType:"jsonp"}).then(function(data) {

                  var state_name = this.state;
                  console.log(data)
                  var temperature = null
                  // TODO
                  // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                  var temperature = data.currently.temperature;
                  console.log(state_name, temperature);

                  //TODO
                  // Default color gray
                  // Create a series of if else blocks to set the color for the state based on the temperature
                  // Less than equal to 10 should be blue
                  // Between 11 and 30 should be cyan
                  // Between 31 and 50 should be green
                  // Between 51 and 80 should be orange
                  // Greater than 80 should be
                  $('#' + state_name).css('fill', "#808080");

                    // Less than equal to 10 should be: #6495ED
                    if(temperature <= 10)
                    {
                      $('#' + state_name).css('fill', "#6495ED");
                    }
                    // Between 11 and 20 should be: #7FFFD4
                    else if(temperature > 10 && temperature <= 20)
                    {
                      $('#' + state_name).css('fill', "#7FFFD4");
                    }
                    // Between 21 and 30 should be: #0000FF
                    else if(temperature > 20 && temperature <= 30)
                    {
                      $('#' + state_name).css('fill', "#0000FF");
                    }
                    // Between 31 and 40 should be: #008B8B
                    else if(temperature > 30 && temperature <= 40)
                    {
                      $('#' + state_name).css('fill', "#008B8B");
                    }
                    // Between 41 and 50 should be:	#00BFFF
                    else if(temperature > 40 && temperature <= 50)
                    {
                      $('#' + state_name).css('fill', "#00BFFF");
                    }
                    // Between 51 and 60 should be:	#F08080
                    else if(temperature > 50 && temperature <= 60)
                    {
                      $('#' + state_name).css('fill', "#F08080");
                    }
                    // Between 61 and 70 should be:	#CD5C5C
                    else if(temperature > 60 && temperature <= 70)
                    {
                      $('#' + state_name).css('fill', "#CD5C5C");
                    }
                    // Between 71 and 80 should be:	#8B0000
                    else if(temperature > 70 && temperature <= 80)
                    {
                      $('#' + state_name).css('fill', "#8B0000");
                    }
                    // Between 81 and 90 should be:	#B22222
                    else if(temperature > 80 && temperature <= 90)
                    {
                      $('#' + state_name).css('fill', "#B22222");
                    }
                    // Greater than 90 should be: #FF0000
                    else if(temperature > 90)
                    {
                      $('#' + state_name).css('fill', "#FF0000");
                    }

        });
    });
});
