# visualization-competition
https://visualizationcompetitionmain.gatsbyjs.io/

![2021-data-viz-competition](https://user-images.githubusercontent.com/92639901/228236882-9c691bd8-1ef1-4cfd-a90e-ddb7a28c07ad.png)


# The data 
I used data from the publicly available API https://bechdeltest.com/api/v1/doc. Which means the fidelity of this data is incredibly subjective because it relies on unvalidated public input. Nonethless, I proceeded with this dataset as an exercise,as I was generally interested in visualizing whether or not movies have portrayed female characters in more robust contexts, rather than solely supporting characters or sexual interests.

# The tech 
Deciding to enter this competition was driven by the opportunity to exercise technical skills outside of frontend/fullstack development (winning would be nice too). I pulled the list of movies, and their score from the API referenced above. Then I created a web scraper in python using BeautifulSoup to add the genre and location of each movie (if available). It took about 8 hours to go through all of the movies (I ran it overnight).

I opted to use Gatsby, as it was something I'd heard about but never used. Since all of my data was static, it seemed like a good choice to serve the web app for its efficiency in speed.

# Tech stack and tools
Gatsby uses GraphQL for querying data, and that was another thing I had never used before, but because of GraphQL's popularity, I very much wanted to try it (love it). Although my engagement with it was very rudimentary, I plan on architecting a more complex project to test out more of its features, outside of Gatsby. I found Gatsby unintuitive and would not use it again because of its requirement for plugins. This was confusing to me and I didn't have the time to become well versed in the inner workings, which likely contributed to my frustration. Because I didn't plan on revisiting this project, I did not optimize for performance.
![Screenshot 2023-03-28 at 8 32 20 AM](https://user-images.githubusercontent.com/92639901/228237447-c5fe2771-a477-40c8-9cc2-0112fc52fbd8.png)


Frontend From a frontend perspective I used the charting library Nivo.rocks, because it was already built with React in mind, thus something I could spin up quickly. The documentation for library was also incredibly well done, as I could easily customize based on my preference.
![J  Dillard Viz Compteition](https://user-images.githubusercontent.com/92639901/228236904-48c0b404-d27a-49c3-9fbf-2062d7292d0d.gif)
