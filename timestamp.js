function (request, response, logger) {
    let time = new Date().toString();
    return {
        "statusCode": 500,
        "body" : {
            "order_id": 8004359122,
            "total_price": 14.95,
            "timestamp": time
        }
    };
}
