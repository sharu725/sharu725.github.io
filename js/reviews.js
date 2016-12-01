 $(document).ready(function() {
      $("#google-reviews").googlePlaces({
          placeId: 'ChIJx113w8QUuzsR_3IiWBPrucE'
        , render: ['reviews']
        , min_rating: 4
        , max_rows:5
      });
    });