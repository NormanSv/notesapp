import React from "react";
import Note from './Note';
import {Link} from "react-router-dom";

class Noteslist extends React.Component {
  constructor(props){
    super(props);
    this.state={
      notes:[],
      searchQuery: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/notes')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({notes:data})
      console.log(data);
    });
  }

  handleChange(e) {
    this.setState({ searchQuery: e.target.value });
  }
  handleTagClick = (data)=> {
    this.setState({ searchQuery: data });
  }
  handleCleare(){
    this.setState({ searchQuery: '' });
  }

    render() {
        return (
          <>
          <input value={this.state.searchQuery} onChange={this.handleChange.bind(this)} type="text" className="search" placeholder="Search"/>
          <button type="button" className="clearBtn" onClick={this.handleCleare.bind(this)}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7M7 7L13 13M7 7L13 1M7 7L1 13" stroke="#222222" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div className="container">
            {this.state.notes.filter(note => {
                return  this.state.searchQuery==''?note: [note.tags].join(' ').match(this.state.searchQuery.toLowerCase());})
            .map((note,key) => {
                return (
                    <div key={key}>
                    <Note
                      note={note}
                      handleTagClick={this.handleTagClick}
                    />
                    </div>
                );
            })}
            <Link to="/notes/create" className="link">
            <div className='note add new'>
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
            </Link>
        </div>
        </>
        );
    }
}

export default Noteslist;