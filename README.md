# Data Viz Competition | Data Conference 2021 Submission


You can view the full prototype here: https://visualizationcompetitionsmaste.gatsbyjs.io/

![J  Dillard Viz Competition](https://user-images.githubusercontent.com/92639901/149605105-12881afa-a17c-4275-9948-bf98bf98ad95.png)

On impulse about two weeks before the deadline (01/01/2022), I decided to enter this competition for 2021: https://www.dataconnectconf.com/dataviz-competition. I gave myself about 5 total working days, as this was during the holidays and I was out-of-town visiting family. 

# The data 
I used data from the publicly available API https://bechdeltest.com/api/v1/doc. Which means the fidelity of this data is incredibly subjective because it relies on unvalidated public input. Nonethless, I proceeded with this dataset as an exercise,as I was generally interested in visualizing whether or not movies have portrayed female characters in more robust contexts, rather than solely supporting characters or sexual interests.

# The tech
Deciding to enter this competition was driven by the opportunity to exercise technical skills outside of frontend/fullstack development (winning would be nice too). I pulled the list of movies, and their score from the API referenced above. Then I created a web scraper in python using BeautifulSoup to add the genre and location of each movie (if available). It took about 8 hours to go through all of the movies (I ran it overnight). 

I opted to use Gatsby, as it was something I'd heard about but never used. Since all of my data was static, it seemed like a good choice to serve the web app for its efficiency in speed. 

### Tech Stack and Tools
Gatsby uses GraphQL for querying data, and that was another thing I had never used before, but because of its popularity, I very much wanted to try it (love it). Although my engagement with it was very rudimentary, I plan on architecting a more complex project to test out more of its features, outside of Gatsby. I found Gatsby unintuitive and would not use it again because of its requirement for plugins. This was confusing to me and I didn't have the time to become well versed in the inner workings, which likely contributed to my frustration.

### Frontend
From a frontend perspective I used the charting library Nivo.rocks, because it was already built with React in mind, thus something I could spin up quickly. The documentation for library was also incredibly well done, as I could easily customize based on my preference.

# Oh, but there are only 24 hours in a day
With more time, I would have... 
- made this fully responsive (grid view and renderable on mobile)
- made this performant (modify webpack config and memoized the tooltip calculations) 
- included a fully interactive/sortable/filterable table that contained all of the movies analyzed
- pulled out deeper, more meaningful data points and cross reference some movies with the Waithe test. 

Being that I work full-time and have other pet projects I want to pursue, I likely won't go back and add these features.

Results of the competition have not come out yet, but I will update this once they do! 
