# brewery-find

## User Story

As a beer connoisseur
I want to be able to search the city I am in
so that I get a list of nearby breweries

## Acceptance Criteria

Given I type the name of a city into the searchbar,

when I submit the search
then I am shown a list of cards of the breweries in the city
then my search is saved in memory

When I filter results by type
Then Breweries of different type are removed from the results

When I select a brewery from the list
Then I am taken to a page with information about the brewery including:
. Name
. Brewery type
. Address (street, city , postal code)
. Link to their URL
. A map to the brewery

When I am shown the map
Then I am told which roads near the brewery have traffic
Then I am presented with a form to input my location

When I submit the form
Then I am shown the shortest route to the brewery
