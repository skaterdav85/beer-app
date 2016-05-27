var express = require('express');
var router = express.Router();

var beers = [
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"21A IPA",
   "Abv":"7.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"563 Stout",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"Amendment Pale Ale",
   "Abv":"5.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"Bitter American",
   "Abv":"3.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|special_bitter_or_best_bitter"
 },
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"Double Trouble IPA",
   "Abv":"9.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"General Pippo's Porter",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"North Star Red",
   "Abv":"5.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"Oyster Point Oyster Stout",
   "Abv":"5.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"Potrero ESB",
   "Abv":"5.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|special_bitter_or_best_bitter"
 },
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"South Park Blonde",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|golden_or_blonde_ale"
 },
 {
   "Brewery":"21st Amendment Brewery Cafe",
   "City":"San Francisco",
   "Name":"Watermelon Wheat",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_fruit_lambic"
 },
 {
   "Brewery":"AleSmith Brewing",
   "City":"San Diego",
   "Name":"Anvil Ale",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"AleSmith Brewing",
   "City":"San Diego",
   "Name":"Grand Cru 2003",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"AleSmith Brewing",
   "City":"San Diego",
   "Name":"Grand Cru 2006",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"AleSmith Brewing",
   "City":"San Diego",
   "Name":"Horny Devil",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"AleSmith Brewing",
   "City":"San Diego",
   "Name":"IPA",
   "Abv":"7.25%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"AleSmith Brewing",
   "City":"San Diego",
   "Name":"Lil Devil",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"AleSmith Brewing",
   "City":"San Diego",
   "Name":"Old Numbskull 2003",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"AleSmith Brewing",
   "City":"San Diego",
   "Name":"Speedway Stout",
   "Abv":"12%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_imperial_stout"
 },
 {
   "Brewery":"AleSmith Brewing",
   "City":"San Diego",
   "Name":"Wee Heavy",
   "Abv":"9.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|scotch_ale"
 },
 {
   "Brewery":"AleSmith Brewing",
   "City":"San Diego",
   "Name":"X Extra Pale Ale",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Alpine Beer Company",
   "City":"Alpine",
   "Name":"Duet",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Alpine Beer Company",
   "City":"Alpine",
   "Name":"Nelson",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Alpine Beer Company",
   "City":"Alpine",
   "Name":"Pure Hoppiness",
   "Abv":"8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"American River Brewing",
   "City":"Auburn",
   "Name":"Oatmeal Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Anchor Steam",
   "Abv":"4.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Anchor Summer Beer",
   "Abv":"4.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|light_american_wheat_ale_or_lager"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Bock",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Christmas Ale 2003",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Christmas Ale 2007",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Liberty Ale",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Old Foghorn 1996",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Old Foghorn 1998",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Old Foghorn 2001",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Old Foghorn 2002",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Old Foghorn 2006",
   "Abv":"9.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Our Special Ale 1992",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Our Special Ale 1994",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Our Special Ale 1995",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Our Special Ale 1996",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Our Special Ale 1997",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Porter",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Small Beer",
   "Abv":"3.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|english_style_pale_mild_ale"
 },
 {
   "Brewery":"Anchor Brewing",
   "City":"San Francisco",
   "Name":"Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Anderson Valley Brewing",
   "City":"Boonville",
   "Name":"Barney Flats Oatmeal Stout",
   "Abv":"5.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Anderson Valley Brewing",
   "City":"Boonville",
   "Name":"Boont Amber Ale",
   "Abv":"5.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Anderson Valley Brewing",
   "City":"Boonville",
   "Name":"Deep Enders Dark",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Anderson Valley Brewing",
   "City":"Boonville",
   "Name":"High Rollers Wheat Beer",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Anderson Valley Brewing",
   "City":"Boonville",
   "Name":"Hop Ottin IPA",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Anderson Valley Brewing",
   "City":"Boonville",
   "Name":"Horn of the Bear Barleywine",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anderson Valley Brewing",
   "City":"Boonville",
   "Name":"Nitro Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Anderson Valley Brewing",
   "City":"Boonville",
   "Name":"Summer Solstice Cerveza Crema",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|american_style_cream_ale_or_lager"
 },
 {
   "Brewery":"Anderson Valley Brewing",
   "City":"Boonville",
   "Name":"Winter Solstice Seasonal Ale 1992",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Anderson Valley Brewing",
   "City":"Boonville",
   "Name":"Winter Solstice Seasonal Ale 2002",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"BJ's Restaurant and Brewery",
   "City":"Brea",
   "Name":"BJ's Annual Grand Cru",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_pale_strong_ale"
 },
 {
   "Brewery":"BJ's Restaurant and Brewery",
   "City":"Brea",
   "Name":"Brewhouse Blonde",
   "Abv":"4.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"BJ's Restaurant and Brewery",
   "City":"Brea",
   "Name":"Harvest Hefeweizen",
   "Abv":"4.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"BJ's Restaurant and Brewery",
   "City":"Brea",
   "Name":"Jeremiah Red",
   "Abv":"7.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|irish_style_red_ale"
 },
 {
   "Brewery":"BJ's Restaurant and Brewery",
   "City":"Brea",
   "Name":"Nit Wit",
   "Abv":"4.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_white"
 },
 {
   "Brewery":"BJ's Restaurant and Brewery",
   "City":"Brea",
   "Name":"Nutty Brewnette",
   "Abv":"5.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"BJ's Restaurant and Brewery",
   "City":"Brea",
   "Name":"P.M. Porter",
   "Abv":"6.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"BJ's Restaurant and Brewery",
   "City":"Brea",
   "Name":"Piranha Pale Ale",
   "Abv":"5.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"BJ's Restaurant and Brewery",
   "City":"Brea",
   "Name":"Tatonka Stout",
   "Abv":"8.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_imperial_stout"
 },
 {
   "Brewery":"Ballast Point Brewing",
   "City":"San Diego",
   "Name":"Big Eye IPA",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Ballast Point Brewing",
   "City":"San Diego",
   "Name":"Black Marlin Porter",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Ballast Point Brewing",
   "City":"San Diego",
   "Name":"Calico Amber Ale",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Ballast Point Brewing",
   "City":"San Diego",
   "Name":"Come About Imperial Stout",
   "Abv":"9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_imperial_stout"
 },
 {
   "Brewery":"Ballast Point Brewing",
   "City":"San Diego",
   "Name":"Dorado Double IPA",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Ballast Point Brewing",
   "City":"San Diego",
   "Name":"Navigator Doppelbock",
   "Abv":"8.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_doppelbock"
 },
 {
   "Brewery":"Ballast Point Brewing",
   "City":"San Diego",
   "Name":"Sculpin India Pale Ale",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Ballast Point Brewing",
   "City":"San Diego",
   "Name":"Wahoo Wheat Beer",
   "Abv":"4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_white"
 },
 {
   "Brewery":"Ballast Point Brewing",
   "City":"San Diego",
   "Name":"Yellowtail Pale Ale",
   "Abv":"4.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Beach Chalet Brewery",
   "City":"San Francisco",
   "Name":"Alexander Alt",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Beach Chalet Brewery",
   "City":"San Francisco",
   "Name":"Endless Summer Cream Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Beach Chalet Brewery",
   "City":"San Francisco",
   "Name":"Essex S.O.B.",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Beach Chalet Brewery",
   "City":"San Francisco",
   "Name":"Fleishhacker Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Beach Chalet Brewery",
   "City":"San Francisco",
   "Name":"Playland Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Bear Republic Brewery",
   "City":"Healdsburg",
   "Name":"Apex",
   "Abv":"7.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Bear Republic Brewery",
   "City":"Healdsburg",
   "Name":"Big Bear Black Stout",
   "Abv":"8.1%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_imperial_stout"
 },
 {
   "Brewery":"Bear Republic Brewery",
   "City":"Healdsburg",
   "Name":"Heritage Scottish Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|scotch_ale"
 },
 {
   "Brewery":"Bear Republic Brewery",
   "City":"Healdsburg",
   "Name":"Hop Rod Rye",
   "Abv":"8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Bear Republic Brewery",
   "City":"Healdsburg",
   "Name":"Late Harvest Fest Lager",
   "Abv":"6.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_oktoberfest"
 },
 {
   "Brewery":"Bear Republic Brewery",
   "City":"Healdsburg",
   "Name":"Racer 5 IPA",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Bear Republic Brewery",
   "City":"Healdsburg",
   "Name":"Racer X",
   "Abv":"7.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Bear Republic Brewery",
   "City":"Healdsburg",
   "Name":"Red Rocket Ale",
   "Abv":"6.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Bear Republic Brewery",
   "City":"Healdsburg",
   "Name":"XP Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Beermann's Beerwerks BrewPub",
   "City":"Lincoln",
   "Name":"Lincolnshire Mild",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|english_style_pale_mild_ale"
 },
 {
   "Brewery":"Bison Brewing",
   "City":"Berkeley",
   "Name":"Bison Chocolate Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Bison Brewing",
   "City":"Berkeley",
   "Name":"Organic Barley Wine Ale 2005",
   "Abv":"9.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Bison Brewing",
   "City":"Berkeley",
   "Name":"Organic Belgian Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Bison Brewing",
   "City":"Berkeley",
   "Name":"Organic Gingerbread Ale",
   "Abv":"6.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Bison Brewing",
   "City":"Berkeley",
   "Name":"Red Oak Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Bonaventure Brewing Co",
   "City":"Los Angeles",
   "Name":"Bonaventure Pale Ale",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Bootleggers Steakhouse and Brewery",
   "City":"Bakersfield",
   "Name":"34th Street Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Bootleggers Steakhouse and Brewery",
   "City":"Bakersfield",
   "Name":"Bourbon Street Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Bootleggers Steakhouse and Brewery",
   "City":"Bakersfield",
   "Name":"Double ZZ Raspberry Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|light_american_wheat_ale_or_lager"
 },
 {
   "Brewery":"Bootleggers Steakhouse and Brewery",
   "City":"Bakersfield",
   "Name":"Irish Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Bootleggers Steakhouse and Brewery",
   "City":"Bakersfield",
   "Name":"Summer Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Bootleggers Steakhouse and Brewery",
   "City":"Bakersfield",
   "Name":"Voluptuous Blonde",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Brew Makers",
   "City":"Mountain View",
   "Name":"Rosed Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Brewpub-on-the-Green",
   "City":"Fremont",
   "Name":"Independence Ale",
   "Abv":"6.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Bulldog Brewing",
   "City":"Fresno",
   "Name":"Aztec Amaranth Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Butte Creek Brewing",
   "City":"Chico",
   "Name":"Organic Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Butterfield Brewing #1",
   "City":"Fresno",
   "Name":"Pale Bock",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"CJ's Brewery & Grill",
   "City":"La Jolla",
   "Name":"Mocha Joe",
   "Abv":"8.1%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"California Cider Company",
   "City":"San Rafael",
   "Name":"Ace Fermented Honey Cider",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"California Cider Company",
   "City":"San Rafael",
   "Name":"Ace Pear Cider",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Callahan's Pub and Brewery",
   "City":"San Diego",
   "Name":"Christmas Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Callahan's Pub and Brewery",
   "City":"San Diego",
   "Name":"Mesa Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Callahan's Pub and Brewery",
   "City":"San Diego",
   "Name":"Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Carmel Brewing",
   "City":"Salinas",
   "Name":"Amber Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Carmel Brewing",
   "City":"Salinas",
   "Name":"Hefeweizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Coast Range Brewing",
   "City":"Gilroy",
   "Name":"Auld Lang Syne",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Coast Range Brewing",
   "City":"Gilroy",
   "Name":"Barleywine",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Coast Range Brewing",
   "City":"Gilroy",
   "Name":"California Blonde Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Coast Range Brewing",
   "City":"Gilroy",
   "Name":"Desperado Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Coastal Fog Brewing",
   "City":"Concord",
   "Name":"Brandenburg Gate MÃ¤rzen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_oktoberfest"
 },
 {
   "Brewery":"Coastal Fog Brewing",
   "City":"Concord",
   "Name":"Hefeweizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Coastal Fog Brewing",
   "City":"Concord",
   "Name":"Pale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Coronado Golden Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_pilsener"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Four Brothers Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Idiot IPA",
   "Abv":"8.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Island Pale Ale (IPA)",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Islandweizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Mermaid Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Mermaids Red Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Nutter Brown",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Outlet Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Point Loma Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Coronado Brewing Company",
   "City":"Coronado",
   "Name":"Uptown Brown",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Craftsman Brewing",
   "City":"Pasadena",
   "Name":"Heavenly Hefe",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Del Mar Stuft Pizza and Brewing",
   "City":"San Diego",
   "Name":"Stuft Pizza Torrey Pines IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Dempsey's Restaurant & Brewery",
   "City":"Petaluma",
   "Name":"Bad Bear Brown",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Dempsey's Restaurant & Brewery",
   "City":"Petaluma",
   "Name":"Golden Eagle",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Dempsey's Restaurant & Brewery",
   "City":"Petaluma",
   "Name":"Holiday Wheat Bock",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Dempsey's Restaurant & Brewery",
   "City":"Petaluma",
   "Name":"Red Rooster",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Dempsey's Restaurant & Brewery",
   "City":"Petaluma",
   "Name":"Spring Bock",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Devil's Canyon",
   "City":"Belmont",
   "Name":"Full Boar",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|out_of_category"
 },
 {
   "Brewery":"Drake's Brewing",
   "City":"San Leandro",
   "Name":"Jolly Roger",
   "Abv":"9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Drake's Brewing",
   "City":"San Leandro",
   "Name":"Maibock",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Drake's Brewing",
   "City":"San Leandro",
   "Name":"Sir Francis Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"EJ Phair Brewing Company and Alehouse",
   "City":"Concord",
   "Name":"Marzen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_oktoberfest"
 },
 {
   "Brewery":"Eel River Brewing",
   "City":"Fortuna",
   "Name":"Certified Organic Amber Ale",
   "Abv":"4.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Eel River Brewing",
   "City":"Fortuna",
   "Name":"Certified Organic Extra Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Eel River Brewing",
   "City":"Fortuna",
   "Name":"Certified Organic India Pale Ale",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Eel River Brewing",
   "City":"Fortuna",
   "Name":"Certified Organic Porter",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Eel River Brewing",
   "City":"Fortuna",
   "Name":"Climax California Classic",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Eel River Brewing",
   "City":"Fortuna",
   "Name":"Triple Exultation Old Ale",
   "Abv":"9.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"El Toro Brewing Company",
   "City":"Morgan Hill",
   "Name":"El Toro Negro Oatmeal Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|oatmeal_stout"
 },
 {
   "Brewery":"Elk Grove Brewery & Restaurant",
   "City":"Elk Grove",
   "Name":"Otis Alt",
   "Abv":"5.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Emery Pub",
   "City":"Emeryville",
   "Name":"Amber",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Emery Pub",
   "City":"Emeryville",
   "Name":"Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"English Ales Brewery",
   "City":"Marina",
   "Name":"Ironside Best",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Etna Brewing",
   "City":"Etna",
   "Name":"Export",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Faultline Brewing #1",
   "City":"Sunnyvale",
   "Name":"Belgian Abbey",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Faultline Brewing #1",
   "City":"Sunnyvale",
   "Name":"Belgian Tripel",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Faultline Brewing #1",
   "City":"Sunnyvale",
   "Name":"Best Bitter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Faultline Brewing #1",
   "City":"Sunnyvale",
   "Name":"Hefe Weizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Faultline Brewing #1",
   "City":"Sunnyvale",
   "Name":"India Pale Ale (IPA)",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Faultline Brewing #1",
   "City":"Sunnyvale",
   "Name":"KÃ¶lsch",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Faultline Brewing #1",
   "City":"Sunnyvale",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Faultline Brewing #1",
   "City":"Sunnyvale",
   "Name":"Pilsner",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Faultline Brewing #1",
   "City":"Sunnyvale",
   "Name":"Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Faultline Brewing #2",
   "City":"Walnut Creek",
   "Name":"Alt Bier",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Faultline Brewing #2",
   "City":"Walnut Creek",
   "Name":"Best Bitter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Faultline Brewing #2",
   "City":"Walnut Creek",
   "Name":"Burton Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Faultline Brewing #2",
   "City":"Walnut Creek",
   "Name":"Golden",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Faultline Brewing #2",
   "City":"Walnut Creek",
   "Name":"Hefe Weizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Faultline Brewing #2",
   "City":"Walnut Creek",
   "Name":"India Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Faultline Brewing #2",
   "City":"Walnut Creek",
   "Name":"KÃ¶lsch",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Faultline Brewing #2",
   "City":"Walnut Creek",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Faultline Brewing #2",
   "City":"Walnut Creek",
   "Name":"Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Fifty Fifty Brewing Co.",
   "City":"Truckee",
   "Name":"Base Camp Golden Ale",
   "Abv":"4.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|golden_or_blonde_ale"
 },
 {
   "Brewery":"Fifty Fifty Brewing Co.",
   "City":"Truckee",
   "Name":"Donner Party Porter",
   "Abv":"6.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Fifty Fifty Brewing Co.",
   "City":"Truckee",
   "Name":"Foggy Goggle Belgian White",
   "Abv":"5.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_white"
 },
 {
   "Brewery":"Fifty Fifty Brewing Co.",
   "City":"Truckee",
   "Name":"Imperial Eclipse Stout",
   "Abv":"9.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_imperial_stout"
 },
 {
   "Brewery":"Fifty Fifty Brewing Co.",
   "City":"Truckee",
   "Name":"Manifesto Pale Ale",
   "Abv":"5.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Fifty Fifty Brewing Co.",
   "City":"Truckee",
   "Name":"Rockslide IPA",
   "Abv":"6.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Fifty Fifty Brewing Co.",
   "City":"Truckee",
   "Name":"Roundabout Oatmeal Stout",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|oatmeal_stout"
 },
 {
   "Brewery":"Fifty Fifty Brewing Co.",
   "City":"Truckee",
   "Name":"Trifecta Belgian Style Tripel",
   "Abv":"8.1%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_tripel"
 },
 {
   "Brewery":"Firehouse Grill & Brewery",
   "City":"Sunnyvale",
   "Name":"Bitter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Firehouse Grill & Brewery",
   "City":"Sunnyvale",
   "Name":"Double IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Firehouse Grill & Brewery",
   "City":"Sunnyvale",
   "Name":"Hefeweizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Firehouse Grill & Brewery",
   "City":"Sunnyvale",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Firehouse Grill & Brewery",
   "City":"Sunnyvale",
   "Name":"Red Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Firestone Walker Brewing Company",
   "City":"Paso Robles",
   "Name":"Double Barrel Ale",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Firestone Walker Brewing Company",
   "City":"Paso Robles",
   "Name":"Firestole Pale 31",
   "Abv":"4.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Firestone Walker Brewing Company",
   "City":"Paso Robles",
   "Name":"Union Jack India Pale Ale",
   "Abv":"7.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Golden Gate Park Brewery",
   "City":"San Francisco",
   "Name":"Buffalo Nutty Brown",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Golden Gate Park Brewery",
   "City":"San Francisco",
   "Name":"Celebration Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Golden Gate Park Brewery",
   "City":"San Francisco",
   "Name":"Four Sheets Cream Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Golden Gate Park Brewery",
   "City":"San Francisco",
   "Name":"Frambosia",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|light_american_wheat_ale_or_lager"
 },
 {
   "Brewery":"Golden Pacific Brewing",
   "City":"Berkeley",
   "Name":"Golden Bear Lager",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Golden Pacific Brewing",
   "City":"Berkeley",
   "Name":"Golden Gate Amber Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Golden Pacific Brewing",
   "City":"Berkeley",
   "Name":"Golden Gate Copper Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Golden Pacific Brewing",
   "City":"Berkeley",
   "Name":"Hibernator Winter Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Golden Pacific Brewing",
   "City":"Berkeley",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Blonde Bock",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Bock",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Czech Lager",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Dunkles",
   "Abv":"5.1%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Golden Export",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Gordon Biersch Czech Lager",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_pilsener"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Gordon Biersch Hefeweizen",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Gordon Biersch Marzen",
   "Abv":"5.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Gordon Biersch Schwarzbier",
   "Abv":"4.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_schwarzbier"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Maibock",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Pilsner",
   "Abv":"5.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Premium Light Lager",
   "Abv":"4.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Gordon Biersch Brewing",
   "City":"San Jose",
   "Name":"Schwarzbier",
   "Abv":"4.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_schwarzbier"
 },
 {
   "Brewery":"Green Flash Brewing",
   "City":"Vista",
   "Name":"Barleywine",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_barley_wine_ale"
 },
 {
   "Brewery":"Green Flash Brewing",
   "City":"Vista",
   "Name":"First Anniversary Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Green Flash Brewing",
   "City":"Vista",
   "Name":"Green Flash Imperial India Pale Ale",
   "Abv":"9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Green Flash Brewing",
   "City":"Vista",
   "Name":"Hop Hed Red Ale",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Green Flash Brewing",
   "City":"Vista",
   "Name":"Le Freak Belgian Style IPA",
   "Abv":"9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|other_belgian_style_ales"
 },
 {
   "Brewery":"Green Flash Brewing",
   "City":"Vista",
   "Name":"West Coast IPA",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Grizzly Bay Brewing",
   "City":"Suisun City",
   "Name":"Hammerhead Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Grizzly Bay Brewing",
   "City":"Suisun City",
   "Name":"Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Grizzly Bay Brewing",
   "City":"Suisun City",
   "Name":"Weizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Half Moon Bay Brewing",
   "City":"Princeton by the Sea",
   "Name":"Harbor Light Ale",
   "Abv":"4.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Half Moon Bay Brewing",
   "City":"Princeton by the Sea",
   "Name":"Illuminator Doppelbock",
   "Abv":"6.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Half Moon Bay Brewing",
   "City":"Princeton by the Sea",
   "Name":"Mavericks Amber Ale",
   "Abv":"4.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Half Moon Bay Brewing",
   "City":"Princeton by the Sea",
   "Name":"Old Princeton Landing IPA",
   "Abv":"6.1%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Half Moon Bay Brewing",
   "City":"Princeton by the Sea",
   "Name":"Paddle Out Stout",
   "Abv":"5.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Half Moon Bay Brewing",
   "City":"Princeton by the Sea",
   "Name":"Pillar Point Pale Ale",
   "Abv":"4.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Half Moon Bay Brewing",
   "City":"Princeton by the Sea",
   "Name":"Sandy Beach Blonde Hefeweizen",
   "Abv":"4.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"HopTown Brewing",
   "City":"Pleasanton",
   "Name":"Copper Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"HopTown Brewing",
   "City":"Pleasanton",
   "Name":"Golden Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"HopTown Brewing",
   "City":"Pleasanton",
   "Name":"Paint the Town Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Hoppy Brewing Company",
   "City":"Sacramento",
   "Name":"Hoppy Claus Holiday Ale",
   "Abv":"7.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|winter_warmer"
 },
 {
   "Brewery":"Hoppy Brewing Company",
   "City":"Sacramento",
   "Name":"Hoppy Face Amber Ale",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Hoppy Brewing Company",
   "City":"Sacramento",
   "Name":"Liquid Sunshine Blonde Ale",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|golden_or_blonde_ale"
 },
 {
   "Brewery":"Hoppy Brewing Company",
   "City":"Sacramento",
   "Name":"Stony Face Red Ale",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Hoppy Brewing Company",
   "City":"Sacramento",
   "Name":"Total Eclipse Black Ale",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Black Xantus",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_imperial_stout"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Gold Nectar",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Gold Rush",
   "Abv":"4.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Hemp Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Honey and Ginger Ale",
   "Abv":"4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Nectar IPA",
   "Abv":"6.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Red Nectar",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Redwood Amber",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Storm Cellar Porter",
   "Abv":"5.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Humboldt Brewing",
   "City":"Arcata",
   "Name":"Summer Nectar Wheat Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Indian Wells Brewing",
   "City":"Inyokern",
   "Name":"Desert Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Indian Wells Brewing",
   "City":"Inyokern",
   "Name":"Eastern Sierra Lager",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Indian Wells Brewing",
   "City":"Inyokern",
   "Name":"Mojave Gold",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Indian Wells Brewing",
   "City":"Inyokern",
   "Name":"Mojave Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Iron Springs Pub & Brewery",
   "City":"Fairfax",
   "Name":"Casey Jones Imperial IPA",
   "Abv":"7.25%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Iron Springs Pub & Brewery",
   "City":"Fairfax",
   "Name":"Chazz Cat Rye",
   "Abv":"4.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Iron Springs Pub & Brewery",
   "City":"Fairfax",
   "Name":"Epiphany Ale",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Iron Springs Pub & Brewery",
   "City":"Fairfax",
   "Name":"Fairfax Coffee Porter",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Iron Springs Pub & Brewery",
   "City":"Fairfax",
   "Name":"Honey Bunny Blonde Ale",
   "Abv":"5.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Iron Springs Pub & Brewery",
   "City":"Fairfax",
   "Name":"IPA",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Iron Springs Pub & Brewery",
   "City":"Fairfax",
   "Name":"Kent Lake Kolsch",
   "Abv":"4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Iron Springs Pub & Brewery",
   "City":"Fairfax",
   "Name":"Shining Star Pale Ale",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Island Brewing Company",
   "City":"Carpinteria",
   "Name":"Jubilee Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"Jack Russell Brewing",
   "City":"Camino",
   "Name":"Best Bitter Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Jack Russell Brewing",
   "City":"Camino",
   "Name":"Farm House Ale",
   "Abv":"6.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Jack's Brewing",
   "City":"Fremont",
   "Name":"Boys of Summer Wheat",
   "Abv":"3.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Jack's Brewing",
   "City":"Fremont",
   "Name":"Grid Iron Amber Ale",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Jack's Brewing",
   "City":"Fremont",
   "Name":"Hefeweizen",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Jack's Brewing",
   "City":"Fremont",
   "Name":"India Pale Ale",
   "Abv":"7.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Jack's Brewing",
   "City":"Fremont",
   "Name":"Penalty Shot Porter",
   "Abv":"5.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Jack's Brewing",
   "City":"Fremont",
   "Name":"Red Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Jurupa Valley Brewing",
   "City":"Riverside",
   "Name":"Double Chocolate Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Karl Strauss Brewery Gardens - Sorrento Mesa",
   "City":"San Diego",
   "Name":"Amber Lager",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Karl Strauss Brewery Gardens - Sorrento Mesa",
   "City":"San Diego",
   "Name":"Belgian Abbey Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Karl Strauss Brewery Gardens - Sorrento Mesa",
   "City":"San Diego",
   "Name":"Downtown After Dark",
   "Abv":"12%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Karl Strauss Brewery Gardens - Sorrento Mesa",
   "City":"San Diego",
   "Name":"Endless Summer Gold",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Karl Strauss Brewery Gardens - Sorrento Mesa",
   "City":"San Diego",
   "Name":"Padre Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Karl Strauss Brewery Gardens - Sorrento Mesa",
   "City":"San Diego",
   "Name":"Red Trolley Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Karl Strauss Brewery Gardens - Sorrento Mesa",
   "City":"San Diego",
   "Name":"Star of India Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Kelmer's Brewhouse",
   "City":"Santa Rosa",
   "Name":"Independence Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Kelmer's Brewhouse",
   "City":"Santa Rosa",
   "Name":"Klassic",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Kelmer's Brewhouse",
   "City":"Santa Rosa",
   "Name":"Klout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Kelmer's Brewhouse",
   "City":"Santa Rosa",
   "Name":"Krystal",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"La Jolla Brew House",
   "City":"La Jolla",
   "Name":"Amber",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"La Jolla Brew House",
   "City":"La Jolla",
   "Name":"India Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"La Jolla Brew House",
   "City":"La Jolla",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"La Jolla Brew House",
   "City":"La Jolla",
   "Name":"Pilsner",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"La Jolla Brew House",
   "City":"La Jolla",
   "Name":"Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"La Jolla Brew House",
   "City":"La Jolla",
   "Name":"Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"La Jolla Brewing",
   "City":"La Jolla",
   "Name":"Blitzen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"La Jolla Brewing",
   "City":"La Jolla",
   "Name":"Little Point Pale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"La Jolla Brewing",
   "City":"La Jolla",
   "Name":"Red Roost Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"La Jolla Brewing",
   "City":"La Jolla",
   "Name":"Sealane Steam",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Brown Shugga",
   "Abv":"9.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Cappuccino Stout",
   "Abv":"8.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Censored (aka The Kronic)",
   "Abv":"5.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Hop Stoopid",
   "Abv":"8.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Imperial Stout",
   "Abv":"8.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Lucky 13 Anniversary Release",
   "Abv":"8.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|irish_style_red_ale"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Lucky 13 Mondo Large Red Ale",
   "Abv":"8.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Maximus",
   "Abv":"7.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Maximus Ale",
   "Abv":"8.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Ruben & The Jets",
   "Abv":"8.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_strong_pale_ale"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Sirius",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|american_style_cream_ale_or_lager"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"The Hairy Eyeball",
   "Abv":"8.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Lagunitas Brewing Company",
   "City":"Petaluma",
   "Name":"Undercover Investigation Shut-Down Ale",
   "Abv":"9.28%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Left Coast Brewing",
   "City":"San Clemente",
   "Name":"Hop Juice Double IPA",
   "Abv":"9.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Left Coast Brewing",
   "City":"San Clemente",
   "Name":"Pale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Lost Coast Brewery",
   "City":"Eureka",
   "Name":"8-Ball Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Lost Coast Brewery",
   "City":"Eureka",
   "Name":"Downtown Brown",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Lost Coast Brewery",
   "City":"Eureka",
   "Name":"Dunkel Hefeweizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Lost Coast Brewery",
   "City":"Eureka",
   "Name":"Great White Beer",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Lost Coast Brewery",
   "City":"Eureka",
   "Name":"Hefeweizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Lost Coast Brewery",
   "City":"Eureka",
   "Name":"Indica India Pale Ale",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Lost Coast Brewery",
   "City":"Eureka",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Mad River Brewing",
   "City":"Blue Lake",
   "Name":"Double India Pale Ale",
   "Abv":"8.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Mad River Brewing",
   "City":"Blue Lake",
   "Name":"Jamaica Brand Red Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Mad River Brewing",
   "City":"Blue Lake",
   "Name":"Jamaica Brand Sunset IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Mad River Brewing",
   "City":"Blue Lake",
   "Name":"John Barleycorn Barleywine Style Ale",
   "Abv":"9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_barley_wine_ale"
 },
 {
   "Brewery":"Mad River Brewing",
   "City":"Blue Lake",
   "Name":"Steelhead Extra Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Mad River Brewing",
   "City":"Blue Lake",
   "Name":"Steelhead Scotch Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Magnolia Pub and Brewery",
   "City":"San Francisco",
   "Name":"Blue Bell Bitter",
   "Abv":"5.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|special_bitter_or_best_bitter"
 },
 {
   "Brewery":"Magnolia Pub and Brewery",
   "City":"San Francisco",
   "Name":"Cole Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Magnolia Pub and Brewery",
   "City":"San Francisco",
   "Name":"Golden Bitter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Magnolia Pub and Brewery",
   "City":"San Francisco",
   "Name":"KrÃ¶lsch",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Magnolia Pub and Brewery",
   "City":"San Francisco",
   "Name":"Prescription Pale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Magnolia Pub and Brewery",
   "City":"San Francisco",
   "Name":"Stout of Circumstance",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Main Street Brewery",
   "City":"Corona",
   "Name":"Hop Daddy IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Main Street Brewery",
   "City":"Corona",
   "Name":"Mesa Cerveza Schnorzenboomer",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Mammoth Brewing",
   "City":"Mammoth Lakes",
   "Name":"Amber",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Manhattan Beach Brewing",
   "City":"Manhattan Beach",
   "Name":"Blonde",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Manhattan Beach Brewing",
   "City":"Manhattan Beach",
   "Name":"Pier Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Manhattan Beach Brewing",
   "City":"Manhattan Beach",
   "Name":"Rat Beach Red Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Marin Brewing",
   "City":"Larkspur Landing",
   "Name":"Albion Amber Ale",
   "Abv":"4.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Marin Brewing",
   "City":"Larkspur Landing",
   "Name":"Eldridge Grade White Knuckle Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Marin Brewing",
   "City":"Larkspur Landing",
   "Name":"Hefe Weiss",
   "Abv":"5.1%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Marin Brewing",
   "City":"Larkspur Landing",
   "Name":"Hoppy Holidaze",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Marin Brewing",
   "City":"Larkspur Landing",
   "Name":"I.P.A.",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Marin Brewing",
   "City":"Larkspur Landing",
   "Name":"Mt.Tam Pale Ale",
   "Abv":"5.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Marin Brewing",
   "City":"Larkspur Landing",
   "Name":"Point Reyes Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Marin Brewing",
   "City":"Larkspur Landing",
   "Name":"Triple Dipsea Belgian",
   "Abv":"9.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Mendocino Brewing - Hopland",
   "City":"Hopland",
   "Name":"Black Hawk Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Mendocino Brewing - Hopland",
   "City":"Hopland",
   "Name":"Blue Heron Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Mendocino Brewing - Hopland",
   "City":"Hopland",
   "Name":"Eye of the Hawk",
   "Abv":"8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"Mendocino Brewing - Hopland",
   "City":"Hopland",
   "Name":"Frolic Shipwreck 1850 Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"Mendocino Brewing - Hopland",
   "City":"Hopland",
   "Name":"Peregrine Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Mendocino Brewing - Hopland",
   "City":"Hopland",
   "Name":"Red Tail Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Mendocino Brewing - Hopland",
   "City":"Hopland",
   "Name":"Yuletide Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Mendocino Brewing - Ukiah",
   "City":"Ukiah",
   "Name":"Talon",
   "Abv":"10.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Moonlight Brewing",
   "City":"Fulton",
   "Name":"4868 Dark Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Moonlight Brewing",
   "City":"Fulton",
   "Name":"Baritone Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Moonlight Brewing",
   "City":"Fulton",
   "Name":"Bombay by Boat IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Moonlight Brewing",
   "City":"Fulton",
   "Name":"Twist of Fate Bitter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Moylan's Brewery & Restaurant",
   "City":"Novato",
   "Name":"Imperial Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Moylan's Brewery & Restaurant",
   "City":"Novato",
   "Name":"India Pale Ale",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Moylan's Brewery & Restaurant",
   "City":"Novato",
   "Name":"Irish Dry Stout",
   "Abv":"4.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Moylan's Brewery & Restaurant",
   "City":"Novato",
   "Name":"Kilt Lifter Scottish Ale",
   "Abv":"8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|scotch_ale"
 },
 {
   "Brewery":"Moylan's Brewery & Restaurant",
   "City":"Novato",
   "Name":"Moylander Double IPA",
   "Abv":"8.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Moylan's Brewery & Restaurant",
   "City":"Novato",
   "Name":"Moylannium Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Moylan's Brewery & Restaurant",
   "City":"Novato",
   "Name":"Moylans Hopsickle Imperial Ale",
   "Abv":"9.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Moylan's Brewery & Restaurant",
   "City":"Novato",
   "Name":"Old Blarney Barleywine",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Moylan's Brewery & Restaurant",
   "City":"Novato",
   "Name":"White Christmas",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Acme California Brown Ale",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Acme California IPA",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Acme California Pale Ale",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Brother Thelonious",
   "Abv":"9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Old No.38 Stout",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Old Rasputin Russian Imperial Stout",
   "Abv":"9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_imperial_stout"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Old Stock Ale 2001",
   "Abv":"11.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Old Stock Ale 2002",
   "Abv":"11.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Old Stock Ale 2004",
   "Abv":"11.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Old Stock Ale 2007",
   "Abv":"11.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"PranQster Belgian Ale",
   "Abv":"7.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Red Seal Ale",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Scrimshaw Pilsner Style Beer",
   "Abv":"4.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_pilsener"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Wintertime Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"North Coast Brewing Company",
   "City":"Fort Bragg",
   "Name":"Wintertime Ale 1992",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Oggi's Pizza and Brewing - Vista",
   "City":"Vista",
   "Name":"California Gold",
   "Abv":"4.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Oggi's Pizza and Brewing - Vista",
   "City":"Vista",
   "Name":"Ding Ding Double IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Oggi's Pizza and Brewing - Vista",
   "City":"Vista",
   "Name":"Irish Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Oggi's Pizza and Brewing - Vista",
   "City":"Vista",
   "Name":"Paradise Pale Ale",
   "Abv":"4.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Oggi's Pizza and Brewing - Vista",
   "City":"Vista",
   "Name":"Sunset Amber Ale",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Oggi's Pizza and Brewing - Vista",
   "City":"Vista",
   "Name":"Sweet Spot Hefe",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Oggi's Pizza and Brewing - Vista",
   "City":"Vista",
   "Name":"Torrey Pines IPA",
   "Abv":"6.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"On Tap Bistro & Brewery",
   "City":"San Diego",
   "Name":"Alt-Er-Ego Amber",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"On Tap Bistro & Brewery",
   "City":"San Diego",
   "Name":"Belgian Double",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"On Tap Bistro & Brewery",
   "City":"San Diego",
   "Name":"Golden Triangle Triple",
   "Abv":"8.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"On Tap Bistro & Brewery",
   "City":"San Diego",
   "Name":"Hazy Daze Hefeweizen",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"On Tap Bistro & Brewery",
   "City":"San Diego",
   "Name":"Hop Maniac IPA",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"On Tap Bistro & Brewery",
   "City":"San Diego",
   "Name":"Patriot Pale Ale",
   "Abv":"5.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"On Tap Bistro & Brewery",
   "City":"San Diego",
   "Name":"Steamroller Stout",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"PH Woods Diner and Brewery",
   "City":"Moreno Valley",
   "Name":"Hard Woods Pale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Pacific Beach Brewhouse",
   "City":"Pacific Beach",
   "Name":"Blonde",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Pacific Beach Brewhouse",
   "City":"Pacific Beach",
   "Name":"Crystal Pier Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Pacific Beach Brewhouse",
   "City":"Pacific Beach",
   "Name":"Over The Line Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Pacific Beach Brewhouse",
   "City":"Pacific Beach",
   "Name":"Rudolf Red Barleywine",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Pacific Beach Brewhouse",
   "City":"Pacific Beach",
   "Name":"Sunset Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Pacific Coast Brewing",
   "City":"Oakland",
   "Name":"Cask ESB",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Pacific Coast Brewing",
   "City":"Oakland",
   "Name":"Gray Whale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Pacific Coast Brewing",
   "City":"Oakland",
   "Name":"Hammerhead Barleywine 1990",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Pacific Coast Brewing",
   "City":"Oakland",
   "Name":"Harvest Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Pacific Coast Brewing",
   "City":"Oakland",
   "Name":"Holiday Scottish Strong Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|scotch_ale"
 },
 {
   "Brewery":"Pacific Coast Brewing",
   "City":"Oakland",
   "Name":"Imperial Stout",
   "Abv":"8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Pizza Port Brewing - Solana Beach",
   "City":"Solana Beach",
   "Name":"Cuvee de Tomme",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Pizza Port Brewing - Solana Beach",
   "City":"Solana Beach",
   "Name":"Mother of All Beers",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Pleasanton Main Street Brewery",
   "City":"Pleasanton",
   "Name":"Atta Boy IPA",
   "Abv":"7.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Pleasanton Main Street Brewery",
   "City":"Pleasanton",
   "Name":"Honey Wheat",
   "Abv":"3.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Pleasanton Main Street Brewery",
   "City":"Pleasanton",
   "Name":"Island Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Pleasanton Main Street Brewery",
   "City":"Pleasanton",
   "Name":"Pleasanton Pale",
   "Abv":"5.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Pleasanton Main Street Brewery",
   "City":"Pleasanton",
   "Name":"Train Wreck IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Pleasanton Main Street Brewery",
   "City":"Pleasanton",
   "Name":"Zone 7 Porter",
   "Abv":"3.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"3rd Anniversary Ale",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Amigo Lager",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Bombshell Barleywine",
   "Abv":"9.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Broken Keg Ice Bock",
   "Abv":"15%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Frank Double IPA",
   "Abv":"8.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"High Tide IPA",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Hop 15 Ale",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Mongo Double IPA",
   "Abv":"8.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Old Viscosity",
   "Abv":"10.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Port Panzer Imperial Pilsner",
   "Abv":"9.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Red Square",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Shark Attack Double Red Ale",
   "Abv":"9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Sharkbite Red",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Skye Strong Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Wipeout IPA",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Port Brewing Company",
   "City":"San Marcos",
   "Name":"Z-U-Later Doppelbock",
   "Abv":"8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Amber Lager",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Apricot Wheat",
   "Abv":"5.1%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|light_american_wheat_ale_or_lager"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Best Brown",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"DPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"ESB",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"HefeWeizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Honey Weizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Imperial Hefeweizen",
   "Abv":"7.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Oktoberfest",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_oktoberfest"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Pale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Snow Cap Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Summer Brau",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Sun Fest",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Thomas Kemper Belgian White",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Thomas Kemper HefeWeizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Thomas Kemper Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Weizenberry",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|light_american_wheat_ale_or_lager"
 },
 {
   "Brewery":"Pyramid Alehouse | Brewery and Restaurant - Berkeley",
   "City":"Berkeley",
   "Name":"Wheaten Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"ReaperAle",
   "City":"Foothill Ranch",
   "Name":"Mortality Stout",
   "Abv":"7.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Red Kettle Brewing",
   "City":"Encinitas",
   "Name":"Amber",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Red Kettle Brewing",
   "City":"Encinitas",
   "Name":"Dark",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Red Kettle Brewing",
   "City":"Encinitas",
   "Name":"Pale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Rock Bottom Restaurant & Brewery - San Jose",
   "City":"Campbell",
   "Name":"Boulder Creek Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Rock Bottom Restaurant & Brewery - San Jose",
   "City":"Campbell",
   "Name":"Brown Bear Brown Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Rock Bottom Restaurant & Brewery - San Jose",
   "City":"Campbell",
   "Name":"Faller Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Rock Bottom Restaurant & Brewery - San Jose",
   "City":"Campbell",
   "Name":"Pilsner",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Rock Bottom Restaurant & Brewery - San Jose",
   "City":"Campbell",
   "Name":"Raccoon Red Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Rock Bottom Restaurant & Brewery - San Jose",
   "City":"Campbell",
   "Name":"Stillwater Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Roost Brewery",
   "City":"Campbell",
   "Name":"ESB",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Roost Brewery",
   "City":"Campbell",
   "Name":"Kristall Weizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Roost Brewery",
   "City":"Campbell",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Roost Brewery",
   "City":"Campbell",
   "Name":"Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Ross Valley Brewing",
   "City":"Fairfax",
   "Name":"KÃ¶lsch",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Rubicon Brewing",
   "City":"Sacramento",
   "Name":"Blond Barleywine",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Aud Blonde",
   "Abv":"4.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|golden_or_blonde_ale"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Beer Esteem",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Blind Pig IPA",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Damnation",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|other_belgian_style_ales"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Dead Leaf Green",
   "Abv":"5.68%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|special_bitter_or_best_bitter"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Lap Dance Pale Ale",
   "Abv":"5.55%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"OVL Stout",
   "Abv":"4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Parking Violation",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Pliny the Elder",
   "Abv":"8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Pliny the Younger",
   "Abv":"11%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Russian River IPA",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Russian River Brewing",
   "City":"Santa Rosa",
   "Name":"Supplication",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sacramento Brewing Company",
   "City":"Sacramento",
   "Name":"Abbey Extra",
   "Abv":"4.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_pale_ale"
 },
 {
   "Brewery":"Sacramento Brewing Company",
   "City":"Sacramento",
   "Name":"Abbey IPA",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|other_belgian_style_ales"
 },
 {
   "Brewery":"Sacramento Brewing Company",
   "City":"Sacramento",
   "Name":"Barristers Bitter",
   "Abv":"4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|extra_special_bitter"
 },
 {
   "Brewery":"Sacramento Brewing Company",
   "City":"Sacramento",
   "Name":"Brewhouse Lager",
   "Abv":"4.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Sacramento Brewing Company",
   "City":"Sacramento",
   "Name":"Sacramento Bock",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Sacramento Brewing Company",
   "City":"Sacramento",
   "Name":"Sacramento Nut Brown Ale",
   "Abv":"5.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"San Diego Brewing",
   "City":"San Diego",
   "Name":"Amber",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"San Diego Brewing",
   "City":"San Diego",
   "Name":"Dubble Fantasy",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|other_belgian_style_ales"
 },
 {
   "Brewery":"San Diego Brewing",
   "City":"San Diego",
   "Name":"Friars IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"San Diego Brewing",
   "City":"San Diego",
   "Name":"Grantville Gold",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"San Diego Brewing",
   "City":"San Diego",
   "Name":"Mission Gorge Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"San Diego Brewing",
   "City":"San Diego",
   "Name":"Old 395 Barleywine",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"San Diego Brewing",
   "City":"San Diego",
   "Name":"Old Town Nut Brown",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"San Marcos Brewery & Grill",
   "City":"San Marcos",
   "Name":"Amber Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"San Marcos Brewery & Grill",
   "City":"San Marcos",
   "Name":"Caber Tossed",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"San Marcos Brewery & Grill",
   "City":"San Marcos",
   "Name":"Cinnabarr",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"San Marcos Brewery & Grill",
   "City":"San Marcos",
   "Name":"Honey Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"San Marcos Brewery & Grill",
   "City":"San Marcos",
   "Name":"Oatmeal Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"San Marcos Brewery & Grill",
   "City":"San Marcos",
   "Name":"Old English Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|old_ale"
 },
 {
   "Brewery":"San Marcos Brewery & Grill",
   "City":"San Marcos",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"San Marcos Brewery & Grill",
   "City":"San Marcos",
   "Name":"Premium Golden Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"San Marcos Brewery & Grill",
   "City":"San Marcos",
   "Name":"Winter Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"San Marcos Brewery & Grill",
   "City":"San Marcos",
   "Name":"X-Tra Pale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Santa Barbara Brewing",
   "City":"Santa Barbara",
   "Name":"Pacific Pale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Santa Cruz Brewing",
   "City":"Santa Cruz",
   "Name":"Beacon Barleywine",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Santa Cruz Brewing",
   "City":"Santa Cruz",
   "Name":"Pacific Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Santa Rosa Brewing",
   "City":"Santa Rosa",
   "Name":"Wee Heavy",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|scotch_ale"
 },
 {
   "Brewery":"Schooner's Grille & Brewery",
   "City":"Antioch",
   "Name":"IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Seabright Brewery",
   "City":"Santa Cruz",
   "Name":"Amber",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Seabright Brewery",
   "City":"Santa Cruz",
   "Name":"Blur IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Seabright Brewery",
   "City":"Santa Cruz",
   "Name":"Brew Ribbon",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Seabright Brewery",
   "City":"Santa Cruz",
   "Name":"Leroy Barleywine",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Seabright Brewery",
   "City":"Santa Cruz",
   "Name":"Oatmeal Stout",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Seabright Brewery",
   "City":"Santa Cruz",
   "Name":"Oktoberfest",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_oktoberfest"
 },
 {
   "Brewery":"Seabright Brewery",
   "City":"Santa Cruz",
   "Name":"Pelican Pale",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Seabright Brewery",
   "City":"Santa Cruz",
   "Name":"Red Nose",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sequoia Brewing Conoabt",
   "City":"Fresno",
   "Name":"Thunderhead Amber Ale",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Shmaltz Brewing Company",
   "City":"San Francisco",
   "Name":"Bittersweet Lenny R.I.P.A.",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Shmaltz Brewing Company",
   "City":"San Francisco",
   "Name":"Genesis",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Shmaltz Enterprises",
   "City":"San Francisco",
   "Name":"Coney Island Lager",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Anniversary Ale 2007",
   "Abv":"5.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_barley_wine_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 1991",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 1994",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 1996",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 1997",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 1998",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 1999",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 2000",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 2001",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 2002",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 2003",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 2004",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 2005",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Bigfoot 2006",
   "Abv":"9.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Celebration Ale",
   "Abv":"6.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Celebration Ale 1992",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Chico Estate Harvest Ale",
   "Abv":"6.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Dark Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"ESB - Early Spring Beer",
   "Abv":"5.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Glissade Golden Bock",
   "Abv":"6.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_heller_bock_maibock"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Harvest Ale",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Harvest Ale 2007",
   "Abv":"6.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"India Pale Ale",
   "Abv":"6.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Porter",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Sierra Nevada Imperial Stout",
   "Abv":"10.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_imperial_stout"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Sierra Nevada Kellerweis",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Sierra Nevada Pale Ale",
   "Abv":"5.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Southern Hemisphere Harvest Fresh Hop  Ale",
   "Abv":"6.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Stout",
   "Abv":"5.8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Summerfest",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_pilsener"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Torpedo Extra IPA",
   "Abv":"7.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Sierra Nevada Brewing Co.",
   "City":"Chico",
   "Name":"Unfiltered Wheat Beer",
   "Abv":"4.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|light_american_wheat_ale_or_lager"
 },
 {
   "Brewery":"Silverado Brewing",
   "City":"Saint Helena",
   "Name":"Impale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Six Rivers Brewery",
   "City":"McKinleyville",
   "Name":"Fat Bastard Barleywine (discontinued)",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Six Rivers Brewery",
   "City":"McKinleyville",
   "Name":"Six Rivers IPA",
   "Abv":"7.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Snowshoe Brewing - Sonora",
   "City":"Sonora",
   "Name":"ESB (Extra Special Blizzard)",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Snowshoe Brewing - Sonora",
   "City":"Sonora",
   "Name":"Thompson Pale Ale",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Speakeasy Ales and Lagers",
   "City":"San Francisco",
   "Name":"Big Daddy IPA",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Speakeasy Ales and Lagers",
   "City":"San Francisco",
   "Name":"Double Daddy",
   "Abv":"9.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Speakeasy Ales and Lagers",
   "City":"San Francisco",
   "Name":"Old Godfather",
   "Abv":"10.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Speakeasy Ales and Lagers",
   "City":"San Francisco",
   "Name":"Prohibition Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Speakeasy Ales and Lagers",
   "City":"San Francisco",
   "Name":"Untouchable Pale Ale",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Sports City Cafe & Brewery",
   "City":"La Jolla",
   "Name":"Brown Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Sports City Cafe & Brewery",
   "City":"La Jolla",
   "Name":"Creamy Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Sports City Cafe & Brewery",
   "City":"La Jolla",
   "Name":"India Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Sports City Cafe & Brewery",
   "City":"La Jolla",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Sports City Cafe & Brewery",
   "City":"La Jolla",
   "Name":"Red Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"St. Stan's Brewing Co.",
   "City":"Modesto",
   "Name":"VHB",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"13th Anniversary Ale",
   "Abv":"9.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_strong_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"2004 Symposium Ale",
   "Abv":"7.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"4th Anniversary IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"5th Anniversary IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"7th Anniversary IPA",
   "Abv":"7.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"9th Anniversary IPA",
   "Abv":"7.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Arrogant Bastard Ale",
   "Abv":"7.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Double Bastard Ale",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Imperial Russian Stout",
   "Abv":"10.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_imperial_stout"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Imperial Stout 2001",
   "Abv":"9.47%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Imperial Stout 2002",
   "Abv":"9.47%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Imperial Stout 2003",
   "Abv":"9.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Levitation Ale",
   "Abv":"4.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Oaked Arrogant Bastard Ale",
   "Abv":"7.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_strong_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Old Guardian Barley Wine 2003",
   "Abv":"9.91%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Old Guardian Barley Wine 2005",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Old Guardian Barley Wine 2007",
   "Abv":"11.26%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Ruination IPA",
   "Abv":"7.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Smoked Porter",
   "Abv":"5.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Stone 09.09.09 Vertical Epic Ale",
   "Abv":"8.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_dark_strong_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Stone 10th Anniversery IPA",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Stone 11th Anniversery Ale",
   "Abv":"8.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|dark_american_belgo_style_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Stone 12 Anniversery Bitter Chocolate Oatmeal Stout",
   "Abv":"9.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Stone Cali-Belgique",
   "Abv":"6.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|other_belgian_style_ales"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Stone IPA",
   "Abv":"6.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Stone Pale Ale",
   "Abv":"5.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Sublimely Self-Righteous Ale",
   "Abv":"8.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Vertical Epic 04.04.04",
   "Abv":"8.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Vertical Epic 05.05.05",
   "Abv":"8.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Vertical Epic 06.06.06",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Vertical Epic 07.07.07",
   "Abv":"8.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Stone Brewing Co.",
   "City":"Escondido",
   "Name":"Vertical Epic 10.10.10",
   "Abv":"9.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_pale_ale"
 },
 {
   "Brewery":"Sudwerk Privatbrauerei Hbsch",
   "City":"Davis",
   "Name":"Doppelbock",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Sudwerk Privatbrauerei Hbsch",
   "City":"Davis",
   "Name":"Hefe Weizen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Sudwerk Privatbrauerei Hbsch",
   "City":"Davis",
   "Name":"MÃ¤rzen",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|german_style_oktoberfest"
 },
 {
   "Brewery":"Tailgate Beer",
   "City":"San Diego",
   "Name":"Tailgate Amber Wave",
   "Abv":"6.2%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Tailgate Beer",
   "City":"San Diego",
   "Name":"Tailgate Brown Ale",
   "Abv":"5.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Tailgate Beer",
   "City":"San Diego",
   "Name":"Tailgate Hefeweizen",
   "Abv":"5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_hefeweizen"
 },
 {
   "Brewery":"Tailgate Beer",
   "City":"San Diego",
   "Name":"Tailgate IPA",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Tailgate Beer",
   "City":"San Diego",
   "Name":"Tailgate Light",
   "Abv":"4.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_light_lager"
 },
 {
   "Brewery":"Tailgate Beer",
   "City":"San Diego",
   "Name":"Tailgate Sweet Stout",
   "Abv":"6.6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|sweet_stout"
 },
 {
   "Brewery":"Taylor's Restaurant and Brewery",
   "City":"San Diego",
   "Name":"Amber Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Taylor's Restaurant and Brewery",
   "City":"San Diego",
   "Name":"Hefeweizen",
   "Abv":"7.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_ale|south_german_style_weizenbock"
 },
 {
   "Brewery":"Taylor's Restaurant and Brewery",
   "City":"San Diego",
   "Name":"Nut Brown",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Taylor's Restaurant and Brewery",
   "City":"San Diego",
   "Name":"Pale Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"The Bruery",
   "City":"Placentia",
   "Name":"Autumn Maple",
   "Abv":"10%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|pumpkin_beer"
 },
 {
   "Brewery":"The Bruery",
   "City":"Placentia",
   "Name":"Black Orchard",
   "Abv":"5.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"The Bruery",
   "City":"Placentia",
   "Name":"Loakal Red",
   "Abv":"6.9%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"The Bruery",
   "City":"Placentia",
   "Name":"Orchard White",
   "Abv":"5.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_white"
 },
 {
   "Brewery":"The Bruery",
   "City":"Placentia",
   "Name":"Partridge In A Pear Tree",
   "Abv":"12%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_quadrupel"
 },
 {
   "Brewery":"The Bruery",
   "City":"Placentia",
   "Name":"Saison De Lente",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|french_&_belgian_style_saison"
 },
 {
   "Brewery":"The Bruery",
   "City":"Placentia",
   "Name":"Saison Rue",
   "Abv":"8.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|french_&_belgian_style_saison"
 },
 {
   "Brewery":"The Bruery",
   "City":"Placentia",
   "Name":"Trade Winds Tripel",
   "Abv":"8%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_tripel"
 },
 {
   "Brewery":"The Lost Abbey",
   "City":"San Marcos",
   "Name":"Avant Garde",
   "Abv":"7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|french_&_belgian_style_saison"
 },
 {
   "Brewery":"The Lost Abbey",
   "City":"San Marcos",
   "Name":"Devotion",
   "Abv":"6.25%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_pale_ale"
 },
 {
   "Brewery":"The Lost Abbey",
   "City":"San Marcos",
   "Name":"Judgement Day",
   "Abv":"10.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|belgian_style_quadrupel"
 },
 {
   "Brewery":"The Lost Abbey",
   "City":"San Marcos",
   "Name":"Lost and Found Abbey Ale",
   "Abv":"7.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|other_belgian_style_ales"
 },
 {
   "Brewery":"The Lost Abbey",
   "City":"San Marcos",
   "Name":"Red Barn Ale",
   "Abv":"6.7%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"belgian_and_french_ale|french_&_belgian_style_saison"
 },
 {
   "Brewery":"The Lost Abbey",
   "City":"San Marcos",
   "Name":"Serpents Stout",
   "Abv":"10.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_imperial_stout"
 },
 {
   "Brewery":"The Lost Abbey",
   "City":"San Marcos",
   "Name":"The Angel's Share - Bourbon Barrel Aged",
   "Abv":"12.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_strong_pale_ale"
 },
 {
   "Brewery":"Third Street Ale Works",
   "City":"Santa Rosa",
   "Name":"Old Redwood Porter",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"ThirstyBear Brewing",
   "City":"San Francisco",
   "Name":"Brown Bear Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"ThirstyBear Brewing",
   "City":"San Francisco",
   "Name":"Golden Vanilla Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"ThirstyBear Brewing",
   "City":"San Francisco",
   "Name":"Kozlov Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"ThirstyBear Brewing",
   "City":"San Francisco",
   "Name":"Meyer ESB",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"ThirstyBear Brewing",
   "City":"San Francisco",
   "Name":"Polar Ale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"ThirstyBear Brewing",
   "City":"San Francisco",
   "Name":"Thirsty IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"ThirstyBear Brewing",
   "City":"San Francisco",
   "Name":"Valencia Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Tied House Cafe & Brewery - San Jose",
   "City":"San Jose",
   "Name":"Alpine Gold",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"?"
 },
 {
   "Brewery":"Tied House Cafe & Brewery - San Jose",
   "City":"San Jose",
   "Name":"Amber Light",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Tied House Cafe & Brewery - San Jose",
   "City":"San Jose",
   "Name":"Cascade Amber",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Tied House Cafe & Brewery - San Jose",
   "City":"San Jose",
   "Name":"Ironwood Dark",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_brown_ale"
 },
 {
   "Brewery":"Tied House Cafe & Brewery - San Jose",
   "City":"San Jose",
   "Name":"Maibock",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Tied House Cafe & Brewery - San Jose",
   "City":"San Jose",
   "Name":"New World Wheat",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_lager|american_style_lager"
 },
 {
   "Brewery":"Tied House Cafe & Brewery - San Jose",
   "City":"San Jose",
   "Name":"Oatmeal Stout",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Triple Rock Brewery",
   "City":"Berkeley",
   "Name":"Amber",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Triple Rock Brewery",
   "City":"Berkeley",
   "Name":"Pale",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Triple Rock Brewery",
   "City":"Berkeley",
   "Name":"Porter",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"irish_ale|porter"
 },
 {
   "Brewery":"Tustin Brewing",
   "City":"Tustin",
   "Name":"Old Town IPA",
   "Abv":"?",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_india_pale_ale"
 },
 {
   "Brewery":"Ukiah Brewing",
   "City":"Ukiah",
   "Name":"Emancipator",
   "Abv":"8.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"german_lager|traditional_german_style_bock"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Black Cat Stout",
   "Abv":"6%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_stout"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Cobra-Hood IPA",
   "Abv":"7.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Fat City Ale",
   "Abv":"4.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|golden_or_blonde_ale"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Hitman Gold",
   "Abv":"5.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Indian Red Ale",
   "Abv":"6.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_amber_red_ale"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Ports Pale Ale",
   "Abv":"4.3%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|american_style_pale_ale"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Uberhoppy Imperial IPA",
   "Abv":"10.5%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"north_american_ale|imperial_or_double_india_pale_ale"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Valley Berry Wheat",
   "Abv":"4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|fruit_beer"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Valley Brew Pale Wheat",
   "Abv":"4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|light_american_wheat_ale_or_lager"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Valley Brewing Apricot Ale",
   "Abv":"4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"other_style|fruit_beer"
 },
 {
   "Brewery":"Valley Brewing Company",
   "City":"Stockton",
   "Name":"Valley Brewing London Tavern Ale",
   "Abv":"4.4%",
   "Ibu":"?",
   "Srm":"?",
   "Tags":"british_ale|english_style_pale_mild_ale"
 }
]

/* GET beers listing. */
router.get('/', function(req, res, next) {
  res.send(beers);
});

module.exports = router;
