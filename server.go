package main

import (
	"fmt"
	"net/http"

	"github.com/iminfinity/go-react/backend"
)

func main() {
	// port := os.Getenv("PORT")
	port := "8000"
	http.HandleFunc("/movies", backend.MovieHandler)
	http.Handle("/", http.FileServer(http.Dir("./frontend/build/")))
	fmt.Println("Server running at port " + port)
	http.ListenAndServe(":"+port, nil)
}
