import React from "react";
import {Link} from "react-router-dom";

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { note } = this.props;
    return(
      <div className='note'>
        <div className='noteTitle'>{note.title}</div>
        <div className='noteBody'>{note.body}</div>
        <div className='noteFooter'>
            <div className='noteBtns'>
                <Link
                  to={`/notes/${note.id}/edit`}
                  className="btn"
                >
                  <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1:105" fill="white">
                    <path d="M14.8853 2.08527C14.9178 2.05278 14.952 2.0228 14.9903 1.99735C15.3586 1.75251 17.485 0.514469 19.799 2.82843C22.113 5.14238 20.8749 7.26881 20.6301 7.63714C20.6046 7.67541 20.5746 7.70963 20.5421 7.74213L10.8217 17.4625C10.6993 17.585 10.5471 17.6736 10.3801 17.7195L4.52527 19.3317C3.77717 19.5377 3.08968 18.8503 3.29568 18.1021L4.90788 12.2473C4.95386 12.0803 5.04242 11.9281 5.16489 11.8057L14.8853 2.08527Z"/>
                    </mask>
                    <path d="M13.2279 5.29901L17.4706 9.54165L18.8848 8.12743L14.6422 3.88479L13.2279 5.29901ZM4.52527 19.3317L3.99431 17.4035L4.52527 19.3317ZM3.29568 18.1021L5.22391 18.6331L3.29568 18.1021ZM4.90788 12.2473L6.83611 12.7783L4.90788 12.2473ZM10.3801 17.7195L9.84916 15.7913L10.3801 17.7195ZM20.6301 7.63714L22.2956 8.74433L20.6301 7.63714ZM19.1279 6.32791L9.40753 16.0483L12.236 18.8767L21.9564 9.15634L19.1279 6.32791ZM6.5791 13.2199L16.2995 3.49949L13.4711 0.671061L3.75068 10.3915L6.5791 13.2199ZM9.84916 15.7913L3.99431 17.4035L5.05624 21.26L10.9111 19.6478L9.84916 15.7913ZM5.22391 18.6331L6.83611 12.7783L2.97965 11.7163L1.36745 17.5712L5.22391 18.6331ZM16.0975 3.66292C16.1292 3.64185 16.4074 3.4719 16.7822 3.44991C17.0609 3.43355 17.6188 3.47667 18.3848 4.24264L21.2132 1.41421C19.6652 -0.13377 18.0029 -0.628609 16.5479 -0.543225C15.1889 -0.463476 14.2197 0.108016 13.8831 0.331786L16.0975 3.66292ZM18.3848 4.24264C19.1508 5.00862 19.1939 5.56647 19.1775 5.84523C19.1555 6.22001 18.9856 6.49824 18.9645 6.52994L22.2956 8.74433C22.5194 8.40771 23.0909 7.43856 23.1706 6.07956C23.256 4.62453 22.7612 2.9622 21.2132 1.41421L18.3848 4.24264ZM3.99431 17.4035C4.74242 17.1975 5.42991 17.885 5.22391 18.6331L1.36745 17.5712C0.749446 19.8155 2.81192 21.878 5.05624 21.26L3.99431 17.4035ZM3.75068 10.3915C3.38327 10.7589 3.11759 11.2154 2.97965 11.7163L6.83611 12.7783C6.79013 12.9452 6.70157 13.0974 6.5791 13.2199L3.75068 10.3915ZM9.40753 16.0483C9.53 15.9258 9.68218 15.8373 9.84916 15.7913L10.9111 19.6478C11.412 19.5098 11.8686 19.2441 12.236 18.8767L9.40753 16.0483ZM21.9564 9.15634C22.0484 9.0643 22.1741 8.9271 22.2956 8.74433L18.9645 6.52994C19.0351 6.42372 19.1009 6.35496 19.1279 6.32791L21.9564 9.15634ZM16.2995 3.49949C16.2725 3.52653 16.2037 3.59231 16.0975 3.66292L13.8831 0.331786C13.7003 0.453284 13.5631 0.579019 13.4711 0.671061L16.2995 3.49949Z" fill="#222222" mask="url(#path-1-inside-1_1:105)"/>
                  </svg>

                </Link>
            </div>
            <div className='noteTags'>
                {note.tags ? note.tags.map((tag) => (
                  <button type="button" className="tag" onClick={() => { this.props.handleTagClick(tag)}}>{tag}</button>
                )):''}
            </div>
        </div>
      </div>
    )
  }
}

export default Note;
