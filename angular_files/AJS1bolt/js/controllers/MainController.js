app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [
    {
    series: "Sherlock",
    series_img: "img/sherlock.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  },
    {
      series: "House of Cards",
      series_img: "https://i.kinja-img.com/gawker-media/image/upload/s--UthgPE_R--/c_fill,fl_progressive,g_north,h_180,q_80,w_320/fmokqbwuciulndrpceev.png",
      genre: "Political drama",
      season: 4,
      episode: "Chapter 41",
      description: "As Claire begins exploring a  campaign of her own, she and Frank engage in backdoor political maneuvering. But this time they're not on the same side.",
      datetime: new Date(2014, 11, 31, 22, 30, 00, 00)
    },
    {
      series: "Arrested Development",
      series_img: "https://s3.amazonaws.com/codecademy-content/projects/4/bolt-network-2/img/arrested_development.jpg",
      genre: "Sitcom",
      season: 2,
      episode: "The righteous brothers",
      description: "The model home collapses. Tobias and Kitty head to Las Vegas together.",
      datetime: new Date(2014, 11, 31, 23, 30, 00, 00)
    }
  ];
}]);

