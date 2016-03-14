var main = function() {
    var cities = ["Tokyo", "Seoul", "Mexico City", "New York", "Las Vegas", "Toronto", "London", "Paris", "Moscow", "Denver", "Los Angeles", "San Francisco", "Rome", "Prague", "Budapest", "Berlin", "Marseilles", "Vancouver", "Melbourne", "Darwin", "Sydney", "Auckland", "Manchester", "Madrid", "Athens"];
    $("#city-finder").autocomplete({
        source: cities
    });
};
$(document).ready(main);