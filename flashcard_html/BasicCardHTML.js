function BasicCard(front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    } else {
        return new BasicCard(front, back);
    }
    $("<p>" + this.front + "</p>").appendTo(".front");
    $("<p>" + this.back + "</p>").appendTo(".back");
 	// How can I create a new div for each card? It worked for buttons.
 	// Maybe because divs are already on page. Would have to create a new div
 	// with all the styles/attributes. Possible?
}
