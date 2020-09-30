package main

import (
	"fmt"
	"net/http"
	"os"
)

func check(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Hello</h1>")
}

func main() {
	port := os.Getenv("PORT")
	// http.Handle("/", http.FileServer(http.Dir("./frontend/build/")))
	http.HandleFunc("/", check)
	fmt.Println("Server running at port " + port)
	http.ListenAndServe(":"+port, nil)
}
