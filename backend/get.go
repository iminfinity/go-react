package backend

import (
	"fmt"
	"net/http"
)

// Movie strut
type Movie struct {
	title string `json: "title"`
	year  rune   `json: "year"`
	id    string `json: "id"`
}


// Movies list
type Movies struct{
	movieStore []Movie
}



// MovieHandler func
func MovieHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method{
	case "GET": {
		fmt.Fprintf(w, "Movies GET")
	}
	case "POST": {
		fmt.Fprintf(w, "Movies POST")
	}
	case "PUT": {
		fmt.Fprintf(w, "Movies PUT")
	}
	case "DELETE": {
		fmt.Fprintf(w, "Movies DELETE")
	}
	default: {
		fmt.Fprintf(w, "Not allowed")
	}
	}
}
