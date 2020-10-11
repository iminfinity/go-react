package backend

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

// Post Struct (Model)
type Post struct {
	Id      string  `json: "id"`
	Title   string  `json: "title"`
	Message string  `json: "message"`
	Author  *Author `json: "author"`
}

// Author Struct
type Author struct {
	FirstName string `json: "firstname"`
	LastName  string `json: "lastname"`
}

// Posts slice
var Posts []Post

// GetPosts - get all posts
func GetPosts(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("content-type", "application/json")
	json.NewEncoder(w).Encode(Posts)
}

// GetPost - get a single post
func GetPost(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r) // Get params

	// Loop through posts find with id
	for _, item := range Posts {
		if item.Id == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&Post{})
}

// CreatePost - create new post
func CreatePost(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("content-type", "application/json")
	var newPost Post
	_ = json.NewDecoder(r.Body).Decode(&newPost)
	newPost.Id = strconv.Itoa(len(Posts) + 1)
	Posts = append(Posts, newPost)
	json.NewEncoder(w).Encode(Posts)
}

// UpdatePost - update a post
func UpdatePost(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("content-type", "application/json")
	params := mux.Vars(r)

	for index, item := range Posts {
		if item.Id == params["id"] {
			Posts = append(Posts[:index], Posts[index+1:]...)
			var post Post
			_ = json.NewDecoder(r.Body).Decode(&post)
			post.Id = params["id "]
			Posts = append(Posts, post)
			json.NewEncoder(w).Encode(Posts)
			return
		}
	}
	json.NewEncoder(w).Encode(Posts)
}

// DeletePost  - delete a post
func DeletePost(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("content-type", "application/json")
	params := mux.Vars(r)

	for index, item := range Posts {
		if item.Id == params["id"] {
			Posts = append(Posts[:index], Posts[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(Posts)
}
