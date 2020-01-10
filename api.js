var apiUrl= "https://ridb.recreation.gov/api/v1/activities?limit=50&offset=0" 


$("button").on("click", function () {
        $(".content-container").empty();
        $(".content-container").show();
        $.ajax({
            url: gifURL,
            method: "GET",
        }).then(function (response) {
            var newGif = $("<img>");
            newGif.attr("src", response.data.images.original.url);
            $(".content-container").append(newGif);
        })
    })

    {
        "RECDATA": [
          {
            "ActivityID": 4,
            "ActivityParentID": 0,
            "ActivityName": "AUTO TOURING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 5,
            "ActivityParentID": 0,
            "ActivityName": "BIKING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 6,
            "ActivityParentID": 0,
            "ActivityName": "BOATING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 7,
            "ActivityParentID": 0,
            "ActivityName": "CLIMBING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 8,
            "ActivityParentID": 0,
            "ActivityName": "HISTORIC & CULTURAL SITE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 9,
            "ActivityParentID": 0,
            "ActivityName": "CAMPING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 10,
            "ActivityParentID": 0,
            "ActivityName": "INTERPRETIVE PROGRAMS",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 11,
            "ActivityParentID": 0,
            "ActivityName": "FISHING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 14,
            "ActivityParentID": 0,
            "ActivityName": "HIKING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 15,
            "ActivityParentID": 0,
            "ActivityName": "HORSEBACK RIDING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 16,
            "ActivityParentID": 0,
            "ActivityName": "HUNTING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 18,
            "ActivityParentID": 0,
            "ActivityName": "OFF HIGHWAY VEHICLE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 20,
            "ActivityParentID": 0,
            "ActivityName": "PICNICKING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 22,
            "ActivityParentID": 0,
            "ActivityName": "WINTER SPORTS",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 23,
            "ActivityParentID": 0,
            "ActivityName": "RECREATIONAL VEHICLES",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 24,
            "ActivityParentID": 0,
            "ActivityName": "VISITOR CENTER",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 25,
            "ActivityParentID": 0,
            "ActivityName": "WATER SPORTS",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 26,
            "ActivityParentID": 0,
            "ActivityName": "WILDLIFE VIEWING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 27,
            "ActivityParentID": 0,
            "ActivityName": "FISH HATCHERY",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 28,
            "ActivityParentID": 0,
            "ActivityName": "WILDERNESS",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 30,
            "ActivityParentID": 0,
            "ActivityName": "FIRE LOOKOUTS/CABINS OVERNIGHT",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 31,
            "ActivityParentID": 0,
            "ActivityName": "FISH VIEWING SITE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 32,
            "ActivityParentID": 0,
            "ActivityName": "DAY USE AREA",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 33,
            "ActivityParentID": 0,
            "ActivityName": "DOCUMENTARY SITE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 34,
            "ActivityParentID": 0,
            "ActivityName": "SWIMMING SITE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 35,
            "ActivityParentID": 0,
            "ActivityName": "ORGANIZATION SITE PRIVATELY OWNED",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 36,
            "ActivityParentID": 0,
            "ActivityName": "ORGANIZATION SITE FS OWNED",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 37,
            "ActivityParentID": 0,
            "ActivityName": "PLAYGROUND PARK SPECIALIZED SPORT SITE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 38,
            "ActivityParentID": 0,
            "ActivityName": "OTHER RECREATION CONCESSION SITE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 39,
            "ActivityParentID": 0,
            "ActivityName": "OBSERVATION SITE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 40,
            "ActivityParentID": 0,
            "ActivityName": "HOTEL/LODGE/RESORT FS OWNED",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 41,
            "ActivityParentID": 0,
            "ActivityName": "INFORMATION SITE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 42,
            "ActivityParentID": 0,
            "ActivityName": "RECREATION RESIDENCE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 43,
            "ActivityParentID": 0,
            "ActivityName": "SNOWPARK",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 44,
            "ActivityParentID": 0,
            "ActivityName": "HOTEL/LODGE/RESORT PRIVATELY OWNED",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 103,
            "ActivityParentID": 0,
            "ActivityName": "ENVIRONMENTAL EDUCATION",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 104,
            "ActivityParentID": 0,
            "ActivityName": "PHOTOGRAPHY",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 105,
            "ActivityParentID": 0,
            "ActivityName": "PADDLING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 106,
            "ActivityParentID": 0,
            "ActivityName": "SWIMMING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 107,
            "ActivityParentID": 0,
            "ActivityName": "DIVING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 108,
            "ActivityParentID": 0,
            "ActivityName": "SNORKELING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 109,
            "ActivityParentID": 0,
            "ActivityName": "HORSE CAMPING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 110,
            "ActivityParentID": 0,
            "ActivityName": "RECREATIONAL SHOOTING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 100000,
            "ActivityParentID": 0,
            "ActivityName": "MOTOR BOAT",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 100001,
            "ActivityParentID": 0,
            "ActivityName": "SNOWMOBILE",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 100002,
            "ActivityParentID": 0,
            "ActivityName": "MOUNTAIN BIKING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 100003,
            "ActivityParentID": 0,
            "ActivityName": "OFF ROAD VEHICLE TRAILS",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 100004,
            "ActivityParentID": 0,
            "ActivityName": "RANGER STATION",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 100005,
            "ActivityParentID": 0,
            "ActivityName": "PADDLE BOATING",
            "ActivityLevel": 0
          },
          {
            "ActivityID": 100006,
            "ActivityParentID": 0,
            "ActivityName": "WATER ACTIVITIES",
            "ActivityLevel": 0
          }
        ],
        "METADATA": {
          "RESULTS": {
            "CURRENT_COUNT": 50,
            "TOTAL_COUNT": 128
          },
          "SEARCH_PARAMETERS": {
            "QUERY": "",
            "LIMIT": 50,
            "OFFSET": 0
          }
        }
      }