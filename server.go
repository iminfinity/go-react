package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
	"github.com/iminfinity/go-react/backend"
)

func main() {

	// Open our posts.json
	jsonFile, err := os.Open("posts.json")
	if err != nil {
		fmt.Println(err)
	}
	defer jsonFile.Close()
	fmt.Println("Successfully Opened posts.json")

	// read our opened jsonFile as a byte array.
	byteValue, _ := ioutil.ReadAll(jsonFile)

	// we unmarshal our byteArray which contains our
	// jsonFile's content into 'posts' which we defined above
	json.Unmarshal(byteValue, &backend.PostsFromJson)

	fmt.Println(len(backend.PostsFromJson.Posts))
	for _, item := range backend.PostsFromJson.Posts {
		var author backend.Author
		author = *item.Author
		fmt.Println(item.Title)
		fmt.Println(author.FirstName)
	}

	port := os.Getenv("PORT") // for production
	// port := "8000" // for development

	//Init Router
	r := mux.NewRouter()

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
