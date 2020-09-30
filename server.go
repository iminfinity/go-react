package main

import (
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT_HEROKU")
	http.Handle("/", http.FileServer(http.Dir("./frontend/build/")))
	// fmt.Println("Server running at port 8000")
	http.ListenAndServe(":"+port, nil)
}
