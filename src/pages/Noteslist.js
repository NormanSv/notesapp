import React from "react";
import Note from './Note';
import {Link} from "react-router-dom";

class Noteslist extends React.Component {
    constructor(props){
      super(props);
      this.state={
        notes:[{
          id:0,
          title:"First",
          body:"this is lorem",
      },
      {
          id:1,
          title:'Second',
          body:'this is',
      },
      {
          id:2,
          title:'Third',
          body:'this is',
      }],
        searchQuery: '',
      }
    }

    componentDidMount() {
    }


    handleChange(e) {
      this.setState({ searchQuery: e.target.value });
  }

    render() {
        return (
          <>
          <input value={this.state.searchQuery} onChange={this.handleChange.bind(this)} type="text" className="search" placeholder="Search" />
          <div className="container">
            {this.state.notes.filter(note => {
                return note.title.toLowerCase().match(this.state.searchQuery.toLowerCase()) || note.body.toLowerCase().match(this.state.searchQuery.toLowerCase());
            }).map((note,key) => {
                return (
                    <div key={key}>
                    <Note
                      note={note}
                    />
                    </div>
                );
            })}
            <Link to="/notes/create" href="new-note.html" className="link">
            <div className='note add new'>
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fffff">
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