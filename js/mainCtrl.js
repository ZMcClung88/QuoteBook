angular.module('quoteBook').controller('mainCtrl', function($scope,mainService) {

    // $scope.name = 'boo ya!';

    // $scope.getData = function() {
    //   $scope.data = mainService.getData();
    // }

    // $scope.getData();

    $scope.getQuote = function() {
      $scope.quotes = mainService.getQuote();
    }

    $scope.getQuote();

    $scope.deleteQuote = function(textToRemove) {
      mainService.removeQuote(textToRemove);
    }

    $scope.addQuote = function() {
      var newQuote = {
        text: $scope.newQuoteText,
        author: $scope.newQuoteAuthor
      }
      if(mainService.addQuote(newQuote)) {
        $scope.newQuoteText = '';
        $scope.newQuoteAuthor = '';
      }
    }


})