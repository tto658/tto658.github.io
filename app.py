from flask import Flask, jsonify, request
from flask_cors import CORS
import yfinance as yf

app = Flask(__name__)
CORS(app)

@app.route('/options-data', methods=['POST'])
def options_data():
    data = request.get_json()
    symbol = data.get('symbol')

    if not symbol:
        return jsonify({'error': 'No stock symbol provided.'}), 400

    stock = yf.Ticker(symbol)
    expirations = stock.options[:5]  # Limit to first 5 expirations for performance

    options_surface = []

    for exp_date in expirations:
        options_chain = stock.option_chain(exp_date)
        calls = options_chain.calls

        for _, row in calls.iterrows():
            options_surface.append({
                'strike': row['strike'],
                'expiration': exp_date,
                'impliedVolatility': row['impliedVolatility']
            })

    return jsonify({'optionsSurface': options_surface})

if __name__ == '__main__':
    app.run(debug=True)

