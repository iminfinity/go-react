package main

import (
	"fmt"
	"net/http"
	"os"

	// "os"
	"github.com/gorilla/mux"
	"github.com/iminfinity/go-react/backend"
)

func main() {
	port := os.Getenv("PORT")
	// port := "8000"
	http.Handle("/", http.FileServer(http.Dir("./frontend/build/")))

	//Init Router
	r := mux.NewRouter()

	// Mock data
	backend.Posts = append(backend.Posts, backend.Post{Id: "1", Title: "Book one", Message: "Message 1", Author: &backend.Author{FirstName: "John", LastName: "Doe"}})
	backend.Posts = append(backend.Posts, backend.Post{Id: "2", Title: "Book two", Message: "Message 2", Author: &backend.Author{FirstName: "John", LastName: "Doe"}})

	// Router Handlers / Endpoints
	r.HandleFunc("/posts", backend.GetPosts).Methods("GET")
	r.HandleFunc("/posts/{id}", backend.GetPost).Methods("GET")
	r.HandleFunc("/posts", backend.CreatePost).Methods("POST")
	r.HandleFunc("/posts/{id}", backend.UpdatePost).Methods("PUT")
	r.HandleFunc("/posts/{id}", backend.DeletePost).Methods("DELETE")

	fmt.Println("Server running at port " + port)

	go http.ListenAndServe(":8080", r)
	http.ListenAndServe(":"+port, nil)
}
