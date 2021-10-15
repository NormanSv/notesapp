import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title:'',
      tags:[],
      goBack:false,
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleChangeTitle=this.handleChangeTitle.bind(this);
    this.handleSave=this.handleSave.bind(this);
    this.handleCancel=this.handleCancel.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    let newtags = value.match(/#[a-zA-Zа-яА-ЯёЁ0-9_]+/g);
    this.setState({
      body: value,
      tags:newtags,
    });
  }

  handleChangeTitle(event){
    const target = event.target;
    const value = target.value;
    this.setState({
      title: value
    });
  }

  handleSave(e) {
    e.preventDefault();
    fetch(`https://react-json-server-notes-app.herokuapp.com/notes`, {
        method: 'POST',
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ''
        },
        body: JSON.stringify({title: this.state.title, body:this.state.body, tags: this.state.tags}),
        credentials: 'include'
    })
    .then((data) => {
        this.setState({ goBack: true });
    })
    .catch(err => console.error(err));
    }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ goBack: true });
  }

  render() {
    if (this.state.goBack) {
        return <Redirect to="/" />
    }
    return(
    <div className='container edit'>
      <div className='note add'>
        <input type='text' className='noteTitle' placeholder="Note title" name="title" value={this.state.title} onChange={this.handleChangeTitle}></input>
        <textarea className='noteBody' name="body" value={this.state.body} onChange={this.handleChange} rows="7" placeholder="Note Body"></textarea>
        <div className='noteFooter'>
            <div className='noteTags'>
                {this.state.tags ? this.state.tags.map((tag) => (
                    <div className="tag">{tag}</div>
                )):''}
            </div>
            <div className='noteBtns'>
                <button type="button" className="btn" onClick={this.handleSave}>
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.55556L6.38462 11L15 1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button type="button" className="btn" onClick={this.handleCancel}>
                <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4H9C11 4 16 4 16 12M1 4L4 1M1 4L4 7" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default CreateNote;

