import pandas as pd
from sqlalchemy import create_engine
import datetime
from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo



# Create an instance of Flask
app = Flask(__name__)

# Route to render index.html template using data from Mongo
@app.route("/")
def home():
    return render_template('index.html')

@app.route("/<table>")
def tables(table):
    # Fetch the table from the postgres AWS database
    # Find one record of data from the mongo database
    # Setup a request to pull the data from the database 
    # We will either need to compress the data into a single dataframe or
    # use a query tool to look for the specific dataset in the database
    # that is choosen by the name that is typed in
    try:
        tb=pd.read_sql_query(f'select * from {table}', con=engine)
        # print(mars)
        # Return template and data
#         return render_template("index.html", mars = mars)
        return tb.to_json(orient ='records')
    except:
        # return render_template('index.html')
        print('GFDM')
        return 'Not found', 404
#     return render_template("index.html", mars = mars, tables = [mars['table']])
# Route that will trigger the scrape function

if __name__ == "__main__":
    app.run(debug=True)