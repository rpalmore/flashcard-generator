function BasicCard(front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    } else {
        return new BasicCard(front, back);
    }
    // $("<p>" + this.front + "</p>").appendTo(".front");
    // $("<p>" + this.back + "</p>").appendTo(".back");
}


module.exports = BasicCard;
