package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	http.Handle("/", http.FileServer(http.Dir("./frontend/build/")))
	fmt.Println("Server running at port " + port)
	http.ListenAndServe(":"+port, nil)
}
