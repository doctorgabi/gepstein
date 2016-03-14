app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread, garlic, tomatoes, olive oil.',
      price: 4.95
    },
  ];

  $scope.mains = [
    {
      name: 'Whelks',
      description: 'Whelks in hot tap water with a wine-style drink.',
      price: 14.95
    },
    {
      name: 'Bang Bang',
      description: 'Sticky potato pistols with sticky peas.',
      price: 8.50
    },
    {
      name: 'Part baked sticky disks',
      description: 'Topped with partially hydrogenised tomato flavoured dust.',
      price: 9.50
    }
  ];

  $scope.extras = [
    {
      name: 'Spoon Meat',
      description: 'Served with carbonated dipping jam.',
      price: 6.95
    },
    {
      name: 'Skewered fish coils',
      description: 'With a fizzy porridge-style dipping gravy.',
      price: 3.50
    },
    {
      name: 'Chicken lengths',
      description: 'Resting on a bed of sticky African Wottle Biscuits.',
      price: 0.50
    }
  ];

}]);