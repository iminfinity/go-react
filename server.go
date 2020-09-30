package main

import (
	"fmt"
	"net/http"
)

func main() {
	// port := os.Getenv("PORT")
	http.Handle("/", http.FileServer(http.Dir("./frontend/build/")))
	fmt.Println("Server running at port 8000")
	http.ListenAndServe(":8000", nil)
}
