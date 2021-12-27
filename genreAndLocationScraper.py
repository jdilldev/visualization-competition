import requests
from bs4 import BeautifulSoup
import json


def getGenreAndCountryOfOrigin(imdbID):
    # imitate request from browser
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 QIHU 360SE'
    }

    # IMDB movie links are in an easily reconstructable format (thank you!)
    url = f'https://imdb.com/title/tt{imdbID}'
    response = requests.get(url, headers=headers)
    # convert response to html
    html = BeautifulSoup(response.content, "html.parser")

    # obtain country of origin field
    country_of_origin = html.find("li", attrs={
        "data-testid": "title-details-origin"})

    try:
        if (country_of_origin):
            # if country of origin field exists, read and store the first entry
            country_of_origin = country_of_origin.find('li').text
        else:
            # country of origin does not exist, store value as undefined
            country_of_origin = 'undefined'
    except:
        # if something went wrong, catch the exception and denote the movie and its ID
        print(f'error getting country of origin for {url} -----> ID: {imdbID}')

    try:
        # attempt to read the genre and store the first entry (by default there are 3-4 genres listed per movie)
        genre = html.find(
            "li", attrs={"data-testid": "storyline-genres"}).find('ul').find('li').text
    except:
        # if something goes wrong, catch the exception and denote the movie and its ID
        print(f'error getting genre for {url} -----> ID: {imdbID}')

    # return a dictionary storing the genre and country of origin
    return {'genre': genre, 'country_of_origin': country_of_origin}


# open the JSON file obtained from the bechdeltest API https://bechdeltest.com/api/v1/doc (thank you!)
moviesFile = open('./data/movies/movies.json', "r")
# create a JSON object to iterate over so that we add fields for its genre and country of origin
moviesData = json.load(moviesFile)
moviesFile.close()

# iterate over the file
for movie in moviesData:
    imdbID = movie['imdbid']
    # only try and retrieve the genre and country and origin if one of those properities does not already exists for the current movie
    if ('genre' in movie == False or 'country_of_origin' in movie == False):
        try:
            new_fields = getGenreAndCountryOfOrigin(imdbID)
            movie['genre'] = new_fields['genre']  # add one genre
            # add one country of origin
            movie['country_of_origin'] = new_fields['country_of_origin']
            print(f'successful update of movie {imdbID}')
        except:
            # note the exception and which title it ocurred on so we can update it manually
            print(f"an exception occurred at IMDB ID # {imdbID}")
            # if an exception occurs, keep going-- we can check the print statements to see which IDs failed.
            # A better design would be to save current results to the movies JSON file, then continue
            # instead, we are waiting until the end to save any changes
            continue
    else:
        continue

# open the movie JSON file with write permissions
moviesFile = open('./data/movies/movies.json', "w")
# save the content back into the existing movies JSON file
json.dump(moviesData, moviesFile)
moviesFile.close()
