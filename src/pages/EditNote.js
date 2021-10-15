import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title:'',
      tags:[],
      goBack:false,
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSave=this.handleSave  .bind(this);
    this.handleCancel=this.handleCancel.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }

  componentDidMount() {
    let noteId = this.props.match.params.id;
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSave(e) {
    
  }
  
  handleDelete(e) {
    
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
        <input type='text' className='noteTitle' placeholder="Note title" name="title" value={this.state.value} onChange={this.handleChange}></input>
        <textarea className='noteBody' name="body" value={this.state.value} onChange={this.handleChange} rows="7" placeholder="Note Body"></textarea>
        <div className='noteFooter'>
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
                <button type="button" className="btn" onClick={this.handleDelete}>
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.44152 0C5.15023 0 4.00381 0.82629 3.59547 2.05132L3.27924 3H2H1C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5V17C1 17.5523 1.44772 18 2 18H12C12.5523 18 13 17.5523 13 17V5C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H12H10.7208L10.4045 2.05132C9.99619 0.82629 8.84977 0 7.55848 0H6.44152ZM11 5H10H4H3V16H11V5ZM8.61257 3L8.50716 2.68377C8.37105 2.27543 7.98891 2 7.55848 2H6.44152C6.01109 2 5.62895 2.27543 5.49284 2.68377L5.38743 3H8.61257Z" fill="#222222"/>
                  </svg>
                </button>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default EditNote;

