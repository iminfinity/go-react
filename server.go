package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
	"github.com/iminfinity/go-react/backend"
)

func main() {
	port := os.Getenv("PORT") // for production
	// port := "8000" // for development

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

	spa := backend.SpaHandler{StaticPath: "frontend/build", IndexPath: "index.html"}
	r.PathPrefix("/").Handler(spa)

	srv := &http.Server{
		Handler: r,
		Addr:    ":" + port,
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Fatal(srv.ListenAndServe())
}
